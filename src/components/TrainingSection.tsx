import React from 'react';
import { TRAINING_BLOCKS } from '../data/content';
import { BookOpen, Building2, Wrench, TrendingUp, Check } from 'lucide-react';

interface TrainingSectionProps {
  onJoinClick: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onJoinClick }) => {
  const blockIcons = [
    <BookOpen key="training" className="w-6 h-6 text-[#C9922E] stroke-[1.5]" />,
    <Building2 key="setup" className="w-6 h-6 text-[#C9922E] stroke-[1.5]" />,
    <Wrench key="skills" className="w-6 h-6 text-[#C9922E] stroke-[1.5]" />,
    <TrendingUp key="growth" className="w-6 h-6 text-[#C9922E] stroke-[1.5]" />,
  ];

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#EFE9DE]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
            BUILD YOUR BUSINESS WITH CONFIDENCE
          </h2>

          <p className="text-base text-[#5F5B55] leading-relaxed">
            Our educational framework breaks down every critical dimension of launching and running 
            a sustainable permanent jewelry practice.
          </p>
        </div>

        {/* Four Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {TRAINING_BLOCKS.map((block, index) => (
            <div
              key={block.title}
              className="bg-[#FFFFFF] border border-[#C9922E]/25 p-8 lg:p-10 shadow-xs hover:shadow-md hover:border-[#C9922E]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#F8F5EF] border border-[#C9922E]/20">
                    {blockIcons[index]}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#C9922E] font-medium uppercase">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#171717] tracking-wide mb-2">
                  {block.title}
                </h3>

                <p className="text-sm font-medium text-[#C9922E] mb-4">
                  {block.tagline}
                </p>

                <p className="text-sm text-[#5F5B55] leading-relaxed mb-6 font-sans">
                  {block.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-[#EFE9DE]">
                <ul className="space-y-2">
                  {block.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#171717]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9922E]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Section Call to action */}
        <div className="text-center">
          <button
            type="button"
            onClick={onJoinClick}
            className="px-10 py-4 bg-[#171717] text-[#FFFFFF] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#C9922E] transition-all duration-300 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
          >
            JOIN THE TRAINING
          </button>
        </div>
      </div>
    </section>
  );
};
