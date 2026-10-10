"use client";

import React from "react";
import { Phone, Utensils, MapPin, Calendar, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";

interface MobileBottomNavProps {
  onOpenReserve?: () => void;
}

export function MobileBottomNav({ onOpenReserve }: MobileBottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
      <div className="bg-[#0b1726]/95 backdrop-blur-xl border border-[#c3a165]/30 rounded-2xl shadow-2xl p-2 flex items-center justify-around text-white">
        {/* Menu */}
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl text-white/80 hover:text-[#c3a165] active:scale-95 transition-all"
        >
          <Utensils className="w-5 h-5 text-[#c3a165]" />
          <span className="text-[10px] font-medium tracking-tight">Menu</span>
        </a>

        {/* Online ordering */}
        <a
          href={siteConfig.social.swiggyUrl ?? "#menu"}
          target={siteConfig.social.swiggyUrl ? "_blank" : undefined}
          rel={siteConfig.social.swiggyUrl ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl text-white/80 hover:text-[#c3a165] active:scale-95 transition-all"
        >
          <ExternalLink className="w-5 h-5 text-[#c3a165]" />
          <span className="text-[10px] font-medium tracking-tight">Order</span>
        </a>

        {/* Central Reserve CTA button */}
        <button
          onClick={onOpenReserve}
          className="flex flex-col items-center justify-center -mt-5 bg-gradient-to-tr from-[#c3a165] via-[#dec089] to-[#c3a165] text-[#160e0a] w-12 h-12 rounded-full shadow-lg shadow-[#c3a165]/40 border-2 border-[#0b1726] active:scale-90 transition-transform"
          aria-label="Book a table"
        >
          <Calendar className="w-5 h-5 text-[#160e0a]" />
        </button>

        {/* Directions */}
        <a
          href={siteConfig.social.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl text-white/80 hover:text-[#c3a165] active:scale-95 transition-all"
        >
          <MapPin className="w-5 h-5 text-[#c3a165]" />
          <span className="text-[10px] font-medium tracking-tight">Map</span>
        </a>

        {/* Call Now */}
        <a
          href={`tel:${siteConfig.contact.primaryPhone}`}
          className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl text-white/80 hover:text-[#c3a165] active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-medium tracking-tight">Call</span>
        </a>
      </div>
    </div>
  );
}
