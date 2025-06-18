// Hero Section Data
export const HERO_CONTENT = {
  availabilityStatus: "Available for new opportunities",
  name: "tyecode",
  title: "Front-End Web Developer",
  description:
    "I create beautiful, responsive, and user-friendly web applications using modern front-end technologies. Currently crafting exceptional user experiences at Creative Digital Agency, previously at UI Innovations.",
  currentCompany: "Creative Digital Agency",
  previousCompany: "UI Innovations",
};

export interface Stat {
  value: string;
  label: string;
  ariaLabel: string;
}

export const ABOUT_SKILLS: string[] = [
  "React/Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5/CSS3",
  "Tailwind CSS",
  "Sass/SCSS",
  "Vue.js",
  "Responsive Design",
  "Webpack/Vite",
  "Git/GitHub",
];

export const ABOUT_STATS: Stat[] = [
  {
    value: "30+",
    label: "UI Components Built",
    ariaLabel: "30 plus",
  },
  {
    value: "4+",
    label: "Years Experience",
    ariaLabel: "4 plus",
  },
  {
    value: "20+",
    label: "Websites Launched",
    ariaLabel: "20 plus",
  },
  {
    value: "98%",
    label: "Mobile Responsive",
    ariaLabel: "98 percent",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm a front-end web developer with over 4 years of experience creating responsive, user-friendly web applications. I specialize in modern JavaScript frameworks and creating pixel-perfect user interfaces.",
    "My passion lies in transforming designs into interactive, accessible web experiences that delight users. I excel at bridging the gap between design and development, ensuring seamless collaboration with designers and backend teams.",
    "When I'm not coding, you can find me exploring the latest CSS features, contributing to open-source UI libraries, or sharing front-end best practices with the developer community through blog posts and tutorials.",
  ],
};

// Work Section Data
export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    title: "E-commerce Frontend",
    description:
      "Responsive e-commerce interface built with React and TypeScript, featuring advanced product filtering, shopping cart animations, and mobile-optimized checkout flow.",
    category: "E-commerce UI",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Dashboard Interface",
    description:
      "Modern admin dashboard with interactive charts, real-time data visualization, and responsive design. Features dark/light mode toggle and accessibility compliance.",
    category: "Dashboard UI",
    image: "bg-gradient-to-br from-green-100 to-green-200",
    tags: ["Vue.js", "Chart.js", "CSS Grid", "ARIA"],
    link: "#",
  },
  {
    title: "Landing Page Collection",
    description:
      "Collection of high-converting landing pages with smooth animations, optimized performance, and pixel-perfect responsive design across all devices.",
    category: "Landing Pages",
    image: "bg-gradient-to-br from-purple-100 to-purple-200",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    link: "#",
  },
  {
    title: "Component Library",
    description:
      "Comprehensive UI component library with documentation, featuring reusable React components, design tokens, and automated testing for consistent design systems.",
    category: "Design System",
    image: "bg-gradient-to-br from-red-100 to-red-200",
    tags: ["React", "Storybook", "Jest", "Design Tokens"],
    link: "#",
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
    company: "Creative Digital Agency",
    role: "Senior Front-End Developer",
    period: "2022 - Present",
    description:
      "Leading front-end development of responsive web applications, creating reusable UI components, and mentoring junior developers on modern front-end practices.",
    achievements: [
      "Built component library that improved development speed by 50%",
      "Led team of 3 front-end developers in delivering 5 major client projects",
      "Optimized web performance achieving 95+ Lighthouse scores across all projects",
    ],
    current: true,
  },
  {
    company: "UI Innovations",
    role: "Front-End Developer",
    period: "2021 - 2022",
    description:
      "Developed responsive user interfaces for various client projects, collaborated closely with UX designers, and implemented modern CSS frameworks.",
    achievements: [
      "Built e-commerce frontend serving 15k+ daily users with 99.9% uptime",
      "Reduced page load times by 60% through code optimization and lazy loading",
      "Implemented pixel-perfect designs with 100% cross-browser compatibility",
    ],
    current: false,
  },
  {
    company: "WebCraft Studio",
    role: "Junior Front-End Developer",
    period: "2020 - 2021",
    description:
      "First development role focusing on HTML/CSS/JavaScript development, gained experience in responsive design and modern front-end frameworks.",
    achievements: [
      "Developed MVP interface that helped secure $500k in seed funding",
      "Built responsive web app with mobile-first approach and accessibility features",
      "Established front-end coding standards and component documentation practices",
    ],
    current: false,
  },
];
