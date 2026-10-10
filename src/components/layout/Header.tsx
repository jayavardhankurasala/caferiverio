"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { isCafeCurrentlyOpen } from "@/lib/utils";
import {
  Phone,
  MapPin,
  Menu as MenuIcon,
  X,
  Compass,
  Sun,
  Moon,
  Clock,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

interface HeaderProps {
  isTwilightMode?: boolean;
  onToggleTwilight?: () => void;
  onOpenReserve?: () => void;
}

export function Header({
  isTwilightMode = false,
  onToggleTwilight,
  onOpenReserve,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState({
    isOpen: true,
    statusText: "Open Now · 11:00 AM – 11:00 PM",
    closingSoon: false,
  });

  useEffect(() => {
    setOpenStatus(isCafeCurrentlyOpen());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "The View & Story", href: "#story" },
    { label: "Virtual Tour", href: "#tour" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location & Hours", href: "#location" },
  ];
  const mobileNavLinks = navLinks.filter(
    (link) => link.href !== "#story" && link.href !== "#tour"
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isTwilightMode
            ? "bg-[#0b1726]/90 backdrop-blur-xl border-b border-[#c3a165]/20 shadow-2xl py-3"
            : "bg-[#f7f3ea]/90 backdrop-blur-xl border-b border-[#163d32]/10 shadow-lg py-3"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="#hero"
          className="group flex flex-col items-start focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-serif text-2xl sm:text-3xl tracking-wider font-bold transition-colors ${
                isScrolled && !isTwilightMode
                  ? "text-[#163d32] group-hover:text-[#c3a165]"
                  : "text-white group-hover:text-[#c3a165]"
              }`}
            >
              CAFÉ RIVERIO
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#c3a165] animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold text-[#c3a165]">
            <span>by La Hospin</span>
            <span>·</span>
            <span>Exotic Ripples</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative transition-colors py-1 ${
                isScrolled && !isTwilightMode
                  ? "text-[#251913] hover:text-[#163d32]"
                  : "text-white/90 hover:text-[#c3a165]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Day / Twilight Ambience Toggle */}
          {onToggleTwilight && (
            <button
              onClick={onToggleTwilight}
              title={isTwilightMode ? "Switch to Daylight View" : "Switch to Twilight Bridge View"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isTwilightMode
                  ? "bg-[#c3a165]/20 text-[#c3a165] border border-[#c3a165]/40 hover:bg-[#c3a165]/30"
                  : isScrolled
                  ? "bg-[#163d32]/10 text-[#163d32] border border-[#163d32]/20 hover:bg-[#163d32]/20"
                  : "bg-white/15 text-white border border-white/20 hover:bg-white/25"
              }`}
            >
              {isTwilightMode ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#c3a165]" />
                  <span>Twilight</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Daylight</span>
                </>
              )}
            </button>
          )}

          {/* Quick Call */}
          <a
            href={`tel:${siteConfig.contact.primaryPhone}`}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              isScrolled && !isTwilightMode
                ? "bg-[#163d32]/5 text-[#163d32] hover:bg-[#163d32]/10"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#c3a165]" />
            <span>{siteConfig.contact.displayPhone}</span>
          </a>

          {/* Reserve / Visit CTA */}
          <button
            onClick={onOpenReserve}
            className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#c3a165] to-[#dec089] text-[#160e0a] hover:shadow-lg hover:shadow-[#c3a165]/25 active:scale-95 transition-all"
          >
            Book Table
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {onToggleTwilight && (
            <button
              onClick={onToggleTwilight}
              aria-label="Toggle Ambience Mode"
              className="p-2 rounded-full bg-black/40 text-white border border-white/20 active:scale-90 transition-transform"
            >
              {isTwilightMode ? (
                <Moon className="w-4 h-4 text-[#c3a165]" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
          )}

          <a
            href={`tel:${siteConfig.contact.primaryPhone}`}
            aria-label="Call Riverio Cafe"
            className="p-2 rounded-full bg-[#c3a165] text-[#160e0a] active:scale-90 transition-transform shadow-md"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className={`p-2 rounded-lg transition-colors ${
              isScrolled && !isTwilightMode
                ? "text-[#163d32] hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0b1726]/98 backdrop-blur-2xl border-b border-[#c3a165]/30 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-5">
            {/* Live Status Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/80 font-medium">
                  {openStatus.statusText}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#c3a165]">
                Pushkar Ghat
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 text-base font-medium">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-white/90 hover:text-[#c3a165] py-1 border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-white/40 font-mono">→</span>
                </a>
              ))}
            </nav>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReserve?.();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c3a165] to-[#dec089] text-[#160e0a] font-semibold text-center text-sm uppercase tracking-wider shadow-lg shadow-[#c3a165]/20 active:scale-98"
              >
                Reserve a Riverside Table
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c3a165]" />
                  <span>Call Cafe</span>
                </a>
                <a
                  href={siteConfig.social.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#c3a165]" />
                  <span>Directions</span>
                </a>
              </div>

              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs text-white/60 hover:text-[#c3a165]"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow {siteConfig.social.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
