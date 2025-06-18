import React from "react";

import Button from "@/components/ui/Button";

import { HERO_CONTENT, SOCIAL_LINKS } from "@/constants";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-16 bg-white" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              role="status"
              aria-label="Availability status"
            >
              {HERO_CONTENT.availabilityStatus}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {"Hi, I'm "}
            <span className="text-gray-600">{HERO_CONTENT.name}</span>
            <br />
            {HERO_CONTENT.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={index === 0 ? "text-gray-900" : "text-gray-600"}
              >
                {word}
                {index < HERO_CONTENT.title.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
            {HERO_CONTENT.description.split(" at ")[0]} at{" "}
            <span className="text-gray-900 font-medium">
              {HERO_CONTENT.currentCompany}
            </span>
            , previously at{" "}
            <span className="text-gray-900 font-medium">
              {HERO_CONTENT.previousCompany}
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              variant="primary"
              onClick={() => scrollToSection("work")}
              aria-describedby="projects-description"
            >
              {"View My Projects"}
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open("/resume.pdf", "_blank")}
              aria-label="Download resume PDF file"
            >
              {"Download Resume"}
            </Button>
          </div>
          <div id="projects-description" className="sr-only">
            Navigate to the portfolio section to view my front-end development
            projects
          </div>

          <nav
            className="flex items-center space-x-6 text-sm text-gray-500"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="hover:text-gray-900 transition-colors duration-200 hover:underline flex-center"
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Profile Image */}
        <div className="absolute top-24 right-8 lg:right-16 hidden lg:block">
          <div
            className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-lg"
            role="img"
            aria-label="tyecode profile placeholder image"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
