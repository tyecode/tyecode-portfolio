import { BRAND_INFO, AVAILABILITY_STATUS } from './social';
import type { Stat, Project, Experience } from '@/types/portfolio';

// =================================================================
// Hero Section Configuration (EDIT THIS SECTION)
// =================================================================

export const HERO_CONTENT = {
  name: BRAND_INFO.name,
  fullName: BRAND_INFO.fullName,
  title: BRAND_INFO.title,
  description: `Full-Stack Developer specializing in Next.js, Node.js, and TypeScript.`,
  currentCompany: null,
  previousCompany: null,
  availabilityStatus: AVAILABILITY_STATUS.text,
};

// =================================================================
// About Section Configuration (EDIT THIS SECTION)
// =================================================================

// A list of your key skills.
export const ABOUT_SKILLS: string[] = [
  'React & Next.js',
  'TypeScript',
  'Node.js (Fastify/Express)',
  'PostgreSQL & Supabase',
  'MongoDB & Redis',
  'GraphQL & REST APIs',
  'Tailwind CSS',
  'Playwright & Jest',
  'Docker & CI/CD',
  'Figma-to-Code',
  'System Architecture',
  'Performance Tuning',
];

// Quick statistics about your professional journey.
export const ABOUT_STATS: Stat[] = [
  {
    value: '5+',
    label: 'Years in Tech',
    ariaLabel: 'Over five years in technology',
  },
  {
    value: '15+',
    label: 'Projects Shipped',
    ariaLabel: 'Over fifteen projects shipped',
  },
  {
    value: '30%',
    label: 'Faster Load Times',
    ariaLabel: 'Thirty percent faster load times achieved',
  },
];

// The paragraphs for your "About Me" section.
export const ABOUT_CONTENT = [
  'Full-Stack Developer building scalable web systems across restaurant tech, SaaS, and Fintech. I specialize in Next.js, Node.js, and TypeScript, consistently delivering high-performance applications.',
  'I focus on clean architecture and bridging design with backend in agile teams. Outside of work, I build open-source projects and explore blockchain technologies.',
];

// =================================================================
// Projects Configuration (EDIT THIS SECTION)
// =================================================================

// Your featured projects. Add, remove, or edit as needed.
export const PROJECTS: Project[] = [
  {
    title: 'KnotEngine',
    description:
      'Non-custodial crypto payment gateway supporting Bitcoin and EVM stablecoins with HD wallet derivation and real-time webhook notifications.',
    category: 'Crypto Payment Infrastructure',
    gradient: 'bg-gradient-to-br from-orange-100 to-orange-200',
    tags: ['Fastify', 'Next.js', 'TypeScript', 'Blockchain', 'Socket.io'],
    link: 'https://github.com/qodinger/knotengine',
  },
  {
    title: 'Role Reactor Bot',
    description:
      'Discord automation bot with AI avatar generation, crypto-powered economy, and enterprise-grade moderation tools.',
    category: 'Discord Automation',
    gradient: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
    tags: ['Discord.js', 'MongoDB', 'Node.js', 'TypeScript', 'AI'],
    link: 'https://github.com/qodinger/role-reactor-bot',
  },
  {
    title: 'Nonsavang Temple Management',
    description:
      'Financial management system with multi-role auth, approval workflows, and real-time dashboard analytics.',
    category: 'Web Application',
    gradient: 'bg-gradient-to-br from-green-100 to-green-200',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL'],
    link: 'https://github.com/tyecode/nonsavang-temple--web-client',
  },
];

// =================================================================
// Experience Configuration (EDIT THIS SECTION)
// =================================================================

// Your professional experience. Add, remove, or edit as needed.
export const EXPERIENCES: Experience[] = [
  {
    company: 'AppZap',
    role: 'Full-Stack Developer',
    period: 'Aug 2024 - Apr 2026',
    description:
      'Built scalable restaurant management solutions using React, Node.js, PWA, and WhatsApp Cloud API.',
    achievements: [
      'Independently developed web-based ordering and booking system, replacing manual workflows',
      'Reduced mobile app load times by ~30% with PWA capabilities and offline caching',
    ],
    current: false,
  },
  {
    company: 'Lailaolab ICT Solutions',
    role: 'Front-end Developer',
    period: 'Dec 2023 - Aug 2024',
    description:
      'Delivered pixel-perfect interfaces for 10+ client projects using React, Next.js, and Tailwind CSS.',
    achievements: [
      'Improved page performance by up to 25% through layout optimization',
      'Reduced post-launch UI fixes and client revisions by ensuring cross-device compatibility',
    ],
    current: false,
  },
  {
    company: 'Wecare',
    role: 'Software Engineering Intern',
    period: 'Apr 2023 - Jul 2023',
    description:
      'Built production-ready admin dashboards using Nuxt.js, GraphQL, and Playwright.',
    achievements: [
      'Developed responsive admin dashboard, reducing task completion time by ~20%',
      'Implemented end-to-end testing with Playwright, reducing deployment regressions',
    ],
    current: false,
  },
];

// =================================================================
// Contact Section Configuration (EDIT THIS SECTION)
// =================================================================

export const CONTACT_CONTENT = {
  heading: "Let's Work Together",
  subheading:
    'Available for freelance projects and full-time opportunities. Reach out to discuss your next project.',
  availability: {
    heading: 'Availability',
    text: AVAILABILITY_STATUS.text,
  },
};
