import React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  seoMetaTags,
  openGraphMetaTags,
  twitterMetaTags,
  themeMetaTags,
  faviconLinks,
  externalLinks,
  siteConfig,
} from '@/config/meta-tags';
import { generateStructuredData } from '@/utils/structured-data';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = siteConfig.title,
  description,
  keywords,
  ogImage,
  twitterImage,
  canonicalUrl = siteConfig.baseUrl,
}) => {
  // Override default values with props if provided
  const finalSeoTags = seoMetaTags.map(tag => {
    if (tag.name === 'description' && description) {
      return { ...tag, content: description };
    }
    if (tag.name === 'keywords' && keywords) {
      return { ...tag, content: keywords };
    }
    return tag;
  });

  const finalOgTags = openGraphMetaTags.map(tag => {
    if (tag.property === 'og:description' && description) {
      return { ...tag, content: description };
    }
    if (tag.property === 'og:image' && ogImage) {
      return { ...tag, content: ogImage };
    }
    if (tag.property === 'og:url' && canonicalUrl) {
      return { ...tag, content: canonicalUrl };
    }
    return tag;
  });

  const finalTwitterTags = twitterMetaTags.map(tag => {
    if (tag.name === 'twitter:description' && description) {
      return { ...tag, content: description };
    }
    if (tag.name === 'twitter:image' && twitterImage) {
      return { ...tag, content: twitterImage };
    }
    return tag;
  });

  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Basic Meta Tags */}
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

      {/* SEO Meta Tags */}
      {finalSeoTags.map((tag, index) => (
        <meta key={`seo-${index}`} {...tag} />
      ))}

      {/* Open Graph Meta Tags */}
      {finalOgTags.map((tag, index) => (
        <meta key={`og-${index}`} {...tag} />
      ))}

      {/* Twitter Meta Tags */}
      {finalTwitterTags.map((tag, index) => (
        <meta key={`twitter-${index}`} {...tag} />
      ))}

      {/* Theme Meta Tags */}
      {themeMetaTags.map((tag, index) => (
        <meta key={`theme-${index}`} {...tag} />
      ))}

      {/* Favicon Links */}
      {faviconLinks.map((link, index) => (
        <link key={`favicon-${index}`} {...link} />
      ))}

      {/* External Links */}
      {externalLinks.map((link, index) => (
        <link key={`external-${index}`} {...link} />
      ))}

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Structured Data */}
      <script type='application/ld+json'>{generateStructuredData()}</script>
    </Helmet>
  );
};

export default MetaTags;
