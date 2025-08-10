import fs from 'node:fs/promises';
import express from 'express';
import { config } from 'dotenv';
import dedent from 'dedent';
import rateLimit from 'express-rate-limit';

// Load environment variables from .env file
config();

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = '/'; // Base path for Vercel deployment (always root)

// Helper function to create proper routes with base path
const createRoute = path => {
  if (base === '/') {
    return path.startsWith('/') ? path : `/${path}`;
  }
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting for contact form
const contactRateLimit = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000, // 15 minutes default
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5, // 5 requests per window default
  message: {
    success: false,
    error: 'Too many contact form submissions. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: req => !req.path.includes('/api/contact'),
});

// Static file serving
app.use(express.static('./public'));

// Development vs Production middleware setup
/** @type {import('vite').ViteDevServer | undefined} */
let vite;

if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;

  app.use(compression());
  app.use(sirv('./dist/client', { extensions: [] }));
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

// Dynamic manifest route
app.get(createRoute('site.webmanifest'), async (req, res) => {
  try {
    let generateManifest;

    if (!isProduction) {
      const module = await vite.ssrLoadModule('/src/config/meta-tags.ts');
      generateManifest = module.generateManifest;
    } else {
      const module = await import('./dist/server/entry-server.js');
      generateManifest = module.generateManifest;
    }

    const manifest = generateManifest();
    res.set('Content-Type', 'application/manifest+json');
    res.json(manifest);
  } catch (error) {
    console.error('Error generating manifest:', error);

    try {
      const staticManifest = await fs.readFile(
        './public/site.webmanifest',
        'utf-8'
      );
      res.set('Content-Type', 'application/manifest+json');
      res.send(staticManifest);
    } catch (fallbackError) {
      console.error('Fallback manifest failed:', fallbackError);
      res.status(500).send('Error loading manifest');
    }
  }
});

// Contact form API endpoint
app.post(createRoute('api/contact'), contactRateLimit, async (req, res) => {
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

    // Process contact form
    try {
      if (!isProduction) {
        // Development mode - log and simulate
        console.log('📧 Contact form submission (development mode):', {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        });
        console.log('⚠️ Email functionality disabled in development');

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        // Production mode - send actual email
        const { sendContactEmail } = await import('./dist/server/email.js');
        await sendContactEmail({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        });
        console.log('✅ Email sent successfully');
      }

      sendSuccessResponse(res, { message: 'Message sent successfully!' });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);

      // Log for manual follow-up
      console.log('Contact form submission (email failed):', {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      sendErrorResponse(
        res,
        500,
        'Failed to send message. Please try again later.'
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    sendErrorResponse(res, 500, 'Internal server error');
  }
});

// Robots.txt route
app.get(createRoute('robots.txt'), async (req, res) => {
  try {
    let robotsContent;

    if (!isProduction) {
      robotsContent = await fs.readFile('./public/robots.txt', 'utf-8');
    } else {
      robotsContent = await fs.readFile('./dist/robots.txt', 'utf-8');
    }

    res.set('Content-Type', 'text/plain');
    res.send(robotsContent);
  } catch (error) {
    console.error('Error serving robots.txt:', error);

    // Fallback robots.txt
    const fallbackRobots = dedent`
      User-agent: *
      Allow: /

      Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml
    `;

    res.set('Content-Type', 'text/plain');
    res.send(fallbackRobots);
  }
});

// Catch-all route for SSR
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    /** @type {string} */
    let template;
    /** @type {import('./src/entry-server.ts').render} */
    let render;

    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    const rendered = await render(url);
    const html = template
      .replace('<!--app-head-->', rendered.head ?? '')
      .replace('<!--app-html-->', rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    console.error('SSR error:', error);
    res.status(500).end('Internal Server Error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
  console.log(`📁 Environment: ${isProduction ? 'Production' : 'Development'}`);
});
