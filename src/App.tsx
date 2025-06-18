import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import WorkSection from "@/components/section/WorkSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import ContactSection from "@/components/section/ContactSection";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MetaTags from "@/components/seo/MetaTags";

import { usePreloader } from "@/hooks/usePreloader";

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
          fallback={<div className="min-h-screen bg-gray-100 animate-pulse" />}
        >
          <HeroSection />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-96 bg-gray-50 animate-pulse" />}
        >
          <AboutSection />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-96 bg-gray-50 animate-pulse" />}
        >
          <WorkSection />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-96 bg-gray-50 animate-pulse" />}
        >
          <ExperienceSection />
        </Suspense>
        <Suspense
          fallback={<div className="min-h-96 bg-gray-50 animate-pulse" />}
        >
          <ContactSection />
        </Suspense>
      </MainLayout>
    </HelmetProvider>
  );
}

export default App;
