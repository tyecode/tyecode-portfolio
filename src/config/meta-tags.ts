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
      'Front-end web developer specializing in React, TypeScript, Vue.js, and modern CSS frameworks. Creating beautiful, responsive, and user-friendly web applications with pixel-perfect designs and exceptional user experiences.',
  },
  {
    name: 'keywords',
    content:
      'front-end developer, web developer, React developer, TypeScript, Vue.js, Tailwind CSS, responsive design, UI developer, JavaScript, HTML5, CSS3, tyecode',
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
    content: 'tyecode - Front-End Web Developer Portfolio',
  },
  {
    property: 'og:description',
    content:
      'Front-end web developer with 4+ years of experience creating responsive, user-friendly web applications. Specializing in React, TypeScript, Vue.js, and modern CSS frameworks.',
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
    content: 'https://tyecode.github.io/tyecode-portfolio/images/portrait.jpg',
  },
  {
    property: 'og:image:width',
    content: '400',
  },
  {
    property: 'og:image:height',
    content: '400',
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
    content: 'summary',
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
    content: 'tyecode - Front-End Web Developer Portfolio',
  },
  {
    name: 'twitter:description',
    content:
      'Front-end web developer with 4+ years of experience creating responsive, user-friendly web applications. Specializing in React, TypeScript, Vue.js, and modern CSS frameworks.',
  },
  {
    name: 'twitter:image',
    content: 'https://tyecode.github.io/tyecode-portfolio/images/portrait.jpg',
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
        src: `${basePath}/images/portrait.jpg`,
        sizes: '2728x2728',
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
        src: `${basePath}/images/portrait.jpg`,
        sizes: '2728x2728',
        type: 'image/jpeg',
        form_factor: 'wide',
      },
    ],
    prefer_related_applications: false,
    related_applications: [],
  };
};

export const siteConfig = {
  title: 'tyecode - Front-End Web Developer | Modern Portfolio',
  baseUrl: 'https://tyecode.github.io/tyecode-portfolio',
  email: 'sengphachanh.dev@gmail.com',
  social: {
    github: 'https://github.com/tyecode',
    linkedin: 'https://linkedin.com/in/tyecode',
    twitter: 'https://twitter.com/tyecode',
  },
};
