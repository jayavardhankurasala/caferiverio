"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Camera,
} from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: "river-views" | "coffee-craft" | "gourmet-food" | "interiors";
  categoryLabel: string;
  aspect: "landscape" | "portrait" | "wide";
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "g-1",
    src: "/images/twilight-godavari-bridge-lounge.png",
    title: "Twilight Bridge View",
    category: "river-views",
    categoryLabel: "River Views",
    aspect: "wide",
    caption:
      "The iconic Godavari Arch Bridge illuminated at twilight, viewed from our panoramic lounge with round chandelier.",
  },
  {
    id: "g-2",
    src: "/images/signature-cappuccino-cookie.png",
    title: "Cappuccino & Cookie",
    category: "coffee-craft",
    categoryLabel: "Coffee Craft",
    aspect: "portrait",
    caption:
      "Artisan leaf latte art poured on dark roast espresso, served on our official 'Café Riverio Exotic Ripples' placemat.",
  },
  {
    id: "g-3",
    src: "/images/dining-spread-pizza-pasta.png",
    title: "Riverside Pizza & Pasta",
    category: "gourmet-food",
    categoryLabel: "Gourmet Food",
    aspect: "landscape",
    caption:
      "A freshly prepared pizza and pasta spread served at a riverside table.",
  },
  {
    id: "g-4",
    src: "/images/panoramic-river-day.png",
    title: "Daylight Riverside Lounge",
    category: "river-views",
    categoryLabel: "River Views",
    aspect: "landscape",
    caption:
      "Bright river views through floor-to-ceiling windows in the lounge.",
  },
  {
    id: "g-5",
    src: "/images/espresso-machine-pull.png",
    title: "Italian Espresso Extraction",
    category: "coffee-craft",
    categoryLabel: "Coffee Craft",
    aspect: "landscape",
    caption:
      "Precision dual-boiler extraction with rich golden crema flowing into classic porcelain cups.",
  },
  {
    id: "g-6",
    src: "/images/golden-hour-seating.png",
    title: "Golden Hour Corner",
    category: "interiors",
    categoryLabel: "Interiors",
    aspect: "portrait",
    caption:
      "Afternoon sunlight casting warm golden rays across modern barstools and architectural wall decor.",
  },
  {
    id: "g-7",
    src: "/images/panoramic-river-day.png",
    title: "Daylight River Panorama",
    category: "river-views",
    categoryLabel: "River Views",
    aspect: "wide",
    caption:
      "Expansive floor-to-ceiling glass looking out across the gentle waters of the Godavari river.",
  },
  {
    id: "g-8",
    src: "/images/dining-spread-pizza-pasta.png",
    title: "Riverside Table Feast",
    category: "gourmet-food",
    categoryLabel: "Gourmet Food",
    aspect: "landscape",
    caption:
      "Double cheese pizza slices, creamy Alfredo pasta with garlic toast, and fresh ruby cooler.",
  },
  {
    id: "g-9",
    src: "/images/portafilter-tamp.png",
    title: "Fresh Bean Tamping",
    category: "coffee-craft",
    categoryLabel: "Coffee Craft",
    aspect: "landscape",
    caption:
      "Freshly ground arabica beans leveled and tamped for balanced espresso extraction.",
  },
];

export function GalleryLightbox() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === "all" || img.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + 1) % filteredImages.length
      );
    }
  }, [lightboxIndex, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null
          ? null
          : prev === 0
          ? filteredImages.length - 1
          : prev - 1
      );
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-12 sm:py-24 bg-[#faf7f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163d32]/10 text-[#163d32] text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-[#c3a165]" />
            <span>Visual Story</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#160e0a] font-bold tracking-tight mb-4">
            Scenes from <span className="italic text-[#163d32]">Riverio</span>
          </h2>

          <p className="text-sm sm:text-base text-[#251913]/75 font-light">
            Genuine photographs captured inside our Rajahmundry lounge.
            Click any image to expand in full resolution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto flex-nowrap mb-6 sm:mb-10 no-scrollbar">
          {[
            { key: "all", label: "All Moments" },
            { key: "river-views", label: "Godavari River & Bridge" },
            { key: "coffee-craft", label: "Coffee & Barista" },
            { key: "gourmet-food", label: "Pizzas & Coolers" },
            { key: "interiors", label: "Lounge & Interiors" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setActiveFilter(f.key);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
                activeFilter === f.key
                  ? "bg-[#163d32] text-white shadow-md scale-105"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className={`${index >= 4 ? "hidden sm:block" : "block"} group relative h-44 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 cursor-pointer border-2 border-white shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-[#dec089]" />
              </div>

              {/* Caption Card on Hover */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white opacity-100 sm:opacity-0 translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                <span className="text-[10px] font-mono text-[#dec089] uppercase tracking-wider block mb-0.5">
                  {image.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold leading-tight mb-1">
                  {image.title}
                </h4>
                <p className="text-xs text-white/80 font-light line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-90 transition-all z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white active:scale-90 transition-all z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white active:scale-90 transition-all z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Enlarged Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light">
                {filteredImages[lightboxIndex].caption}
              </p>
              <span className="text-[11px] font-mono text-[#dec089] mt-2 inline-block">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
