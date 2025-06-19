import { useState, useEffect } from 'react';

interface PreloaderOptions {
  minLoadingTime?: number;
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
}: PreloaderOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure this only runs on client side
    if (typeof window === 'undefined') return;

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

      // Final delay before hiding to ensure everything is painted
      await new Promise(resolve => setTimeout(resolve, 200));
      setIsLoading(false);
    };

    handleLoading();
  }, [minLoadingTime]);

  return { isLoading };
};
