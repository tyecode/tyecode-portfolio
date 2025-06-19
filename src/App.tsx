import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from '@/components/layout/MainLayout';
import LoadingScreen from '@/components/ui/LoadingScreen';
import MetaTags from '@/components/seo/MetaTags';

import { usePreloader } from '@/hooks/usePreloader';

// Lazy load non-critical sections for better performance
const HeroSection = lazy(() => import('@/components/section/HeroSection'));
const AboutSection = lazy(() => import('@/components/section/AboutSection'));
const WorkSection = lazy(() => import('@/components/section/WorkSection'));
const ExperienceSection = lazy(
  () => import('@/components/section/ExperienceSection')
);
const ContactSection = lazy(
  () => import('@/components/section/ContactSection')
);

// Optimized fallback component
const SectionFallback = ({
  className = 'min-h-96 bg-gray-50',
}: {
  className?: string;
}) => (
  <div className={`${className} animate-pulse`}>
    <div className='container mx-auto px-4 py-12'>
      <div className='space-y-4'>
        <div className='h-8 bg-gray-200 rounded-md w-1/3'></div>
        <div className='h-4 bg-gray-200 rounded-md w-2/3'></div>
        <div className='h-4 bg-gray-200 rounded-md w-1/2'></div>
      </div>
    </div>
  </div>
);

function App() {
  const { isLoading } = usePreloader();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <MetaTags />
      <MainLayout>
        <Suspense
          fallback={<SectionFallback className='min-h-screen bg-gray-100' />}
        >
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WorkSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </MainLayout>
    </HelmetProvider>
  );
}

export default App;
