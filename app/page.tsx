'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrainersSection from '@/components/TrainersSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import MembershipCTA from '@/components/MembershipCTA';
import LocationHours from '@/components/LocationHours';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>('1-Day Free VIP Pass');

  const handleOpenBooking = (programName?: string) => {
    if (programName) {
      setSelectedProgram(programName);
    } else {
      setSelectedProgram('1-Day Free VIP Pass');
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Full-screen Hero Slider with 4 loops and quotes */}
        <HeroSlider onOpenBooking={() => handleOpenBooking()} />

        {/* About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking('Facility Tour')} />

        {/* Programs Section */}
        <ProgramsSection onSelectProgram={(prog) => handleOpenBooking(prog)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Elite Trainers */}
        <TrainersSection onSelectTrainer={(trainer) => handleOpenBooking(trainer)} />

        {/* 4.9★ Google Reviews */}
        <ReviewsSection />

        {/* Facility Gallery & Lightbox */}
        <GallerySection />

        {/* Membership CTA & Calorie Calculator */}
        <MembershipCTA onSelectPlan={(plan) => handleOpenBooking(plan)} />

        {/* Location & Real-Time Open Hours */}
        <LocationHours />

        {/* Contact & Free Trial Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* STRICT REQUIREMENT: Add ONLY floating WhatsApp and Call buttons at the bottom-right */}
      <FloatingContactButtons />

      {/* VIP Trial / Program Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialProgram={selectedProgram}
      />
    </div>
  );
}
