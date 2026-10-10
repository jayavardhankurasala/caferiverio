"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Utensils, Compass, Phone, Sparkles } from "lucide-react";

interface ClosingCtaProps {
  onOpenReserve?: () => void;
}

export function ClosingCta({ onOpenReserve }: ClosingCtaProps) {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0a1813] text-white">
      {/* Background Cinematic Atmosphere Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/twilight-godavari-bridge-lounge.png"
          alt="Café Riverio lounge illuminated at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08101a] via-[#0d2820]/80 to-[#08101a]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c3a165]/20 text-[#dec089] text-xs font-semibold tracking-widest uppercase mb-6 border border-[#c3a165]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Pushkar Ghat · Rajamahendravaram</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-tight">
          Your Next Coffee Moment <br />
          <span className="italic text-[#dec089]">Starts Here.</span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-xl font-light leading-relaxed mb-10">
          Make a little time for yourself. Watch the ripples along the Godavari,
          savor a freshly pulled espresso, and experience the warmth of
          Riverio.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c3a165] to-[#dec089] text-[#160e0a] font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#c3a165]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>See Menu Preview</span>
          </a>

          <a
            href={siteConfig.social.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#dec089]" />
            <span>Get Directions</span>
          </a>

          <button
            onClick={onOpenReserve}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-950/70 hover:bg-emerald-900 text-emerald-100 font-semibold text-xs uppercase tracking-wider border border-emerald-500/30 backdrop-blur-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#dec089]" />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>
    </section>
  );
}
