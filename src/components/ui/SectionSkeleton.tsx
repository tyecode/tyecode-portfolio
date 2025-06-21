import React from 'react';

interface SectionSkeletonProps {
  className?: string;
  minHeight?: string;
  variant?: 'default' | 'contact' | 'work' | 'about' | 'experience' | 'hero';
}

// Utility function to combine class names (simple version of cn)
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Individual skeleton components for better reusability
const SkeletonBox: React.FC<{ className?: string; animate?: boolean }> = ({
  className = '',
  animate = true,
}) => (
  <div
    className={cn(
      'bg-gray-100 rounded-lg',
      animate ? 'animate-pulse' : undefined,
      className
    )}
  />
);

const SkeletonText: React.FC<{
  lines?: number;
  className?: string;
  widths?: string[];
}> = ({ lines = 1, className = '', widths = ['w-full'] }) => (
  <div className={cn('space-y-3', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBox
        key={i}
        className={cn('h-4', widths[i % widths.length] || 'w-full')}
      />
    ))}
  </div>
);

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
  className = '',
  minHeight = 'min-h-96',
  variant = 'default',
}) => {
  const getSkeletonContent = () => {
    switch (variant) {
      case 'hero':
        return (
          <div className='max-w-3xl'>
            {/* Status badge */}
            <div className='mb-6'>
              <SkeletonBox className='h-6 w-48' />
            </div>

            {/* Main heading */}
            <div className='mb-6 space-y-4'>
              <SkeletonBox className='h-12 w-full' />
              <SkeletonBox className='h-12 w-4/5' />
            </div>

            {/* Description */}
            <div className='mb-8'>
              <SkeletonText lines={3} widths={['w-full', 'w-5/6', 'w-3/4']} />
            </div>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-12'>
              <SkeletonBox className='h-12 w-36' />
              <SkeletonBox className='h-12 w-40' />
            </div>

            {/* Social links */}
            <div className='flex items-center space-x-6'>
              {[1, 2, 3, 4].map(i => (
                <SkeletonBox key={i} className='h-4 w-16' />
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Form side */}
            <div className='space-y-6'>
              {/* Form fields */}
              <div className='space-y-2'>
                <SkeletonBox className='h-5 w-16' />
                <SkeletonBox className='h-12 w-full' />
              </div>
              <div className='space-y-2'>
                <SkeletonBox className='h-5 w-16' />
                <SkeletonBox className='h-12 w-full' />
              </div>
              <div className='space-y-2'>
                <SkeletonBox className='h-5 w-20' />
                <SkeletonBox className='h-32 w-full' />
              </div>
              <SkeletonBox className='h-12 w-full' />
            </div>

            {/* Info side */}
            <div className='space-y-8'>
              <div>
                <SkeletonBox className='h-6 w-32 mb-6' />
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <SkeletonBox className='w-10 h-10 rounded-lg' />
                    <div className='space-y-2'>
                      <SkeletonBox className='h-4 w-12' />
                      <SkeletonBox className='h-4 w-36' />
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <SkeletonBox className='w-10 h-10 rounded-lg' />
                    <div className='space-y-2'>
                      <SkeletonBox className='h-4 w-16' />
                      <SkeletonBox className='h-4 w-28' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Info cards */}
              <div className='space-y-4'>
                <SkeletonBox className='h-24 w-full rounded-lg' />
                <SkeletonBox className='h-20 w-full rounded-lg' />
              </div>
            </div>
          </div>
        );

      case 'work':
        return (
          <div className='grid lg:grid-cols-2 gap-8'>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className='space-y-4'>
                {/* Project image */}
                <div className='relative'>
                  <SkeletonBox className='aspect-video w-full rounded-xl' />
                  <div className='absolute top-4 left-4'>
                    <SkeletonBox className='h-6 w-24 rounded-full' />
                  </div>
                </div>

                {/* Project info */}
                <div className='space-y-3'>
                  <SkeletonBox className='h-6 w-3/4' />
                  <SkeletonText lines={2} widths={['w-full', 'w-5/6']} />

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {[1, 2, 3].map(j => (
                      <SkeletonBox key={j} className='h-6 w-16 rounded' />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'about':
        return (
          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            {/* Text content */}
            <div className='space-y-6'>
              <SkeletonBox className='h-8 w-1/3' />
              <div className='space-y-4'>
                <SkeletonText
                  lines={4}
                  widths={['w-full', 'w-11/12', 'w-full', 'w-4/5']}
                />
              </div>
            </div>

            {/* Skills and stats */}
            <div className='space-y-12'>
              {/* Skills section */}
              <div>
                <SkeletonBox className='h-6 w-1/2 mb-6' />
                <div className='grid grid-cols-2 gap-3'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <SkeletonBox key={i} className='h-10 rounded-lg' />
                  ))}
                </div>
              </div>

              {/* Stats section */}
              <div>
                <SkeletonBox className='h-6 w-1/3 mb-6' />
                <div className='grid grid-cols-2 gap-6'>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className='space-y-2'>
                      <SkeletonBox className='h-8 w-12' />
                      <SkeletonBox className='h-4 w-20' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className='space-y-8'>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className='bg-white rounded-xl p-8 border-l-4 border-l-gray-200'
              >
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <SkeletonBox className='h-6 w-48' />
                      {i === 1 && <SkeletonBox className='h-5 w-16 rounded' />}
                    </div>
                    <SkeletonBox className='h-5 w-32' />
                    <SkeletonBox className='h-4 w-24' />
                  </div>
                </div>

                <div className='mb-4'>
                  <SkeletonText lines={2} widths={['w-full', 'w-4/5']} />
                </div>

                <div>
                  <SkeletonBox className='h-5 w-32 mb-3' />
                  <div className='space-y-2'>
                    {[1, 2, 3].map(j => (
                      <div key={j} className='flex items-start gap-3'>
                        <SkeletonBox className='w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0' />
                        <SkeletonBox className='h-4 w-5/6' />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className='space-y-8'>
            <div className='space-y-4'>
              <SkeletonBox className='h-8 w-1/3' />
              <SkeletonText lines={3} widths={['w-full', 'w-5/6', 'w-3/4']} />
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[1, 2, 3].map(i => (
                <div key={i} className='space-y-4'>
                  <SkeletonBox className='h-32 rounded-lg' />
                  <SkeletonBox className='h-6 w-3/4' />
                  <SkeletonText lines={2} widths={['w-full', 'w-2/3']} />
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  const getBgClass = () => {
    switch (variant) {
      case 'hero':
        return 'bg-white';
      case 'about':
      case 'contact':
        return 'bg-gray-50';
      case 'work':
      case 'experience':
        return 'bg-white';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={cn(className, minHeight, getBgClass())}>
      <div className='max-w-6xl mx-auto px-6 lg:px-8 py-20'>
        {variant !== 'hero' && (
          <div className='text-center mb-16'>
            <SkeletonBox className='h-8 w-1/3 mx-auto mb-4' />
            <SkeletonBox className='h-5 w-2/3 mx-auto' />
          </div>
        )}
        {getSkeletonContent()}
      </div>
    </div>
  );
};

export default SectionSkeleton;
