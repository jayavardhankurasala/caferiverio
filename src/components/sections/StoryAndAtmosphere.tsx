"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Eye, Coffee, Wind, MapPin, Sparkles } from "lucide-react";

export function StoryAndAtmosphere() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#f7f3ea] relative overflow-hidden">
      {/* Decorative River Watermark Motif */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#163d32]/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-80 h-80 rounded-full bg-[#c3a165]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163d32]/10 text-[#163d32] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c3a165]" />
            <span>Atmosphere & Story</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#160e0a] font-bold tracking-tight mb-6">
            More Than a Coffee Stop. <br />
            <span className="italic font-normal text-[#163d32]">
              A Riverside Sanctuary in Rajahmundry.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#251913]/80 leading-relaxed font-light">
            Perched inside the landmark La Hospin at Pushkar Ghat Circle,
            Café Riverio was designed as an unhurried haven. Here, the majesty of
            the holy Godavari River and its iconic railway bridges unfold through
            sweeping floor-to-ceiling glass, accompanied by world-class roasts and
            comforting cuisine.
          </p>
        </div>

        {/* Editorial 3-Column / Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Main Panoramic Image (Left 7 Cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[340px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/interior-gallery-corridor.png"
                alt="Café Riverio hall with wooden ceiling slats, warm chandeliers, and Godavari bridge vista"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-[#c3a165] text-[#160e0a] text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                  Panoramic Glass Vista
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  The Godavari Bridge Perspective
                </h3>
                <p className="text-sm text-white/85 font-light mt-1">
                  Watch train engines cross the arch bridge as the sun dips beneath the horizon.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#c3a165]/30 max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#163d32] text-[#dec089]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#160e0a]">Unobstructed View</p>
                  <p className="text-[11px] text-stone-500">Pushkar Ghat Promenade</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Details (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#163d32]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#163d32]/10 text-[#163d32] flex items-center justify-center mb-4">
                <Wind className="w-5 h-5 text-[#c3a165]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#160e0a] mb-2">
                Slow Down by the Water
              </h3>
              <p className="text-sm text-[#251913]/75 leading-relaxed">
                Whether you need a serene workspace with peaceful water ripples,
                an intimate corner for coffee conversation, or a family table for
                pizza and pasta, our curved velvet booths accommodate every mood.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#163d32]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#163d32]/10 text-[#163d32] flex items-center justify-center mb-4">
                <Coffee className="w-5 h-5 text-[#c3a165]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#160e0a] mb-2">
                The Barista Promise
              </h3>
              <p className="text-sm text-[#251913]/75 leading-relaxed">
                Every espresso is calibrated on precision Italian machines.
                From creamy cappuccinos served with freshly baked cookies to
                our high-protein Proticcino and iced frappes, quality never falters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#163d32] text-white border border-[#c3a165]/30 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#dec089] mb-1">
                <MapPin className="w-4 h-4" />
                <span>Prime Rajahmundry Location</span>
              </div>
              <p className="text-sm text-white/90">
                La Hospin Hotel, Pushkar Ghat Circle, Goka Varam.
                Minutes from Rajamahendravaram railway junction and river docks.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Secondary Atmospheric Photos in Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-md border-2 border-white">
            <Image
              src="/images/golden-hour-seating.png"
              alt="Golden hour sunlight in Café Riverio with architectural wall art and stools"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs uppercase tracking-wider text-[#dec089] font-mono">01. Ambience</p>
              <h4 className="font-serif text-base font-semibold">Golden Hour Sunlit Corners</h4>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-md border-2 border-white">
            <Image
              src="/images/espresso-machine-pull.png"
              alt="Commercial espresso machine pulling hot espresso shot into white porcelain cup"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs uppercase tracking-wider text-[#dec089] font-mono">02. Craft</p>
              <h4 className="font-serif text-base font-semibold">Dual-Boiler Espresso Precision</h4>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-md border-2 border-white">
            <Image
              src="/images/twilight-godavari-bridge-lounge.png"
              alt="Twilight view overlooking the Godavari Arch Bridge from Riverio lounge"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs uppercase tracking-wider text-[#dec089] font-mono">03. Dusk</p>
              <h4 className="font-serif text-base font-semibold">Godavari Arch Bridge Illumination</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
