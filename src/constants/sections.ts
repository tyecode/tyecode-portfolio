import { BRAND_INFO } from './social';

// =================================================================
// Hero Section Data (EDIT THIS SECTION)
// =================================================================
// Content for the hero section.

export const HERO_CONTENT = {
  // Your name is pulled from BRAND_INFO.name
  name: BRAND_INFO.name,
  // Your title is pulled from BRAND_INFO.title
  title: BRAND_INFO.title,
  // A short, engaging summary of your work.
  description: `As a dedicated Front-End Developer, I specialize in building high-performance, accessible, and user-friendly web applications with a focus on the React ecosystem.`,
  // Your current or most recent company
  currentCompany: 'Freelance',
  // A previous company you've worked for
  previousCompany: 'Past Company',
  // The availability status text
  availabilityStatus: 'Available for new opportunities',
};

// =================================================================
// About Section Data (EDIT THIS SECTION)
// =================================================================

// A list of your key skills.
export const ABOUT_SKILLS: string[] = [
  'React & Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'State Management (Redux/Zustand)',
  'Tailwind CSS & Styled-Components',
  'Node.js & Express',
  'Jest & React Testing Library',
  'CI/CD & Vercel',
  'Webpack & Vite',
  'Web Performance Optimization',
  'Accessibility (WCAG)',
  'Git & GitHub',
];

export interface Stat {
  value: string;
  label: string;
  ariaLabel: string;
}

// Quick statistics about your professional journey.
export const ABOUT_STATS: Stat[] = [
  {
    value: '4+',
    label: 'Years of Experience',
    ariaLabel: 'Over four years of professional experience',
  },
  {
    value: '30+',
    label: 'Projects Completed',
    ariaLabel: 'Over thirty projects completed',
  },
  {
    value: '99%',
    label: 'Client Satisfaction',
    ariaLabel: 'Ninety-nine percent client satisfaction',
  },
  {
    value: '100%',
    label: 'WCAG 2.1 AA Compliance',
    ariaLabel: 'One hundred percent WCAG 2.1 AA Compliance',
  },
];

// The paragraphs for your "About Me" section.
export const ABOUT_CONTENT = [
  'I am a results-oriented Front-End Developer with a passion for creating pixel-perfect, high-performance web experiences. My expertise lies in the React ecosystem, where I leverage TypeScript and modern tooling to build scalable and maintainable applications.',
  'I have a proven track record of collaborating effectively with designers, product managers, and backend engineers to transform ideas into reality. I am committed to writing clean, well-documented code and adhering to best practices in accessibility and performance.',
  'Beyond coding, I am an active member of the developer community. I enjoy contributing to open-source projects, sharing my knowledge, and continuously learning to stay at the forefront of web technology.',
];

// =================================================================
// Work Section Data (EDIT THIS SECTION)
// =================================================================

export interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
  gradient: string;
  tags: string[];
  link: string;
}

// Your featured projects. Add, remove, or edit as needed.
export const PROJECTS: Project[] = [
  {
    title: 'Tyecode Folio',
    description:
      'This very portfolio project. A high-performance, SEO-optimized, and accessible portfolio template built with React, Vite, and server-side rendering.',
    category: 'Portfolio Template',
    image: '/images/tyecode-folio.jpg',
    gradient: 'bg-gradient-to-br from-purple-100 to-purple-200',
    tags: ['React', 'TypeScript', 'Vite', 'SSR', 'SEO'],
    link: 'https://github.com/tyecode/tyecode-folio',
  },
  {
    title: 'Inertia Design System',
    description:
      'A professional design system and component library for React applications. It ensures UI consistency and accelerates development across multiple projects.',
    category: 'Design System',
    image: '/images/design-system.jpg',
    gradient: 'bg-gradient-to-br from-green-100 to-green-200',
    tags: ['React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
    link: 'https://github.com/tyecode/inertia-design-system',
  },
  {
    title: 'E-Shop Pro',
    description:
      'A server-rendered E-commerce application built with Next.js for optimal performance and SEO. Integrates with Stripe for payments.',
    category: 'E-commerce',
    image: '/images/ecommerce-platform.jpg',
    gradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    tags: ['Next.js', 'TypeScript', 'Stripe API', 'Vercel'],
    link: 'https://github.com/tyecode/e-shop-pro',
  },
];

// =================================================================
// Experience Section Data (EDIT THIS SECTION)
// =================================================================

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

// Your professional experience. Add, remove, or edit as needed.
export const EXPERIENCES: Experience[] = [
  {
    company: 'Innovate Solutions Inc.',
    role: 'Lead Front-End Developer',
    period: '2021 - Present',
    description:
      'Leading the development of cutting-edge web applications, focusing on creating scalable UI architecture and mentoring a team of talented developers.',
    achievements: [
      'Spearheaded the development of a new design system, reducing development time for new features by 30%.',
      'Improved application performance and Core Web Vitals across all major products.',
      'Championed accessibility initiatives, achieving WCAG 2.1 AA compliance.',
    ],
    current: true,
  },
  {
    company: 'Creative Tech Co.',
    role: 'Mid-Level Front-End Developer',
    period: '2019 - 2021',
    description:
      'Developed and maintained responsive and interactive user interfaces for a variety of client projects, utilizing React and Vue.js.',
    achievements: [
      'Delivered high-quality code for over 15 client projects, receiving positive feedback for attention to detail.',
      'Contributed to a component library that was adopted company-wide.',
    ],
    current: false,
  },
];

// =================================================================
// Contact Section Data (EDIT THIS SECTION)
// =================================================================

export const CONTACT_CONTENT = {
  heading: "Let's Build Something Great Together",
  subheading:
    "I'm currently available for freelance projects and full-time opportunities. If you have a project in mind, or just want to connect, feel free to reach out.",
  availability: {
    heading: 'Availability',
    text: 'I am actively seeking new roles and am available to start immediately. I typically respond to all inquiries within 24 hours.',
  },
};
