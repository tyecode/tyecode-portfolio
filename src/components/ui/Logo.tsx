import React from 'react';

import { cn } from '@/utils/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const iconSizeClasses = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm',
  };

  return (
    <a href='/#' className={cn('flex items-center space-x-3', className)}>
      <div
        className={cn(
          sizeClasses[size],
          'rounded-xl bg-gray-900 hover:bg-gray-800 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group select-none'
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
              <span className='text-white font-bold mx-0.5'>T</span>
              <span className='text-white/90'>&#125;</span>
            </div>
          </div>
        </div>
      </div>
      {showText && (
        <span
          className={cn(
            textSizeClasses[size],
            'font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200'
          )}
        >
          tyecode
        </span>
      )}
    </a>
  );
};

export default Logo;
