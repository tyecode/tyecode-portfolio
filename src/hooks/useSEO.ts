import { useMemo } from 'react';
import {
  siteConfig,
  generateCanonicalUrl,
  generateImageUrl,
} from '@/config/meta-tags';
import { generateStructuredData } from '@/utils/structured-data';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  noIndex?: boolean;
}

export const useSEO = ({
  title,
  description,
  image,
  url,
  keywords,
  noIndex = false,
}: SEOProps = {}) => {
  const seoData = useMemo(() => {
    // Use default values from siteConfig if not provided
    const seoTitle = title || siteConfig.title;
    const seoDescription = description || siteConfig.description;
    const seoUrl = url || generateCanonicalUrl();
    const seoImage = image || generateImageUrl(siteConfig.images.og);
    const seoKeywords = keywords || siteConfig.keywords;

    // Generate schema markup
    const schemaMarkup = JSON.parse(generateStructuredData());

    // If it's a specific page, update the schema
    if (url && url !== seoUrl) {
      schemaMarkup.url = seoUrl;
    }

    return {
      title: seoTitle,
      description: seoDescription,
      image: seoImage,
      keywords: seoKeywords,
      author: siteConfig.author,
      themeColor: siteConfig.themeColor,
      twitterHandle: siteConfig.social.twitterHandle,
      robots: noIndex ? 'noindex, nofollow' : 'index, follow',
      schemaMarkup,
    };
  }, [title, description, image, url, keywords, noIndex]);

  return seoData;
};
