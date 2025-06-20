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
  // Check for static build environment variable
  if (import.meta.env.VITE_STATIC_BUILD === 'true') {
    return '/tyecode-portfolio';
  }

  // Check if running on GitHub Pages (client-side detection)
  // Use a more robust check to prevent hydration issues
  if (
    typeof window !== 'undefined' &&
    typeof window.location !== 'undefined' &&
    window.location.pathname.includes('/tyecode-portfolio/')
  ) {
    return '/tyecode-portfolio';
  }

  // Default to root path for local development
  return '';
};

// Site configuration - centralized place for all site metadata
export const siteConfig = {
  title: 'tyecode - Expert Front-End Developer | React & TypeScript Specialist',
  baseUrl: 'https://tyecode.github.io/tyecode-portfolio/',
  email: 'sengphachanh.dev@gmail.com',
  author: 'tyecode',
  description:
    '🚀 Professional front-end developer specializing in React, TypeScript & modern web technologies. 4+ years building responsive, user-friendly web applications. Available for hire - View portfolio & get in touch!',
  keywords:
    'front-end developer, React developer, TypeScript developer, JavaScript developer, Vue.js developer, responsive web design, UI developer, modern web development, available for hire, tyecode',
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
    og: '/images/og.png',
    favicon: '/favicon.png',
    faviconSvg: '/favicon.svg',
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

export const seoMetaTags: MetaTag[] = [
  {
    name: 'description',
    content: siteConfig.description,
  },
  {
    name: 'keywords',
    content: siteConfig.keywords,
  },
  {
    name: 'author',
    content: siteConfig.author,
  },
  {
    name: 'robots',
    content: 'index, follow',
  },
  {
    name: 'language',
    content: siteConfig.language,
  },
  {
    name: 'revisit-after',
    content: '7 days',
  },
];

export const openGraphMetaTags: MetaTag[] = [
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:title',
    content: siteConfig.title,
  },
  {
    property: 'og:description',
    content: siteConfig.description,
  },
  {
    property: 'og:url',
    content: generateCanonicalUrl(),
  },
  {
    property: 'og:site_name',
    content: 'tyecode Portfolio',
  },
  {
    property: 'og:image',
    content: generateImageUrl(siteConfig.images.og),
  },
  {
    property: 'og:image:secure_url',
    content: generateImageUrl(siteConfig.images.og),
  },
  {
    property: 'og:image:type',
    content: 'image/png',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'og:image:alt',
    content: 'tyecode - Front-End Web Developer Portfolio',
  },
  {
    property: 'og:locale',
    content: siteConfig.locale,
  },
];

export const twitterMetaTags: MetaTag[] = [
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:site',
    content: siteConfig.social.twitterHandle,
  },
  {
    name: 'twitter:creator',
    content: siteConfig.social.twitterHandle,
  },
  {
    name: 'twitter:title',
    content: siteConfig.title,
  },
  {
    name: 'twitter:description',
    content: siteConfig.description,
  },
  {
    name: 'twitter:image',
    content: generateImageUrl(siteConfig.images.og),
  },
  {
    name: 'twitter:image:alt',
    content: 'tyecode - Front-End Web Developer Portfolio',
  },
];

export const themeMetaTags: MetaTag[] = [
  {
    name: 'theme-color',
    content: siteConfig.themeColor,
  },
  {
    name: 'msapplication-TileColor',
    content: siteConfig.themeColor,
  },
];

export const faviconLinks: LinkTag[] = [
  {
    rel: 'icon',
    href: `${getBasePath()}${siteConfig.images.favicon}`,
    type: 'image/png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${getBasePath()}${siteConfig.images.favicon}`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `${getBasePath()}${siteConfig.images.favicon}`,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: `${getBasePath()}${siteConfig.images.favicon}`,
  },
  {
    rel: 'manifest',
    href: `${getBasePath()}/site.webmanifest`,
  },
];

export const externalLinks: LinkTag[] = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: '',
  },
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
  // Preload critical images for better LCP
  {
    rel: 'preload',
    href: `${getBasePath()}/images/og.png`,
    as: 'image',
    type: 'image/png',
  },
  // Preload critical JavaScript chunks
  {
    rel: 'modulepreload',
    href: '/src/entry-client.tsx',
  },
  // Preload fonts for better typography loading
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

  return {
    name: 'tyecode - Front-End Developer Portfolio',
    short_name: 'tyecode',
    description:
      'Modern front-end web developer portfolio built with React, TypeScript, and Tailwind CSS. Showcasing responsive web applications, UI/UX implementations, and front-end development expertise.',
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    id: 'tyecode-portfolio',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone'],
    orientation: 'portrait-primary',
    background_color: '#ffffff',
    theme_color: '#111827',
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: `${basePath}/favicon.svg`,
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
      {
        src: `${basePath}/favicon.png`,
        sizes: '256x256',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: `${basePath}/favicon.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: `${basePath}/favicon.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: `${basePath}/images/og.png`,
        sizes: '1200x630',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'View Projects',
        short_name: 'Projects',
        description: 'Browse featured web development projects',
        url: `${basePath}/#work`,
        icons: [{ src: `${basePath}/favicon.png`, sizes: '256x256' }],
      },
      {
        name: 'Experience',
        short_name: 'Experience',
        description: 'View professional experience and timeline',
        url: `${basePath}/#experience`,
        icons: [{ src: `${basePath}/favicon.png`, sizes: '256x256' }],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch for collaboration',
        url: `${basePath}/#contact`,
        icons: [{ src: `${basePath}/favicon.png`, sizes: '256x256' }],
      },
    ],
    categories: ['portfolio', 'developer', 'web-development'],
    screenshots: [
      {
        src: `${basePath}/images/og.png`,
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
    prefer_related_applications: false,
    related_applications: [],
  };
};
