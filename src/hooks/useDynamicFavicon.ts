import { useEffect, useCallback, useState } from 'react';
import {
  updateFavicon,
  generateFaviconForBrand,
  previewFavicon,
  initDynamicFavicon,
} from '@/utils/favicon-generator';
import { BRAND_INFO } from '@/constants';
import type { UseDynamicFaviconReturn } from '@/types/utils';

export const useDynamicFavicon = (): UseDynamicFaviconReturn => {
  const [currentCharacter, setCurrentCharacter] = useState<string>(
    BRAND_INFO.name.charAt(0)
  );
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  // Initialize favicon on mount
  useEffect(() => {
    initDynamicFavicon();
  }, []);

  const updateWithCharacter = useCallback(
    async (character: string): Promise<void> => {
      setIsUpdating(true);
      try {
        await updateFavicon(character);
        setCurrentCharacter(character);
      } catch (error) {
        console.error('Failed to update favicon with character:', error);
      } finally {
        setIsUpdating(false);
      }
    },
    []
  );

  const updateWithBrandName = useCallback(
    async (brandName: string): Promise<void> => {
      setIsUpdating(true);
      try {
        await generateFaviconForBrand(brandName);
        setCurrentCharacter(brandName.charAt(0));
      } catch (error) {
        console.error('Failed to update favicon with brand name:', error);
      } finally {
        setIsUpdating(false);
      }
    },
    []
  );

  const preview = useCallback(
    async (character: string, size?: number): Promise<string> => {
      try {
        return await previewFavicon(character, size);
      } catch (error) {
        console.error('Failed to preview favicon:', error);
        return '';
      }
    },
    []
  );

  const resetToDefault = useCallback(async (): Promise<void> => {
    const defaultCharacter = BRAND_INFO.name.charAt(0);
    await updateWithCharacter(defaultCharacter);
  }, [updateWithCharacter]);

  const initialize = useCallback((): void => {
    initDynamicFavicon();
  }, []);

  return {
    currentCharacter,
    isUpdating,
    updateWithCharacter,
    updateWithBrandName,
    preview,
    resetToDefault,
    initialize,
  };
};
