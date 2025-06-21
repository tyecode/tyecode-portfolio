import { siteConfig } from '@/config/meta-tags';
import {
  HERO_CONTENT,
  ABOUT_SKILLS,
  SOCIAL_LINKS,
  EXPERIENCES,
  PROJECTS,
  CONTACT_INFO,
} from '@/constants';

/**
 * Generates JSON-LD structured data for the Person schema.
 * This helps search engines understand your identity and expertise,
 * which can lead to enhanced search result listings.
 * It dynamically pulls data from your constants files for a single source of truth.
 *
 * @returns {string} A JSON string representing the Person schema markup.
 */
export function generateStructuredData(): string {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: HERO_CONTENT.name,
    url: siteConfig.baseUrl,
    image: `${siteConfig.baseUrl}images/og.jpg`,
    jobTitle: HERO_CONTENT.title,
    description: siteConfig.description,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: HERO_CONTENT.currentCompany,
    },
    alumniOf: EXPERIENCES.filter(exp => !exp.current).map(exp => ({
      '@type': 'Organization',
      name: exp.company,
    })),
    sameAs: SOCIAL_LINKS.map(link => link.href),
    knowsAbout: ABOUT_SKILLS,
    // Dynamically generate work examples from your projects constant
    workExample: PROJECTS.map(project => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: project.link,
      programmingLanguage: project.tags,
    })),
    // Dynamically generate credentials from your experience constant
    hasCredential: EXPERIENCES.map(exp => ({
      '@type': 'EducationalOccupationalCredential',
      name: exp.role,
      description: exp.description,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_INFO.email,
      contactType: 'Professional Inquiry',
    },
  };

  // Your useSEO hook parses this, so we stringify it here.
  return JSON.stringify(personSchema, null, 2);
}
