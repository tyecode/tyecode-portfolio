/* eslint-disable no-console */

// Rate limiting configuration
const RATE_LIMIT_WINDOW =
  parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS =
  parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5;

// Simple in-memory rate limiting (for serverless, consider using Redis or similar for production)
const rateLimitStore = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }

  const requests = rateLimitStore.get(ip);
  const validRequests = requests.filter(timestamp => timestamp > windowStart);

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitStore.set(ip, validRequests);
  return true;
}

// Utility function for error responses
const sendErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

// Utility function for success responses
const sendSuccessResponse = (res, data = {}) => {
  res.json({
    success: true,
    ...data,
  });
};

export default async function handler(req, res) {
  // Set CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return sendErrorResponse(res, 405, 'Method not allowed');
  }

  // Check rate limiting
  const clientIP =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  if (!checkRateLimit(clientIP)) {
    return sendErrorResponse(
      res,
      429,
      'Too many contact form submissions. Please try again later.'
    );
  }

  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return sendErrorResponse(res, 400, 'All fields are required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return sendErrorResponse(res, 400, 'Invalid email address');
    }

    // Debug: Log environment variables (without sensitive data)
    console.log('🔍 Environment check:', {
      SMTP_HOST: process.env.SMTP_HOST ? '✅ Set' : '❌ Missing',
      SMTP_PORT: process.env.SMTP_PORT ? '✅ Set' : '❌ Missing',
      SMTP_USER: process.env.SMTP_USER ? '✅ Set' : '❌ Missing',
      SMTP_PASS: process.env.SMTP_PASS ? '✅ Set' : '❌ Missing',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL ? '✅ Set' : '❌ Missing',
      NODE_ENV: process.env.NODE_ENV || 'undefined',
    });

    // Check if all required SMTP variables are present
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error('❌ Missing required SMTP environment variables');
      return sendErrorResponse(
        res,
        500,
        'Email service configuration error. Please contact support.'
      );
    }

    // Dynamic import of nodemailer to ensure it works in Vercel
    let nodemailer;
    try {
      nodemailer = await import('nodemailer');
      console.log('📦 Nodemailer imported successfully:', {
        nodemailer: typeof nodemailer,
        default: typeof nodemailer.default,
        createTransport: typeof nodemailer.default?.createTransport,
      });
    } catch (importError) {
      console.error('❌ Failed to import nodemailer:', importError);
      return sendErrorResponse(
        res,
        500,
        'Email service not available. Please try again later.'
      );
    }

    // Check if nodemailer is properly imported
    if (
      !nodemailer ||
      !nodemailer.default ||
      typeof nodemailer.default.createTransport !== 'function'
    ) {
      console.error('❌ Nodemailer not properly imported:', {
        nodemailer: typeof nodemailer,
        default: typeof nodemailer.default,
        createTransport: nodemailer.default
          ? typeof nodemailer.default.createTransport
          : 'undefined',
      });
      return sendErrorResponse(
        res,
        500,
        'Email service not available. Please try again later.'
      );
    }

    // Create transporter
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection configuration before sending
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error('❌ SMTP connection verification failed:', error);
          reject(error);
        } else {
          console.log('✅ SMTP server is ready to take our messages');
          resolve(success);
        }
      });
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Message from ${name.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name.trim()}
        Email: ${email.trim()}
        Message: ${message.trim()}
        
        Sent from your portfolio contact form
      `,
    };

    console.log('📧 Attempting to send email...');

    // Send email using promises (required for Vercel serverless)
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('❌ Email sending failed:', err);
          reject(err);
        } else {
          console.log('✅ Email sent successfully:', info);
          resolve(info);
        }
      });
    });

    console.log('✅ Contact form email sent successfully:', {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      messageId: info.messageId,
    });

    sendSuccessResponse(res, { message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    console.error('❌ Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command,
    });

    // Log for manual follow-up
    console.log('Contact form submission (email failed):', {
      name: req.body?.name?.trim(),
      email: req.body?.email?.trim(),
      message: req.body?.message?.trim(),
    });

    sendErrorResponse(
      res,
      500,
      'Failed to send message. Please try again later.'
    );
  }
}
