// SEO and meta tags related types

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  httpEquiv?: string;
}

export interface LinkTag {
  rel: string;
  href?: string;
  type?: string;
  sizes?: string;
  as?: string;
  onload?: string;
  crossorigin?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  twitterHandle?: string;
  noIndex?: boolean;
}

export interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
  image: string;
  schemaMarkup?: Record<string, unknown>;
  keywords?: string;
  author?: string;
  themeColor?: string;
  twitterHandle?: string;
}
