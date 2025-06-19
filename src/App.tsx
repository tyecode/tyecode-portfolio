import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from '@/components/layout/MainLayout';
import LoadingScreen from '@/components/ui/LoadingScreen';
import SectionSkeleton from '@/components/ui/SectionSkeleton';
import MetaTags from '@/components/seo/MetaTags';
import { useSEO } from '@/hooks/useSEO';

import { usePreloader } from '@/hooks/usePreloader';

// Lazy load components with specific chunk names for better caching
const HeroSection = lazy(
  () =>
    import('@/components/section/HeroSection' /* webpackChunkName: "hero" */)
);
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
  const { isLoading } = usePreloader({ minLoadingTime: 1000 });
  const seoData = useSEO();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <MetaTags {...seoData} />
      <MainLayout>
        <Suspense fallback={<LoadingScreen />}>
          <HeroSection />
        </Suspense>
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
