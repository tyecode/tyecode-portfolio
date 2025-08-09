<div align="center">

# Modern Portfolio Template - React & TypeScript

<p align="center">
  <em>An SEO-optimized, high-performance portfolio template built with React 19, TypeScript, and Vite.</em>
</p>

---

<img src="public/images/og.png" alt="Portfolio Template Preview" width="700" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />

<br />

</div>

<br />

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

> This repository contains a professional portfolio template for front-end developers. Built with a focus on clean design, performance, and best practices for SEO and accessibility. Contributions are welcome!

## 🚀 Key Features

- **Modern Tech Stack**: Built with **React 19**, **TypeScript**, and **Vite** for a cutting-edge development experience.
- **Advanced SEO**: Full search engine optimization including:
  - **Dynamic Structured Data (JSON-LD)** for rich search results.
  - **Strategic Keyword Integration** in content and metadata.
  - **Complete Meta Tags** for Open Graph and Twitter Cards.
  - **Semantic HTML5** used throughout all components.
  - **Image SEO** with descriptive alt text.
- **High Performance**: Engineered for speed with a focus on Core Web Vitals.
  - **Server-Side Rendering (SSR)** with Express for fast initial loads.
  - **Code-Splitting** with `React.lazy` and `Suspense`.
  - **Critical Asset Preloading** for optimal rendering.
- **Accessibility (A11y)**: Built to be WCAG 2.1 AA compliant, ensuring an inclusive experience for all users.
- **Fully Responsive**: A mobile-first design that adapts beautifully to any screen size.
- **PWA Ready**: Includes a web manifest for a native-like app experience.
- **No-JS Fallback**: Provides a complete, accessible experience even if JavaScript is disabled.

## 🛠️ Technology Stack

- **Framework**: React 19.0
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 4.1
- **Build Tool**: Vite 6.1
- **Server**: Express 5.0 for SSR
- **SEO**: React Helmet Async for head management

## 📋 Portfolio Sections

- **Hero Section**: A professional introduction and call-to-action.
- **About Section**: Skills, experience, and professional stats showcase.
- **Work Section**: Featured projects with links and descriptions.
- **Experience Section**: Professional career timeline.
- **Contact Section**: Functional contact form and contact information.

## 🚀 About This Project's Code

This project is structured for maintainability and performance.

- **`src/components`**: Contains reusable UI components and section-specific components.
- **`src/constants`**: Centralizes all content (text, links, project data) for easy updates.
- **`src/config`**: Manages site-wide configuration, including metadata and SEO settings.
- **`src/utils`**: Holds utility functions, including the dynamic structured data generator.
- **`server.ts`**: The Express server that handles server-side rendering.

### Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-template.git
    cd portfolio-template
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Start the development server:**
    ```bash
    pnpm run dev
    ```
4.  Open your browser to `http://localhost:8000`.

## 🎯 Customization

To customize this template for your own use:

1. **Update Personal Information**: Edit `src/constants/social.ts` to replace Tyecode's data with your own details.
2. **Replace Projects**: Update `src/constants/projects.ts` with your own work and projects.
3. **Customize Styling**: Modify Tailwind classes and components to match your personal brand.
4. **Update Images**: Replace images in the `public/` directory with your own photos and project screenshots.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! This project welcomes improvements to UI/UX, performance, accessibility, and code quality. Please feel free to fork the repository, make changes, and open a Pull Request.

For detailed information on our development process, coding standards, and pull request guidelines, please read our [Contributing Guide](docs/CONTRIBUTING.md).

### What We're Looking For

- 🎨 **UI/UX Improvements**: Enhanced animations, better responsive design.
- ⚡ **Performance Optimizations**: Bundle size reduction, loading speed improvements.
- ♿ **Accessibility**: ARIA improvements, keyboard navigation, screen reader support.
- 🧩 **Component Enhancements**: Reusable components, design system improvements.
- 📝 **Documentation**: Code comments, README updates.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **Thanks for visiting!**
