// Navigation and UI constants
export * from './navigation';

// Social media, contact, and content constants
export * from './social';

// Section data constants
export * from './sections';

// Re-export commonly used individual constants for convenience
export { NAVIGATION_LINKS } from './navigation';
export {
  BRAND_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
  TWITTER_USERNAME,
  AVAILABILITY_STATUS,
  // Utility functions
  getSocialLink,
  getSocialUrl,
  hasSocialPlatform,
} from './social';
export {
  HERO_CONTENT,
  ABOUT_SKILLS,
  ABOUT_STATS,
  ABOUT_CONTENT,
  PROJECTS,
  EXPERIENCES,
  CONTACT_CONTENT,
} from './sections';
