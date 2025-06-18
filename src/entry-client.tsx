import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

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
};

initializeApp();
