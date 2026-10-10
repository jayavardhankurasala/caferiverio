"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  Coffee,
  Utensils,
  Moon,
  Clock,
} from "lucide-react";

interface TourStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
  icon: React.ElementType;
}

const tourSteps: TourStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Arrival at Pushkar Ghat Circle",
    subtitle: "Rajahmundry's Riverside Heart",
    description:
      "Arrive at the landmark La Hospin at Pushkar Ghat Circle. Step away from city rush into the cool, air-conditioned hospitality of Riverio Cafe, where natural wood tones and river reflections immediately welcome you.",
    highlight: "Ample parking · Beside Godavari River Promenade",
    image: "/images/panoramic-river-day.png",
    icon: MapPin,
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "The Italian Espresso Bar",
    subtitle: "Aroma of Freshly Ground Arabica",
    description:
      "Watch our barista tamp fresh grounds into the portafilter and extract rich golden crema on the dual-boiler machine. Every hot coffee comes accompanied by an artisan crunchy cookie or toast.",
    highlight: "100% Arabica roasts · Handcrafted latte art",
    image: "/images/portafilter-tamp.png",
    icon: Coffee,
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "The Panoramic Riverfront Lounge",
    subtitle: "Floor-to-Ceiling Waterline Glass",
    description:
      "Take a seat in our signature semi-circular teal velvet booths. Gaze out at the wide expanse of the Godavari River and watch local fishermen and river ferries cruise past your table.",
    highlight: "Curved plush booths · High-top sunset barstools",
    image: "/images/panoramic-bridge-view-wide.jpg",
    icon: Compass,
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Gourmet Table Feast",
    subtitle: "Pizzas, Pastas & Twin Coolers",
    description:
      "Your order arrives: crispy stone-fired pizzas with pulling mozzarella, creamy al dente pastas with toasted garlic bread, and muddled strawberry and sparkling blue mojitos reflecting the daylight.",
    highlight: "Stone-fired crusts · Hand-muddled botanical coolers",
    image: "/images/pizza-twin-coolers.png",
    icon: Utensils,
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Twilight over Godavari Arch Bridge",
    subtitle: "The Iconic Evening Spectacle",
    description:
      "As dusk descends, warm spherical chandeliers glow overhead while the famous Godavari Arch Bridge lights up outside. Watch passenger trains cross the arches against a deep sapphire sky.",
    highlight: "Iconic arch bridge vista · Unmatched evening romance",
    image: "/images/twilight-godavari-bridge-lounge.png",
    icon: Moon,
  },
];

export function VirtualTour() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = tourSteps[currentStepIndex];

  const handleNext = () => {
    setCurrentStepIndex((prev) => (prev + 1) % tourSteps.length);
  };

  const handlePrev = () => {
    setCurrentStepIndex((prev) =>
      prev === 0 ? tourSteps.length - 1 : prev - 1
    );
  };

  return (
    <section id="tour" className="py-24 bg-[#0d2820] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c3a165]/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c3a165]/20 text-[#dec089] text-xs font-semibold tracking-widest uppercase mb-4 border border-[#c3a165]/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            A Walk Through <span className="italic text-[#dec089]">Café Riverio</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base font-light">
            Journey step-by-step through our riverside spaces, craft coffee
            rituals, and panoramic dining vistas before you visit.
          </p>
        </div>

        {/* Horizontal Step Tabs for Mobile & Desktop */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tourSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === currentStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStepIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-[#c3a165] to-[#dec089] text-[#160e0a] font-bold shadow-lg shadow-[#c3a165]/30 scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#160e0a]" : "text-[#c3a165]"}`} />
                <span>{step.stepNumber}. {step.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Tour Showcase Card */}
        <div className="bg-[#163d32]/80 backdrop-blur-xl border border-[#c3a165]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Screen with 4K-ready photography (Left 7 Cols) */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[280px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#c3a165]/40 group">
                <Image
                  src={currentStep.image}
                  alt={currentStep.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Step Pill */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono text-[#dec089] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c3a165]" />
                  <span>Stop {currentStep.stepNumber} of 05</span>
                </div>

                {/* Highlight Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-white/90">
                  <div className="flex items-center gap-2 text-[#dec089] font-semibold text-[11px] uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Signature Note</span>
                  </div>
                  <p>{currentStep.highlight}</p>
                </div>
              </div>
            </div>

            {/* Narrative & Controls (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-[#dec089] uppercase tracking-widest block mb-2">
                  Step {currentStep.stepNumber} · Walkthrough
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentStep.title}
                </h3>

                <p className="text-sm font-medium text-[#dec089] mb-5">
                  {currentStep.subtitle}
                </p>

                <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed mb-8">
                  {currentStep.description}
                </p>
              </div>

              {/* Progress and Nav Buttons */}
              <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {tourSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStepIndex(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === currentStepIndex
                          ? "w-8 bg-[#c3a165]"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous step"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white border border-white/10"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next step"
                    className="p-3 rounded-full bg-gradient-to-r from-[#c3a165] to-[#dec089] text-[#160e0a] hover:shadow-lg hover:shadow-[#c3a165]/30 active:scale-95 transition-all font-bold"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
