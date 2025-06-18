# 🤝 Contributing to tyecode Portfolio

Contributions, issues, and feature requests are welcome! This project follows front-end development best practices and welcomes improvements to UI/UX, performance, accessibility, and code quality.

Feel free to check the [issues page](https://github.com/tyecode/tyecode-portfolio/issues) for open tasks or create new ones.

## 🚀 Quick Start for Contributors

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tyecode-portfolio.git
   cd tyecode-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

## 📋 Contribution Guidelines

### **Types of Contributions Welcome**
- 🎨 **UI/UX Improvements**: Enhanced animations, better responsive design, accessibility improvements
- ⚡ **Performance Optimizations**: Bundle size reduction, loading speed improvements, Core Web Vitals
- 🧩 **Component Enhancements**: Reusable components, design system improvements
- 🔧 **Code Quality**: TypeScript improvements, better error handling, code organization
- 📱 **Mobile Experience**: Touch interactions, mobile-specific optimizations
- ♿ **Accessibility**: ARIA improvements, keyboard navigation, screen reader support
- 📝 **Documentation**: Code comments, README updates, component documentation

### **Code Standards**
- **TypeScript**: All new code must be written in TypeScript with proper type definitions
- **Components**: Use functional components with React hooks
- **Styling**: Utilize Tailwind CSS utility classes, avoid custom CSS when possible
- **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes
- **Accessibility**: Include proper ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Optimize images, use lazy loading, minimize bundle size

### **Development Workflow**

1. **Before Starting**
   - Check existing issues to avoid duplicate work
   - Discuss major changes in an issue first
   - Ensure your Node.js version is 18+ and pnpm is installed

2. **While Developing**
   - Write clean, self-documenting code
   - Test on multiple screen sizes (mobile, tablet, desktop)
   - Verify accessibility with screen readers and keyboard navigation
   - Check performance with Lighthouse
   - Ensure TypeScript compilation passes without errors

3. **Before Submitting**
   - Run the build command to ensure production readiness
   - Test all interactive elements and animations
   - Verify responsive design on different devices
   - Check for console errors and warnings

## **Commit Message Convention**

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning and changelog generation.

**Format**: `<type>[optional scope]: <description>`

**Types:**
- `feat`: New feature (correlates with MINOR version)
- `fix`: Bug fix (correlates with PATCH version)
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, missing semicolons)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to build process or auxiliary tools

**Examples:**
```bash
feat(ui): add smooth scroll animation to navigation
fix(responsive): resolve mobile menu overflow issue
docs(readme): update installation instructions
style(components): format code with prettier
perf(images): implement lazy loading for project gallery
```

## **Pull Request Guidelines**

1. **PR Title**: Use conventional commit format
2. **Description**: Clearly describe what changes were made and why
3. **Screenshots**: Include before/after screenshots for UI changes
4. **Testing**: Describe how you tested the changes
5. **Breaking Changes**: Clearly mark any breaking changes

**PR Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] 🎨 UI/UX improvement
- [ ] ⚡ Performance optimization
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 📝 Documentation update
- [ ] ♿ Accessibility improvement

## Screenshots
<!-- Include screenshots for UI changes -->

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested with keyboard navigation
- [ ] Verified accessibility
- [ ] Checked performance impact

## Checklist
- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] No console errors
- [ ] TypeScript compilation passes
- [ ] Responsive design verified
```

## 🧪 Testing Your Changes

```bash
# Development server
pnpm dev

# Type checking
pnpm type-check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎯 Focus Areas for Contribution

1. **Performance Optimization**
   - Optimize images and assets
   - Improve loading times
   - Enhance Core Web Vitals scores

2. **Accessibility Improvements**
   - Screen reader compatibility
   - Keyboard navigation
   - Color contrast compliance
   - ARIA label enhancements

3. **UI/UX Enhancements**
   - Smooth animations and transitions
   - Micro-interactions
   - Visual feedback for user actions
   - Mobile touch interactions

4. **Code Quality**
   - Better TypeScript types
   - Component reusability
   - Error handling improvements
   - Code documentation

## 📞 Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Reach out via email: [sengphachanh.dev@gmail.com](mailto:sengphachanh.dev@gmail.com)
- Connect on [LinkedIn](https://linkedin.com/in/tyecode)

Thank you for helping make this portfolio better! 🙌 