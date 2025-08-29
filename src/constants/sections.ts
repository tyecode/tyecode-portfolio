import { BRAND_INFO, AVAILABILITY_STATUS } from './social';
import type { Stat, Project, Experience } from '@/types/portfolio';

// =================================================================
// Hero Section Configuration (EDIT THIS SECTION)
// =================================================================

export const HERO_CONTENT = {
  name: BRAND_INFO.name,
  fullName: BRAND_INFO.fullName,
  title: BRAND_INFO.title,
  description: `I build digital experiences that users love and businesses need. Frontend-focused full-stack developer creating fast, intuitive applications and Discord bots with modern technologies.`,
  currentCompany: 'AppZap',
  previousCompany: 'Lailaolab ICT Solutions',
  availabilityStatus: AVAILABILITY_STATUS.text,
};

// =================================================================
// About Section Configuration (EDIT THIS SECTION)
// =================================================================

// A list of your key skills.
export const ABOUT_SKILLS: string[] = [
  'Frontend Development',
  'React & Next.js',
  'TypeScript',
  'Modern JavaScript',
  'Discord Bot Development',
  'UI/UX Design',
  'Performance Optimization',
  'Responsive Design',
  'API Integration',
  'Full-Stack Development',
  'Problem Solving',
  'User Experience',
];

// Quick statistics about your professional journey.
export const ABOUT_STATS: Stat[] = [
  {
    value: '5+',
    label: 'Years Experience',
    ariaLabel: 'Over three years of experience',
  },
  {
    value: '25+',
    label: 'Client Projects',
    ariaLabel: 'Over twenty-five client projects delivered',
  },
  {
    value: '30%',
    label: 'Performance Boost',
    ariaLabel: 'Thirty percent performance improvement achieved',
  },
  {
    value: '100%',
    label: 'Mobile Responsive',
    ariaLabel: 'One hundred percent mobile responsive designs',
  },
];

// The paragraphs for your "About Me" section.
export const ABOUT_CONTENT = [
  'I am a frontend-focused full-stack developer with 5+ years of experience creating web applications and Discord bots that solve real business problems. Currently building scalable restaurant management systems at AppZap while developing production-ready Discord bots for community management.',
  'My passion lies in crafting user experiences that feel effortless and intuitive. From pixel-perfect interfaces to robust backend systems and enterprise-grade Discord bots, I focus on creating solutions that delight users and drive measurable business results.',
  "When I'm not coding, you'll find me experimenting with new technologies, contributing to open-source projects, or building Discord bots with advanced features like role management and AI integration. I believe the best developers are lifelong learners who aren't afraid to push boundaries.",
];

// =================================================================
// Projects Configuration (EDIT THIS SECTION)
// =================================================================

// Your featured projects. Add, remove, or edit as needed.
export const PROJECTS: Project[] = [
  {
    title: 'Role Reactor Bot',
    description:
      'A production-ready Discord bot for self-assignable roles through reactions. Serving communities with enterprise-grade logging, health monitoring, MongoDB integration, and temporary role management. Features comprehensive permission controls and user-friendly slash commands.',
    category: 'Discord Bot',
    image: '/images/projects/role-reactor-bot.png',
    gradient: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
    tags: ['Discord.js', 'MongoDB', 'Node.js', 'TypeScript'],
    link: 'https://rolereactor.app',
  },
  {
    title: 'Portfolio Uno',
    description:
      'A modern, responsive portfolio website featuring a unique Matrix-style animated background, dark theme, and smooth section transitions. Built with Next.js 14, TypeScript, and NextUI with custom Canvas animations. Optimized for SEO and performance across all devices.',
    category: 'Portfolio Website',
    image: '/images/projects/portfolio-uno.png',
    gradient: 'bg-gradient-to-br from-emerald-100 to-emerald-200',
    tags: ['Next.js 14', 'TypeScript', 'NextUI', 'Canvas'],
    link: 'https://github.com/tyecode/portfolio-uno',
  },
  {
    title: 'Nonsavang Temple Management',
    description:
      'A comprehensive Income & Expense management system for Nonsavang Temple built with Next.js 14, TypeScript, and Supabase. Features multi-role authentication, transaction approval workflows, financial reporting, and real-time dashboard analytics with multi-currency support.',
    category: 'Web Application',
    image: '/images/projects/nonsavang-temple-management.png',
    gradient: 'bg-gradient-to-br from-amber-100 to-amber-200',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL'],
    link: 'https://github.com/tyecode/nonsavang-temple--web-client',
  },
  {
    title: 'Jotting Blog',
    description:
      'A modern, minimalist blog built with Astro featuring a beautiful dark theme and clean typography. Achieved 100/100 Lighthouse performance score with SEO optimization, RSS feeds, and responsive design. Showcases dual-font system and custom Tailwind configuration.',
    category: 'Blog Platform',
    image: '/images/projects/jotting-blog.png',
    gradient: 'bg-gradient-to-br from-slate-100 to-slate-200',
    tags: ['Astro', 'TypeScript', 'Tailwind', 'MDX'],
    link: 'https://jotting.tyecode.dev/',
  },
];

