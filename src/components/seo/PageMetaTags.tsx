import React from 'react';

import MetaTags from './MetaTags';

interface PageMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

// Pre-configured meta tags for different sections
export const HomePageMeta: React.FC = () => (
  <MetaTags
    title='tyecode - Front-End Web Developer | Modern Portfolio'
    description='Front-end web developer specializing in React, TypeScript, Vue.js, and modern CSS frameworks. Creating beautiful, responsive, and user-friendly web applications.'
  />
);

export const AboutPageMeta: React.FC = () => (
  <MetaTags
    title='About - tyecode | Front-End Developer'
    description="Learn more about tyecode's experience in front-end development, including expertise in React, TypeScript, Vue.js, and modern web technologies."
    keywords='about tyecode, front-end developer experience, React developer, TypeScript expert'
  />
);

export const WorkPageMeta: React.FC = () => (
  <MetaTags
    title='Portfolio - tyecode | Featured Projects'
    description="Explore tyecode's portfolio featuring responsive web applications, e-commerce platforms, and modern UI components built with React and TypeScript."
    keywords='tyecode portfolio, React projects, TypeScript applications, responsive web design'
  />
);

export const ContactPageMeta: React.FC = () => (
  <MetaTags
    title='Contact - tyecode | Get In Touch'
    description='Get in touch with tyecode for front-end development projects, collaboration opportunities, or to discuss your next web application.'
    keywords='contact tyecode, hire front-end developer, React developer contact'
  />
);

// Generic page meta component
export const PageMetaTags: React.FC<PageMetaTagsProps> = props => (
  <MetaTags {...props} />
);

export default PageMetaTags;
