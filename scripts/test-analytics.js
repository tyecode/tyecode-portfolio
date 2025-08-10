#!/usr/bin/env node

/**
 * Analytics Testing Script
 *
 * This script helps verify your Google Analytics setup is configured correctly
 * Run with: node scripts/test-analytics.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.warn(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  const status = exists ? '✅' : '❌';
  const color = exists ? 'green' : 'red';
  log(`${status} ${description}`, color);
  return exists;
}

function checkEnvironmentVariable(content, varName) {
  const regex = new RegExp(`${varName}=`, 'm');
  const hasVar = regex.test(content);
  const status = hasVar ? '✅' : '❌';
  const color = hasVar ? 'green' : 'red';
  log(`${status} ${varName} configured in template`, color);
  return hasVar;
}

function checkCodeImplementation(filePath, searchPattern, description) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasImplementation = searchPattern.test(content);
    const status = hasImplementation ? '✅' : '❌';
    const color = hasImplementation ? 'green' : 'red';
    log(`${status} ${description}`, color);
    return hasImplementation;
  } catch {
    log(`❌ Could not check ${description}`, 'red');
    return false;
  }
}

async function main() {
  log('\n🔍 Analytics Implementation Verification\n', 'bold');

  const projectRoot = path.resolve(__dirname, '..');
  let allChecksPass = true;

  // 1. Check required files exist
  log('📁 File Structure:', 'blue');
  allChecksPass &= checkFile(
    path.join(projectRoot, 'env-template.txt'),
    'Environment template exists'
  );
  allChecksPass &= checkFile(
    path.join(projectRoot, 'src/hooks/useAnalytics.ts'),
    'Analytics hook exists'
  );
  allChecksPass &= checkFile(
    path.join(projectRoot, 'src/types/analytics.ts'),
    'Analytics types exist'
  );
  allChecksPass &= checkFile(
    path.join(projectRoot, 'docs/CLEANUP_GUIDE.md'),
    'Analytics documentation exists'
  );

  // 2. Check environment template
  log('\n🔧 Environment Configuration:', 'blue');
  try {
    const envTemplate = fs.readFileSync(
      path.join(projectRoot, 'env-template.txt'),
      'utf8'
    );
    allChecksPass &= checkEnvironmentVariable(
      envTemplate,
      'VITE_GA_TRACKING_ID'
    );
    allChecksPass &= checkEnvironmentVariable(envTemplate, 'VITE_GA_DEBUG');
    allChecksPass &= checkEnvironmentVariable(envTemplate, 'RATE_LIMIT_WINDOW');
    allChecksPass &= checkEnvironmentVariable(
      envTemplate,
      'RATE_LIMIT_MAX_REQUESTS'
    );
  } catch {
    log('❌ Could not read env-template.txt', 'red');
    allChecksPass = false;
  }

  // 3. Check code implementation
  log('\n💻 Code Implementation:', 'blue');
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'src/hooks/useAnalytics.ts'),
    /useAnalytics/,
    'useAnalytics hook implemented'
  );
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'src/hooks/useAnalytics.ts'),
    /VITE_GA_DEBUG/,
    'Debug mode implemented'
  );
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'src/hooks/useAnalytics.ts'),
    /trackEvent/,
    'Event tracking implemented'
  );
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'src/hooks/useAnalytics.ts'),
    /trackPageView/,
    'Page view tracking implemented'
  );

  // 4. Check App.tsx integration
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'src/App.tsx'),
    /useAnalytics/,
    'Analytics integrated in App.tsx'
  );

  // 5. Check contact form integration
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'src/components/section/ContactSection.tsx'),
    /trackContactFormSubmit/,
    'Contact form tracking implemented'
  );

  // 6. Check rate limiting implementation
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'server.js'),
    /express-rate-limit/,
    'Rate limiting implemented'
  );
  allChecksPass &= checkCodeImplementation(
    path.join(projectRoot, 'server.js'),
    /contactRateLimit/,
    'Contact form rate limiting applied'
  );

  // 7. Check if .env file exists (optional)
  log('\n⚙️  Environment Setup:', 'blue');
  const envExists = checkFile(
    path.join(projectRoot, '.env'),
    '.env file exists (optional)'
  );
  if (envExists) {
    try {
      const envContent = fs.readFileSync(
        path.join(projectRoot, '.env'),
        'utf8'
      );
      const hasGAId = /VITE_GA_TRACKING_ID=G-/.test(envContent);
      if (hasGAId) {
        log('✅ GA Tracking ID configured in .env', 'green');
      } else {
        log('⚠️  GA Tracking ID not set in .env (add your real ID)', 'yellow');
      }
    } catch {
      log('⚠️  Could not read .env file', 'yellow');
    }
  } else {
    log('ℹ️  Create .env file with VITE_GA_TRACKING_ID=G-XXXXXXXXXX', 'yellow');
  }

  // Summary
  log('\n📊 Summary:', 'bold');
  if (allChecksPass) {
    log(
      '🎉 All analytics checks passed! Your implementation is ready.',
      'green'
    );
    log('\n📋 Next Steps:', 'blue');
    log('1. Get your GA4 Measurement ID from analytics.google.com', 'reset');
    log('2. Add VITE_GA_TRACKING_ID=G-XXXXXXXXXX to .env file', 'reset');
    log('3. Optional: Add VITE_GA_DEBUG=true for testing', 'reset');
    log('4. Run: pnpm run dev', 'reset');
    log('5. Check browser console for debug messages', 'reset');
  } else {
    log(
      '❌ Some analytics checks failed. Please review the issues above.',
      'red'
    );
  }

  log('\n🔗 Helpful Commands:', 'blue');
  log('• Test in debug mode: VITE_GA_DEBUG=true pnpm run dev', 'reset');
  log('• Check environment: cat .env', 'reset');
  log('• View documentation: cat docs/CLEANUP_GUIDE.md', 'reset');
  log('• Full testing guide: cat docs/VERCEL_DEPLOYMENT.md', 'reset');

  process.exit(allChecksPass ? 0 : 1);
}

main().catch(error => {
  console.error('Script error:', error);
  process.exit(1);
});
