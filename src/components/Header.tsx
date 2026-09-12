import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_LOGO } from '../data/content';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#C9922E]/30 py-2.5'
          : 'bg-[#F8F5EF] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header Bar: Centered Logo + Subtitle + Hamburger */}
        <div className="md:hidden relative flex items-center justify-center min-h-[56px] py-1">
          <a
            href="#home"
            className="flex flex-col items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
            aria-label="LINKED Permanent Jewelry Training Home"
          >
            <img
              src={BRAND_LOGO.localSrc}
              onError={(e) => {
                // Fallback to Cloudinary remote URL if needed
                (e.currentTarget as HTMLImageElement).src = BRAND_LOGO.remoteSrc;
              }}
              alt={BRAND_LOGO.alt}
              className="h-12 w-auto object-contain"
              width="120"
              height="48"
            />
            <span className="mt-1 text-[8px] sm:text-[9px] uppercase tracking-[0.22em] font-medium text-center whitespace-nowrap select-none">
              <span className="text-[#171717]">LINKED </span>
              <span className="text-[#C9922E]">PERMANENT JEWELRY TRAINING</span>
            </span>
          </a>

          {/* Hamburger toggle button placed on right for touch accessibility */}
          <button
            ref={menuButtonRef}
            id="mobile-menu-toggle-button"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-overlay"
            aria-label="Open mobile navigation menu"
            className="absolute right-0 p-2 text-[#171717] hover:text-[#C9922E] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] transition-colors"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Desktop Header: Strictly Centered Logo + Subtitle + Centered Navigation directly below */}
        <div className="hidden md:flex flex-col items-center justify-center">
          {/* Centered Logo & Subtitle */}
          <div className="mb-3">
            <a
              href="#home"
              className="flex flex-col items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] transition-opacity hover:opacity-95"
              aria-label="LINKED Permanent Jewelry Training Home"
            >
              <img
                src={BRAND_LOGO.localSrc}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = BRAND_LOGO.remoteSrc;
                }}
                alt={BRAND_LOGO.alt}
                className="h-16 w-auto object-contain"
                width="160"
                height="64"
              />
              <span className="mt-1.5 text-[10px] lg:text-[11px] uppercase tracking-[0.26em] font-medium text-center whitespace-nowrap select-none">
                <span className="text-[#171717]">LINKED </span>
                <span className="text-[#C9922E]">PERMANENT JEWELRY TRAINING</span>
              </span>
            </a>
          </div>

          {/* Centered Navigation Menu */}
          <nav
            id="desktop-navigation-menu"
            aria-label="Main Navigation"
            className="flex items-center space-x-8 lg:space-x-12"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`group relative text-sm tracking-widest uppercase transition-colors duration-200 py-1 font-medium ${
                    isActive ? 'text-[#C9922E]' : 'text-[#171717] hover:text-[#C9922E]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9922E] transition-all duration-200 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-[#F8F5EF] flex flex-col justify-between p-6 sm:p-8 md:hidden h-[100dvh]"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-[#EFE9DE] pb-4">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col items-start focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
              aria-label="LINKED Permanent Jewelry Training Home"
            >
              <img
                src={BRAND_LOGO.localSrc}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = BRAND_LOGO.remoteSrc;
                }}
                alt={BRAND_LOGO.alt}
                className="h-11 w-auto object-contain"
              />
              <span className="mt-1 text-[8px] uppercase tracking-[0.2em] font-medium select-none">
                <span className="text-[#171717]">LINKED </span>
                <span className="text-[#C9922E]">PERMANENT JEWELRY TRAINING</span>
              </span>
            </a>
            <button
              ref={closeButtonRef}
              id="mobile-menu-close-button"
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 text-[#171717] hover:text-[#C9922E] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] transition-colors"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Centered Navigation Links with Large Touch Targets */}
          <nav className="flex flex-col items-center justify-center space-y-6 my-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-2xl sm:text-3xl font-serif tracking-wide py-2 transition-colors ${
                    isActive ? 'text-[#C9922E] font-medium' : 'text-[#171717] hover:text-[#C9922E]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Bottom quick details */}
          <div className="border-t border-[#EFE9DE] pt-4 text-center text-xs tracking-wider uppercase text-[#5F5B55]">
            <p>Houston, TX • Permanent Jewelry Academy</p>
          </div>
        </div>
      )}
    </header>
  );
};
