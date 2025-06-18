import { Suspense } from "react";

import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import WorkSection from "@/components/section/WorkSection";
import ExperienceSection from "./components/section/ExperienceSection";
import ContactSection from "@/components/section/ContactSection";
import LoadingScreen from "@/components/ui/LoadingScreen";

import { usePreloader } from "@/hooks/usePreloader";

function App() {
  // Add any critical resources that need to be preloaded
  const criticalResources: string[] = [
    // Add paths to critical images, fonts, or other assets here
    // Example: '/assets/hero-bg.jpg', '/assets/fonts/custom-font.woff2'
  ];

  const { isLoading } = usePreloader({
    minLoadingTime: 1000,
    resources: criticalResources,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
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
  );
}

export default App;
