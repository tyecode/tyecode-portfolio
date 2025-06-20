// Hero Section Data
export const HERO_CONTENT = {
  availabilityStatus: 'Available for new opportunities',
  name: 'Emma Johnson',
  title: 'Frontend Developer',
  description:
    'I create beautiful, responsive, and user-friendly web applications using modern frontend technologies. Currently building innovative digital experiences at TechFlow Solutions, previously at PixelCraft Studios.',
  currentCompany: 'TechFlow Solutions',
  previousCompany: 'PixelCraft Studios',
};

export interface Stat {
  value: string;
  label: string;
  ariaLabel: string;
}

export const ABOUT_SKILLS: string[] = [
  'React/Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5/CSS3',
  'Tailwind CSS',
  'Sass/SCSS',
  'Node.js',
  'Responsive Design',
  'Webpack/Vite',
  'Git/GitHub',
];

export const ABOUT_STATS: Stat[] = [
  {
    value: '65+',
    label: 'UI Components Built',
    ariaLabel: '65 plus',
  },
  {
    value: '4+',
    label: 'Years Experience',
    ariaLabel: '4 plus',
  },
  {
    value: '35+',
    label: 'Websites Launched',
    ariaLabel: '35 plus',
  },
  {
    value: '99%',
    label: 'Mobile Responsive',
    ariaLabel: '99 percent',
  },
];

export const ABOUT_CONTENT = [
  "I'm a passionate frontend developer with over 4 years of experience crafting responsive, accessible web applications. I specialize in React, TypeScript, and modern CSS frameworks, with a keen eye for pixel-perfect user interfaces.",
  'My expertise lies in transforming complex designs into interactive, performance-optimized web experiences. I thrive on collaborating with cross-functional teams to deliver products that not only look great but also provide exceptional user experiences.',
  "When I'm not coding, you'll find me exploring the latest frontend frameworks, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring aspiring developers.",
];

// Work Section Data
export interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
  gradient: string;
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'SaaS Dashboard Platform',
    description:
      'Modern SaaS dashboard with real-time analytics, interactive charts, and responsive design. Features advanced data visualization, user management, and dark/light mode support.',
    category: 'Web Application',
    // image: '/images/saas-dashboard.jpg', // Uncomment when you have actual images
    gradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    link: 'https://github.com/taylormorgan/saas-dashboard',
  },
  {
    title: 'E-commerce Marketplace',
    description:
      'Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and admin panel. Built with performance and accessibility in mind.',
    category: 'E-commerce',
    // image: '/images/ecommerce-platform.jpg', // Uncomment when you have actual images
    gradient: 'bg-gradient-to-br from-green-100 to-green-200',
    tags: ['Next.js', 'TypeScript', 'Stripe API', 'Tailwind CSS'],
    link: 'https://taylor-ecommerce-demo.vercel.app',
  },
  {
    title: 'Design System Library',
    description:
      'Comprehensive design system and component library with documentation. Features tokens, reusable components, and automated testing for consistent UI/UX.',
    category: 'Design System',
    // image: '/images/design-system.jpg', // Uncomment when you have actual images
    gradient: 'bg-gradient-to-br from-purple-100 to-purple-200',
    tags: ['React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
    link: 'https://taylor-design-system.netlify.app',
  },
  {
    title: 'Portfolio Website Collection',
    description:
      'Collection of responsive portfolio websites with smooth animations, optimized performance, and SEO-friendly architecture. Showcases various design styles and interactions.',
    category: 'Portfolio Sites',
    // image: '/images/portfolio-collection.jpg', // Uncomment when you have actual images
    gradient: 'bg-gradient-to-br from-red-100 to-red-200',
    tags: ['React', 'Framer Motion', 'Next.js', 'GSAP'],
    link: 'https://taylor-portfolios.vercel.app',
  },
];

// Experience Section Data
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechFlow Solutions',
    role: 'Senior Frontend Developer',
    period: '2023 - Present',
    description:
      'Leading frontend development for enterprise-level applications, architecting scalable component systems, and mentoring a team of 4 junior developers on modern React patterns.',
    achievements: [
      'Architected micro-frontend system that reduced deployment time by 70%',
      'Led migration from legacy codebase to modern React/TypeScript stack',
      'Mentored 4 junior developers, with 3 receiving promotions within 8 months',
    ],
    current: true,
  },
  {
    company: 'PixelCraft Studios',
    role: 'Frontend Developer',
    period: '2022 - 2023',
    description:
      'Developed responsive web applications for diverse clients, collaborated with design teams to implement pixel-perfect UIs, and optimized application performance.',
    achievements: [
      'Built React component library used across 12+ client projects',
      'Improved Core Web Vitals scores by 45% through performance optimization',
      'Delivered 8 major client projects on time and within budget',
    ],
    current: false,
  },
  {
    company: 'Digital Craft Co.',
    role: 'Junior Frontend Developer',
    period: '2021 - 2022',
    description:
      'First professional role focusing on modern JavaScript frameworks, responsive design implementation, and collaborative development practices in an agile environment.',
    achievements: [
      'Developed mobile-first responsive interfaces for 15+ client websites',
      'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
      'Created automated testing suite that reduced bug reports by 60%',
    ],
    current: false,
  },
];
