// UI component prop types

import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
}

export interface BrandProps {
  className?: string;
}

export interface LogoProps {
  className?: string;
}

export interface SectionSkeletonProps {
  className?: string;
  variant?: 'about' | 'work' | 'experience' | 'contact';
  minHeight?: string;
}

export interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export interface ButtonAsLink extends BaseButtonProps {
  as: 'link';
  href: string;
  target?: '_blank' | '_self';
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export interface FaviconDemoProps {
  onToggle: () => void;
}
