# Linting Setup

This project uses ESLint for code linting and Prettier for code formatting to maintain consistent code quality and style.

## 🔧 Tools Used

- **ESLint 9.x** - Modern JavaScript/TypeScript linter with flat config
- **Prettier** - Code formatter
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React ESLint plugins** - React-specific linting rules
- **JSX A11y** - Accessibility linting for JSX

## 📁 Configuration Files

- `eslint.config.js` - ESLint configuration using flat config format
- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files ignored by Prettier
- `.vscode/settings.json` - VS Code integration settings
- `.vscode/extensions.json` - Recommended extensions

## 🚀 Available Scripts

```bash
# Lint all files
pnpm run lint

# Lint and auto-fix issues
pnpm run lint:fix

# Lint with zero warnings tolerance (for CI/CD)
pnpm run lint:check

# Format all files with Prettier
pnpm run format

# Check formatting without changing files
pnpm run format:check

# Run both linting and formatting checks
pnpm run check

# Fix both linting and formatting issues
pnpm run fix
```

## 🎯 ESLint Rules

### Enabled Rule Sets

- **JavaScript recommended** - Basic JavaScript linting
- **TypeScript recommended** - TypeScript-specific rules
- **React recommended** - React best practices
- **React Hooks** - Hooks rules and patterns
- **JSX A11y** - Accessibility guidelines
- **Prettier integration** - Disables conflicting formatting rules

### Custom Rules

- `no-console`: Warns about console statements (allows `console.warn` and `console.error`)
- `@typescript-eslint/no-unused-vars`: Errors on unused variables (allows variables starting with `_`)
- `@typescript-eslint/no-explicit-any`: Warns about explicit `any` types
- `react/prop-types`: Disabled (using TypeScript for prop validation)
- `react/react-in-jsx-scope`: Disabled (not needed with new JSX transform)

## 🚫 Ignored Files

The following files and directories are ignored by ESLint:

- `dist/` - Build output
- `node_modules/` - Dependencies
- `coverage/` - Test coverage reports
- `*.min.js` and `*.min.css` - Minified files
- `lighthouse-*.html` - Lighthouse reports
- `server.js` - Server file
- `vite.config.ts` - Vite configuration

## 🔧 VS Code Integration

The project includes VS Code settings for seamless integration:

### Features

- **Auto-fix on save** - Automatically fixes ESLint issues when saving
- **Format on save** - Automatically formats code with Prettier
- **Real-time linting** - Shows linting errors and warnings in the editor
- **Type checking** - TypeScript errors and warnings

### Recommended Extensions

- **ESLint** (`dbaeumer.vscode-eslint`) - ESLint integration
- **Prettier** (`esbenp.prettier-vscode`) - Prettier integration
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Tailwind CSS support
- **TypeScript Importer** (`ms-vscode.vscode-typescript-next`) - Enhanced TypeScript support

## 🐛 Common Issues and Solutions

### Issue: ESLint warns about .eslintignore

**Solution**: This is expected. ESLint 9 uses the `ignores` property in `eslint.config.js` instead of `.eslintignore`.

### Issue: Console statements showing warnings

**Solution**: Replace `console.log()` with `console.warn()` or `console.error()` for important messages, or prefix unused variables with `_` to suppress warnings.

### Issue: Unused variables

**Solution**: Remove unused variables or prefix them with `_` if they're intentionally unused (e.g., `_error` instead of `error`).

### Issue: React unescaped entities

**Solution**: Replace special characters with HTML entities:

- `'` → `&apos;` or `&#39;`
- `"` → `&quot;`
- `<` → `&lt;`
- `>` → `&gt;`

## 🚀 CI/CD Integration

For continuous integration, use:

```bash
# Check both linting and formatting in CI
pnpm run check
```

This command will fail if there are any linting errors or formatting issues, ensuring code quality in your deployment pipeline.

## 📊 Current Status

After running `pnpm run lint`, the following issues were found:

- **4 errors** - Must be fixed
- **12 warnings** - Should be addressed

### Critical Issues to Fix

1. **ContactSection.tsx**: Unnecessary try/catch wrapper
2. **ContactForm.tsx**: Unused error variable and unescaped entities
3. **sw.js**: Unused CACHE_NAME variable

### Warnings to Address

- Multiple console.log statements should be replaced with console.warn/error
- Some TypeScript any types should be more specific

## 🎯 Best Practices

1. **Fix errors before warnings** - Errors prevent builds, warnings are suggestions
2. **Use specific types** - Avoid `any` types when possible
3. **Handle accessibility** - Follow JSX A11y recommendations
4. **Remove dead code** - Delete unused variables and imports
5. **Consistent formatting** - Let Prettier handle formatting automatically
6. **Regular linting** - Run `pnpm run lint` before commits

## 📚 Further Reading

- [ESLint Documentation](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
- [JSX A11y Plugin](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Prettier Documentation](https://prettier.io/)
