import React, { useState } from 'react';
import { WEBSITE_IMAGES } from '../data/content';
import { WebsiteImage } from '../types';
import { Eye, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  onSelectImage: (image: WebsiteImage) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'training' | 'jewelry' | 'technique' | 'equipment'>('all');

  // Filter list while ensuring all 19 images remain directly accessible
  const filteredImages = activeFilter === 'all'
    ? WEBSITE_IMAGES
    : WEBSITE_IMAGES.filter((img) => img.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All 19 Portfolio Images', count: 19 },
    { id: 'training', label: 'Academy & Setup', count: WEBSITE_IMAGES.filter(i => i.category === 'training').length },
    { id: 'technique', label: 'Welding & Technique', count: WEBSITE_IMAGES.filter(i => i.category === 'technique').length },
    { id: 'jewelry', label: 'Permanent Jewelry', count: WEBSITE_IMAGES.filter(i => i.category === 'jewelry').length },
    { id: 'equipment', label: 'Tools & Chains', count: WEBSITE_IMAGES.filter(i => i.category === 'equipment').length },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
            EDITORIAL TRAINING & CRAFTSMANSHIP
          </h2>

          <p className="text-base text-[#5F5B55] leading-relaxed">
            Explore all 19 curated academy and jewelry visuals—showcasing precision micro-pulse welding, 
            fine claspless chains, student workstations, and custom welded pieces.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#171717] text-[#FFFFFF] shadow-xs'
                    : 'bg-[#FFFFFF] text-[#5F5B55] border border-[#C9922E]/30 hover:border-[#C9922E] hover:text-[#171717]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 
          Intelligent Editorial Image Grid:
          Organized in a responsive masonry / balanced column layout that strictly preserves 
          each image's natural aspect ratio (object-contain with minimal neutral letterboxing 
          or natural flex height), never cropping, stretching, or cutting off essential tools, 
          hands, or jewelry.
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid bg-[#FFFFFF] border border-[#C9922E]/20 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => onSelectImage(image)}
            >
              {/* Image Container Preserving Natural Proportions */}
              <div className="relative overflow-hidden bg-[#EFE9DE]">
                <img
                  src={image.localSrc}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = image.remoteSrc;
                  }}
                  alt={image.title}
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />

                {/* Subtle champagne-gold hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[#DDBB73] font-medium mb-1">
                      <Eye className="w-3 h-3" /> Click to Inspect
                    </span>
                    <h4 className="text-sm font-serif font-medium leading-snug">
                      {image.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Minimal Card Base with Caption */}
              <div className="p-3.5 border-t border-[#EFE9DE] bg-[#FFFFFF]">
                <div className="flex items-center justify-between text-[11px] text-[#C9922E] tracking-widest uppercase font-medium mb-1">
                  <span>{image.category}</span>
                  <span className="text-[#5F5B55] font-mono text-[10px]">
                    {image.width} × {image.height}
                  </span>
                </div>
                <p className="text-xs text-[#5F5B55] line-clamp-2 leading-relaxed font-sans">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note clarifying image preservation */}
        <div className="mt-12 text-center text-xs text-[#5F5B55] tracking-wide">
          <p>Showing all {filteredImages.length} images preserved in their original aspect ratios without cropping or distortion.</p>
        </div>
      </div>
    </section>
  );
};
