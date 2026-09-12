import React from 'react';
import { Calendar, Clock, Video, AlertCircle } from 'lucide-react';

interface WebinarSectionProps {
  onSaveSeatClick: () => void;
}

export const WebinarSection: React.FC<WebinarSectionProps> = ({ onSaveSeatClick }) => {
  return (
    <section id="webinar" className="py-20 lg:py-28 bg-[#EFE9DE] relative overflow-hidden">
      {/* Decorative subtle texture highlights */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#C9922E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#FFFFFF]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#FFFFFF] border-2 border-[#C9922E]/40 p-8 sm:p-12 lg:p-16 shadow-lg relative text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#171717] tracking-tight leading-tight mb-4 font-normal">
            FREE LIVE WEBINAR
          </h2>

          <p className="text-base sm:text-lg text-[#5F5B55] max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            Get an insider look into the permanent jewelry industry, welding equipment fundamentals, 
            and what it takes to build a thriving business with confidence.
          </p>

          {/* Event Details Grid - Clean luxury layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            {/* Date Box */}
            <div className="p-6 bg-[#F8F5EF] border border-[#C9922E]/20 text-center">
              <Calendar className="w-6 h-6 text-[#C9922E] mx-auto mb-2 stroke-[1.5]" />
              <div className="text-[11px] uppercase tracking-widest text-[#5F5B55] mb-1">Date</div>
              <div className="text-base font-serif text-[#171717] font-medium">To Be Announced</div>
              <span className="text-[10px] text-[#5F5B55]/80 italic mt-1 block">(Pre-Registration Open)</span>
            </div>

            {/* Time Box */}
            <div className="p-6 bg-[#F8F5EF] border border-[#C9922E]/20 text-center">
              <Clock className="w-6 h-6 text-[#C9922E] mx-auto mb-2 stroke-[1.5]" />
              <div className="text-[11px] uppercase tracking-widest text-[#5F5B55] mb-1">Time</div>
              <div className="text-base font-serif text-[#171717] font-medium">To Be Announced</div>
              <span className="text-[10px] text-[#5F5B55]/80 italic mt-1 block">(Central Time / Houston)</span>
            </div>

            {/* Location Box */}
            <div className="p-6 bg-[#F8F5EF] border border-[#C9922E]/20 text-center">
              <Video className="w-6 h-6 text-[#C9922E] mx-auto mb-2 stroke-[1.5]" />
              <div className="text-[11px] uppercase tracking-widest text-[#5F5B55] mb-1">Location</div>
              <div className="text-base font-serif text-[#171717] font-medium">LIVE ONLINE</div>
              <span className="text-[10px] text-[#5F5B55]/80 italic mt-1 block">(Interactive Stream)</span>
            </div>
          </div>

          {/* Transparent Placeholder Status Note */}
          <div className="flex items-center justify-center gap-2 p-3 max-w-xl mx-auto bg-[#F8F5EF] border border-[#C9922E]/30 text-xs text-[#5F5B55] mb-10 text-left sm:text-center">
            <AlertCircle className="w-4 h-4 text-[#C9922E] shrink-0" />
            <span>
              Webinar date and broadcast time are currently in scheduling. Register below to receive priority access as soon as the date is set.
            </span>
          </div>

          {/* Primary CTA */}
          <div>
            <button
              id="webinar-save-seat-button"
              type="button"
              onClick={onSaveSeatClick}
              className="inline-flex items-center justify-center px-10 py-4.5 bg-[#171717] text-[#FFFFFF] border-2 border-[#C9922E] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#C9922E] hover:text-[#171717] transition-all duration-300 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
            >
              SAVE MY SEAT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
