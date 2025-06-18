import React, { useState } from 'react';

import Button from '@/components/ui/Button';

import { HERO_CONTENT, SOCIAL_LINKS } from '@/constants';

const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Dynamic base path - use GitHub Pages path for static builds, root path for SSR
  const basePath =
    import.meta.env.VITE_STATIC_BUILD === 'true' ? '/tyecode-portfolio' : '';
  const profileImagePath = `${basePath}/images/portrait.jpg`;
  const resumePath = `${basePath}/resume.pdf`;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      id='hero'
      className='min-h-screen bg-gradient-to-br from-gray-50 to-white flex-center py-20'
    >
      <div className='container mx-auto px-6 relative'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight'>
            {"Hi, I'm "}
            <span className='text-gray-700'>{HERO_CONTENT.name}</span>
            <br />
            {HERO_CONTENT.title.split(' ').map((word, index) => (
              <span
                key={index}
                className={index === 0 ? 'text-gray-900' : 'text-gray-700'}
              >
                {word}
                {index < HERO_CONTENT.title.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>

          <p className='text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl'>
            {HERO_CONTENT.description.split(' at ')[0]} at{' '}
            <span className='text-gray-900 font-medium'>
              {HERO_CONTENT.description.split(' at ')[1]?.split('.')[0]}
            </span>
            .{' '}
            {HERO_CONTENT.description
              .split('. ')[1]
              ?.replace(HERO_CONTENT.name, '')}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mb-10'>
            <Button
              as='link'
              href='#work'
              variant='primary'
              aria-describedby='projects-description'
            >
              {'View My Front-End Projects'}
            </Button>
            <Button
              variant='secondary'
              onClick={() => window.open(resumePath, '_blank')}
              aria-label='Download resume PDF file'
            >
              {'Download Resume'}
            </Button>
          </div>
          <div id='projects-description' className='sr-only'>
            Navigate to the portfolio section to view my front-end development
            projects showcasing React, TypeScript, and modern CSS frameworks
          </div>

          <nav
            className='flex items-center space-x-6 text-sm text-gray-500'
            aria-label='Social media links'
          >
            {SOCIAL_LINKS.map(social => (
              <a
                key={social.name}
                href={social.href}
                className='hover:text-gray-900 transition-colors duration-200 hover:underline flex-center'
                aria-label={social.ariaLabel}
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Profile Image */}
        <div className='absolute top-8 right-8 lg:right-8 hidden lg:block'>
          <div className='w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden'>
            {profileImagePath && imageLoaded && !imageError ? (
              <img
                src={profileImagePath}
                alt='tyecode - Front-End Web Developer'
                className='w-full h-full object-cover'
                loading='eager'
                onError={handleImageError}
                onLoad={handleImageLoad}
                draggable={false}
              />
            ) : (
              <div className='w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400' />
            )}
          </div>
        </div>

        {/* Hidden preloader image */}
        {profileImagePath && !imageLoaded && !imageError && (
          <img
            src={profileImagePath}
            alt=''
            className='hidden'
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
