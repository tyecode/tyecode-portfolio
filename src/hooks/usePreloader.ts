import { useState, useEffect } from "react";

interface PreloaderOptions {
  minLoadingTime?: number;
  resources?: string[];
}

export const usePreloader = ({
  minLoadingTime = 2000,
  resources = [],
}: PreloaderOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const preloadResources = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      if (resources.length > 0) {
        for (const resource of resources) {
          try {
            if (resource.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
              // Preload images
              await new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = resource;
              });
            } else if (resource.match(/\.(woff|woff2|ttf|otf)$/i)) {
              // Preload fonts
              const link = document.createElement("link");
              link.rel = "preload";
              link.as = "font";
              link.href = resource;
              link.crossOrigin = "anonymous";
              document.head.appendChild(link);
            }
          } catch (error) {
            console.warn(`Failed to preload resource: ${resource}`, error);
          }

          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }

      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(minLoadingTime - elapsed, 0);

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);
    };

    preloadResources();
  }, [minLoadingTime, resources]);

  return { isLoading };
};
