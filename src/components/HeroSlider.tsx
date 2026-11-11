"use client";
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroSlide } from '@/types/store';

interface HeroSliderProps {
  slides: HeroSlide[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[82vh] min-h-[560px] max-h-[820px] overflow-hidden bg-[#1A1A1A]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeHero === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] transition-transform duration-[7000ms] ease-out ${
              activeHero === index ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/30"></div>
          <div className="absolute inset-0 bg-[#3F2B20]/15 mix-blend-color"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full text-white">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[#FAF7F2] text-[11px] font-mono tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5E5DC]" />
                  <span>{slide.tag}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.15] text-white drop-shadow-sm font-light">
                  {slide.title}
                </h1>

                <p className="text-white/80 text-sm sm:text-base font-light max-w-lg leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => {
                      document.getElementById("product-showcase")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-3.5 bg-[#FAF7F2] text-[#1A1A1A] font-medium text-xs tracking-widest uppercase rounded-sm hover:bg-[#F5E5DC] transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center group"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition duration-200" />
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("fabric-story")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-7 py-3.5 bg-transparent border border-white/50 text-white font-medium text-xs tracking-widest uppercase rounded-sm hover:border-white hover:bg-white/10 transition backdrop-blur-sm"
                  >
                    {slide.ctaSecondary}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center space-x-3">
        <button
          onClick={() => setActiveHero((prev) => (prev - 1 + slides.length) % slides.length)}
          className="w-11 h-11 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveHero((prev) => (prev + 1) % slides.length)}
          className="w-11 h-11 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-10 left-6 sm:left-12 z-20 flex items-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveHero(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeHero === idx ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};