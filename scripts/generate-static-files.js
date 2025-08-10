/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import dedent from 'dedent';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read package info
const getPackageInfo = () => {
  try {
    const packageJsonPath = path.resolve(__dirname, '../package.json');
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    return {
      name: packageJson.name || '',
      repository: packageJson.repository || {},
      homepage: packageJson.homepage || '',
    };
  } catch (error) {
    console.warn('Could not read package.json, using defaults:', error);
    return {
      name: '',
      repository: {},
      homepage: '',
    };
  }
};

// Function to get base URL (use homepage first, then construct from repository)
const getBaseUrl = packageInfo => {
  // Use homepage from package.json as primary source
  if (packageInfo.homepage) {
    return packageInfo.homepage;
  }

  // Fallback: Use environment variable or default for development
  const envBaseUrl = process.env.VITE_BASE_URL || process.env.BASE_URL;
  if (envBaseUrl) {
    return envBaseUrl;
  }

  // For development, use localhost
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000';
  }

  // For production, use the configured domain
  return 'https://tyecode.dev';
};

// Generate dynamic files
const generateStaticFiles = () => {
  const packageInfo = getPackageInfo();
  const baseUrl = getBaseUrl(packageInfo);

  // Generate robots.txt
  const robotsContent = dedent`
    # Global rules for all bots
    User-agent: *
    Allow: /
    Allow: /images/
    Allow: /public/
    Allow: /assets/
    Disallow: /admin
    Disallow: /private
    Disallow: /api/
    Disallow: /dev-tools
    Disallow: /test
    Disallow: /_redirects
    Disallow: /server.js
    Crawl-delay: 1

    # Googlebot - Most important for SEO
    User-agent: Googlebot
    Allow: /
    Allow: /images/
    Allow: /public/
    Allow: /assets/
    Disallow: /admin
    Disallow: /private
    Disallow: /api/
    Disallow: /dev-tools
    Disallow: /test
    Crawl-delay: 0.5

    # Bingbot - Second most important
    User-agent: Bingbot
    Allow: /
    Allow: /images/
    Allow: /public/
    Allow: /assets/
    Disallow: /admin
    Disallow: /private
    Disallow: /api/
    Disallow: /dev-tools
    Disallow: /test
    Crawl-delay: 0.5

    # Slurp (Yahoo) - Less critical but good to include
    User-agent: Slurp
    Allow: /
    Disallow: /admin
    Disallow: /private
    Disallow: /api/
    Disallow: /dev-tools
    Disallow: /test
    Crawl-delay: 1

    # Sitemap location
    Sitemap: ${baseUrl}/sitemap.xml
  `;

  // Extract domain from baseUrl for redirects
  const urlObj = new URL(baseUrl);
  const domain = urlObj.hostname;

  // Generate _redirects (simplified since we're using homepage as source of truth)
  const redirectsContent = dedent`
    # Redirect www to non-www if applicable
    https://www.${domain}/* https://${domain}/:splat 301!

    # Handle legacy URLs or alternative patterns
    /portfolio/* /:splat 301!
    /home / 301!
  `;

  // Write files to public directory
  const publicDir = path.resolve(__dirname, '../public');

  try {
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
    fs.writeFileSync(path.join(publicDir, '_redirects'), redirectsContent);

    console.log('✅ Generated dynamic static files:');
    console.log(`   - robots.txt (sitemap: ${baseUrl}/sitemap.xml)`);
    console.log(`   - _redirects (base: ${baseUrl})`);
  } catch (error) {
    console.error('❌ Error generating static files:', error);
    process.exit(1);
  }
};

// Run the generator
generateStaticFiles();
