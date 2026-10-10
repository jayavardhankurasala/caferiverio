"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { StoryAndAtmosphere } from "@/components/sections/StoryAndAtmosphere";
import { VirtualTour } from "@/components/sections/VirtualTour";
import { FeaturedOfferings } from "@/components/sections/FeaturedOfferings";
import { InteractiveMenu } from "@/components/sections/InteractiveMenu";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { VisitAndDirections } from "@/components/sections/VisitAndDirections";
import { InstagramFeedSection } from "@/components/sections/InstagramFeedSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { ReservationModal } from "@/components/sections/ReservationModal";

export default function HomePage() {
  const [isTwilight, setIsTwilight] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  const toggleTwilight = () => {
    setIsTwilight((prev) => !prev);
  };

  return (
    <main className="min-h-screen flex flex-col relative bg-[#faf7f0] text-[#160e0a]">
      {/* Top Header */}
      <Header
        isTwilightMode={isTwilight}
        onToggleTwilight={toggleTwilight}
        onOpenReserve={() => setIsReserveModalOpen(true)}
      />

      {/* Hero Section with 3D River & Ambience Switcher */}
      <Hero
        isTwilight={isTwilight}
        onToggleTwilight={toggleTwilight}
        onOpenReserve={() => setIsReserveModalOpen(true)}
      />

      {/* Story, Atmosphere & Godavari Arch Bridge Perspective */}
      <div className="hidden md:block">
        <StoryAndAtmosphere />
      </div>

      {/* Virtual Walkthrough Tour */}
      <div className="hidden md:block">
        <VirtualTour />
      </div>

      {/* Signature Handcrafted Offerings */}
      <FeaturedOfferings />

      {/* Complete Interactive Menu Explorer */}
      <InteractiveMenu />

      {/* High-Resolution Editorial Photo Gallery & Lightbox */}
      <GalleryLightbox />

      {/* Location, Google Map, Timing & Directions */}
      <VisitAndDirections onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Social / Instagram Showcase */}
      <div className="hidden md:block">
        <InstagramFeedSection />
      </div>

      {/* Closing Call-to-Action */}
      <ClosingCta onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Editorial Footer */}
      <Footer />

      {/* Mobile-First Floating Quick Dock */}
      <MobileBottomNav onOpenReserve={() => setIsReserveModalOpen(true)} />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </main>
  );
}
