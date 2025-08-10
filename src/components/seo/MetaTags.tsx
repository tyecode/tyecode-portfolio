import { Helmet } from 'react-helmet-async';
import type { MetaTagsProps } from '@/types/seo';
import {
  seoMetaTags,
  openGraphMetaTags,
  twitterMetaTags,
  themeMetaTags,
  seoLinks,
} from '@/config/meta-tags';

const MetaTags = ({
  title,
  description,
  canonical,
  image,
  schemaMarkup,
  keywords,
  author,
}: MetaTagsProps) => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name='description' content={description} />
    {keywords && <meta name='keywords' content={keywords} />}
    {author && <meta name='author' content={author} />}

    {/* Comprehensive SEO Meta Tags */}
    {seoMetaTags.map((tag, index) => (
      <meta
        key={`seo-${index}`}
        name={tag.name}
        property={tag.property}
        content={tag.content}
        httpEquiv={tag.httpEquiv}
      />
    ))}

    {/* Canonical and SEO Links */}
    <link rel='canonical' href={canonical} />
    {seoLinks.map((link, index) => (
      <link
        key={`seo-link-${index}`}
        rel={link.rel}
        href={link.href}
        type={link.type}
        sizes={link.sizes}
        as={link.as}
        crossOrigin={
          link.crossorigin as 'anonymous' | 'use-credentials' | undefined
        }
        hrefLang={link.hreflang}
      />
    ))}

    {/* Theme Color Meta Tags */}
    {themeMetaTags.map((tag, index) => (
      <meta key={`theme-${index}`} name={tag.name} content={tag.content} />
    ))}

    {/* Open Graph Meta Tags */}
    {openGraphMetaTags.map((tag, index) => {
      // Override image URLs if custom image is provided
      let content = tag.content;
      if (image && tag.property === 'og:image') {
        content = image;
      } else if (image && tag.property === 'og:image:secure_url') {
        content = image;
      }

      return (
        <meta key={`og-${index}`} property={tag.property} content={content} />
      );
    })}

    {/* Twitter Meta Tags */}
    {twitterMetaTags.map((tag, index) => {
      // Override image URL if custom image is provided
      let content = tag.content;
      if (image && tag.name === 'twitter:image') {
        content = image;
      }

      return (
        <meta key={`twitter-${index}`} name={tag.name} content={content} />
      );
    })}

    {/* Structured Data (Schema Markup) */}
    {schemaMarkup && (
      <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>
    )}
  </Helmet>
);

export default MetaTags;
