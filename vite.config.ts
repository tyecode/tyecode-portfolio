import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_STATIC_BUILD === 'true' ? '/tyecode-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react-helmet-async'],
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  css: {
    // Improve CSS loading performance
    devSourcemap: true,
    postcss: {
      plugins: [],
    },
  },
  build: {
    // Optimize CSS loading to prevent FOUC
    cssCodeSplit: true, // Enable CSS code splitting for better performance
    rollupOptions: {
      output: {
        // Advanced chunk splitting for better caching
        manualChunks: (id: string) => {
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            return 'vendor';
          }

          // Component chunks based on directory structure
          if (id.includes('/src/components/section/')) {
            return 'components-sections';
          }
          if (id.includes('/src/components/ui/')) {
            return 'components-ui';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }

          // Utility chunks
          if (id.includes('/src/hooks/') || id.includes('/src/utils/')) {
            return 'utils';
          }
          if (id.includes('/src/config/')) {
            return 'config';
          }
        },
        // Ensure CSS is loaded efficiently
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/styles/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // Better chunk naming for debugging
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize build size with esbuild (faster than terser)
    target: 'es2020',
    minify: 'esbuild',
    // Reduce source map size in production
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize esbuild settings
  esbuild: {
    drop: ['console', 'debugger'], // Remove console.log and debugger in production
  },
  // Optimize asset loading
  assetsInclude: ['**/*.woff', '**/*.woff2'],
});
