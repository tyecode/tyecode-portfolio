# Vercel Deployment Guide

This portfolio is optimized for deployment on Vercel with full SSR (Server-Side Rendering) support.

## 🚀 Quick Deploy to Vercel

### Method 1: One-Click Deploy (Recommended)

1. **Fork this repository** to your GitHub account
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your forked repository
5. Vercel will automatically detect the configuration
6. Click **"Deploy"**

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your local machine
vercel

# For production deployment
vercel --prod
```

### Method 3: GitHub Integration

1. Connect your GitHub account to Vercel
2. Select your portfolio repository
3. Enable automatic deployments on push
4. Set up environment variables (see below)

## ⚙️ Environment Variables Setup

### Required Variables

Set these in your Vercel dashboard under **Settings → Environment Variables**:

```bash
# SMTP Email Configuration (Required for Contact Form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
CONTACT_EMAIL=your-contact-email@gmail.com

# Optional: Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GA_DEBUG=false

# Optional: Rate Limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### How to Add Environment Variables in Vercel:

1. Go to your project dashboard on Vercel
2. Click **Settings** → **Environment Variables**
3. Add each variable with appropriate values
4. Set environment to **Production**, **Preview**, or **Development**
5. Click **Save**

## 📦 Build Configuration

Your project includes a `vercel.json` configuration file:

```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist/client",
  "installCommand": "pnpm install",
  "framework": "vite",
  "functions": {
    "server.js": {
      "runtime": "nodejs20.x"
    }
  },
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/server.js"
    },
    {
      "source": "/(.*)",
      "destination": "/server.js"
    }
  ]
}
```

## 🎯 Features Supported on Vercel

### ✅ Fully Working Features

- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Contact Form API** - Server-side email sending
- **Rate Limiting** - Spam protection for contact form
- **Google Analytics** - User behavior tracking
- **Dynamic Favicon** - Brand-based favicon generation
- **SEO Optimization** - Server-rendered meta tags
- **Automatic Sitemap** - Generated sitemap.xml
- **Robots.txt** - Search engine guidelines

### ⚡ Performance Benefits

- **Edge Network** - Global CDN distribution
- **Automatic HTTPS** - SSL certificates included
- **Image Optimization** - Automatic image compression
- **Serverless Functions** - Scalable API endpoints
- **Preview Deployments** - Test changes before going live

## 🔧 Custom Domain Setup

### Add Your Domain to Vercel:

1. Go to **Settings** → **Domains**
2. Add your custom domain (`tyecode.dev`)
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificate

### Domain Configuration:

Your portfolio is configured to use `https://tyecode.dev` as the primary domain. This is set in:

- `package.json` → `homepage` field
- All URL generation functions use this domain
- Sitemap and robots.txt reference this domain

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)

- **Performance metrics** automatically tracked
- **Web Vitals** monitoring included
- **Visitor analytics** available in dashboard

### Google Analytics (Your Implementation)

- **Custom events** for contact form submissions
- **Page view tracking** for user behavior
- **Debug mode** available for development

## 🐛 Troubleshooting

### Common Issues & Solutions:

#### **Contact Form Not Working**

- ✅ **Check environment variables** are set correctly
- ✅ **Verify SMTP credentials** (use App Passwords for Gmail)
- ✅ **Check function logs** in Vercel dashboard

#### **Environment Variables Not Loading**

- ✅ **Redeploy after adding** environment variables
- ✅ **Check variable names** match exactly (case-sensitive)
- ✅ **Verify environment scope** (Production/Preview/Development)

#### **Build Failures**

- ✅ **Check build logs** in Vercel dashboard
- ✅ **Verify Node.js version** compatibility
- ✅ **Test build locally**: `pnpm run build`

#### **Analytics Not Working**

- ✅ **Set VITE_GA_TRACKING_ID** environment variable
- ✅ **Enable debug mode**: `VITE_GA_DEBUG=true`
- ✅ **Check browser console** for tracking events

### Debug Commands:

```bash
# Test build locally
pnpm run build

# Test production server locally
pnpm run preview

# Check for TypeScript errors
pnpm run type-check

# Verify linting
pnpm run lint:check
```

## 🔄 Deployment Workflow

### Automatic Deployment (Recommended):

1. **Push to main branch** → Automatic production deployment
2. **Push to feature branch** → Preview deployment
3. **Pull request** → Preview deployment with unique URL

### Manual Deployment:

```bash
# Deploy current branch
vercel

# Deploy to production
vercel --prod

# Deploy with specific environment
vercel --prod --env SMTP_HOST=smtp.gmail.com
```

## 📈 Performance Optimization

### Already Optimized:

- ✅ **Code splitting** - Lazy loading for better performance
- ✅ **SSR** - Server-side rendering for fast initial loads
- ✅ **Image optimization** - Automatic compression via Vercel
- ✅ **Bundle analysis** - Use `npx vite-bundle-analyzer` or check Vercel build logs
- ✅ **Critical CSS** - Inline critical styles

### Monitor Performance:

- **Vercel Analytics** - Built-in performance monitoring
- **Google PageSpeed Insights** - Regular performance audits
- **Web Vitals** - Core performance metrics tracking

## 🚀 Going Live Checklist

### Before Deployment:

- [ ] Set all required environment variables
- [ ] Update `homepage` URL in package.json
- [ ] Test contact form with real SMTP credentials
- [ ] Verify Google Analytics tracking ID
- [ ] Test all pages and functionality locally

### After Deployment:

- [ ] Test contact form on live site
- [ ] Verify Google Analytics is tracking
- [ ] Check all links and navigation work
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)
- [ ] Submit sitemap to Google Search Console

---

**Your portfolio is now ready for Vercel deployment at `tyecode.dev`! 🎉**

Vercel provides excellent performance, automatic SSL, and global CDN distribution for your SSR portfolio. Your custom domain `tyecode.dev` is pre-configured and ready to use.
