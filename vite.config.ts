import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
import vercel from 'vite-plugin-vercel';
import path from 'path';
import {
  BASE_URL,
  staticRoutes,
  excludeRoutes,
  sitemapConfig,
} from './sitemap';

// https://vite.dev/config/
export default defineConfig(
  ({ command: _command, mode: _mode, isSsrBuild }) => {
    const isSSR = isSsrBuild || process.argv.includes('--ssr');

    // Simplified HTML data
    const htmlData = {
      brandName: 'Tyecode',
      brandTitle: 'Full-Stack Developer',
      brandDescription:
        'Full-Stack Developer specializing in Next.js, Node.js, and TypeScript.',
      siteTitle:
        'Tyecode - Full-Stack Developer | Next.js & TypeScript Specialist',
      siteDescription:
        '🚀 Full-Stack Developer specializing in Next.js, Node.js & TypeScript. 3+ years building scalable web systems. Available for hire!',
      ogImageAlt: 'Tyecode - Full-Stack Developer Portfolio',
      siteName: 'Tyecode Portfolio',
      appLabel: 'Tyecode Portfolio Application',
      currentYear: new Date().getFullYear(),
      siteUrl: 'https://tyecode.is-a.dev/',
      ogImageUrl: 'https://tyecode.is-a.dev/images/og.jpg',
      twitterUsername: 'tyecode',
    };

    return {
      base: '/',
      preview: {
        port: 8080,
      },
      server: {
        port: (process.env.PORT as unknown as number) || 8000,
      },
      plugins: [
        react(),
        vercel(),
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
