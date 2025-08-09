import { useEffect, useCallback } from 'react';
import type { AnalyticsEvent } from '@/types/analytics';

// Google Analytics 4 integration hook
export const useAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_TRACKING_ID;
  const GA_DEBUG = import.meta.env.VITE_GA_DEBUG === 'true';

  // Initialize Google Analytics
  useEffect(() => {
    // Only initialize if GA_MEASUREMENT_ID is provided
    if (!GA_MEASUREMENT_ID) {
      console.warn(
        'Google Analytics: VITE_GA_TRACKING_ID not found in environment variables'
      );
      return;
    }

    // Check if already initialized
    if (window.dataLayer) {
      return;
    }

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }

    // Make gtag globally available
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: GA_DEBUG,
    });

    if (GA_DEBUG) {
      console.warn('🔍 Google Analytics Debug Mode: Enabled');
      console.warn('📊 GA Measurement ID:', GA_MEASUREMENT_ID);
    }
  }, [GA_MEASUREMENT_ID, GA_DEBUG]);

  // Track page views manually
  const trackPageView = useCallback(
    (pagePath?: string) => {
      const currentPath =
        pagePath || window.location.pathname + window.location.search;

      if (GA_MEASUREMENT_ID && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: currentPath,
        });

        if (GA_DEBUG) {
          console.warn('📄 Page View Tracked:', {
            title: document.title,
            path: currentPath,
            location: window.location.href,
          });
        }
      }
    },
    [GA_MEASUREMENT_ID, GA_DEBUG]
  );

  // Track custom events
  const trackEvent = useCallback(
    (eventName: string, parameters: AnalyticsEvent = {}) => {
      if (GA_MEASUREMENT_ID && window.gtag) {
        window.gtag('event', eventName, parameters);

        if (GA_DEBUG) {
          console.warn('🎯 Event Tracked:', {
            event: eventName,
            parameters,
          });
        }
      }
    },
    [GA_MEASUREMENT_ID, GA_DEBUG]
  );

  return { trackEvent, trackPageView };
};

// Helper functions for common events
export const trackContactFormSubmit = (
  trackEvent: (name: string, params?: AnalyticsEvent) => void
) => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'portfolio_contact_form',
  });
};

export const trackProjectView = (
  projectName: string,
  trackEvent: (name: string, params?: AnalyticsEvent) => void
) => {
  trackEvent('project_view', {
    event_category: 'engagement',
    event_label: projectName,
  });
};
