# 🎨 tyecode - Front-End Web Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://tyecode.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/tyecode/tyecode-portfolio)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Modern, responsive portfolio website showcasing front-end web development expertise and UI/UX implementation skills.**

## 👨‍💻 About This Project

This is a **professional portfolio website** for **tyecode**, a front-end web developer specializing in modern JavaScript frameworks and user interface development. The portfolio demonstrates expertise in building responsive web applications, interactive user interfaces, and pixel-perfect design implementations.

### 🎯 Key Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations and micro-interactions
- **📱 Fully Responsive**: Mobile-first approach optimized for all devices and screen sizes
- **⚡ Lightning Fast**: Server-side rendering (SSR) with React 19 and performance optimization
- **🔍 SEO Optimized**: Comprehensive meta tags, structured data, and Core Web Vitals optimization
- **♿ Accessible**: WCAG compliant with semantic HTML, proper ARIA labels, and keyboard navigation
- **🎭 Interactive**: Smooth animations, hover effects, and engaging user interactions
- **🔧 Type Safe**: Built with TypeScript for robust development experience
- **🎨 Component-Driven**: Reusable UI components with consistent design system
- **⚡ Lazy Loading**: Component-level code splitting with React Suspense for optimal performance

## 🛠️ Tech Stack

### Frontend

- **React 19.0** - Latest React with concurrent features, Suspense, and modern hooks
- **TypeScript 5.7** - Type-safe JavaScript development with latest features
- **Tailwind CSS 4.1** - Utility-first CSS framework with Vite plugin integration
- **Vite 6.1** - Next-generation frontend tooling with hot module replacement

### Backend & SSR

- **Express 5.0** - Fast, unopinionated web framework for Node.js
- **Server-Side Rendering** - Custom SSR implementation with React 19
- **React Helmet Async** - Document head management for SEO optimization

### Styling & Animation

- **Tailwind CSS 4.1** - Utility-first CSS framework with Vite plugin
- **CSS Grid & Flexbox** - Modern layout techniques
- **Custom CSS Animations** - Smooth transitions and micro-interactions
- **Responsive Design** - Mobile-first approach with optimized breakpoints

### Performance & SEO

- **Structured Data** - JSON-LD markup for rich snippets
- **Meta Tags Management** - Dynamic SEO optimization
- **Performance Optimization** - Custom utilities and optimization techniques
- **Sitemap & Robots.txt** - Search engine optimization files

### Development Tools

- **TypeScript 5.7** - Static type checking with path mapping
- **Vite 6.1** - Fast development server and optimized build tool
- **PNPM** - Fast, disk space efficient package manager
- **Cross-env** - Cross-platform environment variables

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PNPM** (recommended) or **npm**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tyecode/tyecode-portfolio.git
   cd tyecode-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build both client and server
pnpm build

