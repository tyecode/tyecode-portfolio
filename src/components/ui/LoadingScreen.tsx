import Brand from '@/components/ui/Brand';
import { BRAND_INFO } from '@/constants';

const LoadingScreen = () => {
  return (
    <div className='loading-screen fixed inset-0 bg-white flex items-center justify-center z-50'>
      <div className='loading-content text-center'>
        {/* Logo/Brand */}
        <div className='mb-8'>
          <div className='mb-4 flex justify-center'>
            <Brand
              size='lg'
              brandName={BRAND_INFO.name}
              showText={false}
              className='animate-pulse'
            />
          </div>
          <h2 className='loading-title text-xl font-bold text-gray-900 mb-2'>
            {BRAND_INFO.name}
          </h2>
          <p className='loading-subtitle text-gray-500 text-sm'>
            Building something amazing...
          </p>
        </div>

        {/* Loading Animation */}
        <div className='loading-dots flex justify-center space-x-1'>
          <div className='loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
