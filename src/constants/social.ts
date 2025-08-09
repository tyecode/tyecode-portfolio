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
  fullName: string;
  title: string;
  description: string;
  tagline: string;
  seoDescription: string; // Add SEO-optimized description for meta tags
}

// =================================================================
// Core Configuration (EDIT THIS SECTION)
// =================================================================

// Twitter username (without @ symbol) for meta tags and templates
export const TWITTER_USERNAME = 'tyecode';

export const BRAND_INFO: BrandInfo = {
  // Your name or brand name
  name: 'Tyecode',
  fullName: 'Sengphachanh Chanthavong',
  // Your professional title
  title: 'Frontend Developer & AI Enthusiast',
  // A brief description of yourself
  description:
    'A passionate frontend developer with 5+ years of experience building scalable React applications, now exploring AI integration and Discord bot development. Specialized in TypeScript, Next.js, and creating intelligent web experiences that bridge traditional frontend development with modern AI capabilities.',
  // A short, catchy tagline
  tagline: 'Building intelligent web experiences with AI-powered solutions.',
  // SEO-optimized description for meta tags (includes marketing copy)
  seoDescription: `🚀 Frontend Developer & AI Enthusiast specializing in React, TypeScript & AI integration. 5+ years building scalable web applications + Discord bots. Currently exploring AI-powered web solutions. Available for hire!`,
};

export const CONTACT_INFO: ContactInfo = {
  // Your email address
  email: 'sengphachanh.dev@gmail.com',
  // Your location
  location: 'Vientiane Capital, Laos',
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
    href: 'https://www.linkedin.com/in/tyecode', // Replace with your LinkedIn URL
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
