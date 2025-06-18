import React from "react";

import Button from "@/components/ui/Button";

import { PROJECTS } from "@/constants";

const WorkSection: React.FC = () => {
  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    project: (typeof PROJECTS)[0]
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleProjectClick(project);
    }
  };

  return (
    <section
      id="work"
      className="py-20 bg-white"
      aria-labelledby="work-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="work-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {"Featured Projects"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {
              "A showcase of user interfaces and web applications I've built, demonstrating my front-end development skills and attention to user experience design."
            }
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 gap-8"
          role="list"
          aria-label="Portfolio projects"
        >
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="group cursor-pointer focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 rounded-xl"
              role="listitem"
              tabIndex={0}
              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => handleKeyDown(e, project)}
              aria-label={`${project.title} - ${project.description}`}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 focus:outline-none">
                <div
                  className={`h-48 ${project.image} relative`}
                  role="img"
                  aria-label={`${project.title} project preview`}
                >
                  <div className="absolute top-4 left-4">
                    <span
                      className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                      aria-label={`Project category: ${project.category}`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-describedby="view-all-description"
          >
            {"View All Projects"}
          </Button>
          <div id="view-all-description" className="sr-only">
            Contact me to see more of my front-end development projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
