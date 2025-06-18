import React from "react";
import Logo from "./Logo";

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="loading-content text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="mb-4 flex justify-center">
            <Logo size="lg" showText={false} className="animate-pulse" />
          </div>
          <h2 className="loading-title text-xl font-bold text-gray-900 mb-2">
            tyecode
          </h2>
          <p className="loading-subtitle text-gray-500 text-sm">
            Building something amazing...
          </p>
        </div>

        {/* Loading Animation */}
        <div className="loading-dots flex justify-center space-x-1">
          <div className="loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="loading-dot w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
