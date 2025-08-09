import packageJson from '../../package.json';

export interface PackageInfo {
  name: string;
  description: string;
  author: {
    name?: string;
    email?: string;
    url?: string;
  };
  homepage: string;
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
    homepage: packageJson.homepage || '',
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

  // For Vercel deployment, use homepage from package.json
  return packageInfo.homepage || 'https://tyecode.dev';
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
  const cleanImagePath = imagePath.startsWith('/')
    ? imagePath.slice(1)
    : imagePath;
  return `${getBaseUrl()}${cleanImagePath}`;
};
