<div align="center">

# Tyecode Portfolio

<p align="center">
  <em>A modern, SEO-optimized single-page portfolio showcasing full-stack development expertise with React, Next.js, TypeScript, and modern web technologies.</em>
</p>

---

<img src="public/images/og.png" alt="Tyecode Portfolio Preview" width="700" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />

<br />

</div>

<br />

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

> **Tyecode's professional portfolio** - A single-page application showcasing full-stack development skills, crypto payment infrastructure, and modern web technologies. Built with performance, accessibility, and SEO in mind.

## 🚀 Key Features

- **Single-Page Portfolio**: Modern SPA architecture with smooth section navigation
- **Advanced SEO Optimization**:
  - **Auto-generated sitemap** with `vite-plugin-sitemap`
  - **Structured data (JSON-LD)** for rich search results
  - **Comprehensive meta tags** for Open Graph and Twitter Cards
  - **Centralized configuration** from `@social.ts` constants
  - **Geographic targeting** for Laos/Vientiane Capital
  - **Social media optimization** with dynamic PWA shortcuts
- **High Performance**:
  - **Server-Side Rendering (SSR)** with Express
  - **Code-splitting** and lazy loading
  - **Vite-optimized builds** for production
  - **Vercel deployment** ready with global CDN
- **Modern Tech Stack**: React 19, TypeScript 5.7, Tailwind CSS 4.1, Vite 6.1
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Functional email integration with Nodemailer

## 🎯 Portfolio Sections

- **Hero Section**: Professional introduction with current role and background
- **About Section**: Skills showcase and professional background
- **Work Section**: Featured projects including crypto payment infrastructure and web applications
- **Experience Section**: Professional timeline and achievements
- **Contact Section**: Contact form and professional information

## 🛠️ Technology Stack

### Frontend

- **Framework**: React 19.0 with TypeScript 5.7
- **Styling**: Tailwind CSS 4.1 with custom animations
- **Build Tool**: Vite 6.1 with SSR support
- **State Management**: React hooks and context

### Backend & Infrastructure

- **Server**: Express 5.0 for SSR and API endpoints
- **Database**: Supabase/PostgreSQL, MongoDB, Redis
- **API**: GraphQL (Apollo), RESTful API design
- **Testing**: Playwright (E2E), Jest (Unit)
- **CI/CD**: Vercel, Netlify

### Development & Deployment

- **Package Manager**: pnpm for fast, efficient dependency management
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier for consistent code style
- **Deployment**: Vercel with automatic builds and global CDN

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📋 Available Scripts

### Development

- `pnpm run dev` - Start development server (port 8000)
- `pnpm run build` - Build for production with SSR
- `pnpm run preview` - Preview production build

### Code Quality

- `pnpm run lint` - Run ESLint checks
- `pnpm run lint:fix` - Fix ESLint issues automatically
- `pnpm run format` - Format code with Prettier
- `pnpm run type-check` - Run TypeScript type checking
- `pnpm run check` - Run all code quality checks

### Maintenance

- `pnpm run clean` - Clean build artifacts and cache
- `pnpm run cleanup` - Comprehensive cleanup script

### Testing

- `pnpm run test:analytics` - Test analytics configuration

## 🧹 Project Maintenance

Essential cleanup scripts for optimal performance:

```bash
# Regular maintenance
pnpm run clean

# Comprehensive cleanup
pnpm run cleanup
```

**When to clean:**

- **Weekly**: `pnpm run clean` for maintenance
- **Before deployment**: `pnpm run cleanup` for clean builds
- **Troubleshooting**: `node scripts/cleanup.js --full` for complete reset

📖 **See [docs/CLEANUP_GUIDE.md](docs/CLEANUP_GUIDE.md) for detailed instructions.**

## 🚀 Deployment

This portfolio is optimized for **Vercel deployment** with full SSR support:

### Quick Deploy to Vercel

1. Push your changes to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click - Vercel auto-detects the configuration
4. Configure your custom domain in Vercel dashboard

### Environment Variables

Set these in your Vercel dashboard:

- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` - For contact form functionality
- `VITE_GA_TRACKING_ID` - For Google Analytics (optional)

📖 **See [docs/VERCEL_DEPLOYMENT.md](docs/VERCEL_DEPLOYMENT.md) for detailed deployment instructions.**

## 🎯 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `src/constants/social.ts` with your details
2. **Replace Projects**: Update `PROJECTS` in `src/constants/sections.ts`
3. **Update Experience**: Update `EXPERIENCES` in `src/constants/sections.ts`
4. **Customize Styling**: Modify Tailwind classes and components
5. **Update Images**: Replace images in `public/images/` directory
6. **SEO Configuration**: Update meta tags and structured data in `src/config/`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer, MainLayout)
│   ├── section/        # Portfolio sections (Hero, About, Work, etc.)
│   ├── seo/            # SEO components (MetaTags)
│   └── ui/             # Reusable UI components
├── config/              # Configuration files (meta-tags, constants)
├── constants/           # Centralized data (social, navigation, sections)
├── hooks/               # Custom React hooks
├── services/            # Backend services (email)
├── styles/              # Global CSS and Tailwind utilities
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 📚 Documentation

- 🚀 [Vercel Deployment Guide](docs/VERCEL_DEPLOYMENT.md) - Complete deployment instructions
- 🧹 [Cleanup Guide](docs/CLEANUP_GUIDE.md) - Project maintenance and cleanup
- 🤝 [Contributing Guide](docs/CONTRIBUTING.md) - Development guidelines

## 🤝 Contributing

Contributions are welcome! This project welcomes improvements to:

- 🎨 **UI/UX**: Enhanced animations, better responsive design
- ⚡ **Performance**: Bundle optimization, loading speed improvements
- ♿ **Accessibility**: ARIA improvements, keyboard navigation
- 🧩 **Components**: Reusable components, design system improvements
- 📝 **Documentation**: Code comments, README updates

For detailed information, please read our [Contributing Guide](docs/CONTRIBUTING.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Thanks for visiting my portfolio!**

_Built with ❤️ using React, TypeScript, and modern web technologies._
