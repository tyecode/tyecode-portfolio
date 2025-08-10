#!/usr/bin/env node

import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

console.log('🧹 Starting project cleanup...\n');

// Function to safely remove files/directories
function safeRemove(path) {
  try {
    if (existsSync(path)) {
      rmSync(path, { recursive: true, force: true });
      console.log(`✅ Removed: ${path}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not remove ${path}: ${error.message}`);
  }
}

// Clean build artifacts
console.log('📦 Cleaning build artifacts...');
safeRemove(join(projectRoot, 'dist'));
safeRemove(join(projectRoot, 'dist-ssr'));
safeRemove(join(projectRoot, 'build'));

// Clean cache files
console.log('\n🗂️  Cleaning cache files...');
safeRemove(join(projectRoot, 'node_modules', '.cache'));
safeRemove(join(projectRoot, '.cache'));
safeRemove(join(projectRoot, '.eslintcache'));
safeRemove(join(projectRoot, '.prettiercache'));

// Clean TypeScript build info
console.log('\n🔧 Cleaning TypeScript build info...');
const tsBuildInfo = join(projectRoot, '*.tsbuildinfo');
try {
  execSync(`rm -f ${tsBuildInfo}`, { stdio: 'inherit' });
  console.log('✅ Removed TypeScript build info files');
} catch (error) {
  console.log('ℹ️  No TypeScript build info files found');
}

// Clean temporary files
console.log('\n🗑️  Cleaning temporary files...');
const tempFiles = ['.DS_Store', 'Thumbs.db', '*.log', '*.tmp', '*.temp'];

tempFiles.forEach(pattern => {
  try {
    execSync(`find . -name "${pattern}" -delete`, { stdio: 'inherit' });
  } catch (error) {
    // Ignore errors for patterns that might not exist
  }
});

// Clean coverage reports
console.log('\n📊 Cleaning coverage reports...');
safeRemove(join(projectRoot, 'coverage'));
safeRemove(join(projectRoot, '.nyc_output'));

// Clean node_modules if --full flag is provided
if (process.argv.includes('--full')) {
  console.log('\n🗑️  Full cleanup: Removing node_modules...');
  safeRemove(join(projectRoot, 'node_modules'));
  safeRemove(join(projectRoot, '.pnpm-store'));

  console.log('\n📦 Running pnpm store prune...');
  try {
    execSync('pnpm store prune', { stdio: 'inherit' });
    console.log('✅ pnpm store pruned');
  } catch (error) {
    console.log('⚠️  Could not prune pnpm store');
  }
} else {
  console.log('\n📦 Running pnpm store prune...');
  try {
    execSync('pnpm store prune', { stdio: 'inherit' });
    console.log('✅ pnpm store pruned');
  } catch (error) {
    console.log('⚠️  Could not prune pnpm store');
  }
}

console.log('\n🎉 Cleanup complete!');
console.log('\nNext steps:');
if (process.argv.includes('--full')) {
  console.log('  • Run "pnpm install" to reinstall dependencies');
} else {
  console.log('  • Run "pnpm run dev" to start development');
}
console.log('  • Run "pnpm run build" to build for production');
