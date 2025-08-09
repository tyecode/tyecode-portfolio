import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { PROJECTS } from '@/constants';

const WorkSection = () => {
  return (
    <section
      id='work'
      className='py-20 bg-white section-work prevent-layout-shift'
      aria-labelledby='work-heading'
    >
      <div className='container relative'>
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

        <ul
          className='grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr'
          aria-label='Featured projects'
        >
          {PROJECTS.map((project, index) => (
            <li key={index} className='rounded-xl h-full'>
              <article className='h-full'>
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group block cursor-pointer h-full'
                    aria-label={`View ${project.title} project`}
                  >
                    <div className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 focus:outline-none h-full flex flex-col'>
                      <div
                        className={cn(
                          'h-48 relative flex-shrink-0',
                          project.gradient
                        )}
                        role='img'
                        aria-label={`${project.title} project preview`}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`Screenshot of the ${project.title} project, a ${project.category} built with React.`}
                            className='w-full h-full object-cover opacity-0 transition-opacity duration-300'
                            onLoad={e => {
                              // Show image once it successfully loads
                              e.currentTarget.style.opacity = '1';
                            }}
                            onError={e => {
                              // Hide image on error, showing gradient fallback
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : null}
                        <div className='absolute top-4 left-4'>
                          <span
                            className='bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900'
                            aria-label={`Project category: ${project.category}`}
                          >
                            {project.category}
                          </span>
                        </div>
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300'></div>
                      </div>

                      <div className='p-6 flex flex-col flex-grow'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200'>
                          {project.title}
                        </h3>
                        <p className='text-gray-900 mb-4 text-sm leading-relaxed flex-grow'>
                          {project.description}
                        </p>

                        <ul
                          className='flex flex-wrap gap-2 mt-auto'
                          aria-label={`Technologies used in ${project.title}`}
                        >
                          {project.tags.map((tag, tagIndex) => (
                            <li
                              key={tagIndex}
                              className='bg-gray-200 text-gray-900 px-2 py-1 rounded text-xs font-medium'
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className='cursor-not-allowed h-full'>
                    <div className='bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col'>
                      <div
                        className={cn(
                          'h-48 relative opacity-50 flex-shrink-0',
                          project.gradient // Always apply gradient as background
                        )}
                        role='img'
                        aria-label={`${project.title} project preview - Coming soon`}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={`Screenshot of the ${project.title} project, a ${project.category} built with React.`}
                            className='w-full h-full object-cover opacity-0 transition-opacity duration-300'
                            onLoad={e => {
                              // Show image once it successfully loads
                              e.currentTarget.style.opacity = '1';
                            }}
                            onError={e => {
                              // Hide image on error, showing gradient fallback
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : null}
                        <div className='absolute top-4 left-4'>
                          <span
                            className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900'
                            aria-label={`Project category: ${project.category}`}
                          >
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className='p-6 flex flex-col flex-grow'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2 opacity-60'>
                          {project.title}
                        </h3>
                        <p className='text-gray-900 mb-4 text-sm leading-relaxed opacity-60 flex-grow'>
                          {project.description}
                        </p>

                        <ul
                          className='flex flex-wrap gap-2 opacity-60 mt-auto'
                          aria-label={`Technologies used in ${project.title}`}
                        >
                          {project.tags.map((tag, tagIndex) => (
                            <li
                              key={tagIndex}
                              className='bg-gray-200 text-gray-900 px-2 py-1 rounded text-xs font-medium'
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>

        <div className='text-center mt-12 hidden'>
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
