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
    name: "LinkedIn",
    href: "https://linkedin.com/in/tyecode",
    ariaLabel: "Visit tyecode's LinkedIn profile (opens in new tab)",
  },
  {
    name: "GitHub",
    href: "https://github.com/tyecode",
    ariaLabel: "Visit tyecode's GitHub profile (opens in new tab)",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tyecode",
    ariaLabel: "Visit tyecode's Twitter profile (opens in new tab)",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "sengphachanh.dev@gmail.com",
  location: "Remote / Global",
};

export const AVAILABILITY_STATUS: AvailabilityStatus = {
  text: "Available for new opportunities",
  ariaLabel: "Available status indicator",
  available: true,
};

export const BRAND_INFO: BrandInfo = {
  name: "tyecode",
  title: "Front-End Web Developer",
  description:
    "Front-end web developer specializing in creating beautiful, responsive, and accessible web applications using modern JavaScript frameworks.",
  tagline: "Available for new opportunities",
};
