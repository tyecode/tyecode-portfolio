// =================================================================
// Type Definitions
// =================================================================

import type {
  SocialLink,
  ContactInfo,
  AvailabilityStatus,
  BrandInfo,
} from '@/types/portfolio';

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
  title: 'Full-Stack Developer',
  // A brief description of yourself
  description:
    'Full-Stack Developer specializing in Next.js, Node.js, and TypeScript. Building scalable web systems across restaurant tech, SaaS, and Fintech.',
  // A short, catchy tagline
  tagline: 'Building scalable web systems with clean architecture.',
  // SEO-optimized description for meta tags (includes marketing copy)
  seoDescription: `🚀 Full-Stack Developer specializing in Next.js, Node.js & TypeScript. 5+ years in tech building scalable web systems across restaurant tech, SaaS, and Fintech. Available for hire!`,
  // Personal information for SEO and social media
  gender: 'male',
};

export const CONTACT_INFO: ContactInfo = {
  // Your email address
  email: 'sengphachanh.dev@gmail.com',
  // Your location
  location: 'Vientiane Capital, Laos',
};

export const AVAILABILITY_STATUS: AvailabilityStatus = {
  text: 'Available for Remote Opportunities (Global)',
  ariaLabel: 'Available for remote work globally',
  available: true,
};

// =================================================================
// Social Links Configuration (EDIT THIS SECTION)
// =================================================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    platform: 'linkedin',
    href: 'https://www.linkedin.com/in/tyecode',
    ariaLabel: `Visit ${BRAND_INFO.name}'s LinkedIn profile (opens in new tab)`,
  },
  {
    name: 'GitHub',
    platform: 'github',
    href: 'https://github.com/tyecode',
    ariaLabel: `Visit ${BRAND_INFO.name}'s GitHub profile (opens in new tab)`,
  },
  {
    name: 'Email',
    platform: 'email',
    href: `mailto:${CONTACT_INFO.email}`,
    ariaLabel: `Send email to ${BRAND_INFO.name}`,
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
