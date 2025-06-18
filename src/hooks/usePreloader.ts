import { useState, useEffect } from "react";

interface PreloaderOptions {
  minLoadingTime?: number;
}

export const usePreloader = ({
  minLoadingTime = 1000,
}: PreloaderOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoading = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(minLoadingTime - elapsed, 0);

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      // Final delay before hiding
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);
    };

    handleLoading();
  }, [minLoadingTime]);

  return { isLoading };
};
