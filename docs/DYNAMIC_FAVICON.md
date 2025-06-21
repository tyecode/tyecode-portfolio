# Dynamic Favicon System

This system automatically generates favicons based on your brand name using the Logo component design. The favicon updates dynamically when the brand name changes, ensuring consistent branding across all touchpoints.

## Features

- ✅ **Automatic Generation**: Favicons are automatically generated from your brand name
- ✅ **Multiple Sizes**: Generates all standard favicon sizes (16x16, 32x32, 48x48, 64x64, 128x128, 256x256)
- ✅ **Apple Touch Icons**: Includes Apple touch icon support
- ✅ **PWA Compatible**: Works with Progressive Web App manifests
- ✅ **Real-time Updates**: Favicon updates instantly when brand name changes
- ✅ **Canvas-based**: Uses HTML5 Canvas for high-quality rendering
- ✅ **Logo Design Consistency**: Matches your Logo component exactly ({character})

## How It Works

The system uses the HTML5 Canvas API to render a favicon that matches your Logo component:

1. Takes the first character of your brand name (from `BRAND_INFO.name`)
2. Renders it in the same style as your Logo component: `{character}`
3. Generates multiple sizes for different use cases
4. Updates all favicon links in the document head
5. Provides fallback behavior for unsupported browsers

## Quick Start

### 1. Automatic Initialization

The favicon system is already integrated into your App component and will automatically initialize when your app loads:

```tsx
// src/App.tsx
import { useDynamicFavicon } from '@/hooks/useDynamicFavicon';

function App() {
  // This automatically generates favicon from BRAND_INFO.name
  useDynamicFavicon();

  // ... rest of your app
}
```

### 2. Manual Control

You can also control the favicon programmatically:

```tsx
import { useDynamicFavicon } from '@/hooks/useDynamicFavicon';

function MyComponent() {
  const {
    currentCharacter,
    isUpdating,
    updateWithCharacter,
    updateWithBrandName,
    resetToDefault,
  } = useDynamicFavicon();

  const handleBrandChange = async (newBrandName: string) => {
    await updateWithBrandName(newBrandName);
  };

  return (
    <div>
      <p>Current favicon character: {currentCharacter}</p>
      <button onClick={() => updateWithCharacter('R')}>Update to 'R'</button>
      <button onClick={() => updateWithBrandName('ReactApp')}>
        Update to ReactApp
      </button>
      <button onClick={resetToDefault}>Reset to Default</button>
    </div>
  );
}
```

### 3. Direct Utility Usage

For more advanced use cases, you can use the utilities directly:

```tsx
import {
  generateFavicon,
  updateFavicon,
  generateFaviconForBrand,
  previewFavicon,
} from '@/utils/favicon-generator';

// Generate a specific favicon
const faviconDataUrl = await generateFavicon({
  character: 'R',
  backgroundColor: '#111827',
  foregroundColor: '#ffffff',
  size: 64,
});

// Update favicon in DOM
await updateFavicon('R');

// Generate for brand name
await generateFaviconForBrand('ReactApp');

// Preview without applying
const previewUrl = await previewFavicon('V', 64);
```

## API Reference

### `useDynamicFavicon()` Hook

```tsx
interface UseDynamicFaviconReturn {
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
```

### Utility Functions

#### `generateFavicon(options)`

Generates a favicon data URL.

```tsx
interface FaviconOptions {
  character?: string; // Character to display (default: first letter of brand)
  backgroundColor?: string; // Background color (default: '#111827')
  foregroundColor?: string; // Text color (default: '#ffffff')
  size?: number; // Size in pixels (default: 32)
}
```

#### `updateFavicon(character?)`

Updates the favicon in the document head with the specified character.

#### `generateFaviconForBrand(brandName)`

Generates and applies favicon for a specific brand name.

#### `previewFavicon(character, size?)`

Generates a favicon preview without updating the DOM.

#### `initDynamicFavicon()`

Initializes the dynamic favicon system (called automatically).

## Configuration

### Brand Name

