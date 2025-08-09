import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import ViteSitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';
import {
  BASE_URL,
  staticRoutes,
  excludeRoutes,
  sitemapConfig,
} from './sitemap';

// Import brand info for dynamic HTML generation
import fs from 'fs';

// Function to dynamically read package info from package.json
const getPackageInfo = () => {
  try {
    const packageJsonPath = path.resolve(__dirname, 'package.json');
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    return {
      name: packageJson.name || '',
      description: packageJson.description || '',
      author: packageJson.author || {},
      homepage: packageJson.homepage || '',
      repository: packageJson.repository || {},
    };
  } catch (error) {
    console.warn('Could not read package.json, using defaults:', error);
    return {
      name: '',
      description: '',
      author: {},
      homepage: '',
      repository: {},
    };
  }
};

// Function to dynamically read brand info from constants
const getBrandInfo = () => {
  try {
    // For build-time access, we'll use a more reliable approach
    // that can handle the actual TypeScript constants

    // First, try to import the constants if we're in a Node.js context
    if (typeof require !== 'undefined') {
      try {
        // This approach works for CommonJS contexts
        const constantsPath = path.resolve(
          __dirname,
          'src/constants/social.ts'
        );
        const constantsContent = fs.readFileSync(constantsPath, 'utf-8');

        // Extract values using more robust regex patterns
        const nameMatch = constantsContent.match(/name:\s*['"`]([^'"`]+)['"`]/);
        const titleMatch = constantsContent.match(
          /title:\s*['"`]([^'"`]+)['"`]/
        );

        // Extract multi-line description
        const descriptionMatch = constantsContent.match(
          /description:\s*(['"`])([\s\S]*?)\1/
        );

        // Extract Twitter username
        const twitterUsernameMatch = constantsContent.match(
          /TWITTER_USERNAME\s*=\s*['"`]([^'"`]+)['"`]/
        );

        // Extract seoDescription as well
        const seoDescriptionMatch = constantsContent.match(
          /seoDescription:\s*(['"`])([\s\S]*?)\1/
        );

        return {
          name: nameMatch ? nameMatch[1] : 'Tyecode',
          title: titleMatch
            ? titleMatch[1]
            : 'Frontend Developer & AI Enthusiast',
          description: descriptionMatch
            ? descriptionMatch[2].replace(/\s+/g, ' ').trim()
            : 'A passionate frontend developer with 5+ years of experience building scalable React applications, now exploring AI integration and Discord bot development.',
          seoDescription: seoDescriptionMatch
            ? seoDescriptionMatch[2].replace(/\s+/g, ' ').trim()
            : '🚀 Frontend Developer & AI Enthusiast specializing in React, TypeScript & AI integration. 5+ years building scalable web applications + Discord bots. Currently exploring AI-powered web solutions. Available for hire!',
          twitterUsername: twitterUsernameMatch
            ? twitterUsernameMatch[1]
            : 'tyecode',
        };
      } catch (importError) {
        console.warn('Could not parse constants file:', importError);
        // Fallback to defaults
        return {
          name: 'Tyecode',
          title: 'Frontend Developer & AI Enthusiast',
          description:
            'A passionate frontend developer with 5+ years of experience building scalable React applications, now exploring AI integration and Discord bot development.',
          seoDescription:
            '🚀 Frontend Developer & AI Enthusiast specializing in React, TypeScript & AI integration. 5+ years building scalable web applications + Discord bots. Currently exploring AI-powered web solutions. Available for hire!',
          twitterUsername: 'tyecode',
        };
      }
    }

    // Fallback for other contexts
    return {
      name: 'Tyecode',
      title: 'Frontend Developer & AI Enthusiast',
      description:
        'A passionate frontend developer with 5+ years of experience building scalable React applications, now exploring AI integration and Discord bot development.',
      seoDescription:
        '🚀 Frontend Developer & AI Enthusiast specializing in React, TypeScript & AI integration. 5+ years building scalable web applications + Discord bots. Currently exploring AI-powered web solutions. Available for hire!',
      twitterUsername: 'tyecode',
    };
  } catch (error) {
    console.warn('Could not read brand info, using defaults:', error);
    return {
      name: 'Tyecode',
      title: 'Frontend Developer & AI Enthusiast',
      description:
        'A passionate frontend developer with 5+ years of experience building scalable React applications, now exploring AI integration and Discord bot development.',
      seoDescription:
        '🚀 Frontend Developer & AI Enthusiast specializing in React, TypeScript & AI integration. 5+ years building scalable web applications + Discord bots. Currently exploring AI-powered web solutions. Available for hire!',
      twitterUsername: 'tyecode',
    };
  }
};

// https://vite.dev/config/
export default defineConfig(
  ({ command: _command, mode: _mode, isSsrBuild }) => {
    const isSSR = isSsrBuild || process.argv.includes('--ssr');
    const packageInfo = getPackageInfo();
    const brandInfo = getBrandInfo();

    // Base path for Vercel deployment (always root)
    const getBasePath = () => {
      return '/';
    };

    // Dynamic HTML data
    const htmlData = {
      brandName: brandInfo.name,
      brandTitle: brandInfo.title,
      brandDescription: brandInfo.description,
      siteTitle: `${brandInfo.name} - ${brandInfo.title} | React & TypeScript Specialist`,
      siteDescription:
        brandInfo.seoDescription ||
        `🚀 Frontend Developer & AI Enthusiast specializing in React, TypeScript & AI integration. 5+ years building scalable web applications + Discord bots. Currently exploring AI-powered web solutions. Available for hire!`,
      ogImageAlt: `${brandInfo.name} - Frontend Developer & AI Enthusiast Portfolio`,
      siteName: `${brandInfo.name} Portfolio`,
      appLabel: `${brandInfo.name} Portfolio Application`,
      logoText: brandInfo.name.charAt(0).toUpperCase(),
      currentYear: new Date().getFullYear(),
      siteUrl: packageInfo.homepage || 'http://localhost:8000/',
      ogImageUrl: `${packageInfo.homepage || 'http://localhost:8000'}/images/og.jpg`,
      twitterUsername: brandInfo.twitterUsername,
    };

    return {
      base: getBasePath(),
      preview: {
        port: 8080,
        // Fix MIME type issues for assets when using base path
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      server: {
        port: 8000,
        // Ensure correct MIME types are served
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      plugins: [
        react(),
        tailwindcss(),
        ViteSitemap({
          hostname: BASE_URL,
          dynamicRoutes: staticRoutes,
          exclude: excludeRoutes,
          generateRobotsTxt: true,
          changefreq: sitemapConfig.changefreq,
          priority: sitemapConfig.priority,
          readable: true,
          robots: [
            {
              userAgent: '*',
              allow: '/',
            },
            {
              userAgent: '*',
              disallow: '/admin',
            },
            {
              userAgent: '*',
              disallow: '/private',
            },
          ],
        }),
        createHtmlPlugin({
          minify: true,
          inject: {
            data: htmlData,
          },
        }),
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
      optimizeDeps: {
        include: ['react-helmet-async'],
        exclude: ['vite-plugin-pages', 'vite-ssg'],
        esbuildOptions: {
          target: 'es2020',
          treeShaking: true,
        },
      },
      ssr: {
        noExternal: ['react-helmet-async', 'nodemailer'],
      },
      build: {
        rollupOptions: {
          output: {
            ...(isSSR
              ? {}
              : {
                  manualChunks: {
                    react: ['react', 'react-dom'],
                    vendor: ['react-helmet-async'],
                    utils: ['clsx', 'tailwind-merge'],
                  },
                }),
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: chunkInfo => {
              if (
                chunkInfo.name === 'entry-server' ||
                chunkInfo.name === 'email'
              ) {
                return '[name].js';
              }
              return 'assets/js/[name]-[hash].js';
            },
          },
          treeshake: {
            moduleSideEffects: false,
            propertyReadSideEffects: false,
            tryCatchDeoptimization: false,
          },
          external: isSSR ? ['express', 'compression', 'sirv'] : [],
        },
        target: 'es2020',
        minify: 'esbuild',
        sourcemap: false,
        reportCompressedSize: false,
        chunkSizeWarningLimit: 1000,
        cssCodeSplit: true,
        cssMinify: 'esbuild',
        assetsInlineLimit: 2048,
      },
      esbuild: {
        drop:
          process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
      },
    };
  }
);
