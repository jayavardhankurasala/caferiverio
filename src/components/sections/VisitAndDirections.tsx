"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { isCafeCurrentlyOpen } from "@/lib/utils";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Sparkles,
} from "lucide-react";

interface VisitAndDirectionsProps {
  onOpenReserve?: () => void;
}

export function VisitAndDirections({
  onOpenReserve,
}: VisitAndDirectionsProps) {
  const [copied, setCopied] = useState(false);
  const [openStatus, setOpenStatus] = useState({
    isOpen: true,
    statusText: "Open Daily · 11:00 AM – 11:00 PM",
    closingSoon: false,
  });

  useEffect(() => {
    setOpenStatus(isCafeCurrentlyOpen());
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#163d32] text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#c3a165]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#0d2820] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c3a165]/20 text-[#dec089] text-xs font-semibold tracking-widest uppercase mb-4 border border-[#c3a165]/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Riverio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Visit Us by the <span className="italic text-[#dec089]">Waterside</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base font-light">
            Conveniently situated at Pushkar Ghat Circle inside La Hospin Hotel.
            Enjoy secure parking, riverside walking access, and majestic bridge views.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Information Card & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0d2820] border border-[#c3a165]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col gap-6">
              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      openStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                    }`}
                  />
                  <span className="text-sm font-semibold text-white">
                    {openStatus.statusText}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#dec089]">
                  {siteConfig.timings.daysOpen}
                </span>
              </div>

              {/* Address Block */}
              <div>
                <span className="text-xs font-mono text-[#dec089] uppercase tracking-wider block mb-1">
                  Official Address
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {siteConfig.cafeName}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed font-light mb-3">
                  {siteConfig.address.fullFormatted}
                </p>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white/90 active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#dec089]" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Timings Block */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#dec089] mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Service Hours</span>
                </div>
                <p className="text-base font-bold text-white">
                  {siteConfig.timings.standardHours}
                </p>
                <p className="text-xs text-white/60 mt-1">
                  {siteConfig.timings.displayNote}
                </p>
              </div>

              {/* Landmarks */}
              <div className="text-xs text-white/70 space-y-1">
                <p>✦ Adjacent to Pushkar Ghat Riverbank Promenade</p>
                <p>✦ Unobstructed view of Godavari Rail-cum-Road Arch Bridge</p>
                <p>✦ ~10 mins from Rajahmundry Central Railway Station</p>
              </div>
            </div>

            {/* Quick Contact & Directions Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#c3a165] to-[#dec089] text-[#160e0a] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-[#c3a165]/20 active:scale-95 transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.primaryPhone}`}
                className="flex-1 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-white/20 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-[#dec089]" />
                <span>Call {siteConfig.contact.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Map Preview & Interactive Location Box (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0d2820] border border-[#c3a165]/30 rounded-3xl overflow-hidden shadow-2xl relative min-h-[380px]">
            {/* Embedded Google Maps iframe */}
            <iframe
              title="Café Riverio Pushkar Ghat Location"
              src="https://maps.google.com/maps?q=La+Hospin+Hotel+Pushkar+Ghat+Circle+Rajahmundry&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] sm:min-h-[440px] border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Overlay Pill with Direct Google Maps Link */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#08101a]/90 backdrop-blur-md p-4 rounded-2xl border border-[#c3a165]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-[#c3a165] text-[#160e0a]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    Café Riverio at Pushkar Ghat
                  </p>
                  <p className="text-[11px] text-white/70">
                    Goka Varam, Rajamahendravaram
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#c3a165] hover:bg-[#dec089] text-[#160e0a] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
