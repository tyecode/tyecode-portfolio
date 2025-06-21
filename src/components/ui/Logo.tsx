import { cn } from '@/utils/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  character?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  character = '-',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div
      className={cn(
        sizeClasses[size],
        'rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group select-none',
        className
      )}
    >
      <div className='relative'>
        <div
          className={cn(
            'text-white font-mono leading-none',
            iconSizeClasses[size]
          )}
        >
          <div className='flex items-center justify-center'>
            <span className='text-white/90'>&#123;</span>
            <span className='text-white font-bold mx-0.5'>{character}</span>
            <span className='text-white/90'>&#125;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
