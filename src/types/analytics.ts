// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export interface AnalyticsEvent {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

export interface PageViewParams {
  page_title?: string;
  page_location?: string;
  page_path?: string;
}

export {};
