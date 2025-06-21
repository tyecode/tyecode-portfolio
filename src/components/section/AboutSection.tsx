import { ABOUT_SKILLS, ABOUT_STATS, ABOUT_CONTENT } from '@/constants';

const AboutSection = () => {
  return (
    <section
      id='about'
      className='py-20 bg-gray-50 section-about prevent-layout-shift'
      aria-labelledby='about-heading'
    >
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          <div>
            <h2
              id='about-heading'
              className='text-3xl font-bold text-gray-900 mb-6'
            >
              {'About Me'}
            </h2>
            <div className='space-y-4 text-gray-600 leading-relaxed'>
              {ABOUT_CONTENT.map((paragraph, index) => (
                <p
                  key={index}
                  className='text-lg text-gray-600 leading-relaxed'
                >
                  {paragraph}
                </p>
              ))}
              <p className='text-lg text-gray-600 leading-relaxed'>
                Check out my{' '}
                <a
                  href='#work'
                  className='text-gray-900 font-medium hover:underline transition-colors'
                  aria-label='View my portfolio projects'
                >
                  portfolio projects
                </a>{' '}
                to see these skills in action, or view my{' '}
                <a
                  href='#experience'
                  className='text-gray-900 font-medium hover:underline transition-colors'
                  aria-label='View my professional experience'
                >
                  professional experience
                </a>{' '}
                for more details about my career journey.
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
            <ul
              className='grid grid-cols-2 gap-3'
              aria-labelledby='skills-heading'
            >
              {ABOUT_SKILLS.map((skill, index) => (
                <li
                  key={index}
                  className='bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200'
                >
                  {skill}
                </li>
              ))}
            </ul>

            <div className='mt-12'>
              <h3
                id='stats-heading'
                className='text-xl font-semibold text-gray-900 mb-6'
              >
                {'Quick Stats'}
              </h3>
              <ul
                className='grid grid-cols-2 gap-6'
                aria-labelledby='stats-heading'
              >
                {ABOUT_STATS.map((stat, index) => (
                  <li key={index}>
                    <div
                      className='text-2xl font-bold text-gray-900 mb-1'
                      aria-label={stat.ariaLabel}
                    >
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
