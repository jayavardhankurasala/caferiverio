"use client";

import React from "react";
import Image from "next/image";
import { formatINR } from "@/lib/utils";
import { Sparkles, Utensils, Check, ArrowRight } from "lucide-react";

interface FeaturedItem {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  image: string;
  description: string;
  badge: string;
  complimentary?: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: "f-cappuccino",
    name: "Cappuccino with Cookie",
    category: "Coffee Fumes",
    price: 299,
    isVeg: true,
    image: "/images/signature-cappuccino-cookie.png",
    description:
      "Double shot espresso with silky micro-foam, cocoa dusting, and our signature crunchy spiced cookie.",
    badge: "Barista Signature",
    complimentary: "Complimentary cookie included",
  },
  {
    id: "f-pizza-double",
    name: "Double Chicken Feast Pizza",
    category: "Stone-Fired Pizza",
    price: 349,
    isVeg: false,
    image: "/images/pizza-twin-coolers.png",
    description:
      "Slow-fermented crisp crust loaded with herb roasted chicken, black olives, jalapeños, and bubbling mozzarella.",
    badge: "Crowd Favorite",
  },
  {
    id: "f-twin-mojito",
    name: "Twin Riverio Coolers",
    category: "Beverage Chillz",
    price: 219,
    isVeg: true,
    image: "/images/craft-mojito-glass.png",
    description:
      "Handcrafted strawberry cooler & sparkling blue lagoon mojito muddled with garden mint and fresh lime.",
    badge: "Godavari Breeze",
  },
  {
    id: "f-pasta-alfredo",
    name: "Truffle Chicken Alfredo Pasta",
    category: "Italian Pasta",
    price: 349,
    isVeg: false,
    image: "/images/pizza-pasta-feast.png",
    description:
      "Al dente pasta tossed in rich garlic parmesan cream with succulent chicken strips and butter-toasted garlic bread.",
    badge: "Rich & Savory",
  },
  {
    id: "f-espresso",
    name: "Italian Classic Espresso",
    category: "Coffee Fumes",
    price: 149,
    isVeg: true,
    image: "/images/espresso-machine-pull.png",
    description:
      "Extracted at 9 bars of pressure on our commercial Italian dual-boiler with thick hazelnut crema.",
    badge: "Pure Espresso",
  },
  {
    id: "f-paneer-pizza",
    name: "Paneer Tikka Gourmet Pizza",
    category: "Stone-Fired Pizza",
    price: 249,
    isVeg: true,
    image: "/images/dining-spread-pizza-pasta.png",
    description:
      "Tandoori-spiced cottage cheese cubes, charred bell peppers, and melted cheese on aromatic herb marinara.",
    badge: "Veggie Delight",
  },
];

export function FeaturedOfferings() {
  return (
    <section className="py-12 sm:py-24 bg-[#faf7f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163d32]/10 text-[#163d32] text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#c3a165]" />
              <span>Handcrafted Favorites</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#160e0a] font-bold tracking-tight mb-3">
              Signature Tastes of <span className="italic text-[#163d32]">Riverio</span>
            </h2>

            <p className="text-sm sm:text-base text-[#251913]/75 font-light">
              Carefully curated items from our verified menu, prepared fresh
              with premium ingredients and verified INR pricing.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#163d32] hover:text-[#c3a165] transition-colors group"
          >
            <span>See Menu Preview</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Featured Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${index >= 3 ? "hidden sm:flex" : "flex"} group bg-white rounded-3xl overflow-hidden border border-[#163d32]/10 shadow-sm hover:shadow-2xl transition-all duration-500 flex-col justify-between`}
            >
              <div>
                {/* Image Aspect Box */}
                <div className="relative h-44 sm:h-60 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#163d32] shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3.5 right-3.5">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/95 border ${
                        item.isVeg ? "border-green-600" : "border-red-600"
                      }`}
                      title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.isVeg ? "bg-green-600" : "bg-red-600"
                        }`}
                      />
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-mono text-white/90 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-serif text-xl font-bold text-[#dec089] drop-shadow">
                      {formatINR(item.price)}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-[#160e0a] group-hover:text-[#163d32] transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#251913]/70 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.complimentary && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#c3a165]/15 text-[#8c6b2d] text-xs font-medium mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#c3a165]" />
                      <span>{item.complimentary}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">
                  Verified In-Cafe Price
                </span>
                <a
                  href="#menu"
                  className="text-xs font-semibold text-[#163d32] hover:text-[#c3a165] flex items-center gap-1"
                >
                  <span>Explore</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
