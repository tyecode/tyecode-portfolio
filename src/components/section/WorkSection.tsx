import Button from '@/components/ui/Button';

import { PROJECTS } from '@/constants';

const WorkSection = () => {
  return (
    <section
      id='work'
      className='py-20 bg-white section-work prevent-layout-shift'
      aria-labelledby='work-heading'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-8 relative'>
        <div className='text-center mb-16'>
          <h2
            id='work-heading'
            className='text-3xl font-bold text-gray-900 mb-4'
          >
            {'Featured Projects'}
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            {
              "A showcase of user interfaces and web applications I've built, demonstrating my front-end development skills and attention to user experience design. Learn more "
            }
            <a
              href='#about'
              className='text-gray-900 font-medium hover:underline transition-colors'
              aria-label='Learn about my technical skills'
            >
              about my skills
            </a>{' '}
            or{' '}
            <a
              href='#contact'
              className='text-gray-900 font-medium hover:underline transition-colors'
              aria-label='Get in touch for collaboration'
            >
              get in touch
            </a>{' '}
            to discuss your next project.
          </p>
        </div>

        <div
          className='grid lg:grid-cols-2 gap-8'
          role='list'
          aria-label='Portfolio projects'
        >
          {PROJECTS.map((project, index) => (
            <article key={index} role='listitem' className='rounded-xl'>
              {project.link && project.link !== '#' ? (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group block cursor-pointer'
                  aria-label={`View ${project.title} project`}
                >
                  <div className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'>
                    <div
                      className={`h-48 ${project.image} relative`}
                      role='img'
                      aria-label={`${project.title} project preview`}
                    >
                      <div className='absolute top-4 left-4'>
                        <span
                          className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900'
                          aria-label={`Project category: ${project.category}`}
                        >
                          {project.category}
                        </span>
                      </div>
                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300'></div>
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200'>
                        {project.title}
                      </h3>
                      <p className='text-gray-900 mb-4 text-sm leading-relaxed'>
                        {project.description}
                      </p>

                      <div
                        className='flex flex-wrap gap-2'
                        role='list'
                        aria-label={`Technologies used in ${project.title}`}
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            role='listitem'
                            className='bg-gray-200 text-gray-900 px-2 py-1 rounded text-xs font-medium'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className='cursor-not-allowed'>
                  <div className='bg-white border border-gray-200 rounded-xl overflow-hidden'>
                    <div
                      className={`h-48 ${project.image} relative opacity-50`}
                      role='img'
                      aria-label={`${project.title} project preview - Coming soon`}
                    >
                      <div className='absolute top-4 left-4'>
                        <span
                          className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900'
                          aria-label={`Project category: ${project.category}`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2 opacity-60'>
                        {project.title}
                      </h3>
                      <p className='text-gray-900 mb-4 text-sm leading-relaxed opacity-60'>
                        {project.description}
                      </p>

                      <div
                        className='flex flex-wrap gap-2 opacity-60'
                        role='list'
                        aria-label={`Technologies used in ${project.title}`}
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            role='listitem'
                            className='bg-gray-200 text-gray-900 px-2 py-1 rounded text-xs font-medium'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button
            as='link'
            href='#contact'
            variant='secondary'
            aria-describedby='view-all-description'
          >
            {'View All Projects'}
          </Button>
          <div id='view-all-description' className='sr-only'>
            Contact me to see more of my front-end development projects and
            discuss collaboration opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
