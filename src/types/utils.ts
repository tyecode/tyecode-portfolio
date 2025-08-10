// Utility and configuration types

export interface PackageInfo {
  name: string;
  version?: string;
  description?: string;
  author?: string;
  homepage?: string;
  repository?: {
    type?: string;
    url?: string;
  };
}

export interface PreloaderOptions {
  duration?: number;
  delay?: number;
}