# Preview production build
pnpm preview
```

## 📂 Project Structure

```
tyecode-portfolio/
├── 📁 public/
│   ├── 📄 favicon.png           # App icon
│   ├── 📄 favicon.svg           # Vector app icon
│   ├── 📄 portrait.jpg          # Profile image
│   ├── 📄 resume.pdf            # Resume download
│   ├── 📄 sitemap.xml           # SEO sitemap
│   ├── 📄 robots.txt            # Search engine directives
│   └── 📁 images/               # Static images
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 layout/           # Header, Footer, MainLayout
│   │   ├── 📁 section/          # HeroSection, AboutSection, WorkSection, ExperienceSection, ContactSection
│   │   ├── 📁 seo/              # MetaTags, PageMetaTags
│   │   └── 📁 ui/               # Button, Logo, LoadingScreen, ContactForm
│   ├── 📁 constants/            # Navigation, sections, social links configuration
│   ├── 📁 hooks/                # usePreloader and other custom React hooks
│   ├── 📁 utils/                # Utility functions, performance utils, structured data
│   ├── 📁 config/               # Meta tags configuration
│   ├── 📁 styles/               # CSS modules (critical, base, animations, accessibility, utilities)
│   ├── 📁 assets/               # React logo and structured data
│   ├── 📄 App.tsx               # Main application component with Suspense
│   ├── 📄 entry-client.tsx      # Client-side entry point with hydration
│   ├── 📄 entry-server.tsx      # Server-side entry point for SSR
│   ├── 📄 index.css             # Global styles and Tailwind imports
│   └── 📄 vite-env.d.ts         # Vite environment types
├── 📄 index.html                # HTML template with performance optimizations
├── 📄 package.json              # Dependencies and scripts
├── 📄 server.js                 # Express server for SSR with compression
├── 📄 tsconfig.json             # TypeScript configuration with path mapping
├── 📄 tsconfig.node.json        # Node.js TypeScript configuration
├── 📄 vite.config.ts            # Vite configuration with SSR and optimization
├── 📄 pnpm-lock.yaml            # PNPM lockfile
├── 📄 CONTRIBUTING.md           # Contribution guidelines
└── 📄 LICENSE                   # MIT license
```

## 🎨 Features Showcase

### 🏠 Hero Section

- **Professional introduction** with clear name, title, and role description
- **Availability status indicator** showing current work status
- **Responsive design** with mobile-optimized layout
- **Call-to-action buttons** with hover animations
- **Social media integration** with external links
- **Profile image** with optimized loading and fallback handling

### 👨‍💻 About Section

- **Skills showcase** with modern front-end technologies
- **Interactive skill cards** with hover effects
- **Professional summary** and development philosophy
- **Statistics dashboard** with animated counters

### 💼 Portfolio Section

- **Featured projects** with detailed UI/UX implementations
- **Technology tags** and project categories
- **Interactive project cards** with smooth transitions
- **Responsive image galleries** and project previews

### 🎯 Experience Section

- **Professional timeline** with front-end focused roles
- **Key achievements** in UI development and performance
- **Company highlights** and project impacts
- **Skills progression** and technology adoption

### 📧 Contact Section

- **Contact form** with comprehensive validation and user feedback
- **Multiple contact methods** and availability status
- **Professional email** and social media links
- **Responsive form design** with accessibility features

## 🔍 SEO Optimization

This portfolio is optimized for search engines with:

- **📊 Structured Data** (JSON-LD) for rich snippets in search results
- **🎯 Dynamic Meta Tags** with React Helmet Async for optimal SEO
- **📱 Open Graph** tags for enhanced social media sharing
- **🐦 Twitter Cards** for enhanced tweet previews
- **🔗 Canonical URLs** to prevent duplicate content issues
- **⚡ Performance** optimization for Core Web Vitals
- **♿ Accessibility** features for better user experience and SEO
- **🗺️ XML Sitemap** for search engine crawling
- **🤖 Robots.txt** for search engine directives

### Target Keywords

- Front-end web developer
- React TypeScript developer
- UI/UX implementation
- Responsive web design
- JavaScript developer portfolio
- Modern web development
- Component library development

## ⚡ Performance Features

- **🎯 Server-Side Rendering (SSR)** with Express and React 19
- **🔄 Component-level Code Splitting** with React Suspense
- **📦 Optimized Bundling** with Vite 6.1 and advanced configuration
- **🎨 CSS Optimization** to prevent Flash of Unstyled Content (FOUC)
- **🖼️ Asset Optimization** with intelligent loading strategies
- **🗜️ Compression** middleware for production builds
- **📊 Performance Monitoring** with custom utility functions

## 📊 Performance Metrics

- **⚡ Lighthouse Score**: 95+ on all metrics
- **🚀 First Contentful Paint**: < 1.5s
- **📱 Mobile Optimized**: 100% responsive design
- **♿ Accessibility**: WCAG 2.1 AA compliant
- **🎨 Cross-Browser**: Compatible with all modern browsers
- **🔍 SEO Score**: 100% optimized for search engines

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! This project follows front-end development best practices and welcomes improvements to UI/UX, performance, accessibility, and code quality.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information on:

- 🚀 Getting started with development
- 📋 Code standards and best practices
- 🔧 Commit message conventions
- 📝 Pull request guidelines
- 🧪 Testing procedures

Feel free to check the [issues page](https://github.com/tyecode/tyecode-portfolio/issues) for open tasks or create new ones.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository** if you found it helpful! It helps other developers discover this project.
