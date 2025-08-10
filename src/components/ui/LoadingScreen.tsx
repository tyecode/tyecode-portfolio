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
    <div
      className={`loading-screen fixed inset-0 bg-white flex items-center justify-center z-50 ${!isVisible ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className='loading-content text-center'>
        {/* Logo/Brand */}
        <div className='mb-8'>
          <div className='mb-4 flex justify-center'>
            <div
              className='logo lg animate-pulse'
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div
                className='logo-text'
                style={{
                  color: 'white',
                  fontFamily: 'monospace',
                  fontSize: '16px',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ opacity: 0.9 }}>&#123;</span>
                <span style={{ fontWeight: 'bold', margin: '0 2px' }}>
                  {character}
                </span>
                <span style={{ opacity: 0.9 }}>&#125;</span>
              </div>
            </div>
          </div>
          <h2
            className='loading-title text-xl font-bold text-gray-900 mb-2'
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 0.5rem 0',
            }}
          >
            {BRAND_INFO.name}
          </h2>
          <p
            className='loading-subtitle text-gray-500 text-sm'
            style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              margin: '0 0 2rem 0',
            }}
          >
            Building something amazing...
          </p>
        </div>

        {/* Loading Animation */}
        <div
          className='loading-dots flex justify-center space-x-1'
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          <div
            className='loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#9ca3af',
              borderRadius: '50%',
              animation: 'bounce 1s infinite',
              animationDelay: '-0.3s',
            }}
          ></div>
          <div
            className='loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#9ca3af',
              borderRadius: '50%',
              animation: 'bounce 1s infinite',
              animationDelay: '-0.15s',
            }}
          ></div>
          <div
            className='loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce'
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#9ca3af',
              borderRadius: '50%',
              animation: 'bounce 1s infinite',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
