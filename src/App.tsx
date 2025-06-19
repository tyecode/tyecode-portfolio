import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from '@/components/layout/MainLayout';
import LoadingScreen from '@/components/ui/LoadingScreen';
import MetaTags from '@/components/seo/MetaTags';

import { usePreloader } from '@/hooks/usePreloader';

const HeroSection = lazy(() => import('@/components/section/HeroSection'));
const AboutSection = lazy(() => import('@/components/section/AboutSection'));
const WorkSection = lazy(() => import('@/components/section/WorkSection'));
const ExperienceSection = lazy(
  () => import('@/components/section/ExperienceSection')
);
const ContactSection = lazy(
  () => import('@/components/section/ContactSection')
);

function App() {
  const { isLoading } = usePreloader({ minLoadingTime: 1000 });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <MetaTags />
      <MainLayout>
        <Suspense fallback={<LoadingScreen />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={null}>
          <WorkSection />
        </Suspense>
        <Suspense fallback={null}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </MainLayout>
    </HelmetProvider>
  );
}

export default App;
