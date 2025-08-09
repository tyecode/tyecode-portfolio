# Contact Form Rate Limiting

This project includes intelligent rate limiting to protect your contact form from spam and abuse while maintaining a smooth experience for legitimate users.

## ✅ What's Implemented

### 🛡️ Smart Protection

- **Per-IP rate limiting** - Prevents individual IPs from flooding your form
- **Configurable windows** - Set custom time periods and limits
- **Contact form specific** - Only protects the contact endpoint, not your entire site
- **Professional error messages** - Clear feedback when limits are exceeded
- **Header information** - Rate limit status returned in HTTP headers

### 🎯 Default Configuration

```bash
RATE_LIMIT_WINDOW=900000          # 15 minutes (in milliseconds)
RATE_LIMIT_MAX_REQUESTS=5         # Maximum 5 submissions per window
```

**Translation**: Each IP address can submit the contact form maximum **5 times every 15 minutes**.

## 🚀 Setup & Configuration

### Enable Rate Limiting

```bash
# Add to your .env file
RATE_LIMIT_WINDOW=900000          # 15 minutes
RATE_LIMIT_MAX_REQUESTS=5         # 5 requests per window
```

### Configuration Options

| Setting                   | Description                 | Default         | Recommended    |
| ------------------------- | --------------------------- | --------------- | -------------- |
| `RATE_LIMIT_WINDOW`       | Time window in milliseconds | 900000 (15 min) | 900000-1800000 |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window     | 5               | 3-10           |

### Example Configurations

**🔒 Strict Protection** (Low traffic, high security)

```bash
RATE_LIMIT_WINDOW=1800000         # 30 minutes
RATE_LIMIT_MAX_REQUESTS=3         # 3 requests per 30 min
```

**⚖️ Balanced Protection** (Default - recommended)

```bash
RATE_LIMIT_WINDOW=900000          # 15 minutes
RATE_LIMIT_MAX_REQUESTS=5         # 5 requests per 15 min
```

**📈 Relaxed Protection** (High traffic, events, demos)

```bash
RATE_LIMIT_WINDOW=600000          # 10 minutes
RATE_LIMIT_MAX_REQUESTS=10        # 10 requests per 10 min
```

## 🎯 How It Works

### Request Flow

```
1. User submits contact form
2. Rate limiter checks IP address history
3. If under limit: ✅ Request processed normally
4. If over limit: ❌ Request blocked with error message
```

### Error Response

When rate limit is exceeded, users see:

```json
{
  "success": false,
  "error": "Too many contact form submissions. Please try again later."
}
```

### HTTP Headers

Rate limit information is included in response headers:

```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 2
X-RateLimit-Reset: 1640995200
```

## 🧪 Testing Rate Limits

### Manual Testing

1. **Enable rate limiting** in your `.env`
2. **Start development server**: `pnpm run dev`
3. **Submit contact form** multiple times quickly
4. **Verify protection** kicks in after configured limit

### Test Configuration

For testing, use a lower limit:

```bash
# Testing only - very restrictive
RATE_LIMIT_WINDOW=60000           # 1 minute
RATE_LIMIT_MAX_REQUESTS=2         # 2 requests per minute
```

### Expected Behavior

- **First 2 submissions**: ✅ Success
- **3rd submission within 1 minute**: ❌ Rate limited
- **After 1 minute**: ✅ Can submit again

## 🔧 Advanced Configuration

### Disable Rate Limiting

```bash
# Remove or comment out these lines in .env
# RATE_LIMIT_WINDOW=900000
# RATE_LIMIT_MAX_REQUESTS=5
```

Rate limiting falls back to defaults if not configured, or can be disabled by removing the environment variables.

### Production Deployment

```bash
# Recommended production settings
RATE_LIMIT_WINDOW=900000          # 15 minutes
RATE_LIMIT_MAX_REQUESTS=5         # 5 requests per 15 min
```

### Multiple Environments

```bash
# Development (more relaxed for testing)
RATE_LIMIT_WINDOW=300000          # 5 minutes
RATE_LIMIT_MAX_REQUESTS=10        # 10 requests

# Production (more strict)
RATE_LIMIT_WINDOW=1800000         # 30 minutes
RATE_LIMIT_MAX_REQUESTS=3         # 3 requests
```

## 🚨 Important Notes

### What Rate Limiting Protects Against

- ✅ **Spam bots** submitting multiple forms
- ✅ **Malicious users** trying to overwhelm your email
- ✅ **Accidental multiple submissions** by users
- ✅ **Email quota exhaustion** from your SMTP provider
- ✅ **Server resource abuse**

### What It Doesn't Affect

- ✅ **Normal page browsing** - Only contact form is limited
- ✅ **Analytics tracking** - No impact on GA4 events
- ✅ **Static assets** - Images, CSS, JS load normally
- ✅ **SEO crawlers** - Search engines not affected

### Legitimate Use Cases

The default settings allow legitimate users to:

- **Resubmit if needed** (up to 5 times in 15 minutes)
- **Fix typos or add information**
- **Handle form errors gracefully**

### False Positives

Rate limiting is **IP-based**, so:

- **Shared networks** (offices, cafes) share limits
- **NAT/Proxy users** may hit limits faster
- **Mobile carriers** sometimes share IP addresses

Consider more relaxed limits if you expect traffic from shared networks.

## 🛠️ Monitoring & Maintenance

### Server Logs

Rate limit events are logged:

```
Contact form submission blocked: IP exceeded rate limit
Contact form submission allowed: 3/5 requests used
```

### Analytics Integration

Rate limiting works seamlessly with your Google Analytics:

- **Blocked submissions** still trigger analytics events
- **Rate limit errors** tracked as form errors
- **No impact** on page view or user tracking

### Adjusting Limits

Monitor your contact form usage and adjust limits based on:

- **Legitimate traffic patterns**
- **Spam/abuse attempts**
- **User feedback about accessibility**

## 📊 Recommended Settings by Use Case

### Personal Portfolio

```bash
RATE_LIMIT_WINDOW=900000          # 15 minutes
RATE_LIMIT_MAX_REQUESTS=5         # 5 requests
```

### Business Portfolio

```bash
RATE_LIMIT_WINDOW=600000          # 10 minutes
RATE_LIMIT_MAX_REQUESTS=8         # 8 requests
```

### Agency/High Traffic

```bash
RATE_LIMIT_WINDOW=900000          # 15 minutes
RATE_LIMIT_MAX_REQUESTS=10        # 10 requests
```

### Demo/Event Portfolio

```bash
RATE_LIMIT_WINDOW=300000          # 5 minutes
RATE_LIMIT_MAX_REQUESTS=15        # 15 requests
```

---

**Your contact form is now protected against spam and abuse while maintaining excellent user experience! 🛡️**

Rate limiting is a professional security practice that shows you think about production-ready applications beyond just the frontend code.
