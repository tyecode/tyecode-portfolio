<div align="center">

<img src="public/favicon.png" alt="Portfolio Template logo" width="80" height="80" />

### Portfolio Template

<p align="center">
  <em>Modern • Responsive • Performance-Focused</em>
</p>

---

<img src="public/images/og.png" alt="Portfolio Preview" width="700" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />

<br />

</div>

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

> **Modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS.**

## 🚀 Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Mobile-first approach optimized for all devices
- **⚡ Server-Side Rendering**: React 19 SSR with Express for optimal performance
- **🔍 SEO Optimized**: Comprehensive meta tags and structured data
- **♿ Accessible**: WCAG compliant with semantic HTML
- **🔧 Type Safe**: Built with TypeScript
- **📱 PWA Ready**: Web manifest with app shortcuts and icons

## 🛠️ Tech Stack

- **React 19.0** - Latest React with concurrent features
- **TypeScript 5.7** - Type-safe development
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Vite 6.1** - Fast development and optimized builds
- **Express 5.0** - Web framework for SSR
- **React Helmet Async** - SEO optimization

## 📋 Template Sections

- **Hero Section** - Professional introduction with CTA buttons
- **About Section** - Skills showcase and professional summary
- **Work Section** - Featured projects with technology tags
- **Experience Section** - Professional timeline
- **Contact Section** - Contact form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PNPM (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-template

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Visit http://localhost:8000
```

### Customization

1. **Update content** in `src/constants/` files:
   - `src/constants/sections.ts` - Portfolio sections content
   - `src/constants/social.ts` - Social media links
   - `src/constants/navigation.ts` - Navigation menu items
2. **Replace images** in `public/images/`
3. **Modify site configuration** in `src/config/meta-tags.ts`
4. **Update SEO data** in `src/config/meta-tags.ts`

## 🏗️ Build & Deploy

### Development

```bash
pnpm run dev
```

### Production Build

```bash
# SSR build
pnpm run build
pnpm run preview

# Static build
pnpm run build:static
pnpm run preview:static
```

### Performance Testing

```bash
pnpm run lighthouse
```

## 📊 Performance

Optimized for Core Web Vitals with:

- Component code splitting
- Image optimization
- SEO best practices
- Accessibility standards

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository** if you found it helpful!
