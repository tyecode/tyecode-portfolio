import { StrictMode } from 'react';
import { hydrateRoot, createRoot, Root } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

// Store root instance to prevent multiple creations
let rootInstance: Root | null = null;

// Check if we should hydrate or render fresh
const shouldHydrate = (): boolean => {
  const root = document.getElementById('root');
  if (!root) return false;

  // Simple check: if root has content and it's not just placeholder comments
  const hasContent =
    root.innerHTML.trim().length > 0 &&
    !root.innerHTML.includes('<!--app-html-->');

  return hasContent;
};

// App initialization
const initializeApp = async () => {
  // Wait for DOM
  if (document.readyState === 'loading') {
    await new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve, { once: true });
    });
  }

  const root = document.getElementById('root');
  if (!root) return;

  const AppComponent = (
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

  try {
    if (shouldHydrate()) {
      // Try hydration first
      rootInstance = hydrateRoot(root, AppComponent, {
        onRecoverableError: (error: unknown) => {
          // In development, Vite's HTML formatting can cause harmless whitespace mismatches
          if (import.meta.env.DEV) {
            // Only log if it's not a whitespace/formatting mismatch
            if (
              error instanceof Error &&
              !error.message?.includes("server rendered HTML didn't match") &&
              !error.message?.includes('Hydration failed')
            ) {
              console.warn('Hydration mismatch (recoverable):', error);
            }
          } else {
            // In production, log all hydration errors
            console.warn('Hydration mismatch (recoverable):', error);
          }
        },
      });
    } else {
      // Fresh client-side render
      rootInstance = createRoot(root);
      rootInstance.render(AppComponent);
    }
  } catch (error) {
    console.error('Critical error during app initialization:', error);

    // Last resort: clear and start fresh
    if (!rootInstance && root) {
      console.warn('Falling back to clean client-side rendering');
      root.innerHTML = '';
      rootInstance = createRoot(root);
      rootInstance.render(AppComponent);
    }
  }
};

// Start the app
initializeApp().catch(console.error);
