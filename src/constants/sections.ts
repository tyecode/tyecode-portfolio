import { BRAND_INFO, AVAILABILITY_STATUS } from './social';

export interface Stat {
  value: string;
  label: string;
  ariaLabel: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
  gradient: string;
  tags: string[];
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

// =================================================================
// Hero Section Configuration (EDIT THIS SECTION)
// =================================================================

export const HERO_CONTENT = {
  // Your name is pulled from BRAND_INFO.name
  name: BRAND_INFO.name,
  fullName: BRAND_INFO.fullName,
  // Your title is pulled from BRAND_INFO.title
  title: BRAND_INFO.title,
  // A short, engaging summary of your work.
  description: `I build digital experiences that users love and businesses need. Frontend-focused full-stack developer creating fast, intuitive applications with modern technologies.`,
  // Your current or most recent company
  currentCompany: 'AppZap',
  // A previous company you've worked for
  previousCompany: 'Lailaolab ICT Solutions',
  // The availability status text (pulled from AVAILABILITY_STATUS)
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
  'UI/UX Design',
  'Performance Optimization',
  'Responsive Design',
  'API Integration',
  'Full-Stack Development',
  'Problem Solving',
  'User Experience',
  'Code Quality',
];

// Quick statistics about your professional journey.
export const ABOUT_STATS: Stat[] = [
  {
    value: '5+',
    label: 'Years Experience',
    ariaLabel: 'Over three years of experience',
  },
  {
    value: '10+',
    label: 'Client Projects',
    ariaLabel: 'Over ten client projects delivered',
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
  'I am a frontend-focused full-stack developer with 5+ years of experience creating web applications that solve real business problems. Currently building scalable restaurant management systems at AppZap while exploring the exciting possibilities of AI integration.',
  'My passion lies in crafting user experiences that feel effortless and intuitive. From pixel-perfect interfaces to robust backend systems, I focus on creating solutions that delight users and drive measurable business results.',
  "When I'm not coding, you'll find me experimenting with new technologies, contributing to open-source projects, or building Discord bots. I believe the best developers are lifelong learners who aren't afraid to push boundaries.",
];

// =================================================================
// Projects Configuration (EDIT THIS SECTION)
// =================================================================

// Your featured projects. Add, remove, or edit as needed.
export const PROJECTS: Project[] = [
  {
    title: 'Restaurant Management System',
    description:
      'A comprehensive web application streamlining restaurant operations. Built for real clients at AppZap, featuring online ordering, table management, and real-time notifications that increased operational efficiency by 30%.',
    category: 'Web Application',
    image: '/images/restaurant-system.jpg',
    gradient: 'bg-gradient-to-br from-orange-100 to-orange-200',
    tags: ['React', 'Node.js', 'PWA', 'Real-time'],
    link: 'https://github.com/tyecode/restaurant-management',
  },
  {
    title: 'Client Portfolio Platform',
    description:
      'A modern portfolio builder helping 10+ clients showcase their work effectively. Features drag-and-drop editing, responsive design, and SEO optimization resulting in 25% better search visibility.',
    category: 'Client Project',
    image: '/images/portfolio-platform.jpg',
    gradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    tags: ['Next.js', 'TypeScript', 'CMS', 'SEO'],
    link: 'https://github.com/tyecode/portfolio-builder',
  },
  {
    title: 'AI Assistant Bot',
    description:
      'An intelligent Discord bot serving 500+ users with AI-powered responses and community moderation. Reduced manual moderation time by 40% while improving user engagement through smart interactions.',
    category: 'AI Project',
    image: '/images/ai-bot.jpg',
    gradient: 'bg-gradient-to-br from-purple-100 to-purple-200',
    tags: ['AI Integration', 'Automation', 'Community'],
    link: 'https://github.com/tyecode/ai-discord-bot',
  },
  {
    title: 'Performance Dashboard',
    description:
      'A real-time analytics dashboard built during my internship at Wecare. Improved admin workflow efficiency by 30% through intuitive data visualization and automated reporting features.',
    category: 'Dashboard',
    image: '/images/dashboard.jpg',
    gradient: 'bg-gradient-to-br from-green-100 to-green-200',
    tags: ['React', 'Analytics', 'Performance', 'UI/UX'],
    link: 'https://github.com/tyecode/performance-dashboard',
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
