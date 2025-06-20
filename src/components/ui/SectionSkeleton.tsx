import { cn } from '@/utils/cn';

interface SectionSkeletonProps {
  className?: string;
  minHeight?: string;
  variant?: 'default' | 'contact' | 'work' | 'about' | 'experience';
}

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
  className = '',
  minHeight = 'min-h-96',
  variant = 'default',
}) => {
  const getSkeletonContent = () => {
    switch (variant) {
      case 'contact':
        return (
          <div className='grid lg:grid-cols-2 gap-12'>
            <div className='space-y-6'>
              <div className='h-6 bg-gray-200 rounded w-1/2'></div>
              <div className='space-y-4'>
                <div className='h-12 bg-gray-200 rounded'></div>
                <div className='h-12 bg-gray-200 rounded'></div>
                <div className='h-32 bg-gray-200 rounded'></div>
                <div className='h-12 bg-gray-200 rounded'></div>
              </div>
            </div>
            <div className='space-y-8'>
              <div className='h-6 bg-gray-200 rounded w-1/3'></div>
              <div className='space-y-4'>
                <div className='h-16 bg-gray-200 rounded'></div>
                <div className='h-16 bg-gray-200 rounded'></div>
              </div>
            </div>
          </div>
        );
      case 'work':
        return (
          <div className='space-y-12'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[1, 2, 3].map(i => (
                <div key={i} className='space-y-4'>
                  <div className='aspect-video bg-gray-200 rounded-lg'></div>
                  <div className='h-6 bg-gray-200 rounded w-3/4'></div>
                  <div className='space-y-2'>
                    <div className='h-4 bg-gray-200 rounded'></div>
                    <div className='h-4 bg-gray-200 rounded w-2/3'></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className='grid lg:grid-cols-2 gap-16'>
            <div className='space-y-6'>
              <div className='h-8 bg-gray-200 rounded w-1/3'></div>
              <div className='space-y-4'>
                <div className='h-4 bg-gray-200 rounded'></div>
                <div className='h-4 bg-gray-200 rounded w-5/6'></div>
                <div className='h-4 bg-gray-200 rounded w-4/5'></div>
              </div>
            </div>
            <div className='space-y-8'>
              <div className='h-6 bg-gray-200 rounded w-1/2'></div>
              <div className='grid grid-cols-2 gap-3'>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className='h-10 bg-gray-200 rounded'></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className='space-y-8'>
            {[1, 2, 3].map(i => (
              <div key={i} className='space-y-4'>
                <div className='flex justify-between items-start'>
                  <div className='h-6 bg-gray-200 rounded w-1/3'></div>
                  <div className='h-4 bg-gray-200 rounded w-1/5'></div>
                </div>
                <div className='space-y-2'>
                  <div className='h-4 bg-gray-200 rounded'></div>
                  <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className='space-y-8'>
            <div className='h-8 bg-gray-200 rounded w-1/3'></div>
            <div className='space-y-4'>
              <div className='h-4 bg-gray-200 rounded w-full'></div>
              <div className='h-4 bg-gray-200 rounded w-3/4'></div>
              <div className='h-4 bg-gray-200 rounded w-1/2'></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={cn(className, minHeight, 'section-skeleton')}>
      <div className='max-w-6xl mx-auto px-6 lg:px-8 py-20'>
        <div className='text-center mb-16'>
          <div className='h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4'></div>
          <div className='h-4 bg-gray-200 rounded w-2/3 mx-auto'></div>
        </div>
        {getSkeletonContent()}
      </div>
    </div>
  );
};

export default SectionSkeleton;
