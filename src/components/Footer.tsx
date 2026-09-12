import React from 'react';
import { BUSINESS_INFO, BRAND_LOGO } from '../data/content';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#171717] text-[#F8F5EF] py-12 border-t border-[#C9922E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Academy Brand Title & Logo Representation */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif tracking-wider text-[#F8F5EF]">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9922E]">
              Houston, TX Permanent Jewelry Training Academy
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#F8F5EF]/80 hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Information */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#F8F5EF]/70 pt-2 border-t border-white/10 w-full max-w-2xl">
            <span>{BUSINESS_INFO.location}</span>
            <span className="hidden sm:inline text-[#C9922E]">•</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hover:text-[#C9922E] transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
            <span className="hidden sm:inline text-[#C9922E]">•</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hover:text-[#C9922E] transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-1">
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-[#F8F5EF]/80 hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 text-[#F8F5EF]/80 hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
            >
              <Facebook className="w-5 h-5 stroke-[1.5]" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-white/10 text-[11px] text-[#F8F5EF]/50 tracking-wider">
            <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
