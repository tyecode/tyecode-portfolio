import fs from 'fs';
import path from 'path';

// Function to dynamically read package info for node environment
const getPackageInfo = () => {
  try {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
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

// Function to generate dynamic base URL
const getBaseUrl = (): string => {
  const packageInfo = getPackageInfo();

  // Use homepage from package.json as the primary source
  if (packageInfo.homepage) {
    return packageInfo.homepage;
  }

  // Fallback: Try to construct from repository URL if available
  if (packageInfo.repository.url) {
    const match = packageInfo.repository.url.match(
      /github\.com\/([^/]+)\/([^/]+)/
    );
    if (match) {
      // For Vercel deployment, use homepage from package.json
      return packageInfo.homepage || 'https://tyecode.dev';
    }
  }

  // Last resort: throw error since homepage should be configured
  throw new Error(
    'No homepage configured in package.json and unable to determine from repository URL'
  );
};

export const BASE_URL = getBaseUrl();

// Single-page portfolio with sections - only one main route
export const staticRoutes: string[] = [
  '/', // Main portfolio page with all sections
];

// Dynamic routes - fetch from API or database if needed
export const dynamicRoutes = async (): Promise<string[]> => {
  // For a single-page portfolio, no dynamic routes needed
  // All content is in sections on the main page
  return [];
};

// Routes to exclude from the sitemap
export const excludeRoutes: string[] = [
  '/admin',
  '/private',
  '/api/*',
  '/test',
  '*.json',
  '/dev-tools',
];

// Sitemap configuration for single-page portfolio
export const sitemapConfig = {
  changefreq: 'monthly' as const, // Less frequent updates for portfolio
  priority: 1.0, // Highest priority since it's the only page
  // Route-specific configurations
  routeConfig: {
    '/': { priority: 1.0, changefreq: 'monthly' as const }, // Main portfolio page
  },
};

// Generate all routes for the sitemap
export const getAllRoutes = async (): Promise<string[]> => {
  const dynamic = await dynamicRoutes();
  return [...staticRoutes, ...dynamic];
};
