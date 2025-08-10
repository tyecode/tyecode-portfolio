import packageJson from '../../package.json';

export interface PackageInfo {
  name: string;
  description: string;
  author: {
    name?: string;
    email?: string;
    url?: string;
  };
  homepage?: string;
  repository: {
    type?: string;
    url?: string;
  };
}

/**
 * Get package information from package.json
 */
export const getPackageInfo = (): PackageInfo => {
  return {
    name: packageJson.name || '',
    description: packageJson.description || '',
    author:
      typeof packageJson.author === 'string'
        ? { name: packageJson.author }
        : packageJson.author || {},
    homepage: (packageJson as { homepage?: string }).homepage || undefined,
    repository: packageJson.repository || {},
  };
};

/**
 * Get the dynamic base path for the application
 */
export const getBasePath = (): string => {
  // Use import.meta.env which is consistent between server and client in Vite
  if (import.meta.env.VITE_STATIC_BUILD === 'true') {
    return `/${getPackageInfo().name}`;
  }
  return '';
};

/**
 * Get the full base URL for the application
 */
export const getBaseUrl = (): string => {
  const packageInfo = getPackageInfo();

  // Use homepage from package.json if available
  if (packageInfo.homepage) {
    return packageInfo.homepage;
  }

  // Fallback: Use environment variable or default for development
  const envBaseUrl = import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL;
  if (envBaseUrl) {
    return envBaseUrl;
  }

  // For development, use localhost
  if (import.meta.env.DEV) {
    return 'http://localhost:8000';
  }

  // For production, use the configured domain
  return 'https://tyecode.dev';
};

/**
 * Generate a full URL with the correct base path
 */
export const generateUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${getBaseUrl()}${cleanPath}`;
};

/**
 * Generate an image URL with the correct base path
 */
export const generateImageUrl = (imagePath: string): string => {
  // For local development and Vite static file serving, use relative paths
  const cleanImagePath = imagePath.startsWith('/')
    ? imagePath
    : `/${imagePath}`;

  // In development or when serving static files, use relative paths
  if (import.meta.env.DEV || typeof window !== 'undefined') {
    return cleanImagePath;
  }

  // For SSR or production builds, use full URLs
  return `${getBaseUrl()}${cleanImagePath}`;
};
