// Utility and configuration types

export interface FaviconOptions {
  character?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  size?: number;
}

export interface UseDynamicFaviconReturn {
  /** Current character being used for the favicon */
  currentCharacter: string;
  /** Whether favicon is currently being updated */
  isUpdating: boolean;
  /** Update favicon with a specific character */
  updateWithCharacter: (character: string) => Promise<void>;
  /** Update favicon for a specific brand name */
  updateWithBrandName: (brandName: string) => Promise<void>;
  /** Preview a favicon without applying it */
  preview: (character: string, size?: number) => Promise<string>;
  /** Reset favicon to default brand character */
  resetToDefault: () => Promise<void>;
  /** Initialize favicon (called automatically) */
  initialize: () => void;
}

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
