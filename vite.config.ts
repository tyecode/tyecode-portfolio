import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
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
    cssCodeSplit: false, // Keep CSS together to prevent multiple loading requests
    rollupOptions: {
      output: {
        // Ensure CSS is loaded before JS
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/styles/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: true,
  },
  // Optimize asset loading
  assetsInclude: ['**/*.woff', '**/*.woff2'],
});
