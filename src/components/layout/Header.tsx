import { useState } from "react";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

import { NAVIGATION_LINKS } from "@/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" as const });
  };

  const handleMobileContactClick = () => {
    setIsMobileMenuOpen(false);
    scrollToContact();
  };

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gray-900 text-white px-4 py-2 rounded-lg z-[100]"
      >
        {"Skip to main content"}
      </a>

      <header
        className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50"
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200 rounded-md px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm" onClick={scrollToContact}>
                {"Get in Touch"}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="text-gray-600 flex-center hover:text-gray-900 p-2 cursor-pointer rounded-md"
                aria-label="Toggle main menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? "opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <nav
              className="py-4 space-y-1 border-t border-gray-100"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="p-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={handleMobileContactClick}
                >
                  {"Get in Touch"}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
