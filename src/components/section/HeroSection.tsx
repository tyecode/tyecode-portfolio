import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-gray-600">tyecode</span>
            <br />
            Front-End <span className="text-gray-600">Web Developer</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
            I create beautiful, responsive, and user-friendly web applications
            using modern front-end technologies. Currently crafting exceptional
            user experiences at{" "}
            <span className="text-gray-900 font-medium">
              Creative Digital Agency
            </span>
            , previously at{" "}
            <span className="text-gray-900 font-medium">UI Innovations</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary">View My Projects</Button>
            <Button variant="secondary">Download Resume</Button>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a
              href="https://linkedin.com/in/tyecode"
              className="hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tyecode"
              className="hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/tyecode"
              className="hover:text-gray-900 transition-colors duration-200 hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="absolute top-24 right-8 lg:right-16 hidden lg:block">
          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-lg">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
