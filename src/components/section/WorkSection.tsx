import React from "react";
import Button from "../ui/Button";

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Frontend",
      description:
        "Responsive e-commerce interface built with React and TypeScript, featuring advanced product filtering, shopping cart animations, and mobile-optimized checkout flow.",
      category: "E-commerce UI",
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
    {
      title: "Dashboard Interface",
      description:
        "Modern admin dashboard with interactive charts, real-time data visualization, and responsive design. Features dark/light mode toggle and accessibility compliance.",
      category: "Dashboard UI",
      image: "bg-gradient-to-br from-green-100 to-green-200",
      tags: ["Vue.js", "Chart.js", "CSS Grid", "ARIA"],
      link: "#",
    },
    {
      title: "Landing Page Collection",
      description:
        "Collection of high-converting landing pages with smooth animations, optimized performance, and pixel-perfect responsive design across all devices.",
      category: "Landing Pages",
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      link: "#",
    },
    {
      title: "Component Library",
      description:
        "Comprehensive UI component library with documentation, featuring reusable React components, design tokens, and automated testing for consistent design systems.",
      category: "Design System",
      image: "bg-gradient-to-br from-red-100 to-red-200",
      tags: ["React", "Storybook", "Jest", "Design Tokens"],
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of user interfaces and web applications I've built,
            demonstrating my front-end development skills and attention to user
            experience design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className={`h-48 ${project.image} relative`}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
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

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
