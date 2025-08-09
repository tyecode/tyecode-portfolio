import { BRAND_INFO } from '@/constants';
import type { FaviconOptions } from '@/types/utils';

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
    const fontSize = size * 0.44; // Increased from 0.3 to 0.44 to match HTML placeholder (14/32 = 0.4375)
    const braceFontSize = size * 0.32; // Increased from 0.22 to 0.32 for better proportions with larger main text

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
    ctx.fillText('{', size * 0.22, size * 0.5);

    // Draw character
    ctx.font = `bold ${fontSize}px Monaco, "Courier New", monospace`;
    ctx.globalAlpha = 1;
    ctx.fillText(character, size * 0.5, size * 0.5);

    // Draw closing brace
    ctx.font = `${braceFontSize}px Monaco, "Courier New", monospace`;
    ctx.globalAlpha = 0.9;
    ctx.fillText('}', size * 0.78, size * 0.5);

    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/png');
    resolve(dataUrl);
  });
};

/**
 * Generates a web app manifest for PWA support and better SEO
 * @param faviconDataUrls - Array of favicon data URLs in different sizes
 * @returns Web app manifest object
 */
const generateWebAppManifest = (faviconDataUrls: string[]) => {
  const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
  const icons = faviconDataUrls.slice(-8).map((dataUrl, index) => ({
    src: dataUrl,
    sizes: `${iconSizes[index]}x${iconSizes[index]}`,
    type: 'image/png',
    purpose: index >= 6 ? 'any maskable' : 'any', // Last 2 icons support maskable
  }));

  return {
    name: `${BRAND_INFO.name} - Front-End Developer Portfolio`,
    short_name: BRAND_INFO.name,
    description: `Portfolio website of ${BRAND_INFO.name}, showcasing front-end development projects and skills`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    orientation: 'portrait-primary',
    scope: '/',
    icons,
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'en-US',
  };
};

/**
 * Updates the favicon in the document head with comprehensive SEO support
 * @param character - Character to use for the favicon (defaults to first letter of brand name)
 */
export const updateFavicon = async (character?: string): Promise<void> => {
  try {
    // Generate favicons in comprehensive sizes for all platforms and use cases
    const sizes = [
      16, 32, 48, 64, 72, 96, 128, 144, 152, 180, 192, 256, 384, 512,
    ];
    const faviconPromises = sizes.map(size =>
      generateFavicon({
        character: character || BRAND_INFO.name.charAt(0),
        size,
      })
    );

    const faviconDataUrls = await Promise.all(faviconPromises);

    // Remove existing favicon and manifest links
    const existingElements = document.querySelectorAll(
      'link[rel*="icon"], link[rel*="manifest"], link[rel*="apple-touch"]'
    );
    existingElements.forEach(element => element.remove());

    // Standard favicon sizes for browsers
    const standardSizes = [
      { size: 16, rel: 'icon' },
      { size: 32, rel: 'icon' },
      { size: 48, rel: 'icon' },
      { size: 64, rel: 'icon' },
    ];

    standardSizes.forEach(({ size, rel }) => {
      const index = sizes.indexOf(size);
      if (index !== -1 && faviconDataUrls[index]) {
        const link = document.createElement('link');
        link.rel = rel;
        link.type = 'image/png';
        link.setAttribute('sizes', `${size}x${size}`);
        link.href = faviconDataUrls[index];
        document.head.appendChild(link);
      }
    });

    // Apple Touch Icons for iOS devices (SEO important for mobile)
    const appleTouchSizes = [152, 180];
    appleTouchSizes.forEach(size => {
      const index = sizes.indexOf(size);
      if (index !== -1 && faviconDataUrls[index]) {
        const link = document.createElement('link');
        link.rel = 'apple-touch-icon';
        link.setAttribute('sizes', `${size}x${size}`);
        link.href = faviconDataUrls[index];
        document.head.appendChild(link);
      }
    });

    // Default apple-touch-icon (180x180 is preferred)
    const defaultAppleIndex = sizes.indexOf(180);
    if (defaultAppleIndex !== -1 && faviconDataUrls[defaultAppleIndex]) {
      const link = document.createElement('link');
      link.rel = 'apple-touch-icon';
      link.href = faviconDataUrls[defaultAppleIndex];
      document.head.appendChild(link);
    }

    // Generate and inject web app manifest for PWA support and better SEO
    const manifest = generateWebAppManifest(faviconDataUrls);
    const manifestBlob = new Blob([JSON.stringify(manifest, null, 2)], {
      type: 'application/json',
    });
    const manifestUrl = URL.createObjectURL(manifestBlob);

    const manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = manifestUrl;
    document.head.appendChild(manifestLink);

    // Add Microsoft tile configuration for Windows
    const msConfigMeta = document.createElement('meta');
    msConfigMeta.name = 'msapplication-TileColor';
    msConfigMeta.content = '#111827';
    document.head.appendChild(msConfigMeta);

    const msTileImageIndex = sizes.indexOf(144);
    if (msTileImageIndex !== -1 && faviconDataUrls[msTileImageIndex]) {
      const msTileImageMeta = document.createElement('meta');
      msTileImageMeta.name = 'msapplication-TileImage';
      msTileImageMeta.content = faviconDataUrls[msTileImageIndex];
      document.head.appendChild(msTileImageMeta);
    }

    // Add mask-icon for Safari pinned tabs
    const maskIconIndex = sizes.indexOf(192);
    if (maskIconIndex !== -1 && faviconDataUrls[maskIconIndex]) {
      // Generate SVG version for mask-icon (better for Safari)
      const svgIcon = generateSVGIcon(character || BRAND_INFO.name.charAt(0));
      const svgBlob = new Blob([svgIcon], { type: 'image/svg+xml' });
      const svgUrl = URL.createObjectURL(svgBlob);

      const maskIconLink = document.createElement('link');
      maskIconLink.rel = 'mask-icon';
      maskIconLink.href = svgUrl;
      maskIconLink.setAttribute('color', '#111827');
      document.head.appendChild(maskIconLink);
    }
  } catch (error) {
    console.error('❌ Failed to update favicon:', error);
  }
};

/**
 * Generates an SVG icon for Safari mask-icon support
 * @param character - Character to use in the icon
 * @returns SVG string
 */
const generateSVGIcon = (character: string): string => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="8" fill="black"/>
    <text x="5.5" y="20" font-family="Monaco, monospace" font-size="10" fill="black" opacity="0.9">{</text>
    <text x="16" y="20" font-family="Monaco, monospace" font-size="14" font-weight="bold" text-anchor="middle" fill="black">${character}</text>
    <text x="26.5" y="20" font-family="Monaco, monospace" font-size="10" fill="black" opacity="0.9">}</text>
  </svg>`;
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
