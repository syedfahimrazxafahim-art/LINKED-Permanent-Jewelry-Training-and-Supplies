import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TrainingSection } from './components/TrainingSection';
import { ServicesSection } from './components/ServicesSection';
import { WebinarSection } from './components/WebinarSection';
import { WhyLinkedSection } from './components/WhyLinkedSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { WebinarModal } from './components/WebinarModal';
import { WEBSITE_IMAGES } from './data/content';
import { WebsiteImage } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<WebsiteImage | null>(null);
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false);

  // Intersection Observer to track active section for header styling
  useEffect(() => {
    const sections = ['home', 'about', 'training', 'services', 'contact'];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenImageById = (imageId: string) => {
    const img = WEBSITE_IMAGES.find((item) => item.id === imageId);
    if (img) setSelectedImage(img);
  };

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = WEBSITE_IMAGES.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + WEBSITE_IMAGES.length) % WEBSITE_IMAGES.length;
      setSelectedImage(WEBSITE_IMAGES[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % WEBSITE_IMAGES.length;
      setSelectedImage(WEBSITE_IMAGES[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#171717]">
      {/* Sticky Header with Centered Logo + Centered Nav */}
      <Header activeSection={activeSection} />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          onJoinClick={() => scrollToSection('contact')}
          onLearnMoreClick={() => scrollToSection('about')}
        />

        {/* About Section: Educational Introduction & Studio Overview */}
        <AboutSection onInquireClick={() => scrollToSection('contact')} />

        {/* Training Section: 4 Core Modules */}
        <TrainingSection onJoinClick={() => scrollToSection('contact')} />

        {/* Services & Permanent Jewelry Skills */}
        <ServicesSection
          onImageClick={handleOpenImageById}
          onInquireClick={() => scrollToSection('contact')}
        />

        {/* Free Live Webinar Section */}
        <WebinarSection onSaveSeatClick={() => setIsWebinarModalOpen(true)} />

        {/* Why LINKED Section: 4 Feature Blocks */}
        <WhyLinkedSection />

        {/* Editorial Gallery: All 19 Website Images strictly preserved */}
        <GallerySection onSelectImage={setSelectedImage} />

        {/* Testimonials: Clearly labeled preview testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final CTA */}
        <FinalCtaSection onJoinClick={() => scrollToSection('contact')} />

        {/* Contact Information & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox for inspecting any of the 19 images */}
      <Lightbox
        image={selectedImage}
        images={WEBSITE_IMAGES}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleLightboxNavigate}
      />

      {/* Webinar Seat Reservation Modal */}
      <WebinarModal
        isOpen={isWebinarModalOpen}
        onClose={() => setIsWebinarModalOpen(false)}
      />
    </div>
  );
}
