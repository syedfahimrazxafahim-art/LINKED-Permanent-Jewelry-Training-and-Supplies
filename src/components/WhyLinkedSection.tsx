import React from 'react';
import { WHY_LINKED_FEATURES } from '../data/content';
import { Award, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const WhyLinkedSection: React.FC = () => {
  const icons = [
    <Award key="expert" className="w-7 h-7 text-[#171717] stroke-[1.25]" />,
    <Layers key="knowledge" className="w-7 h-7 text-[#171717] stroke-[1.25]" />,
    <ShieldCheck key="foundation" className="w-7 h-7 text-[#171717] stroke-[1.25]" />,
    <Sparkles key="start" className="w-7 h-7 text-[#171717] stroke-[1.25]" />,
  ];

  return (
    <section id="why-linked" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
            DEDICATED PERMANENT JEWELRY EDUCATION
          </h2>

          <p className="text-base text-[#5F5B55] leading-relaxed">
            We focus exclusively on teaching permanent jewelry artistry and entrepreneurship, 
            equipping you with the clarity and mastery needed to thrive.
          </p>
        </div>

        {/* Four Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_LINKED_FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-[#FFFFFF] p-8 border border-[#C9922E]/25 text-center flex flex-col items-center justify-between shadow-xs hover:border-[#C9922E] transition-colors duration-300"
            >
              <div>
                {/* Minimal line icon with small champagne gold accent dot */}
                <div className="relative mb-6 inline-flex items-center justify-center p-4 bg-[#F8F5EF] border border-[#EFE9DE]">
                  {icons[index]}
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C9922E]" />
                </div>

                <h3 className="text-lg font-serif text-[#171717] tracking-wider mb-3">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F5B55] leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative gold dash */}
              <span className="h-[1px] w-6 bg-[#C9922E]/50 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
