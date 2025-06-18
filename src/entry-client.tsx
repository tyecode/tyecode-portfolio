import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

// Function to wait for stylesheets to load
const waitForStylesheets = (): Promise<void> => {
  return new Promise((resolve) => {
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

    stylesheets.forEach((sheet) => {
      if (sheet instanceof HTMLLinkElement) {
        if (sheet.sheet || sheet.disabled) {
          checkComplete();
        } else {
          sheet.addEventListener("load", checkComplete);
          sheet.addEventListener("error", checkComplete);
        }
      } else {
        checkComplete();
      }
    });

    // Fallback timeout
    setTimeout(() => resolve(), 100);
  });
};

// Wait for DOM and stylesheets before hydrating
const initializeApp = async () => {
  // Ensure DOM is ready
  if (document.readyState === "loading") {
    await new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", resolve);
    });
  }

  // Wait for stylesheets to load
  await waitForStylesheets();

  // Add loaded class to prevent FOUC
  const root = document.getElementById("root");
  if (root) {
    root.classList.add("loaded");
  }

  // Hydrate the app
  hydrateRoot(
    root as HTMLElement,
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
};

initializeApp();
