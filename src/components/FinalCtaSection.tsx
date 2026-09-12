import React from 'react';

interface FinalCtaSectionProps {
  onJoinClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#EFE9DE] relative overflow-hidden border-t border-b border-[#C9922E]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
          READY TO START YOUR PERMANENT JEWELRY BUSINESS?
        </h2>

        <p className="text-base sm:text-lg text-[#5F5B55] max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
          Take the first step toward building your permanent jewelry business with confidence.
        </p>

        <button
          type="button"
          onClick={onJoinClick}
          className="inline-flex items-center px-10 py-4.5 bg-[#171717] text-[#FFFFFF] border-2 border-[#C9922E] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#C9922E] hover:text-[#171717] transition-all duration-300 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
        >
          JOIN THE TRAINING
        </button>
      </div>
    </section>
  );
};
