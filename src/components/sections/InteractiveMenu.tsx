"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  menuCategories,
  verifiedMenuItems,
  MenuCategoryKey,
} from "@/data/menu";
import { siteConfig } from "@/data/site";
import { formatINR } from "@/lib/utils";
import {
  Search,
  Utensils,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function InteractiveMenu() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "non-veg">(
    "all"
  );
  const filteredItems = useMemo(() => {
    return verifiedMenuItems.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      // Dietary filter
      const matchesDietary =
        dietaryFilter === "all" ||
        (dietaryFilter === "veg" && item.isVeg) ||
        (dietaryFilter === "non-veg" && !item.isVeg);

      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-12 sm:py-24 bg-[#f7f3ea] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163d32]/10 text-[#163d32] text-xs font-semibold tracking-widest uppercase mb-4">
            <Utensils className="w-3.5 h-3.5 text-[#c3a165]" />
            <span>Official Culinary Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#160e0a] font-bold tracking-tight mb-4">
            The Riverio <span className="italic text-[#163d32]">Menu</span>
          </h2>

          <p className="text-sm sm:text-base text-[#251913]/75 font-light">
            Verified directly from our culinary register at{" "}
            <a
              href="https://lahospin.dreamlook.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#163d32] font-semibold underline underline-offset-4 hover:text-[#c3a165]"
            >
              lahospin.dreamlook.in
            </a>
            . Real dishes, transparent INR pricing, and authentic flavors.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            {siteConfig.social.swiggyUrl && (
              <a
                href={siteConfig.social.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#fc8019] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#e87312]"
              >
                Order on Swiggy
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.zomatoUrl && (
              <a
                href={siteConfig.social.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#e23744] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#c92d39]"
              >
                Order on Zomato
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div hidden={!isMenuExpanded}>
        {/* Search & Dietary Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#163d32]/10 mb-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, pizza, pasta, mojitos..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f7f3ea]/70 border border-stone-200 text-sm focus:outline-none focus:border-[#163d32] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setDietaryFilter("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                dietaryFilter === "all"
                  ? "bg-[#163d32] text-white shadow"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setDietaryFilter("veg")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                dietaryFilter === "veg"
                  ? "bg-green-700 text-white shadow"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Veg Only</span>
            </button>

            <button
              onClick={() => setDietaryFilter("non-veg")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                dietaryFilter === "non-veg"
                  ? "bg-red-700 text-white shadow"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Category Pills (Horizontal Scroll on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-[#163d32] text-white shadow-md scale-105"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-6 max-w-7xl mx-auto px-1">
          <span>
            Showing {filteredItems.length} verified item
            {filteredItems.length === 1 ? "" : "s"}
          </span>
          {selectedCategory !== "all" && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setDietaryFilter("all");
              }}
              className="text-[#163d32] font-semibold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 max-w-xl mx-auto">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-stone-700 mb-1">
              No matching items found
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Try adjusting your search query or dietary filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setDietaryFilter("all");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 rounded-xl bg-[#163d32] text-white text-xs font-semibold"
            >
              Show All Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.slice(0, isMenuExpanded ? undefined : 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Dietary Mark, Name, Price */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`inline-flex items-center justify-center w-4 h-4 rounded-sm border mt-1 flex-shrink-0 ${
                          item.isVeg ? "border-green-600" : "border-red-600"
                        }`}
                        title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? "bg-green-600" : "bg-red-600"
                          }`}
                        />
                      </span>

                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#160e0a] group-hover:text-[#163d32] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-[11px] font-mono text-stone-400 uppercase">
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#163d32]">
                        {formatINR(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail if available */}
                  {item.image && (
                    <div className="relative h-28 sm:h-36 w-full rounded-xl overflow-hidden my-3 bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className={`${isMenuExpanded ? "" : "line-clamp-2"} text-xs sm:text-sm text-[#251913]/70 font-light leading-relaxed my-2`}>
                    {item.description}
                  </p>

                  {/* Complimentary Notice */}
                  {item.complimentary && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#c3a165]/15 text-[#8c6b2d] text-[11px] font-medium my-1">
                      <Sparkles className="w-3 h-3 text-[#c3a165]" />
                      <span>{item.complimentary}</span>
                    </div>
                  )}

                  {/* Price Variants (e.g. Classic vs Magnum) */}
                  {item.priceVariants && item.priceVariants.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-stone-100 flex flex-wrap gap-2">
                      {item.priceVariants.map((v) => (
                        <span
                          key={v.label}
                          className="px-2 py-1 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium flex items-center gap-1.5"
                        >
                          <span>{v.label}:</span>
                          <strong className="text-[#163d32]">
                            {formatINR(v.price)}
                          </strong>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tags */}
                {isMenuExpanded && item.tags && item.tags.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-500"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-7 text-center">
          <button
            type="button"
            onClick={() => {
              if (isMenuExpanded) {
                setSelectedCategory("all");
                setSearchQuery("");
                setDietaryFilter("all");
              }
              setIsMenuExpanded((expanded) => !expanded);
            }}
            aria-expanded={isMenuExpanded}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#163d32] px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#0d2820] active:scale-95"
          >
            {isMenuExpanded ? "Show featured menu" : "View full menu"}
          </button>
        </div>

        {/* Vegan Milk Addon Callout */}
        <div hidden={!isMenuExpanded} className="mt-12 bg-white rounded-2xl p-6 border border-[#c3a165]/40 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-2xl bg-[#c3a165]/15 text-[#8c6b2d]">
            <Sparkles className="w-6 h-6 text-[#c3a165]" />
          </div>
          <div className="flex-1">
            <h4 className="font-serif text-base font-bold text-[#160e0a]">
              Exclusive Plant-Based Milk Options
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Any hot or cold beverage can be prepared with vegan almond or oat
              milk for an additional ₹100/-. Ask your barista!
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#163d32] text-white text-xs font-bold font-mono">
            +₹100
          </span>
        </div>
      </div>
    </section>
  );
}
