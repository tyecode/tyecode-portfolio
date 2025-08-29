// Portfolio content and data structure types

export interface Stat {
  value: string;
  label: string;
  ariaLabel: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
  gradient: string;
  tags: string[];
  link: string;
}

export interface Experience {
  company: string;
  companyUrl?: string; // Optional company website URL
  role: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

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
  gender: string; // Personal information for SEO and social media
}
