import { useState, useEffect } from 'react';

import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { getBasePath } from '@/config/meta-tags';
import { HERO_CONTENT, SOCIAL_LINKS } from '@/constants';

const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const profileImagePath = `${getBasePath()}/images/portrait.png`;

  useEffect(() => {
    // Hide static hero content once React has hydrated
    const staticHero = document.getElementById('static-hero');
    if (staticHero) {
      staticHero.style.display = 'none';
    }
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      className='hero-section pt-24 pb-16 bg-white'
      aria-labelledby='hero-heading'
    >
      <div className='hero-container max-w-6xl mx-auto px-6 lg:px-8 relative'>
        <div className='hero-content max-w-3xl'>
          <div className='mb-6'>
            <span
              className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800'
              role='status'
              aria-label='Availability status'
            >
              {HERO_CONTENT.availabilityStatus}
            </span>
          </div>

          <h1
            id='hero-heading'
            className='hero-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'
          >
            Hi, I&apos;m{' '}
            <span className='text-gray-600'>{HERO_CONTENT.name}</span>
            <br />
            <span className='text-gray-900'>Front-End</span>{' '}
            <span className='text-gray-600'>Web Developer</span>
          </h1>

          <p className='hero-lcp-text text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl'>
            I create beautiful, responsive, and user-friendly web applications
            using modern front-end technologies. Currently crafting exceptional
            user experiences at{' '}
            <span className='text-gray-900 font-medium'>
              {HERO_CONTENT.currentCompany}
            </span>
            , previously at{' '}
            <span className='text-gray-900 font-medium'>
              {HERO_CONTENT.previousCompany}
            </span>
            . Explore my{' '}
            <a
              href='#work'
              className='text-gray-900 font-medium hover:underline transition-colors'
              aria-label='View portfolio projects'
            >
              featured projects
            </a>{' '}
            or learn more{' '}
            <a
              href='#about'
              className='text-gray-900 font-medium hover:underline transition-colors'
              aria-label='Learn about my background'
            >
              about my experience
            </a>
            .
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mb-10'>
            <Button
              as='link'
              href='#work'
              variant='primary'
              aria-describedby='projects-description'
            >
              {'View My Projects'}
            </Button>
            <Button
              variant='secondary'
              onClick={() =>
                window.open(`${getBasePath()}/resume.pdf`, '_blank')
              }
              aria-label='Download resume PDF file'
            >
              {'Download Resume'}
            </Button>
          </div>
          <div id='projects-description' className='sr-only'>
            Navigate to the portfolio section to view my front-end development
            projects and{' '}
            <a href='#experience' className='underline'>
              professional experience
            </a>
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
                alt={`Portrait of ${HERO_CONTENT.name}, a professional Front-End Web Developer specializing in React.`}
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
            className={cn('hidden')}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
