import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

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

  const AppComponent = (
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

  // Check if root has existing content (SSR) or is empty (static build)
  const isStaticBuild =
    import.meta.env.VITE_STATIC_BUILD === 'true' ||
    window.location.pathname.includes('/tyecode-portfolio/');
  const hasSSRContent = root && root.innerHTML.trim() !== '' && !isStaticBuild;

  if (hasSSRContent) {
    // Hydrate for SSR - no additional delays
    hydrateRoot(root as HTMLElement, AppComponent);
  } else {
    // Render for static build - no additional delays
    createRoot(root as HTMLElement).render(AppComponent);
  }
};

// Initialize immediately for optimal LCP
initializeApp().catch(console.error);
