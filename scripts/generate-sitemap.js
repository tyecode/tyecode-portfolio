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
  const currentDate = new Date().toISOString().split('T')[0]; // Only date, no time

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

// Check if sitemap content has actually changed
const hasSitemapChanged = newContent => {
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

  // If sitemap doesn't exist, it has changed
  if (!fs.existsSync(sitemapPath)) {
    return true;
  }

  try {
    const existingContent = fs.readFileSync(sitemapPath, 'utf-8');
    // Remove the lastmod line for comparison since it changes daily
    const cleanExisting = existingContent.replace(
      /<lastmod>.*?<\/lastmod>\n/,
      ''
    );
    const cleanNew = newContent.replace(/<lastmod>.*?<\/lastmod>\n/, '');

    return cleanExisting !== cleanNew;
  } catch {
    // If there's an error reading, assume it has changed
    return true;
  }
};

// Write sitemap to public directory only if content changed
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const sitemapContent = generateSitemap();

try {
  if (hasSitemapChanged(sitemapContent)) {
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log('✅ Sitemap updated successfully at:', sitemapPath);
    console.log('🌐 Sitemap URL:', `${baseUrl}/sitemap.xml`);
  } else {
    console.log('ℹ️  Sitemap unchanged, no update needed');
  }
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
