import React from "react";

const AboutSection: React.FC = () => {
  const skills = [
    "React/Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5/CSS3",
    "Tailwind CSS",
    "Sass/SCSS",
    "Vue.js",
    "Responsive Design",
    "Webpack/Vite",
    "Git/GitHub",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a front-end web developer with over 4 years of experience
                creating responsive, user-friendly web applications. I
                specialize in modern JavaScript frameworks and creating
                pixel-perfect user interfaces.
              </p>
              <p>
                My passion lies in transforming designs into interactive,
                accessible web experiences that delight users. I excel at
                bridging the gap between design and development, ensuring
                seamless collaboration with designers and backend teams.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest CSS
                features, contributing to open-source UI libraries, or sharing
                front-end best practices with the developer community through
                blog posts and tutorials.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    30+
                  </div>
                  <div className="text-sm text-gray-600">
                    UI Components Built
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    4+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    20+
                  </div>
                  <div className="text-sm text-gray-600">Websites Launched</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">Mobile Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
