"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  Phone,
  MapPin,
  Clock,
  Compass,
  ArrowUp,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  const [showChecklist, setShowChecklist] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08101a] text-white pt-20 pb-24 md:pb-12 border-t border-[#c3a165]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-3xl font-bold tracking-wider text-white">
                  CAFÉ RIVERIO
                </span>
                <span className="w-2 h-2 rounded-full bg-[#c3a165]" />
              </div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#dec089] mb-4">
                by La Hospin · Exotic Ripples
              </p>

              <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm mb-6">
                Rajahmundry’s destination riverside lounge. Serving freshly
                ground Italian roasts, hand-muddled fruit refreshers, and
                woodfire pizzas against the sweeping panorama of the historic
                Godavari Arch Bridge.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#c3a165] hover:text-[#160e0a] text-white transition-all font-medium"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{siteConfig.social.instagramHandle}</span>
              </a>

              <a
                href={siteConfig.social.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#c3a165] hover:text-[#160e0a] text-white transition-all font-medium"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase text-[#dec089] tracking-wider mb-4 font-bold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li>
                <a href="#hero" className="hover:text-[#dec089] transition-colors">
                  Home
                </a>
              </li>
              <li className="hidden md:list-item">
                <a href="#story" className="hover:text-[#dec089] transition-colors">
                  The Story & View
                </a>
              </li>
              <li className="hidden md:list-item">
                <a href="#tour" className="hover:text-[#dec089] transition-colors">
                  Virtual Walkthrough
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#dec089] transition-colors">
                  Verified Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#dec089] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#dec089] transition-colors">
                  Find & Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase text-[#dec089] tracking-wider mb-4 font-bold">
              Contact & Hours
            </h4>
            <div className="space-y-4 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#dec089] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Daily Operating Hours</p>
                  <p>{siteConfig.timings.standardHours}</p>
                  <p className="text-white/50 text-[11px] mt-0.5">
                    {siteConfig.timings.daysOpen}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#dec089] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Direct Phone</p>
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone}`}
                    className="hover:text-[#dec089] underline font-mono text-sm"
                  >
                    {siteConfig.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dec089] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Pushkar Ghat Circle</p>
                  <p className="text-white/70">{siteConfig.address.line1}</p>
                  <p className="text-white/70">
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top & Owner Checklist Drawer (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/10 hover:bg-[#c3a165] hover:text-[#160e0a] text-white active:scale-95 transition-all mb-6"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            <button
              onClick={() => setShowChecklist(!showChecklist)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-[#dec089] border border-white/10 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Owner Audit</span>
              {showChecklist ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Owner Development Verification Checklist */}
        {showChecklist && (
          <div className="my-8 p-6 rounded-2xl bg-[#0d2820] border border-[#c3a165]/30 text-xs animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-bold uppercase tracking-wider text-[#dec089]">
                  Owner Deployment & Verification Checklist
                </span>
              </div>
              <span className="text-[10px] text-white/50 font-mono">
                Editable in src/data/site.ts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {siteConfig.developmentChecklist.map((c, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5"
                >
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                      c.status === "verified"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    }`}
                  >
                    {c.status === "verified" ? "Verified" : "Confirm"}
                  </span>
                  <div>
                    <p className="font-bold text-white">{c.item}</p>
                    <p className="text-[11px] text-white/70 mt-0.5">{c.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>
            © {currentYear} {siteConfig.cafeName} by La Hospin. All rights
            reserved.
          </p>

          <p className="text-[11px] text-white/40 text-center sm:text-right">
            Menu items sourced from{" "}
            <a
              href={siteConfig.social.menuSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dec089] hover:underline"
            >
              lahospin.dreamlook.in
            </a>
            . Visual assets & photographs provided for Café Riverio.
          </p>
        </div>
      </div>
    </footer>
  );
}
