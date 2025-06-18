import fs from 'node:fs/promises';
import express from 'express';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
// Use base path only for static builds, not for local SSR development
const base =
  process.env.VITE_STATIC_BUILD === 'true' ? '/tyecode-portfolio/' : '/';

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';

// Create http server
const app = express();

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
