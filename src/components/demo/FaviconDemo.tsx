import { useState, useEffect } from 'react';
import { useDynamicFavicon } from '@/hooks/useDynamicFavicon';
import { cn } from '@/utils/cn';

interface FaviconDemoProps {
  className?: string;
}

const FaviconDemo: React.FC<FaviconDemoProps> = ({ className = '' }) => {
  const {
    currentCharacter,
    isUpdating,
    updateWithCharacter,
    updateWithBrandName,
    preview,
    resetToDefault,
  } = useDynamicFavicon();

  const [inputCharacter, setInputCharacter] = useState('');
  const [inputBrandName, setInputBrandName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  // Preset brand examples
  const brandExamples = [
    { name: 'tyecode', color: '#111827' },
    { name: 'ReactJS', color: '#61DAFB' },
    { name: 'Vue.js', color: '#4FC08D' },
    { name: 'Angular', color: '#DD0031' },
    { name: 'Svelte', color: '#FF3E00' },
    { name: 'Next.js', color: '#000000' },
  ];

  // Generate preview when character changes
  useEffect(() => {
    if (inputCharacter) {
      preview(inputCharacter, 64).then(setPreviewUrl);
    }
  }, [inputCharacter, preview]);

  const handleCharacterUpdate = async () => {
    if (inputCharacter.trim()) {
      await updateWithCharacter(inputCharacter.trim());
      setInputCharacter('');
    }
  };

  const handleBrandUpdate = async () => {
    if (inputBrandName.trim()) {
      await updateWithBrandName(inputBrandName.trim());
      setInputBrandName('');
    }
  };

  const handleExampleClick = async (brandName: string) => {
    await updateWithBrandName(brandName);
  };

  return (
    <div className={cn('bg-white rounded-lg shadow-lg p-6', className)}>
      <div className='space-y-6'>
        {/* Header */}
        <div className='text-center'>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>
            Dynamic Favicon Demo
          </h3>
          <p className='text-gray-600 text-sm'>
            Test the dynamic favicon generation system
          </p>
        </div>

        {/* Current Status */}
        <div className='bg-gray-50 rounded-lg p-4'>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-medium text-gray-700'>
              Current Character:
            </span>
            <div className='flex items-center gap-2'>
              <span className='text-lg font-mono font-bold text-gray-900'>
                {currentCharacter}
              </span>
              {isUpdating && (
                <div className='w-4 h-4 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin' />
              )}
            </div>
          </div>
        </div>

        {/* Update by Character */}
        <div className='space-y-3'>
          <h4 className='font-medium text-gray-900'>Update by Character</h4>
          <div className='flex gap-2'>
            <input
              type='text'
              value={inputCharacter}
              onChange={e => setInputCharacter(e.target.value.slice(0, 1))}
              placeholder='Enter a character'
              className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-center font-mono text-lg'
              maxLength={1}
            />
            <button
              onClick={handleCharacterUpdate}
              disabled={!inputCharacter.trim() || isUpdating}
              className='px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              Update
            </button>
          </div>
          {previewUrl && (
            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <span>Preview:</span>
              <img
                src={previewUrl}
                alt='Favicon preview'
                className='w-8 h-8 rounded border'
              />
            </div>
          )}
        </div>

        {/* Update by Brand Name */}
        <div className='space-y-3'>
          <h4 className='font-medium text-gray-900'>Update by Brand Name</h4>
          <div className='flex gap-2'>
            <input
              type='text'
              value={inputBrandName}
              onChange={e => setInputBrandName(e.target.value)}
              placeholder='Enter brand name'
              className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent'
            />
            <button
              onClick={handleBrandUpdate}
              disabled={!inputBrandName.trim() || isUpdating}
              className='px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              Update
            </button>
          </div>
        </div>

        {/* Brand Examples */}
        <div className='space-y-3'>
          <h4 className='font-medium text-gray-900'>Quick Examples</h4>
          <div className='grid grid-cols-2 gap-2'>
            {brandExamples.map(brand => (
              <button
                key={brand.name}
                onClick={() => handleExampleClick(brand.name)}
                disabled={isUpdating}
                className='px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-left'
              >
                <span className='font-mono font-bold mr-2'>
                  {brand.name.charAt(0).toLowerCase()}
                </span>
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <div className='pt-4 border-t border-gray-200'>
          <button
            onClick={resetToDefault}
            disabled={isUpdating}
            className='w-full px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            Reset to Default
          </button>
        </div>

        {/* Instructions */}
        <div className='bg-blue-50 rounded-lg p-4 text-sm'>
          <h5 className='font-medium text-blue-900 mb-1'>How it works:</h5>
          <ul className='text-blue-800 space-y-1 text-xs'>
            <li>• Favicon automatically updates based on brand name changes</li>
            <li>• Uses the first character of the brand name</li>
            <li>• Generates multiple sizes (16x16, 32x32, 64x64, etc.)</li>
            <li>• Works with Apple touch icons and PWA manifests</li>
            <li>• Check your browser tab to see the changes!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaviconDemo;
