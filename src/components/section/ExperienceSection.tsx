import React from 'react';

import Button from '@/components/ui/Button';

import { EXPERIENCES } from '@/constants';

const ExperienceSection: React.FC = () => {
  return (
    <section
      id='experience'
      className='py-20 bg-gray-50'
      aria-labelledby='experience-heading'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            id='experience-heading'
            className='text-3xl font-bold text-gray-900 mb-4'
          >
            {'Experience'}
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            {
              'My journey through different companies and roles, each contributing to my growth as a front-end developer and UI specialist.'
            }
          </p>
        </div>

        <div
          className='space-y-8'
          role='list'
          aria-label='Professional experience timeline'
        >
          {EXPERIENCES.map((exp, index) => (
            <article
              key={index}
              className={`bg-white rounded-xl p-8 border-l-4 ${
                exp.current
                  ? 'border-l-gray-900 shadow-md'
                  : 'border-l-gray-300'
              }`}
              role='listitem'
              aria-labelledby={`job-title-${index}`}
              aria-describedby={`job-description-${index}`}
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
                <div>
                  <div className='flex items-center gap-3 mb-1'>
                    <h3
                      id={`job-title-${index}`}
                      className='text-xl font-semibold text-gray-900'
                    >
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span
                        className='bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium'
                        aria-label='Currently employed'
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <div className='text-gray-600 font-medium mb-1'>
                    {exp.company}
                  </div>
                  <time
                    className='text-sm text-gray-500'
                    dateTime={exp.period.replace(' - ', '/')}
                    aria-label={`Employment period: ${exp.period}`}
                  >
                    {exp.period}
                  </time>
                </div>
              </div>

              <p
                id={`job-description-${index}`}
                className='text-gray-600 mb-4 leading-relaxed'
              >
                {exp.description}
              </p>

              <div>
                <h4
                  id={`achievements-heading-${index}`}
                  className='text-sm font-semibold text-gray-900 mb-3'
                >
                  Key Achievements:
                </h4>
                <ul
                  className='space-y-2'
                  aria-labelledby={`achievements-heading-${index}`}
                >
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className='flex items-start gap-3'>
                      <div
                        className='w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0'
                        aria-hidden='true'
                      ></div>
                      <span className='text-sm text-gray-600'>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button
            variant='primary'
            onClick={() =>
              window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
            }
            aria-label='Download full resume PDF file'
          >
            {'Download Full Resume'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
