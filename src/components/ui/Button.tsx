import React from "react";

import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  isLoading = false,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={cn(
        "font-medium rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-gray-900 hover:bg-gray-800 text-white focus:ring-gray-900":
            variant === "primary" && !isDisabled,
          "border border-gray-300 hover:border-gray-400 text-gray-900 bg-white focus:ring-gray-300":
            variant === "secondary" && !isDisabled,
          "bg-gray-400 text-gray-600 cursor-not-allowed":
            variant === "primary" && isDisabled,
          "border border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed":
            variant === "secondary" && isDisabled,
        },
        {
          "px-3 py-1 text-xs": size === "sm",
          "px-4 py-3 text-sm": size === "md",
          "px-6 py-4 text-base": size === "lg",
        },
        {
          "w-full": fullWidth,
        },
        className
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
