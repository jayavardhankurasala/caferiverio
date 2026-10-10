"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

interface SocialPost {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

const socialPosts: SocialPost[] = [
  {
    id: "insta-1",
    image: "/images/latte-art-bokeh.png",
    alt: "Riverio Barista Latte Art",
    caption: "Mornings by the Godavari begin with precision pours. ☕✨ #caferiverio",
  },
  {
    id: "insta-2",
    image: "/images/twilight-godavari-bridge-lounge.png",
    alt: "Twilight Bridge View",
    caption: "The golden hour transitions into deep twilight over the arch bridge. 🌅 #rajahmundry",
  },
  {
    id: "insta-3",
    image: "/images/pizza-twin-coolers.png",
    alt: "Pizza and Twin Coolers",
    caption: "Crispy crusts and refreshing twin coolers for your weekend table. 🍕🍹 #riversidedining",
  },
  {
    id: "insta-4",
    image: "/images/interior-gallery-corridor.png",
    alt: "Modern Architectural Hall",
    caption: "Warm wood, designer lighting, and endless river views. 🪑🌿 #rajamahendravaram",
  },
];

export function InstagramFeedSection() {
  return (
    <section className="py-20 bg-[#f7f3ea] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#c3a165] font-semibold mb-1">
              <InstagramIcon className="w-4 h-4" />
              <span>{siteConfig.social.instagramHandle}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#160e0a]">
              Follow Our Riverside Moments
            </h2>
          </div>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#163d32] text-white text-xs font-semibold hover:bg-[#c3a165] hover:text-[#160e0a] active:scale-95 transition-all w-fit"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Instagram Visual Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {socialPosts.map((post) => (
            <a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-stone-200 shadow-sm border border-stone-200 block"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <InstagramIcon className="w-6 h-6 text-[#dec089] mb-2" />
                <p className="text-[11px] text-white/90 font-light line-clamp-3">
                  {post.caption}
                </p>
                <span className="text-[10px] font-mono text-[#dec089] mt-2 underline">
                  View on Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
