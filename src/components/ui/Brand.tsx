import { cn } from '@/utils/cn';
import { getBasePath } from '@/utils/package-info';
import Logo from './Logo';

interface BrandProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  brandName?: string;
}

const Brand: React.FC<BrandProps> = ({
  size = 'md',
  showText = true,
  className = '',
  brandName = '',
}) => {
  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const character = brandName.charAt(0);

  return (
    <a
      href={`${getBasePath()}/#`}
      className={cn('flex items-center space-x-3', className)}
    >
      <Logo size={size} character={character} />

      {showText && (
        <span
          className={cn(
            textSizeClasses[size],
            'font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200'
          )}
        >
          {brandName}
        </span>
      )}
    </a>
  );
};

export default Brand;
