// Utility functions to prevent forced layout and FOUC

/**
 * Debounced function to batch DOM reads and writes
 */
export const batchDOMOperations = (() => {
  let readCallbacks: (() => void)[] = [];
  let writeCallbacks: (() => void)[] = [];
  let scheduled = false;

  const flush = () => {
    // Execute all reads first
    readCallbacks.forEach((callback) => callback());
    readCallbacks = [];

    // Then execute all writes
    writeCallbacks.forEach((callback) => callback());
    writeCallbacks = [];

    scheduled = false;
  };

  return {
    read: (callback: () => void) => {
      readCallbacks.push(callback);
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(flush);
      }
    },
    write: (callback: () => void) => {
      writeCallbacks.push(callback);
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(flush);
      }
    },
  };
})();

/**
 * Wait for the next animation frame
 */
export const nextFrame = (): Promise<void> => {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
};

/**
 * Check if all critical resources have loaded
 */
export const waitForCriticalResources = (): Promise<void> => {
  return new Promise((resolve) => {
    const checkResourcesLoaded = () => {
      // Check if document is ready
      if (document.readyState !== "complete") {
        return false;
      }

      // Check if stylesheets are loaded
      const stylesheets = Array.from(
        document.querySelectorAll('link[rel="stylesheet"]')
      );
      const stylesheetsLoaded = stylesheets.every((sheet) => {
        if (sheet instanceof HTMLLinkElement) {
          return sheet.sheet !== null || sheet.disabled;
        }
        return true;
      });

      // Check if fonts are loaded (if Font Loading API is available)
      if (document.fonts && document.fonts.status !== "loaded") {
        return false;
      }

      return stylesheetsLoaded;
    };

    if (checkResourcesLoaded()) {
      resolve();
    } else {
      const checkInterval = setInterval(() => {
        if (checkResourcesLoaded()) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 16); // Check every frame

      // Fallback timeout
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 2000);
    }
  });
};

/**
 * Prevent layout thrashing by using ResizeObserver efficiently
 */
export const createSafeResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void
): ResizeObserver => {
  let animationId: number | null = null;

  return new ResizeObserver((entries) => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }

    animationId = requestAnimationFrame(() => {
      callback(entries);
      animationId = null;
    });
  });
};

/**
 * Safe DOM measurement that doesn't force layout
 */
export const safeMeasure = (element: HTMLElement) => {
  return new Promise<DOMRect>((resolve) => {
    batchDOMOperations.read(() => {
      resolve(element.getBoundingClientRect());
    });
  });
};
