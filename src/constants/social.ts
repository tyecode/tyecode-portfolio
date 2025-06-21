export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
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
}

// =================================================================
// Personal Information (EDIT THIS SECTION)
// =================================================================
// This is the main configuration for your personal portfolio.
// Replace the values below with your own information.

export const BRAND_INFO: BrandInfo = {
  // Your name or brand name
  name: 'Emma',
  // Your professional title
  title: 'Front-End Developer',
  // A brief description of yourself
  description:
    'A dedicated front-end developer specializing in creating beautiful, responsive, and accessible web applications using React, TypeScript, and modern CSS frameworks.',
  // A short, catchy tagline
  tagline: 'Crafting exceptional digital experiences.',
};

export const CONTACT_INFO: ContactInfo = {
  // Your email address
  email: 'sengphachanh.dev@gmail.com',
  // Your location
  location: 'Vientiane, Laos / Remote',
};

// =================================================================
// Social Links (EDIT THIS SECTION)
// =================================================================
// Add or remove social media links as needed.
// The aria-label will automatically update with your name from BRAND_INFO.

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tyecode', // Replace with your LinkedIn URL
    ariaLabel: `Visit ${BRAND_INFO.name}'s LinkedIn profile (opens in new tab)`,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tyecode', // Replace with your GitHub URL
    ariaLabel: `Visit ${BRAND_INFO.name}'s GitHub profile (opens in new tab)`,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tyecode', // Replace with your Twitter/X URL
    ariaLabel: `Visit ${BRAND_INFO.name}'s Twitter profile (opens in new tab)`,
  },
];

// =================================================================
// Other Constants (Edit as needed)
// =================================================================

export const AVAILABILITY_STATUS: AvailabilityStatus = {
  text: 'Available for new opportunities',
  ariaLabel: 'Available status indicator',
  available: true,
};

// Twitter username (without @ symbol) for meta tags and templates
export const TWITTER_USERNAME = 'tyecode';
