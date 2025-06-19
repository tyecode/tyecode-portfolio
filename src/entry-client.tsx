import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

// Service Worker registration for performance optimization
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              // New content available, could show update notification
              console.log('New content available, refresh to update');
            }
          });
        }
      });
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};

// Function to wait for stylesheets to load
const waitForStylesheets = (): Promise<void> => {
  return new Promise(resolve => {
    // Check if all stylesheets are loaded
    const stylesheets = Array.from(
      document.querySelectorAll(
        'link[rel="stylesheet"], link[rel="preload"][as="style"]'
      )
    );

    if (stylesheets.length === 0) {
      resolve();
      return;
    }

    let loadedCount = 0;
    const totalSheets = stylesheets.length;

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount >= totalSheets) {
        // Small delay to ensure all styles are applied
        setTimeout(() => resolve(), 10);
      }
    };

    stylesheets.forEach(sheet => {
      if (sheet instanceof HTMLLinkElement) {
        if (sheet.sheet || sheet.disabled) {
          checkComplete();
        } else {
          sheet.addEventListener('load', checkComplete);
          sheet.addEventListener('error', checkComplete);
        }
      } else {
        checkComplete();
      }
    });

    // Fallback timeout
    setTimeout(() => resolve(), 100);
  });
};

// Wait for DOM and stylesheets before rendering
const initializeApp = async () => {
  // Ensure DOM is ready
  if (document.readyState === 'loading') {
    await new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve);
    });
  }

  // Wait for stylesheets to load
  await waitForStylesheets();

  // Add loaded class to prevent FOUC
  const root = document.getElementById('root');
  if (root) {
    root.classList.add('loaded');
  }

  const AppComponent = (
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

  // Check if root has existing content (SSR) or is empty (static build)
  // Also check for static build environment
  const isStaticBuild =
    import.meta.env.VITE_STATIC_BUILD === 'true' ||
    window.location.pathname.includes('/tyecode-portfolio/');
  const hasSSRContent = root && root.innerHTML.trim() !== '' && !isStaticBuild;

  if (hasSSRContent) {
    // Hydrate for SSR
    hydrateRoot(root as HTMLElement, AppComponent);
  } else {
    // Render for static build or when no SSR content
    createRoot(root as HTMLElement).render(AppComponent);
  }

  // Register service worker after app initialization
  await registerServiceWorker();
};

// Initialize the app
initializeApp().catch(console.error);
