"use client";
import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

export const FabricStory: React.FC = () => {
  return (
    <section id="fabric-story" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#9B5B3E]">
            Artisanal Weave Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light leading-snug">
            240+ GSM Heavyweight Combed Cotton. Crafted for Permanence.
          </h2>
          <p className="text-[#554E48] text-sm sm:text-base leading-relaxed font-light">
            Conventional fast-fashion tees utilize 140–160 GSM single jersey that twists and thins out after just three washes. At atelierdestyle, our proprietary 240+ GSM combed knit is tightly wound with long-staple Indian fiber, delivering substantial drape that hangs perfectly off the chest without clinging.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-2">
            <div className="border-l-2 border-[#D2BBAA] pl-4">
              <span className="text-xl font-mono font-medium text-[#1A1A1A]">100%</span>
              <p className="text-xs text-[#7A7169] mt-1 font-light">Zero synthetic microfiber blends</p>
            </div>
            <div className="border-l-2 border-[#D2BBAA] pl-4">
              <span className="text-xl font-mono font-medium text-[#1A1A1A]">0% Shrinkage</span>
              <p className="text-xs text-[#7A7169] mt-1 font-light">Pre-washed & heat compacted</p>
            </div>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                document.getElementById("product-showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center text-xs uppercase tracking-widest font-medium border-b border-[#1A1A1A] pb-1 hover:text-[#9B5B3E] hover:border-[#9B5B3E] transition"
            >
              <span>View Heavyweight Tees</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE2D5] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
            alt="Heavyweight cotton close up texture"
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-mono text-[#333]">
            Micro-weave density: 32s combed count
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE2D5] shadow-xl order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
            alt="Garment silhouette drape"
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-mono text-[#333]">
            Reinforced 1x1 rib collar structure
          </div>
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#9B5B3E]">
            Zero Distortion Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light leading-snug">
            The Never-Sag Neckband & Blind Hem Stitching.
          </h2>
          <p className="text-[#554E48] text-sm sm:text-base leading-relaxed font-light">
            We engineered a high-elasticity collar with twin-needle reinforced topstitching that remains crisp wear after wear. Our blind-stitched hem and dropped shoulders provide that clean, museum-grade aesthetic beloved by fashion purists.
          </p>
          <ul className="space-y-2 text-xs font-medium text-[#443E38]">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#BA684B] mr-2" /> Anti-pilling silicone bath treatment
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#BA684B] mr-2" /> Reactive, azo-free natural dyes
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-[#BA684B] mr-2" /> Ethical fair-wage ateliers in Tamil Nadu
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};