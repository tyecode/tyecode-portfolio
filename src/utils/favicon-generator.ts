import { BRAND_INFO } from '@/constants';

export interface FaviconOptions {
  character?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  size?: number;
}

/**
 * Generates a dynamic favicon based on the Logo component design
 * @param options - Configuration options for the favicon
 * @returns Promise<string> - Data URL of the generated favicon
 */
export const generateFavicon = async (
  options: FaviconOptions = {}
): Promise<string> => {
  const {
    character = BRAND_INFO.name.charAt(0),
    backgroundColor = '#111827', // gray-900
    foregroundColor = '#ffffff',
    size = 32,
  } = options;

  return new Promise(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      resolve('');
      return;
    }

    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    // Calculate responsive sizes based on canvas size
    const cornerRadius = size * 0.25; // 25% of size for rounded corners
    const fontSize = size * 0.3; // Reduced from 0.4 to 0.3 for better proportions
    const braceFontSize = size * 0.22; // Reduced from 0.3 to 0.22 for better proportions

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw rounded rectangle background
    ctx.fillStyle = backgroundColor;
    ctx.beginPath();
    ctx.roundRect(0, 0, size, size, cornerRadius);
    ctx.fill();

    // Set text properties
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = foregroundColor;

    // Draw opening brace
    ctx.font = `${braceFontSize}px Monaco, "Courier New", monospace`;
    ctx.globalAlpha = 0.9;
    ctx.fillText('{', size * 0.25, size * 0.5);

    // Draw character
    ctx.font = `bold ${fontSize}px Monaco, "Courier New", monospace`;
    ctx.globalAlpha = 1;
    ctx.fillText(character, size * 0.5, size * 0.5);

    // Draw closing brace
    ctx.font = `${braceFontSize}px Monaco, "Courier New", monospace`;
    ctx.globalAlpha = 0.9;
    ctx.fillText('}', size * 0.75, size * 0.5);

    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/png');
    resolve(dataUrl);
  });
};

/**
 * Updates the favicon in the document head
 * @param character - Character to use for the favicon (defaults to first letter of brand name)
 */
export const updateFavicon = async (character?: string): Promise<void> => {
  try {
    // Generate favicons in multiple sizes
    const sizes = [16, 32, 48, 64, 128, 256];
    const faviconPromises = sizes.map(size =>
      generateFavicon({
        character: character || BRAND_INFO.name.charAt(0),
        size,
      })
    );

    const faviconDataUrls = await Promise.all(faviconPromises);

    // Remove existing favicon links
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(favicon => favicon.remove());

    // Add new favicon links
    const faviconSizes = [
      '16x16',
      '32x32',
      '48x48',
      '64x64',
      '128x128',
      '256x256',
    ];

    faviconDataUrls.forEach((dataUrl, index) => {
      if (dataUrl) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.setAttribute('sizes', faviconSizes[index]);
        link.href = dataUrl;
        document.head.appendChild(link);
      }
    });

    // Add apple-touch-icon (use the largest size)
    const appleTouchIconLink = document.createElement('link');
    appleTouchIconLink.rel = 'apple-touch-icon';
    appleTouchIconLink.setAttribute('sizes', '256x256');
    appleTouchIconLink.href = faviconDataUrls[faviconDataUrls.length - 1];
    document.head.appendChild(appleTouchIconLink);
  } catch (error) {
    console.error('Failed to update favicon:', error);
  }
};

/**
 * Automatically generates and updates favicon based on brand name
 * Call this function when the app initializes or when brand name changes
 */
export const initDynamicFavicon = (): void => {
  // Update favicon on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => updateFavicon());
  } else {
    updateFavicon();
  }
};

/**
 * Generates favicon for a specific brand name
 * Useful for testing different brand names
 * @param brandName - The brand name to generate favicon for
 */
export const generateFaviconForBrand = async (
  brandName: string
): Promise<void> => {
  const character = brandName.charAt(0);
  await updateFavicon(character);
};

/**
 * Preview favicon generation - returns data URL without updating DOM
 * Useful for previewing favicons before applying them
 * @param character - Character to preview
 * @param size - Size of the preview (default: 64)
 * @returns Promise<string> - Data URL of the generated favicon
 */
export const previewFavicon = async (
  character: string,
  size: number = 64
): Promise<string> => {
  return generateFavicon({ character, size });
};
