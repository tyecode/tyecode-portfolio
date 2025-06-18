import React from "react";
import Button from "../ui/Button";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "Creative Digital Agency",
      role: "Senior Front-End Developer",
      period: "2022 - Present",
      description:
        "Leading front-end development of responsive web applications, creating reusable UI components, and mentoring junior developers on modern front-end practices.",
      achievements: [
        "Built component library that improved development speed by 50%",
        "Led team of 3 front-end developers in delivering 5 major client projects",
        "Optimized web performance achieving 95+ Lighthouse scores across all projects",
      ],
      current: true,
    },
    {
      company: "UI Innovations",
      role: "Front-End Developer",
      period: "2021 - 2022",
      description:
        "Developed responsive user interfaces for various client projects, collaborated closely with UX designers, and implemented modern CSS frameworks.",
      achievements: [
        "Built e-commerce frontend serving 15k+ daily users with 99.9% uptime",
        "Reduced page load times by 60% through code optimization and lazy loading",
        "Implemented pixel-perfect designs with 100% cross-browser compatibility",
      ],
      current: false,
    },
    {
      company: "WebCraft Studio",
      role: "Junior Front-End Developer",
      period: "2020 - 2021",
      description:
        "First development role focusing on HTML/CSS/JavaScript development, gained experience in responsive design and modern front-end frameworks.",
      achievements: [
        "Developed MVP interface that helped secure $500k in seed funding",
        "Built responsive web app with mobile-first approach and accessibility features",
        "Established front-end coding standards and component documentation practices",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through different companies and roles, each contributing
            to my growth as a front-end developer and UI specialist.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 border-l-4 ${
                exp.current
                  ? "border-l-gray-900 shadow-md"
                  : "border-l-gray-300"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-gray-600 font-medium mb-1">
                    {exp.company}
                  </div>
                  <div className="text-sm text-gray-500">{exp.period}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary">Download Full Resume</Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
