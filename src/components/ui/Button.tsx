import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        // Base classes
        "font-medium rounded-lg transition-colors duration-200 cursor-pointer",
        // Variant classes
        {
          "bg-gray-900 hover:bg-gray-800 text-white": variant === "primary",
          "border border-gray-300 hover:border-gray-400 text-gray-900":
            variant === "secondary",
        },
        // Size classes
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        // Full width
        {
          "w-full": fullWidth,
        },
        // Custom className
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
