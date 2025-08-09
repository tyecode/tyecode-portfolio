# Analytics Setup Guide

This project includes a comprehensive Google Analytics 4 (GA4) implementation for tracking user behavior and performance metrics.

## ✅ What's Already Implemented

### 1. Analytics Hook (`useAnalytics`)

- **Auto-initialization** when `VITE_GA_TRACKING_ID` is provided
- **Manual page view tracking** for single-page applications
- **Custom event tracking** for user interactions
- **TypeScript support** with proper type definitions

### 2. Pre-built Event Tracking

- ✅ **Contact form submissions** (success & errors)
- ✅ **Project view tracking** (ready for implementation)
- ✅ **Page view tracking** (automatic on app load)

### 3. Environment Configuration

- ✅ **Development-safe** (no tracking without GA ID)
- ✅ **Production-ready** environment variable setup
- ✅ **Console warnings** for configuration issues

## 🚀 Quick Setup

### Step 1: Get Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a **GA4 property**
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Configure Environment

```bash
# Add to your .env file
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Step 3: Deploy & Test

- **Development**: Analytics disabled (safe for testing)
- **Production**: Analytics active when ID is provided

## 📊 Current Tracking Features

### Automatic Tracking

- ✅ **Page loads** - Initial app load
- ✅ **User sessions** - GA4 automatic tracking
- ✅ **Device/browser data** - GA4 automatic tracking

### Custom Event Tracking

- ✅ **Contact form submissions**
  - Success: `contact_form_submit`
  - Errors: `contact_form_error`

## 🛠️ How to Add More Tracking

### Basic Event Tracking

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

const MyComponent = () => {
  const { trackEvent } = useAnalytics();

  const handleButtonClick = () => {
    trackEvent('button_click', {
      event_category: 'engagement',
      event_label: 'hero_cta_button',
    });
  };
};
```

### Project View Tracking

```typescript
import { useAnalytics, trackProjectView } from '@/hooks/useAnalytics';

const ProjectCard = ({ projectName }) => {
  const { trackEvent } = useAnalytics();

  const handleProjectClick = () => {
    trackProjectView(projectName, trackEvent);
  };
};
```

### Page View Tracking

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

const MyComponent = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('/custom-page-path');
  }, [trackPageView]);
};
```

## 📈 Analytics Data You'll Get

### User Behavior

- **Most visited sections** of your portfolio
- **Time spent** on different pages
- **User flow patterns** through your site
- **Geographic distribution** of visitors

### Performance Insights

- **Page load times** and performance metrics
- **User engagement rates**
- **Conversion tracking** (contact form submissions)
- **Device and browser analytics**

### Business Intelligence

- **Portfolio effectiveness** metrics
- **Contact form conversion rates**
- **Popular project views**
- **Audience demographics**

## 🔒 Privacy & Compliance

### Built-in Privacy Features

- ✅ **No tracking in development** (safe for local testing)
- ✅ **User consent respected** (GA4 standard behavior)
- ✅ **No personal data collection** beyond standard GA4
- ✅ **GDPR considerations** built-in

### Privacy Policy Considerations

If you collect analytics data, consider adding a privacy policy that mentions:

- Use of Google Analytics for site improvement
- Data retention policies
- User rights regarding data

## 🐛 Troubleshooting

### Analytics Not Working?

1. **Check environment variable**: Ensure `VITE_GA_TRACKING_ID` is set
2. **Verify GA4 setup**: Confirm your Measurement ID is correct
3. **Check browser console**: Look for initialization warnings
4. **Test in production**: Analytics disabled in development

### Common Issues

- **No data in GA4**: Wait 24-48 hours for data to appear
- **Development tracking**: Analytics intentionally disabled without GA ID
- **Browser blocking**: Some ad blockers prevent analytics scripts

### Debug Mode

Enable detailed console logging to see what's being tracked:

```bash
# Add to your .env file
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GA_DEBUG=true
```

Debug mode will output detailed logs to browser console:

- ✅ **Analytics initialization** with measurement ID
- ✅ **Page view tracking** with title, path, and location
- ✅ **Custom event tracking** with event names and parameters
- ✅ **Debug mode status** confirmation

Example debug output (check browser console):

```
🔍 Google Analytics Debug Mode: Enabled
📊 GA Measurement ID: G-XXXXXXXXXX
📄 Page View Tracked: { title: "Portfolio", path: "/", location: "https://..." }
🎯 Event Tracked: { event: "contact_form_submit", parameters: {...} }
```

**Note**: Debug logs appear in browser console warnings (orange) for visibility.

## 📚 Additional Resources

### Google Analytics 4

- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Best Practices](https://support.google.com/analytics/answer/9267744)

### Privacy & Compliance

- [GDPR Compliance](https://support.google.com/analytics/answer/9019185)
- [Privacy Policy Templates](https://www.privacypolicies.com/blog/privacy-policy-template/)

---

**Your portfolio now has professional-grade analytics! 🎉**

Just add your GA4 tracking ID to start collecting valuable insights about your visitors and their engagement with your work.
