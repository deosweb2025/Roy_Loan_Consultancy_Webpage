import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BankPartners from '../components/BankPartners';
import About from '../components/About';
import Services from '../components/Services';
import EligibilityGuide from '../components/EligibilityGuide';
import VideoShowcase from '../components/VideoShowcase';
import Gallery from '../components/Gallery';
import LoanProcess from '../components/LoanProcess';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import ImageModal from '../components/ImageModal';
import { siteData } from '../data/siteData';
import { useGsap } from '../hooks/useGsap';
import { initScrollReveals } from '../animations/scrollAnimations';

const Home = () => {
  // Modal Lightbox state ("boc screen")
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Pre-fill state for contact form
  const [prefilledLoan, setPrefilledLoan] = useState('');
  const [prefilledAmount] = useState(null);

  const pageRef = useGsap((containerRef) => {
    return initScrollReveals(containerRef);
  }, []);

  const openImageModal = (index) => {
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % siteData.gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + siteData.gallery.length) % siteData.gallery.length
    );
  };

  const handleSelectLoan = (loanTitle) => {
    setPrefilledLoan(loanTitle);
  };

  return (
    <div ref={pageRef} className="min-h-screen flex flex-col bg-slate-50 selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Single-Page Content Sections */}
      <main className="flex-1">
        <Hero onOpenImageModal={openImageModal} />
        <BankPartners />
        <About onOpenImageModal={openImageModal} />
        <Services onSelectLoan={handleSelectLoan} />
        <EligibilityGuide />
        <VideoShowcase />
        <Gallery onOpenImageModal={openImageModal} />
        <LoanProcess />
        <Location />
        <Contact prefilledLoan={prefilledLoan} prefilledAmount={prefilledAmount} />
      </main>

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingCallButton />

      {/* Footer with exact required attribution */}
      <Footer />

      {/* Full "Box Screen" Lightbox Modal for Images */}
      <ImageModal
        isOpen={modalOpen}
        images={siteData.gallery}
        currentIndex={activeImageIndex}
        onClose={closeImageModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};

export default Home;
