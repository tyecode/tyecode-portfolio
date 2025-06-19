export const BASE_URL = 'https://tyecode.github.io/tyecode-portfolio/';

// Static routes that should be included in the sitemap
export const staticRoutes: string[] = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/skills',
  '/experience',
];

// Dynamic routes - fetch from API or database if needed
export const dynamicRoutes = async (): Promise<string[]> => {
  // For a portfolio, you might fetch blog posts, project details, etc.
  // Example: if you have dynamic project pages
  try {
    // const response = await fetch(`${BASE_URL}/api/projects`);
    // const projects = await response.json();
    // return projects.map(project => `/projects/${project.slug}`);

    // For now, return empty array since this is a simple portfolio
    return [];
  } catch (error) {
    console.warn('Failed to fetch dynamic routes:', error);
    return [];
  }
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

// Additional sitemap configuration
export const sitemapConfig = {
  changefreq: 'weekly' as const,
  priority: 0.8,
  lastmod: new Date().toISOString(),
  // Route-specific configurations
  routeConfig: {
    '/': { priority: 1.0, changefreq: 'daily' as const },
    '/projects': { priority: 0.9, changefreq: 'weekly' as const },
    '/about': { priority: 0.8, changefreq: 'monthly' as const },
    '/contact': { priority: 0.7, changefreq: 'monthly' as const },
  },
};

// Generate all routes for the sitemap
export const getAllRoutes = async (): Promise<string[]> => {
  const dynamic = await dynamicRoutes();
  return [...staticRoutes, ...dynamic];
};
