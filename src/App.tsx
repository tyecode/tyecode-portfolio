import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from '@/components/layout/MainLayout';
import SectionSkeleton from '@/components/ui/SectionSkeleton';
import MetaTags from '@/components/seo/MetaTags';
import { useSEO } from '@/hooks/useSEO';

// Import HeroSection directly instead of lazy loading for immediate LCP
import HeroSection from '@/components/section/HeroSection';

// Lazy load only below-the-fold components for better performance
const AboutSection = lazy(
  () =>
    import('@/components/section/AboutSection' /* webpackChunkName: "about" */)
);
const WorkSection = lazy(
  () =>
    import('@/components/section/WorkSection' /* webpackChunkName: "work" */)
);
const ExperienceSection = lazy(
  () =>
    import(
      '@/components/section/ExperienceSection' /* webpackChunkName: "experience" */
    )
);
const ContactSection = lazy(
  () =>
    import(
      '@/components/section/ContactSection' /* webpackChunkName: "contact" */
    )
);

function App() {
  const seoData = useSEO();

  return (
    <HelmetProvider>
      <MetaTags {...seoData} />
      <MainLayout>
        {/* Hero section loads immediately for optimal LCP */}
        <HeroSection />
        <Suspense
          fallback={<SectionSkeleton className='bg-gray-50' variant='about' />}
        >
          <AboutSection />
        </Suspense>
        <Suspense
          fallback={<SectionSkeleton className='bg-white' variant='work' />}
        >
          <WorkSection />
        </Suspense>
        <Suspense
          fallback={
            <SectionSkeleton className='bg-gray-50' variant='experience' />
          }
        >
          <ExperienceSection />
        </Suspense>
        <Suspense
          fallback={
            <SectionSkeleton
              className='bg-gray-50'
              variant='contact'
              minHeight='min-h-screen'
            />
          }
        >
          <ContactSection />
        </Suspense>
      </MainLayout>
    </HelmetProvider>
  );
}

export default App;
