import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // Keep first open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-base text-[#5F5B55] leading-relaxed font-sans">
            Key details regarding our curriculum, prerequisites, and learning approach.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const itemId = `faq-item-${index}`;
            const buttonId = `faq-btn-${index}`;

            return (
              <div
                key={index}
                className="border-b border-[#C9922E]/30 pb-4 transition-colors"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={itemId}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-serif text-[#171717] group-hover:text-[#C9922E] transition-colors">
                    {item.question}
                  </span>
                  <span className="p-1 rounded-full text-[#C9922E] shrink-0 transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={itemId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-2 pb-4 text-sm sm:text-base text-[#5F5B55] leading-relaxed font-sans transition-all duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
