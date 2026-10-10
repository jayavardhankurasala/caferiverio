"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  X,
  Calendar,
  Clock,
  Users,
  Compass,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle,
} from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [guests, setGuests] = useState("2 Guests");
  const [seating, setSeating] = useState("Panoramic Arch Bridge Window");
  const [timeSlot, setTimeSlot] = useState("6:00 PM (Sunset / Twilight)");
  const [customerName, setCustomerName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Café Riverio! I would like to reserve a table.\n\n` +
        `• Name: ${customerName || "Guest"}\n` +
        `• Phone: ${contactNum || "Not provided"}\n` +
        `• Party Size: ${guests}\n` +
        `• Preferred Seating: ${seating}\n` +
        `• Time Slot: ${timeSlot}\n` +
        (notes ? `• Special Notes: ${notes}\n` : "") +
        `\nPlease let me know if this slot is available.`
    );

    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="bg-[#0d2820] text-white border border-[#c3a165]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Reservation Modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white active:scale-90 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c3a165]/20 text-[#dec089] text-[11px] font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pushkar Ghat · Rajahmundry</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Reserve a Riverside Table
          </h3>
          <p className="text-xs text-white/75 mt-1 font-light">
            Enjoy priority seating overlooking the Godavari Arch Bridge. Direct
            confirmation via WhatsApp or phone.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppBooking} className="flex flex-col gap-4 text-xs">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-[#dec089] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Varma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c3a165]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono text-[#dec089] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c3a165]"
              />
            </div>
          </div>

          {/* Party Size & Preferred Seating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-[#dec089] mb-1">
                Number of Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a1f19] border border-white/20 text-white focus:outline-none focus:border-[#c3a165]"
              >
                <option value="1 Guest">1 Guest (Solo / Workspace)</option>
                <option value="2 Guests">2 Guests (Couple / Pair)</option>
                <option value="3-4 Guests">3 - 4 Guests (Small Group)</option>
                <option value="5-8 Guests">5 - 8 Guests (Family Table)</option>
                <option value="8+ Guests">8+ Guests (Celebration / Gathering)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#dec089] mb-1">
                Preferred Seating
              </label>
              <select
                value={seating}
                onChange={(e) => setSeating(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a1f19] border border-white/20 text-white focus:outline-none focus:border-[#c3a165]"
              >
                <option value="Panoramic Arch Bridge Window">
                  Arch Bridge Window View
                </option>
                <option value="Curved Plush Lounge Booth">
                  Curved Lounge Velvet Booth
                </option>
                <option value="Sunset High-Top Barstool">
                  High-Top Sunset Barstool
                </option>
                <option value="Quiet Corner Table">Quiet Corner Table</option>
              </select>
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-[11px] font-mono text-[#dec089] mb-1">
              Preferred Time Slot
            </label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a1f19] border border-white/20 text-white focus:outline-none focus:border-[#c3a165]"
            >
              <option value="11:30 AM (Brunch & Coffee)">
                11:30 AM (Brunch & Morning Coffee)
              </option>
              <option value="1:30 PM (Lunch & Italian Pasta)">
                1:30 PM (Lunch & Pasta / Pizza)
              </option>
              <option value="4:00 PM (Afternoon Brews & Shakes)">
                4:00 PM (Afternoon Brews & Shakes)
              </option>
              <option value="6:00 PM (Sunset / Twilight Arch Bridge)">
                6:00 PM (Golden Hour Sunset & Bridge View)
              </option>
              <option value="8:00 PM (Dinner & Stone-Fired Pizzas)">
                8:00 PM (Dinner & Stone-Fired Pizzas)
              </option>
              <option value="9:30 PM (Late Evening Desserts & Frappes)">
                9:30 PM (Late Evening Indulgence)
              </option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-[11px] font-mono text-[#dec089] mb-1">
              Special Requests (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Birthday celebration, vegan milk preference..."
              className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c3a165]"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c3a165] via-[#dec089] to-[#c3a165] text-[#160e0a] font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#c3a165]/30 hover:scale-[1.01] active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Reservation Request via WhatsApp</span>
            </button>

            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs text-center flex items-center justify-center gap-2 border border-white/15 active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#dec089]" />
              <span>Or Call Direct: {siteConfig.contact.displayPhone}</span>
            </a>
          </div>

          <p className="text-[10px] text-white/50 text-center font-mono mt-1">
            Standard hours: 11:00 AM – 11:00 PM · Pushkar Ghat Circle
          </p>
        </form>
      </div>
    </div>
  );
}
