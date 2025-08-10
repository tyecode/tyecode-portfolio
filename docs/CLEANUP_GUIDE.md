# Project Cleanup Guide

Essential guide for maintaining your Tyecode Portfolio project.

## 🧹 Quick Start

```bash
# Regular maintenance
pnpm run clean

# Comprehensive cleanup
pnpm run cleanup

# Full reset (removes node_modules)
node scripts/cleanup.js --full
```

## 📋 When to Clean

- **Weekly**: `pnpm run clean` - Remove build cache and artifacts
- **Before deployment**: `pnpm run cleanup` - Ensure clean builds
- **Troubleshooting**: `node scripts/cleanup.js --full` - Complete reset

## 🔧 What Gets Cleaned

### Build & Cache

- `dist/`, `dist-ssr/`, `build/` - Build outputs
- `node_modules/.cache/`, `.cache/` - Cache directories
- `.eslintcache`, `.prettiercache`, `*.tsbuildinfo` - Tool caches

### Temporary Files

- `.DS_Store`, `Thumbs.db` - System files
- `*.log`, `*.tmp`, `*.temp` - Logs and temp files
- `coverage/`, `.nyc_output/` - Test coverage

## 🚀 Post-Cleanup

```bash
# After basic cleanup
pnpm run dev

# After full reset
pnpm install
pnpm run dev
```

## 🛠️ Manual Commands

```bash
# Build artifacts
rm -rf dist dist-ssr build

# Cache files
rm -rf node_modules/.cache .cache
rm -f .eslintcache .prettiercache *.tsbuildinfo

# Temporary files
find . -name ".DS_Store" -delete
find . -name "*.log" -delete

# pnpm store
pnpm store prune
```

## 🔍 Troubleshooting

**Build issues after cleanup:**

```bash
node scripts/cleanup.js --full
pnpm install
```

**Dependencies not working:**

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📚 Related Docs

- [Vercel Deployment](./VERCEL_DEPLOYMENT.md)
- [Contributing](./CONTRIBUTING.md)

---

**Tip**: Run `pnpm run clean` weekly for optimal performance! 🧹
