"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { isCafeCurrentlyOpen } from "@/lib/utils";
import { HeroScene3D } from "@/components/3d/HeroScene3D";
import {
  Compass,
  Utensils,
  Phone,
  MapPin,
  ChevronDown,
  Sparkles,
  Sun,
  Moon,
  Coffee,
} from "lucide-react";

interface HeroProps {
  isTwilight: boolean;
  onToggleTwilight: () => void;
  onOpenReserve: () => void;
}

export function Hero({
  isTwilight,
  onToggleTwilight,
  onOpenReserve,
}: HeroProps) {
  const [openStatus, setOpenStatus] = useState({
    isOpen: true,
    statusText: "Open Daily · 11:00 AM – 11:00 PM",
    closingSoon: false,
  });

  useEffect(() => {
    setOpenStatus(isCafeCurrentlyOpen());
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden transition-colors duration-700 bg-[#08101a]"
    >
      {/* Background Image Layer with Crossfade */}
      <div className="absolute inset-0 z-0">
        <Image
          src={
            isTwilight
              ? "/images/twilight-godavari-bridge-lounge.png"
              : "/images/panoramic-river-day.png"
          }
          alt={
            isTwilight
              ? "Café Riverio twilight lounge overlooking Godavari Arch Bridge"
              : "Panoramic daytime view of Godavari River from Café Riverio"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-all duration-1000 transform"
        />

        {/* Dynamic Dark Gradient Overlays for Readability & Drama */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isTwilight
              ? "bg-gradient-to-t from-[#08101a] via-[#08101a]/70 to-[#08101a]/50"
              : "bg-gradient-to-t from-[#0e241c] via-[#0e241c]/65 to-black/35"
          }`}
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
      </div>

      {/* 3D Interactive River Ripple & Floating Particle Field */}
      <HeroScene3D isTwilight={isTwilight} />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-20 text-center flex flex-col items-center">
        {/* Top Badges & Ambience Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          {/* Live Status Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-md">
            <span
              className={`w-2 h-2 rounded-full ${
                openStatus.isOpen ? "bg-emerald-400 animate-ping" : "bg-amber-400"
              }`}
            />
            <span className="font-medium">{openStatus.statusText}</span>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#dec089] font-medium tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>Pushkar Ghat · Godavari Promenade</span>
          </div>

          {/* Ambience Switcher Button */}
          <button
            onClick={onToggleTwilight}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c3a165]/20 hover:bg-[#c3a165]/35 border border-[#c3a165]/40 text-xs font-semibold text-[#dec089] transition-all active:scale-95 shadow-md"
            title="Toggle between daylight river view and evening bridge view"
          >
            {isTwilight ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>Daylight View</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#c3a165]" />
                <span>Twilight Bridge View</span>
              </>
            )}
          </button>
        </div>

        {/* Eyebrow */}
        <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#c3a165] mb-4 flex items-center gap-2">
          <span className="w-6 sm:w-10 h-[1px] bg-[#c3a165]" />
          <span>RIVERFRONT REFINEMENT · RAJAHMUNDRY</span>
          <span className="w-6 sm:w-10 h-[1px] bg-[#c3a165]" />
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-bold tracking-tight leading-[1.12] mb-6 max-w-4xl drop-shadow-md">
          Find Your Moment <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#dec089] underline decoration-[#c3a165]/40 decoration-1 underline-offset-8">
            by the Godavari.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-xl text-white/85 max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 drop-shadow">
          Artisanal Italian brews, stone-fired gourmet crusts, and craft
          refreshers framed by floor-to-ceiling views of the iconic Godavari
          Arch Bridge.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-7 sm:mb-10">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c3a165] via-[#dec089] to-[#c3a165] text-[#160e0a] font-semibold text-sm uppercase tracking-wider shadow-xl shadow-[#c3a165]/25 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu & Prices</span>
          </a>

          <a
            href="#tour"
            className="hidden sm:flex sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider border border-white/20 backdrop-blur-md active:scale-95 transition-all items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-[#dec089]" />
            <span>Walk Through Cafe</span>
          </a>

          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-100 font-semibold text-sm uppercase tracking-wider border border-emerald-500/30 backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#dec089]" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Floating Quick Key Highlights Bar */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-white/10 text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c3a165]/20 text-[#dec089]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Arch Bridge Panorama</p>
              <p className="text-[11px] text-white/60">Floor-to-ceiling glass</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c3a165]/20 text-[#dec089]">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Artisan Italian Roast</p>
              <p className="text-[11px] text-white/60">Complimentary cookie</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c3a165]/20 text-[#dec089]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Craft Mojitos & Teas</p>
              <p className="text-[11px] text-white/60">Blue Butterfly & Berrycado</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c3a165]/20 text-[#dec089]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Stone-Fired Pizzas</p>
              <p className="text-[11px] text-white/60">Double chicken & paneer</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#story"
          className="mt-8 flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors"
          aria-label="Scroll to discover our story"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">
            Scroll to Discover
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c3a165]" />
        </a>
      </div>
    </section>
  );
}
