import { useState, useEffect } from 'react';

interface PreloaderOptions {
  minLoadingTime?: number;
  fadeOutDuration?: number;
}

// Function to check if critical resources are loaded
const waitForCriticalResources = (): Promise<void> => {
  return new Promise(resolve => {
    const checkResources = () => {
      // Check if fonts are loaded
      const fontPromise = document.fonts
        ? document.fonts.ready
        : Promise.resolve();

      // Check if stylesheets are loaded
      const stylesheets = Array.from(
        document.querySelectorAll('link[rel="stylesheet"]')
      );
      const stylesheetsLoaded = stylesheets.every(sheet => {
        return (
          sheet instanceof HTMLLinkElement && (sheet.sheet || sheet.disabled)
        );
      });

      if (stylesheetsLoaded) {
        fontPromise.then(() => {
          // Small delay to ensure layout calculations are complete
          setTimeout(resolve, 50);
        });
      } else {
        // Retry after a short delay
        setTimeout(checkResources, 16);
      }
    };

    checkResources();
  });
};

export const usePreloader = ({
  minLoadingTime = 500,
  fadeOutDuration = 500,
}: PreloaderOptions = {}) => {
  // Start with true on both server and client to prevent hydration mismatch
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // This effect only runs on client side after hydration
    const startTime = Date.now();

    const handleLoading = async () => {
      // Wait for critical resources first
      await waitForCriticalResources();

      // Initial delay for smooth transition
      await new Promise(resolve => setTimeout(resolve, 300));

      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(minLoadingTime - elapsed, 0);

      if (remainingTime > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingTime));
      }

      // Start fade out
      setIsVisible(false);

      // Wait for fade out animation to complete
      await new Promise(resolve => setTimeout(resolve, fadeOutDuration));

      // Hide loading screen completely
      setIsLoading(false);
    };

    handleLoading();
  }, [minLoadingTime, fadeOutDuration]);

  return {
    isLoading,
    isVisible,
    // Convenience method to check if we should show the loading screen
    shouldShow: isLoading && isVisible,
  };
};
