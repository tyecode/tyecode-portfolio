import React from 'react';

import { ABOUT_SKILLS, ABOUT_STATS } from '@/constants';

const AboutSection: React.FC = () => {
  return (
    <section
      id='about'
      className='py-20 bg-gray-50'
      aria-labelledby='about-heading'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          <div>
            <h2
              id='about-heading'
              className='text-3xl font-bold text-gray-900 mb-6'
            >
              {'About Me'}
            </h2>
            <div className='space-y-4 text-gray-600 leading-relaxed'>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                {
                  "I'm passionate about creating user-friendly web applications that deliver exceptional user experiences. With expertise in modern JavaScript frameworks, I focus on building scalable, accessible, and performant solutions."
                }
              </p>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                {
                  'Currently working at Creative Digital Agency, I specialize in React and TypeScript development, crafting responsive interfaces that work seamlessly across all devices. Check out my '
                }
                <a
                  href='#work'
                  className='text-gray-900 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 rounded'
                >
                  latest projects
                </a>
                {' or view my '}
                <a
                  href='#experience'
                  className='text-gray-900 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 rounded'
                >
                  professional experience
                </a>
                {' to learn more about my development journey.'}
              </p>
            </div>
          </div>

          <div>
            <h3
              id='skills-heading'
              className='text-xl font-semibold text-gray-900 mb-6'
            >
              {'Skills & Expertise'}
            </h3>
            <div
              className='grid grid-cols-2 gap-3'
              role='list'
              aria-labelledby='skills-heading'
            >
              {ABOUT_SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className='bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200'
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className='mt-12'>
              <h3
                id='stats-heading'
                className='text-xl font-semibold text-gray-900 mb-6'
              >
                {'Quick Stats'}
              </h3>
              <div
                className='grid grid-cols-2 gap-6'
                role='list'
                aria-labelledby='stats-heading'
              >
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index}>
                    <div
                      className='text-2xl font-bold text-gray-900 mb-1'
                      aria-label={stat.ariaLabel}
                    >
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
