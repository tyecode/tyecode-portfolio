// =================================================================
// Type Definitions
// =================================================================

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  platform: string; // Add platform identifier for easier filtering
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface AvailabilityStatus {
  text: string;
  ariaLabel: string;
  available: boolean;
}

export interface BrandInfo {
  name: string;
  title: string;
  description: string;
  tagline: string;
  seoDescription: string; // Add SEO-optimized description for meta tags
}

// =================================================================
// Core Configuration (EDIT THIS SECTION)
// =================================================================

// Twitter username (without @ symbol) for meta tags and templates
export const TWITTER_USERNAME = 'emma_builds';

export const BRAND_INFO: BrandInfo = {
  // Your name or brand name
  name: 'Emma Loxley',
  // Your professional title
  title: 'Senior Front-End Developer',
  // A brief description of yourself
  description:
    'A passionate senior front-end developer with 6+ years of experience building scalable React applications, design systems, and user-centric web experiences. Specialized in TypeScript, Next.js, and modern CSS frameworks.',
  // A short, catchy tagline
  tagline: 'Building beautiful, accessible web experiences that users love.',
  // SEO-optimized description for meta tags (includes marketing copy)
  seoDescription: `🚀 Senior Front-End Developer specializing in React, TypeScript & Next.js. 6+ years building scalable web applications, design systems & e-commerce platforms. Available for hire - View my portfolio & let's connect!`,
};

export const CONTACT_INFO: ContactInfo = {
  // Your email address
  email: 'emma.loxley@gmail.com',
  // Your location
  location: 'San Francisco, CA / Remote',
};

export const AVAILABILITY_STATUS: AvailabilityStatus = {
  text: 'Available for new opportunities',
  ariaLabel: 'Available status indicator',
  available: true,
};

// =================================================================
// Social Links Configuration (EDIT THIS SECTION)
// =================================================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    platform: 'linkedin',
    href: 'https://linkedin.com/in/tyecode', // Replace with your LinkedIn URL
    ariaLabel: `Visit ${BRAND_INFO.name}'s LinkedIn profile (opens in new tab)`,
  },
  {
    name: 'GitHub',
    platform: 'github',
    href: 'https://github.com/tyecode', // Replace with your GitHub URL
    ariaLabel: `Visit ${BRAND_INFO.name}'s GitHub profile (opens in new tab)`,
  },
  {
    name: 'Twitter',
    platform: 'twitter',
    href: 'https://twitter.com/tyecode', // Replace with your Twitter/X URL
    ariaLabel: `Visit ${BRAND_INFO.name}'s Twitter profile (opens in new tab)`,
  },
];

// =================================================================
// Utility Functions
// =================================================================

/**
 * Get social link by platform name (case-insensitive)
 */
export const getSocialLink = (platform: string): SocialLink | undefined => {
  return SOCIAL_LINKS.find(
    link =>
      link.platform.toLowerCase() === platform.toLowerCase() ||
      link.name.toLowerCase() === platform.toLowerCase()
  );
};

/**
 * Get social URL by platform name
 */
export const getSocialUrl = (platform: string): string => {
  return getSocialLink(platform)?.href || '';
};

/**
 * Check if a social platform is configured
 */
export const hasSocialPlatform = (platform: string): boolean => {
  return getSocialLink(platform) !== undefined;
};
