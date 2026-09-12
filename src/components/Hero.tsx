import React from 'react';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  onJoinClick: () => void;
  onLearnMoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onLearnMoreClick }) => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#F6EFE6] min-h-[500px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[720px] xl:min-h-[820px] 2xl:min-h-[880px]"
    >
      {/* Background Image Layer - Preserving 100% of composition, aspect ratio, and jewelry elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <picture className="w-full h-full block">
          <source srcSet={HERO_IMAGE.localSrc} />
          <img
            src={HERO_IMAGE.localSrc}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = HERO_IMAGE.remoteSrc;
            }}
            alt="LINKED Permanent Jewelry Training Academy Setup"
            className="w-full h-full object-contain object-center max-w-[1720px] mx-auto filter brightness-[1.01] contrast-[1.01]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* 
          Refined central radial gradient:
          Subtly warms the central open zone for text contrast while leaving
          the left and right jewelry displays 100% crisp and unclouded.
        */}
        <div 
          className="absolute inset-0 bg-radial-[ellipse_at_center] from-[#F8F5EF]/75 via-[#F8F5EF]/30 to-transparent pointer-events-none"
          aria-hidden="true" 
        />
      </div>

      {/* Hero Foreground Content - Positioned strictly inside the open center zone */}
      <div className="relative z-10 max-w-[260px] xs:max-w-[300px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center px-2 sm:px-4 py-4 sm:py-8">
        {/* Hero Heading */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-[#171717] leading-[1.15] mb-4 sm:mb-6 font-normal">
          START YOUR <span className="text-[#C9922E] italic">PERMANENT JEWELRY</span> BUSINESS
        </h1>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#171717]/90 max-w-[240px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto leading-relaxed font-sans mb-6 sm:mb-8 md:mb-10 font-normal">
          Learn how to start with confidence and build a strong foundation in permanent jewelry.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <button
            id="hero-primary-cta"
            type="button"
            onClick={onJoinClick}
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#171717] text-[#FFFFFF] text-[11px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.18em] uppercase font-medium hover:bg-[#C9922E] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
          >
            JOIN THE TRAINING
          </button>

          <button
            id="hero-secondary-cta"
            type="button"
            onClick={onLearnMoreClick}
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#171717] border border-[#C9922E]/60 text-[11px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.18em] uppercase font-medium hover:border-[#C9922E] transition-all duration-300 backdrop-blur-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};
