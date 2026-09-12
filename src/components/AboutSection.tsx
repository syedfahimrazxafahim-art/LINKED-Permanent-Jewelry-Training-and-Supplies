import React from 'react';
import { WEBSITE_IMAGES, BUSINESS_INFO } from '../data/content';
import { Sparkles, Compass, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onInquireClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onInquireClick }) => {
  // Use the academy display image for About section
  const aboutImage = WEBSITE_IMAGES.find((img) => img.id === 'academy-display') || WEBSITE_IMAGES[1];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F5EF] relative overflow-hidden">
      {/* Subtle background tonal accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE9DE]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9922E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Gold framing border */}
              <div className="absolute -inset-3 border border-[#C9922E]/30 translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
              
              <div className="relative overflow-hidden bg-[#EFE9DE] shadow-md">
                <img
                  src={aboutImage.localSrc}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = aboutImage.remoteSrc;
                  }}
                  alt={aboutImage.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
                  width={aboutImage.width}
                  height={aboutImage.height}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-6">
              YOUR JOURNEY STARTS HERE
            </h2>

            <p className="text-base sm:text-lg text-[#5F5B55] leading-relaxed mb-6 font-sans">
              Welcome to <strong className="text-[#171717] font-medium">{BUSINESS_INFO.name}</strong>. 
              Based in Houston, TX, our academy is dedicated to empowering aspiring entrepreneurs 
              with the hands-on technical skills, equipment mastery, and business foundations needed 
              to launch and operate a permanent jewelry business.
            </p>

            <p className="text-sm sm:text-base text-[#5F5B55] leading-relaxed mb-8">
              Permanent jewelry represents a modern, custom experience uniting craftsmanship and connection. 
              Our curriculum focuses on practical learning—from precision micro-welding and safety protocols 
              to supplier sourcing and client service excellence—allowing you to start with genuine confidence.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EFE9DE] mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9922E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#171717]">Educational Focus</h4>
                  <p className="text-xs text-[#5F5B55] mt-0.5">Comprehensive, structured guidance tailored to new entrepreneurs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9922E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-[#171717]">Practical Technique</h4>
                  <p className="text-xs text-[#5F5B55] mt-0.5">Hands-on micro-pulse arc welding with real jewelry materials.</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onInquireClick}
              className="inline-flex items-center px-8 py-3.5 bg-[#171717] text-[#FFFFFF] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#C9922E] transition-colors duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
            >
              INQUIRE ABOUT SESSIONS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
