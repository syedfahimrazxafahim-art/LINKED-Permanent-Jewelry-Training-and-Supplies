import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { WebsiteImage } from '../types';

interface LightboxProps {
  image: WebsiteImage | null;
  images: WebsiteImage[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  image,
  images,
  onClose,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!image) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose, onNavigate]);

  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 bg-[#171717]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8"
      onClick={(e) => {
        if (e.target === containerRef.current) {
          onClose();
        }
      }}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto pb-4 border-b border-white/10">
        <div className="text-white/80 text-xs sm:text-sm font-sans tracking-widest uppercase">
          Image <span className="text-[#C9922E] font-medium">{currentIndex + 1}</span> of {images.length}
        </div>

        <button
          ref={closeButtonRef}
          id="lightbox-close-button"
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-2 text-white/80 hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Image Center Viewport - Preserving complete aspect ratio */}
      <div className="relative flex-1 flex items-center justify-center my-auto overflow-hidden px-2 sm:px-8 py-2">
        {/* Previous Button */}
        <button
          id="lightbox-prev-button"
          type="button"
          onClick={() => onNavigate('prev')}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 z-20 p-3 bg-black/40 hover:bg-[#C9922E] text-white hover:text-[#171717] rounded-full transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </button>

        {/* The Image Container with strict no-crop contain */}
        <div className="max-w-5xl max-h-[75vh] sm:max-h-[80vh] flex flex-col items-center justify-center">
          <img
            src={image.localSrc}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = image.remoteSrc;
            }}
            alt={image.title}
            className="max-w-full max-h-[70vh] sm:max-h-[75vh] w-auto h-auto object-contain border border-[#C9922E]/40 shadow-2xl transition-all"
          />
        </div>

        {/* Next Button */}
        <button
          id="lightbox-next-button"
          type="button"
          onClick={() => onNavigate('next')}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 z-20 p-3 bg-black/40 hover:bg-[#C9922E] text-white hover:text-[#171717] rounded-full transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[2]" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="z-10 w-full max-w-3xl mx-auto text-center pt-3 border-t border-white/10">
        <h3 className="text-white text-base sm:text-lg font-serif tracking-wide mb-1">
          {image.title}
        </h3>
        <p className="text-white/70 text-xs sm:text-sm font-sans max-w-xl mx-auto">
          {image.caption}
        </p>
      </div>
    </div>
  );
};
