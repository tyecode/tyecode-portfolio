import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

// Import debugging utilities for development
import {
  enableHydrationDebug,
  compareSSRContent,
  checkHydrationIssues,
} from './utils/hydration-debug';

// Enable debugging in development
if (process.env.NODE_ENV === 'development') {
  enableHydrationDebug();
}

// Optimized function to wait for critical stylesheets only
const waitForCriticalStylesheets = (): Promise<void> => {
  return new Promise(resolve => {
    // Only wait for critical.css - other styles can load async
    const criticalSheet = document.querySelector('link[href*="critical.css"]');

    if (!criticalSheet || (criticalSheet as HTMLLinkElement).sheet) {
      resolve();
      return;
    }

    const handleLoad = () => {
      resolve();
    };

    criticalSheet.addEventListener('load', handleLoad, { once: true });
    criticalSheet.addEventListener('error', handleLoad, { once: true });

    // Fallback timeout - render anyway after 100ms
    setTimeout(resolve, 100);
  });
};

// More reliable hydration detection
const hasServerRenderedContent = (): boolean => {
  const root = document.getElementById('root');
  if (!root) return false;

  // Check if root has meaningful content (not just whitespace)
  const hasContent = root.innerHTML.trim() !== '';

  // Check if we're in static build mode
  const isStaticBuild =
    import.meta.env.VITE_STATIC_BUILD === 'true' ||
    (typeof window !== 'undefined' &&
      window.location.pathname.includes('/tyecode-portfolio/'));

  // Only hydrate if we have server content and we're not in static build mode
  return hasContent && !isStaticBuild;
};

// Optimized app initialization for faster LCP
const initializeApp = async () => {
  // Ensure DOM is ready
  if (document.readyState === 'loading') {
    await new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve, { once: true });
    });
  }

  // Only wait for critical CSS, not all stylesheets
  await waitForCriticalStylesheets();

  // Add loaded class to prevent FOUC
  const root = document.getElementById('root');
  if (root) {
    root.classList.add('loaded');
  }

  // Debug hydration in development
  if (process.env.NODE_ENV === 'development') {
    compareSSRContent();
    setTimeout(() => checkHydrationIssues(), 500);
  }

  const AppComponent = (
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

  const shouldHydrate = hasServerRenderedContent();

  try {
    if (shouldHydrate) {
      // Hydrate for SSR - no additional delays
      hydrateRoot(root as HTMLElement, AppComponent, {
        onRecoverableError: error => {
          console.warn('Hydration error (recoverable):', error);
        },
      });
    } else {
      // Render for static build - no additional delays
      createRoot(root as HTMLElement).render(AppComponent);
    }
  } catch (error) {
    console.error('Hydration error occurred:', error);
    // Fallback to client-side rendering if hydration fails
    if (root) {
      console.warn('Falling back to client-side rendering');
      root.innerHTML = '';
      createRoot(root).render(AppComponent);
    }
  }
};

// Initialize immediately for optimal LCP
initializeApp().catch(console.error);
