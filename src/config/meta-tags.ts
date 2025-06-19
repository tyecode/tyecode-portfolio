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
  if (
    typeof window !== 'undefined' &&
    window.location.pathname.includes('/tyecode-portfolio/')
  ) {
    return '/tyecode-portfolio';
  }

  // Default to root path for local development
  return '';
};

export const seoMetaTags: MetaTag[] = [
  {
    name: 'description',
    content:
      '🚀 Professional front-end developer specializing in React, TypeScript & modern web technologies. 4+ years building responsive, user-friendly web applications. Available for hire - View portfolio & get in touch!',
  },
  {
    name: 'keywords',
    content:
      'front-end developer, React developer, TypeScript developer, JavaScript developer, Vue.js developer, responsive web design, UI developer, modern web development, available for hire, tyecode',
  },
  {
    name: 'author',
    content: 'tyecode',
  },
  {
    name: 'robots',
    content: 'index, follow',
  },
  {
    name: 'language',
    content: 'English',
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
    content:
      'tyecode - Expert Front-End Developer | React & TypeScript Portfolio',
  },
  {
    property: 'og:description',
    content:
      '🚀 Professional front-end developer with 4+ years experience. Specializing in React, TypeScript, Vue.js & modern CSS frameworks. View my portfolio of responsive web applications & get in touch for your next project!',
  },
  {
    property: 'og:url',
    content: 'https://tyecode.github.io/tyecode-portfolio/',
  },
  {
    property: 'og:site_name',
    content: 'tyecode Portfolio',
  },
  {
    property: 'og:image',
    content: 'https://tyecode.github.io/tyecode-portfolio/images/og.png',
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
    content: 'en_US',
  },
];

export const twitterMetaTags: MetaTag[] = [
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:site',
    content: '@tyecode',
  },
  {
    name: 'twitter:creator',
    content: '@tyecode',
  },
  {
    name: 'twitter:title',
    content:
      'tyecode - Expert Front-End Developer | React & TypeScript Portfolio',
  },
  {
    name: 'twitter:description',
    content:
      '🚀 Professional front-end developer with 4+ years experience. Specializing in React, TypeScript, Vue.js & modern CSS frameworks. View my portfolio of responsive web applications & get in touch for your next project!',
  },
  {
    name: 'twitter:image',
    content: 'https://tyecode.github.io/tyecode-portfolio/images/og.png',
  },
  {
    name: 'twitter:image:alt',
    content: 'tyecode - Front-End Web Developer Portfolio',
  },
];

export const themeMetaTags: MetaTag[] = [
  {
    name: 'theme-color',
    content: '#111827',
  },
  {
    name: 'msapplication-TileColor',
    content: '#111827',
  },
];

export const faviconLinks: LinkTag[] = [
  {
    rel: 'icon',
    href: `${getBasePath()}/favicon.png`,
    type: 'image/png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${getBasePath()}/favicon.png`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `${getBasePath()}/favicon.png`,
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: `${getBasePath()}/favicon.png`,
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
  {
    rel: 'canonical',
    href: 'https://tyecode.github.io/tyecode-portfolio/',
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
    href: '/images/og.png',
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

export const siteConfig = {
  title: 'tyecode - Expert Front-End Developer | React & TypeScript Specialist',
  baseUrl: 'https://tyecode.github.io/tyecode-portfolio',
  email: 'sengphachanh.dev@gmail.com',
  social: {
    github: 'https://github.com/tyecode',
    linkedin: 'https://linkedin.com/in/tyecode',
    twitter: 'https://twitter.com/tyecode',
  },
};
