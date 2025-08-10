import { usePreloader } from '@/hooks/usePreloader';
import { BRAND_INFO } from '@/constants';

const LoadingScreen = () => {
  const { shouldShow, isVisible } = usePreloader({
    minLoadingTime: 800,
    fadeOutDuration: 500,
  });

  // Don't render anything if loading is complete
  if (!shouldShow) {
    return null;
  }

  const character = BRAND_INFO.name.charAt(0);

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className='loading-content'>
        {/* Logo/Brand */}
        <div className='mb-8'>
          <div className='mb-4 flex justify-center'>
            <div className='logo lg'>
              <div className='logo-text'>
                <span className='bracket'>&#123;</span>
                <span className='character'>{character}</span>
                <span className='bracket'>&#125;</span>
              </div>
            </div>
          </div>
          <h2 className='loading-title'>{BRAND_INFO.name}</h2>
          <p className='loading-subtitle'>Building something amazing...</p>
        </div>

        {/* Loading Animation */}
        <div className='loading-dots'>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
