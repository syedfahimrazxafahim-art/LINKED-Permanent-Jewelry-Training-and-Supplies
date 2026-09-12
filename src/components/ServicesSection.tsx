import React from 'react';
import { WEBSITE_IMAGES } from '../data/content';

interface ServicesSectionProps {
  onImageClick: (imageId: string) => void;
  onInquireClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onImageClick, onInquireClick }) => {
  const servicesData = [
    {
      id: 'bracelets',
      name: 'Bracelets',
      tagline: 'Custom Fitted & Welded Wristwear',
      description: 'The signature permanent jewelry offering. Students learn precise wrist measurement, drape testing, jump ring closures, and creating seamless classic or stacked styles.',
      image: WEBSITE_IMAGES.find((img) => img.id === 'bracelet-display') || WEBSITE_IMAGES[2],
    },
    {
      id: 'anklets',
      name: 'Anklets',
      tagline: 'Effortless Everyday Ankle Adornments',
      description: 'Mastering the anatomical allowances required for walking comfort, drape flexibility, and durable link choices suited for lifestyle longevity.',
      image: WEBSITE_IMAGES.find((img) => img.id === 'anklet-styling') || WEBSITE_IMAGES[10],
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      tagline: 'Minimalist Claspless Chains',
      description: 'Techniques for custom choker and collarbone chain lengths, centering focal points, and safely shielding delicate necklines during pulse-arc welding.',
      image: WEBSITE_IMAGES.find((img) => img.id === 'chain-macro') || WEBSITE_IMAGES[18],
    },
    {
      id: 'rings',
      name: 'Rings',
      tagline: 'Fine Welded Band Accents',
      description: 'Delicate chain rings welded flush around finger joints, offering ultra-light daily wear or stacking with heirloom pieces.',
      image: WEBSITE_IMAGES.find((img) => img.id === 'rings-charms') || WEBSITE_IMAGES[12],
    },
    {
      id: 'custom',
      name: 'Custom Permanent Jewelry',
      tagline: 'Charms, Connectors & Mixed Metals',
      description: 'Expanding service menus with personalized connector birthstones, initials, custom chain combinations, and commemorative bonding appointments.',
      image: WEBSITE_IMAGES.find((img) => img.id === 'custom-welding') || WEBSITE_IMAGES[14],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
            PERMANENT JEWELRY SKILLS
          </h2>

          <p className="text-base text-[#5F5B55] leading-relaxed">
            Students learn how to professionally size, weld, and curate every essential permanent jewelry application.
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {servicesData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#FFFFFF] border border-[#C9922E]/20 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Frame with Aspect Ratio Preservation */}
              <div 
                className="relative aspect-4/3 overflow-hidden bg-[#EFE9DE] cursor-pointer group"
                onClick={() => onImageClick(item.image.id)}
              >
                <img
                  src={item.image.localSrc}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = item.image.remoteSrc;
                  }}
                  alt={`${item.name} - Permanent Jewelry`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#171717]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-[#FFFFFF]/90 text-[11px] tracking-widest uppercase text-[#171717] font-medium backdrop-blur-xs">
                    View Image
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] tracking-widest uppercase font-semibold text-[#C9922E] block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl font-serif text-[#171717] mb-3">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F5B55] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section bottom note */}
        <div className="p-6 bg-[#EFE9DE]/40 border border-[#C9922E]/30 max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-[#5F5B55] leading-relaxed">
            All technique modules emphasize client safety, skin barrier protection, micro-pulse arc control, and solid metallurgical bond verification.
          </p>
        </div>
      </div>
    </section>
  );
};
