import { BRAND_INFO, CONTACT_INFO } from '@/constants';

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

// Dynamic base path utility
export const getBasePath = (): string => {
  if (
    typeof process !== 'undefined' &&
    process.env?.VITE_STATIC_BUILD === 'true'
  ) {
    return '/tyecode-portfolio';
  }
  return '';
};

// Site configuration - now fully dynamic from constants
export const siteConfig = {
  title: `${BRAND_INFO.name} - ${BRAND_INFO.title} | React & TypeScript Specialist`,
  baseUrl: 'https://tyecode.github.io/tyecode-portfolio/',
  email: CONTACT_INFO.email,
  author: BRAND_INFO.name,
  description: `Seeking an expert React Developer? I'm ${BRAND_INFO.name}, a Front-End Specialist with 4+ years of experience. ${BRAND_INFO.description}. View my portfolio and let's connect.`,
  keywords:
    'react developer, front-end developer, typescript developer, web developer portfolio, hire front-end developer',
  themeColor: '#111827',
  locale: 'en_US',
  language: 'English',
  social: {
    github: 'https://github.com/tyecode',
    linkedin: 'https://linkedin.com/in/tyecode',
    twitter: 'https://twitter.com/tyecode',
    twitterHandle: '@tyecode',
  },
  images: {
    og: '/images/og.jpg',
    // Static favicons removed - using dynamic generation only
  },
};

// Helper functions for generating URLs
export const generateImageUrl = (imagePath: string): string => {
  const cleanImagePath = imagePath.startsWith('/')
    ? imagePath.slice(1)
    : imagePath;
  return `${siteConfig.baseUrl}${cleanImagePath}`;
};

export const generateCanonicalUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${siteConfig.baseUrl}${cleanPath}`;
};

// --- SEO tags are now built from the dynamic siteConfig ---

export const seoMetaTags: MetaTag[] = [
  { name: 'description', content: siteConfig.description },
  { name: 'keywords', content: siteConfig.keywords },
  { name: 'author', content: siteConfig.author },
  { name: 'robots', content: 'index, follow' },
  { name: 'language', content: siteConfig.language },
  { name: 'revisit-after', content: '7 days' },
];

export const openGraphMetaTags: MetaTag[] = [
  { property: 'og:type', content: 'website' },
  { property: 'og:title', content: siteConfig.title },
  { property: 'og:description', content: siteConfig.description },
  { property: 'og:url', content: generateCanonicalUrl() },
  { property: 'og:site_name', content: `${siteConfig.author} Portfolio` },
  { property: 'og:image', content: generateImageUrl(siteConfig.images.og) },
  {
    property: 'og:image:secure_url',
    content: generateImageUrl(siteConfig.images.og),
  },
  { property: 'og:image:type', content: 'image/jpeg' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  {
    property: 'og:image:alt',
    content: `${siteConfig.author} - ${BRAND_INFO.title}`,
  },
  { property: 'og:locale', content: siteConfig.locale },
];

export const twitterMetaTags: MetaTag[] = [
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: siteConfig.social.twitterHandle },
  { name: 'twitter:creator', content: siteConfig.social.twitterHandle },
  { name: 'twitter:title', content: siteConfig.title },
  { name: 'twitter:description', content: siteConfig.description },
  { name: 'twitter:image', content: generateImageUrl(siteConfig.images.og) },
  {
    name: 'twitter:image:alt',
    content: `${siteConfig.author} - ${BRAND_INFO.title}`,
  },
];

export const themeMetaTags: MetaTag[] = [
  { name: 'theme-color', content: siteConfig.themeColor },
  { name: 'msapplication-TileColor', content: siteConfig.themeColor },
];

export const externalLinks: LinkTag[] = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
  },
];

export const criticalLinks: LinkTag[] = [
  {
    rel: 'preload',
    href: '/src/styles/critical.css',
    as: 'style',
    onload: "this.onload=null;this.rel='stylesheet'",
  },
  {
    rel: 'preload',
    href: '/src/index.css',
    as: 'style',
    onload: "this.onload=null;this.rel='stylesheet'",
  },
  {
    rel: 'preload',
    href: `${getBasePath()}/images/og.jpg`,
    as: 'image',
    type: 'image/jpeg',
  },
  { rel: 'modulepreload', href: '/src/entry-client.tsx' },
  {
    rel: 'preload',
    href: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    as: 'font',
    type: 'font/woff2',
    crossorigin: 'anonymous',
  },
];

// Dynamic manifest generation
export const generateManifest = () => {
  const basePath = getBasePath();
  const shortName = BRAND_INFO.name.split(' ')[0]; // Use first name for short_name

  return {
    name: `${BRAND_INFO.name} - Front-End Developer Portfolio`,
    short_name: shortName,
    description: BRAND_INFO.description,
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    id: `${shortName.toLowerCase()}-tyecode-portfolio`,
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone'],
    orientation: 'portrait-primary',
    background_color: '#ffffff',
    theme_color: '#111827',
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: `${basePath}/images/og.jpg`,
        sizes: '1200x630',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'View Projects',
        short_name: 'Projects',
        description: 'Browse featured web development projects',
        url: `${basePath}/#work`,
      },
      {
        name: 'Experience',
        short_name: 'Experience',
        description: 'View professional experience and timeline',
        url: `${basePath}/#experience`,
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch for collaboration',
        url: `${basePath}/#contact`,
      },
    ],
    categories: ['portfolio', 'developer', 'web-development'],
    screenshots: [
      {
        src: `${basePath}/images/og.jpg`,
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide',
      },
    ],
    prefer_related_applications: false,
    related_applications: [],
  };
};
