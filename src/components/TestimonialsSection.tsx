import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#EFE9DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
            WHAT OUR STUDENTS SAY
          </h2>

          <p className="text-base text-[#5F5B55] leading-relaxed">
            Experiences from aspiring entrepreneurs and artists learning the permanent jewelry craft.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8 sm:p-10 border border-[#C9922E]/25 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Subtle champagne-gold stars */}
                <div className="flex items-center gap-1 text-[#C9922E] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9922E] stroke-none" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#C9922E]/30 mb-4" />

                <p className="text-sm sm:text-base text-[#171717] font-serif italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Thin gold divider */}
              <div className="pt-4 border-t border-[#C9922E]/20">
                <div className="font-serif font-medium text-[#171717] text-base">{item.name}</div>
                <div className="text-xs text-[#5F5B55] uppercase tracking-wider mt-0.5">{item.role}</div>
                <span className="text-[10px] text-[#C9922E] uppercase tracking-widest block mt-2">
                  [Sample Preview]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
