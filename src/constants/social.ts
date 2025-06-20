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

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    ariaLabel: "Visit Emma Johnson's LinkedIn profile (opens in new tab)",
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    ariaLabel: "Visit Emma Johnson's GitHub profile (opens in new tab)",
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    ariaLabel: "Visit Emma Johnson's Twitter profile (opens in new tab)",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'emma.johnson@gmail.com',
  location: 'San Francisco, CA / Remote',
};

export const AVAILABILITY_STATUS: AvailabilityStatus = {
  text: 'Available for new opportunities',
  ariaLabel: 'Available status indicator',
  available: true,
};

export const BRAND_INFO: BrandInfo = {
  name: 'Emma Johnson',
  title: 'Frontend Developer',
  description:
    'Frontend developer specializing in creating beautiful, responsive, and accessible web applications using React, TypeScript, and modern CSS frameworks.',
  tagline: 'Building exceptional digital experiences',
};
