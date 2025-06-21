import ContactForm, { ContactFormData } from '@/components/ui/ContactForm';
import { submitContactForm } from '@/utils/contact';
import { CONTACT_INFO, CONTACT_CONTENT } from '@/constants';

const ContactSection = () => {
  const handleFormSubmit = async (data: ContactFormData) => {
    await submitContactForm(data);
  };

  return (
    <section
      id='contact'
      className='py-20 bg-gray-50 section-contact prevent-layout-shift'
      aria-labelledby='contact-heading'
    >
      <div className='max-w-4xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          {/* Change: Replaced hardcoded text with dynamic constant */}
          <h2
            id='contact-heading'
            className='text-3xl font-bold text-gray-900 mb-4'
          >
            {CONTACT_CONTENT.heading}
          </h2>
          {/* Change: Replaced hardcoded text with dynamic constant */}
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            {CONTACT_CONTENT.subheading}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                {'Get in Touch'}
              </h3>

              <address className='space-y-4 not-italic'>
                <div className='flex items-center gap-4'>
                  <div
                    className='w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <svg
                      className='w-5 h-5 text-gray-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-medium text-gray-900'>Email</div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className='text-gray-600 hover:text-gray-900 focus:outline-none'
                      aria-label={`Send email to ${CONTACT_INFO.email}`}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div
                    className='w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <svg
                      className='w-5 h-5 text-gray-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-medium text-gray-900'>Location</div>
                    <div className='text-gray-600'>{CONTACT_INFO.location}</div>
                  </div>
                </div>
              </address>
            </div>

            <div className='bg-white p-6 rounded-lg'>
              <h4 className='font-semibold text-gray-900 mb-3'>
                {CONTACT_CONTENT.availability.heading}
              </h4>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {CONTACT_CONTENT.availability.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
