import { Suspense, lazy, useEffect } from 'react';

import MainLayout from '@/components/layout/MainLayout';
import SectionSkeleton from '@/components/ui/SectionSkeleton';
import MetaTags from '@/components/seo/MetaTags';
import HeroSection from '@/components/section/HeroSection';
import LoadingScreen from '@/components/ui/LoadingScreen';

import { useSEO } from '@/hooks/useSEO';
import { useAnalytics } from '@/hooks/useAnalytics';

// Lazy load only below-the-fold components for better performance
const AboutSection = lazy(() => import('@/components/section/AboutSection'));
const ContactSection = lazy(
  () => import('@/components/section/ContactSection')
);
const ExperienceSection = lazy(
  () => import('@/components/section/ExperienceSection')
);
const WorkSection = lazy(() => import('@/components/section/WorkSection'));

function App() {
  const seoData = useSEO();
  // Initialize Google Analytics
  const { trackPageView } = useAnalytics();

  // Track initial page view
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  return (
    <>
      <MetaTags {...seoData} />
      <LoadingScreen />
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
    </>
  );
}

export default App;
