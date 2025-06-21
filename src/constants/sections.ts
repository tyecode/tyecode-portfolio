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
  // Your title is pulled from BRAND_INFO.title
  title: BRAND_INFO.title,
  // A short, engaging summary of your work.
  description: `I specialize in building responsive web applications with React and TypeScript. Passionate about creating clean, accessible user interfaces.`,
  // Your current or most recent company
  currentCompany: 'TechFlow Solutions',
  // A previous company you've worked for
  previousCompany: 'Innovate Labs',
  // The availability status text (pulled from AVAILABILITY_STATUS)
  availabilityStatus: AVAILABILITY_STATUS.text,
};

// =================================================================
// About Section Configuration (EDIT THIS SECTION)
// =================================================================

// A list of your key skills.
export const ABOUT_SKILLS: string[] = [
  'React & Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'Node.js',
  'Git & GitHub',
  'Responsive Design',
  'REST APIs',
  'Testing',
];

// Quick statistics about your professional journey.
export const ABOUT_STATS: Stat[] = [
  {
    value: '3+',
    label: 'Years Experience',
    ariaLabel: 'Over three years of experience',
  },
  {
    value: '20+',
    label: 'Projects',
    ariaLabel: 'Over twenty projects completed',
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    ariaLabel: 'Ninety-five percent client satisfaction',
  },
  {
    value: '100%',
    label: 'Mobile Responsive',
    ariaLabel: 'One hundred percent mobile responsive designs',
  },
];

// The paragraphs for your "About Me" section.
export const ABOUT_CONTENT = [
  'I am a front-end developer with 3+ years of experience building web applications. I enjoy working with React, TypeScript, and modern CSS to create user-friendly interfaces.',
  'I have experience working with both startups and established companies, helping them build responsive websites and web applications that meet their business needs.',
  "When I'm not coding, I enjoy learning about new technologies and contributing to open-source projects.",
];

// =================================================================
// Projects Configuration (EDIT THIS SECTION)
// =================================================================

// Your featured projects. Add, remove, or edit as needed.
export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Store',
    description:
      'A modern e-commerce platform built with React and TypeScript. Features include product catalog, shopping cart, and checkout process.',
    category: 'E-commerce',
    image: '/images/ecommerce-project.jpg',
    gradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: 'https://github.com/sophia-builds/ecommerce-store',
  },
  {
    title: 'Task Management App',
    description:
      'A simple task management application with drag-and-drop functionality, built using React and local storage for data persistence.',
    category: 'Web Application',
    image: '/images/task-app.jpg',
    gradient: 'bg-gradient-to-br from-green-100 to-green-200',
    tags: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
    link: 'https://github.com/sophia-builds/task-manager',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.',
    category: 'Portfolio',
    image: '/images/portfolio-site.jpg',
    gradient: 'bg-gradient-to-br from-purple-100 to-purple-200',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/sophia-builds/portfolio',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A clean weather dashboard that displays current weather and 5-day forecast. Built with React and integrates with weather API for real-time data.',
    category: 'Web Application',
    image: '/images/weather-app.jpg',
    gradient: 'bg-gradient-to-br from-orange-100 to-orange-200',
    tags: ['React', 'JavaScript', 'Weather API', 'CSS3'],
    link: 'https://github.com/sophia-builds/weather-dashboard',
  },
];

// =================================================================
// Experience Configuration (EDIT THIS SECTION)
// =================================================================

// Your professional experience. Add, remove, or edit as needed.
export const EXPERIENCES: Experience[] = [
  {
    company: 'TechFlow Solutions',
    role: 'Front-End Developer',
    period: '2022 - Present',
    description:
      'Building user interfaces for web applications using React and TypeScript. Working with design teams to implement responsive designs.',
    achievements: [
      'Developed and maintained multiple React applications',
      'Improved website performance and user experience',
      'Collaborated with designers and backend developers',
    ],
    current: true,
  },
  {
    company: 'Innovate Labs',
    role: 'Junior Front-End Developer',
    period: '2021 - 2022',
    description:
      'Started my career building websites and learning modern web development technologies. Gained experience with React and responsive design.',
    achievements: [
      'Built responsive websites for various clients',
      'Learned React and modern JavaScript',
      'Worked in an agile development environment',
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
