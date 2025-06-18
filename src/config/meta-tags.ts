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
    content: 'https://tyecode.github.io/tyecode-portfolio/portrait.jpg',
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
    content: 'https://tyecode.github.io/tyecode-portfolio/portrait.jpg',
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
    href: '/favicon.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon.png',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
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
  {
    rel: 'manifest',
    href: '/tyecode-portfolio/site.webmanifest',
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
