import {
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
  CONTACT_INFO,
  AVAILABILITY_STATUS,
  BRAND_INFO,
} from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='bg-gray-900 text-white py-12'
      role='contentinfo'
      aria-label='Site footer'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <h2 className='text-2xl font-bold mb-4'>{BRAND_INFO.name}</h2>
            <p className='text-gray-300 mb-4 max-w-md leading-relaxed'>
              {BRAND_INFO.description}
            </p>
            <div className='flex items-center gap-1 text-sm text-gray-400'>
              <span>{AVAILABILITY_STATUS.text}</span>
              <div
                className={`w-2 h-2 rounded-full ${
                  AVAILABILITY_STATUS.available ? 'bg-green-400' : 'bg-gray-400'
                }`}
                aria-label={AVAILABILITY_STATUS.ariaLabel}
                role='img'
              ></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <nav aria-label='Footer navigation'>
              <ul className='space-y-2'>
                {NAVIGATION_LINKS.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className='text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none rounded-md'
                      aria-label={`Navigate to ${link.label} section`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Connect</h3>
            <div className='space-y-3'>
              <div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className='text-gray-300 hover:text-white transition-colors duration-200 text-sm focus:outline-none rounded-md'
                  aria-label={`Send email to ${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <nav aria-label='Social media links'>
                <ul className='flex space-x-4'>
                  {SOCIAL_LINKS.map(social => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-300 hover:text-white transition-colors duration-200 text-sm focus:outline-none rounded-md'
                        aria-label={social.ariaLabel}
                      >
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-sm text-gray-400'>
              <span>{`© ${currentYear} tyecode. All rights reserved.`}</span>
            </div>
            <div className='flex items-center gap-6 text-sm text-gray-400'>
              <a
                href='#contact'
                className='hover:text-white transition-colors duration-200 focus:outline-none rounded-md flex-center'
                aria-label='Contact for privacy policy information'
              >
                {'Privacy Policy'}
              </a>
              <a
                href='#contact'
                className='hover:text-white transition-colors duration-200 focus:outline-none rounded-md flex-center'
                aria-label='Contact for terms of service information'
              >
                {'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
