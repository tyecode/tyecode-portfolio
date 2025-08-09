# Analytics Testing Guide

This guide shows you exactly how to test and verify your Google Analytics implementation is working correctly.

## 🧪 Method 1: Debug Mode Testing (Recommended)

### Step 1: Enable Debug Mode

```bash
# Add to your .env file
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GA_DEBUG=true
```

### Step 2: Start Development Server

```bash
pnpm run dev
```

### Step 3: Open Browser Console

1. Open your portfolio in browser (`http://localhost:8000`)
2. Press `F12` or right-click → "Inspect" → "Console" tab
3. Look for orange warning messages

### Step 4: Expected Console Output

You should see these messages:

```
🔍 Google Analytics Debug Mode: Enabled
📊 GA Measurement ID: G-XXXXXXXXXX
📄 Page View Tracked: { title: "Portfolio Title", path: "/", location: "http://localhost:8000/" }
```

### Step 5: Test Contact Form

1. Fill out the contact form
2. Submit it
3. Check console for:

```
🎯 Event Tracked: { event: "contact_form_submit", parameters: { event_category: "engagement", event_label: "portfolio_contact_form" } }
```

## 🔍 Method 2: Google Analytics Real-Time View

### Step 1: Open GA4 Real-Time Report

1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property
3. Navigate: **Reports** → **Real-time**

### Step 2: Test Your Site

1. Open your portfolio in a **new incognito/private window**
2. Navigate around your site
3. Submit the contact form

### Step 3: Check Real-Time Data

You should see:

- ✅ **Active users** count increase
- ✅ **Page views** in real-time
- ✅ **Events** (contact form submissions)
- ✅ **User locations** and devices

**Note**: Real-time data appears within 1-2 minutes.

## 🌐 Method 3: Google Analytics DebugView

### Step 1: Enable GA4 DebugView

```bash
# In your .env file
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GA_DEBUG=true  # This enables GA4's debug_mode
```

### Step 2: Access DebugView

1. Go to [Google Analytics](https://analytics.google.com)
2. Navigate: **Configure** → **DebugView**
3. Open your site in a new browser window

### Step 3: Monitor Events

DebugView shows:

- ✅ **All events** in real-time
- ✅ **Event parameters** and values
- ✅ **User properties**
- ✅ **Session data**

This gives you the most detailed view of what's being tracked.

## 🛠️ Method 4: Browser Network Tab

### Step 1: Open Network Tab

1. Open browser developer tools (`F12`)
2. Go to **Network** tab
3. Clear existing requests

### Step 2: Test Analytics

1. Refresh your portfolio page
2. Submit contact form
3. Look for network requests

### Step 3: Expected Network Requests

You should see requests to:

- `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`
- `https://www.google-analytics.com/g/collect?v=2&...`

**Note**: If you see these requests, analytics is loading and sending data.

## 🚨 Troubleshooting Common Issues

### ❌ No Console Messages

**Problem**: No debug messages appear
**Solutions**:

```bash
# Check environment variables
echo $VITE_GA_TRACKING_ID
echo $VITE_GA_DEBUG

# Restart development server
pnpm run dev
```

### ❌ "VITE_GA_TRACKING_ID not found"

**Problem**: Environment variable not set
**Solutions**:

1. Create `.env` file in project root
2. Add: `VITE_GA_TRACKING_ID=G-XXXXXXXXXX`
3. Restart server: `pnpm run dev`

### ❌ No Real-Time Data in GA4

**Problem**: Data not appearing in Google Analytics
**Solutions**:

1. **Wait 1-2 minutes** for data to appear
2. **Use incognito/private window** (avoids ad blockers)
3. **Check Measurement ID** is correct in GA4 property
4. **Verify website URL** matches your GA4 stream

### ❌ Ad Blockers Blocking Analytics

**Problem**: Browser extensions blocking scripts
**Solutions**:

1. **Test in incognito mode** with extensions disabled
2. **Whitelist your domain** in ad blocker
3. **Check browser console** for blocked script errors

### ❌ Contact Form Events Not Tracking

**Problem**: Form submissions not appearing
**Solutions**:

1. **Enable debug mode** and check console
2. **Test form submission** with valid email
3. **Check network tab** for analytics requests
4. **Verify form actually submits** (check server logs)

## ✅ Verification Checklist

### Before Going Live:

- [ ] Debug mode shows initialization message
- [ ] Page views tracked in console
- [ ] Contact form events tracked
- [ ] Real-time data appears in GA4
- [ ] DebugView shows events (if using GA4 debug)
- [ ] No console errors related to analytics

### After Deployment:

- [ ] Real-time data shows production traffic
- [ ] Events appear in GA4 within 24 hours
- [ ] Contact form submissions tracked
- [ ] Audience data starts populating

## 🎯 Production Testing

### Step 1: Deploy with Analytics

```bash
# In production .env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
# Remove or set to false: VITE_GA_DEBUG=false
```

### Step 2: Test Production Site

1. **Visit your live site** in incognito mode
2. **Navigate different sections**
3. **Submit contact form**
4. **Check GA4 real-time** within 2 minutes

### Step 3: Monitor for 24-48 Hours

- **Real-time data**: Immediate
- **Standard reports**: 24-48 hours
- **Audience insights**: 1-7 days

## 📊 Expected Data Timeline

| Data Type        | Availability |
| ---------------- | ------------ |
| Real-time users  | 1-2 minutes  |
| Real-time events | 1-2 minutes  |
| Page views       | 1-2 minutes  |
| Standard reports | 24-48 hours  |
| Audience data    | 1-7 days     |
| Conversion data  | 24-48 hours  |

## 🔧 Advanced Testing

### Test Specific Events

```javascript
// Open browser console and test manually
gtag('event', 'test_event', {
  event_category: 'testing',
  event_label: 'manual_test',
});
```

### Verify Event Parameters

Check DebugView for these standard parameters:

- `page_title`
- `page_location`
- `event_category`
- `event_label`

## 📝 Testing Best Practices

1. **Always test in incognito mode** to avoid ad blockers
2. **Use debug mode during development** for immediate feedback
3. **Test all user interactions** (form, buttons, navigation)
4. **Verify both development and production** environments
5. **Check multiple browsers** (Chrome, Firefox, Safari)
6. **Test on mobile devices** for complete coverage

---

**Your analytics testing is complete when you see consistent data in both debug mode and GA4 real-time reports! 🎉**