The default character is derived from your brand configuration:

```tsx
// src/constants/social.ts
export const BRAND_INFO: BrandInfo = {
  name: 'tyecode', // First character 't' will be used
  title: 'Front-End Developer',
  description: '...',
  tagline: '...',
};
```

### Customization

You can customize the favicon appearance:

```tsx
// Custom colors and styling
const customFavicon = await generateFavicon({
  character: 'M',
  backgroundColor: '#ff6b6b', // Custom background
  foregroundColor: '#ffffff', // Custom text color
  size: 128, // Custom size
});
```

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ⚠️ IE: Not supported (graceful fallback to static favicon)

## Performance

- **Generation Time**: ~5-10ms per favicon size
- **Memory Usage**: Minimal (canvas is cleaned up after generation)
- **Network Impact**: Zero (all generation is client-side)
- **Bundle Size**: ~2KB added to your bundle

## Troubleshooting

### Favicon Not Updating

1. **Check Browser Cache**: Hard refresh (Ctrl+F5) to clear favicon cache
2. **Check Console**: Look for error messages in browser console
3. **Verify Brand Name**: Ensure `BRAND_INFO.name` is set correctly

### Canvas Errors

The system includes fallback behavior:

- If Canvas API is not supported, it silently fails
- If character is empty, it uses a default character
- All errors are caught and logged without breaking the app

### PWA Manifest Issues

The favicon system automatically updates PWA manifest icons. If you're having issues:

1. Check that `generateManifest()` in `meta-tags.ts` is working
2. Verify the manifest is being served correctly
3. Clear application data in browser dev tools

## Demo Component

A demo component is available for testing:

```tsx
import FaviconDemo from '@/components/demo/FaviconDemo';

// Add to any page for testing
<FaviconDemo className='max-w-md mx-auto' />;
```

The demo allows you to:

- Test different characters
- Try various brand names
- Preview favicons before applying
- Reset to default settings

## Integration Examples

### E-commerce Site

```tsx
// Update favicon when user switches stores
const handleStoreChange = async (storeName: string) => {
  await updateWithBrandName(storeName);
  // Favicon now shows first letter of store name
};
```

### Multi-tenant App

```tsx
// Update favicon based on tenant
useEffect(() => {
  if (currentTenant) {
    updateWithBrandName(currentTenant.name);
  }
}, [currentTenant]);
```

### A/B Testing

```tsx
// Test different brand presentations
const testVariants = ['BrandA', 'BrandB', 'BrandC'];
const currentVariant = testVariants[userGroup % testVariants.length];
await updateWithBrandName(currentVariant);
```

## Best Practices

1. **Initialize Early**: The hook is already integrated into your App component
2. **Handle Loading States**: Use `isUpdating` to show loading indicators
3. **Graceful Fallbacks**: The system handles errors gracefully
4. **Test Across Browsers**: Different browsers may cache favicons differently
5. **Keep Characters Simple**: Single letters work best for favicon recognition

## Technical Details

### Canvas Rendering

The favicon uses the same visual style as your Logo component:

```
┌─────────────────┐
│  {character}    │  Background: #111827 (gray-900)
│                 │  Text: #ffffff (white)
│  ┌─┐  ┌─┐      │  Font: Monaco, monospace
│  │{│c│}│       │  Style: Rounded corners, shadow
│  └─┘  └─┘      │
└─────────────────┘
```

### Size Generation

Multiple sizes are generated automatically:

- 16x16: Browser tab favicon
- 32x32: Bookmark favicon
- 48x48: Windows shortcut
- 64x64: High-DPI displays
- 128x128: Chrome Web Store
- 256x256: Apple touch icon

Each size maintains proper proportions and readability.

---

## Need Help?

If you encounter any issues or have questions about the dynamic favicon system, please check:

1. Browser console for error messages
2. Network tab for failed requests
3. Application tab for manifest issues
4. This documentation for configuration options

The system is designed to be robust and handle edge cases gracefully, but if you find any issues, they can likely be resolved by adjusting the configuration or clearing browser caches.