// =================================================================
// Experience Configuration (EDIT THIS SECTION)
// =================================================================

// Your professional experience. Add, remove, or edit as needed.
export const EXPERIENCES: Experience[] = [
  {
    company: 'AppZap',
    companyUrl: 'https://profile.appzap.la/',
    role: 'Full-Stack Developer',
    period: 'Aug 2024 - Present',
    description:
      'Developing comprehensive restaurant management solutions, building scalable web applications that streamline operations and enhance customer experiences using React, Node.js, and cutting-edge technologies.',
    achievements: [
      'Independently developed web-based ordering and booking system for restaurant clients, replacing manual workflows with a scalable digital solution',
      'Reduced mobile app load times by ~30% by implementing Progressive Web App (PWA) capabilities and offline caching',
      'Integrated WhatsApp Cloud API to enable real-time customer messaging and order notifications',
      'Diagnosed and fixed UI issues in the AppZap POS system, improving consistency and usability',
      'Exploring AI integration possibilities for enhanced user experiences and automated customer support features',
    ],
    current: true,
  },
  {
    company: 'Lailaolab ICT Solutions',
    companyUrl: 'https://lailaolab.com',
    role: 'Front-end Developer',
    period: 'Dec 2023 - Present',
    description:
      'Creating pixel-perfect, high-performance user interfaces for diverse client projects. Transforming Figma designs into responsive web applications while maintaining design integrity and optimizing user experience.',
    achievements: [
      'Delivered responsive, pixel-accurate interfaces for 10+ client projects based on Figma designs',
      'Improved page performance by up to 25% through layout optimization and efficient rendering techniques',
      'Mastered design-to-code workflows, ensuring seamless translation from design concepts to functional interfaces',
      'Ensured consistent cross-device and browser compatibility, reducing post-launch UI fixes and client revisions by 40%',
    ],
    current: true,
  },
  {
    company: 'Wecare',
    companyUrl: '',
    role: 'Software Engineering Intern',
    period: 'Apr 2023 - July 2023',
    description:
      'Gained comprehensive full-stack development experience building production-ready admin dashboards and implementing modern development practices. Focused on creating efficient, user-friendly interfaces with robust backend integration.',
    achievements: [
      'Built a responsive admin dashboard with intuitive UI architecture, reducing admin task completion time by ~20%',
      'Integrated GraphQL APIs using Apollo Client, significantly improving data handling and frontend responsiveness',
      'Implemented multilingual support features, expanding application accessibility to diverse user regions',
      'Established end-to-end testing workflows using Playwright, enhancing deployment reliability and reducing production bugs',
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
    "I'm available for freelance projects and full-time opportunities. Feel free to reach out if you'd like to discuss a project or just say hello.",
  availability: {
    heading: 'Availability',
    text: AVAILABILITY_STATUS.text,
  },
};
