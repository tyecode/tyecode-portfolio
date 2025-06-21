import nodemailer from 'nodemailer';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

const createTransporter = () => {
  const config: EmailConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  };

  return nodemailer.createTransport(config);
};

export const sendContactEmail = async (
  data: ContactEmailData
): Promise<void> => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('Email not configured. Contact form data:', data);
    throw new Error('Email service not configured');
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    subject: `New Contact Form Message from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
      <p style="color: #666; font-size: 12px;">
        This email was sent from the contact form on your portfolio website.
      </p>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      
      This email was sent from the contact form on your portfolio website.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.warn('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('Failed to send email');
  }
};
