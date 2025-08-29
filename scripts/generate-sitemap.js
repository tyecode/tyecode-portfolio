#!/usr/bin/env node
/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json for homepage
const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const baseUrl = packageJson.homepage || 'https://tyecode.dev';

// Generate sitemap XML content
const generateSitemap = () => {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
};

// Write sitemap to public directory
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const sitemapContent = generateSitemap();

try {
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log('🌐 Sitemap URL:', `${baseUrl}/sitemap.xml`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
