import fs from 'node:fs/promises';
import express from 'express';
import { config } from 'dotenv';
import dedent from 'dedent';
import rateLimit from 'express-rate-limit';

// Load environment variables from .env file
config();

// Function to dynamically read package info
const getPackageInfo = async () => {
  try {
    const packageJsonContent = await fs.readFile('./package.json', 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    return {
      name: packageJson.name || '',
    };
  } catch (error) {
    console.warn('Could not read package.json, using defaults:', error);
    return {
      name: '',
    };
  }
};

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const packageInfo = await getPackageInfo();
// Base path for Vercel deployment (always root)
const base = '/';

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';

// Create http server
const app = express();

// Parse JSON and URL-encoded bodies for API routes
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
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
  // Only apply to contact form endpoint
  skip: req => !req.path.includes('/api/contact'),
});

// Serve static files from public directory first (for both dev and production)
app.use(express.static('./public'));

// Add Vite or respective production middlewares
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
  // For local SSR, serve assets from root; for static builds, use base path
  if (base === '/') {
    app.use(sirv('./dist/client', { extensions: [] }));
  } else {
    app.use(base, sirv('./dist/client', { extensions: [] }));
  }
}

// Dynamic manifest route
app.get(`${base}site.webmanifest`, async (req, res) => {
  try {
    let generateManifest;
    if (!isProduction) {
      const module = await vite.ssrLoadModule('/src/config/meta-tags.ts');
      generateManifest = module.generateManifest;
    } else {
      const module = await import('./dist/server/entry-server.js');
      // For production, we'll need to export generateManifest from entry-server
      generateManifest = module.generateManifest;
    }

    const manifest = generateManifest();
    res.set('Content-Type', 'application/manifest+json');
    res.json(manifest);
  } catch (error) {
    console.error('Error generating manifest:', error);
    // Fallback to static manifest
    try {
      const staticManifest = await fs.readFile(
        './public/site.webmanifest',
        'utf-8'
      );
      res.set('Content-Type', 'application/manifest+json');
      res.send(staticManifest);
    } catch (fallbackError) {
      res.status(500).send('Error loading manifest');
    }
  }
});

// Contact form API endpoint with rate limiting
app.post(`${base}api/contact`, contactRateLimit, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address',
      });
    }

    // Send email using the email service
    try {
      if (!isProduction) {
        // In development, just log the message
        console.log('📧 Contact form submission (development mode):', {
          name,
          email,
          message,
        });
        console.log('⚠️ Email functionality disabled in development');

        // Simulate email sending in development
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        // Use built files in production
        const { sendContactEmail } = await import('./dist/server/email.js');
        await sendContactEmail({ name, email, message });
        console.log('✅ Email sent successfully');
      }

      // Return success only when email is sent (or simulated in dev)
      res.json({
        success: true,
        message: 'Message sent successfully!',
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log the contact for manual follow-up
      console.log('Contact form submission (email failed):', {
        name,
        email,
        message,
      });

      // Return error to user when email fails
      res.status(500).json({
        success: false,
        error: 'Failed to send message. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Serve robots.txt specifically
app.get(`${base}robots.txt`, async (req, res) => {
  try {
    let robotsContent;
    if (!isProduction) {
      // In development, serve from public directory
      robotsContent = await fs.readFile('./public/robots.txt', 'utf-8');
    } else {
      // In production, serve from dist directory
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

      Sitemap: ${req.protocol}://${req.get('host')}${base}sitemap.xml
    `;
    res.set('Content-Type', 'text/plain');
    res.send(fallbackRobots);
  }
});

// Serve HTML
app.use('*all', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    /** @type {string} */
    let template;
    /** @type {import('./src/entry-server.ts').render} */
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = templateHtml;
      render = (await import('./dist/server/entry-server.js')).render;
    }

    const rendered = await render(url);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
