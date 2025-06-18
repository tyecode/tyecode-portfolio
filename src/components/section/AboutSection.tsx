import React from "react";

import { ABOUT_SKILLS, ABOUT_STATS, ABOUT_CONTENT } from "@/constants";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              id="about-heading"
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              {"About Me"}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h3
              id="skills-heading"
              className="text-xl font-semibold text-gray-900 mb-6"
            >
              {"Skills & Expertise"}
            </h3>
            <div
              className="grid grid-cols-2 gap-3"
              role="list"
              aria-labelledby="skills-heading"
            >
              {ABOUT_SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                  role="listitem"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3
                id="stats-heading"
                className="text-xl font-semibold text-gray-900 mb-6"
              >
                {"Quick Stats"}
              </h3>
              <div
                className="grid grid-cols-2 gap-6"
                role="list"
                aria-labelledby="stats-heading"
              >
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} role="listitem">
                    <div
                      className="text-2xl font-bold text-gray-900 mb-1"
                      aria-label={stat.ariaLabel}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
