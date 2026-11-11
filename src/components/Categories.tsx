"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types/store';

interface CategoriesProps {
  categories: Category[];
}

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C827A]">
            Explore Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mt-2 font-normal">
            Structured Everyday Silhouettes
          </h2>
        </div>
        <p className="text-xs text-[#6F6760] max-w-md mt-2 md:mt-0 leading-relaxed font-light">
          Every garment is constructed in bespoke small batches in Tirupur & Surat using high-density weaving techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer bg-[#F0EAE1] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] tracking-widest uppercase font-mono text-[#F5E5DC]">
                {cat.count}
              </span>
              <h3 className="text-xl font-serif font-light text-white mt-1 group-hover:text-[#F5E5DC] transition">
                {cat.title}
              </h3>
              <p className="text-xs text-white/70 font-light mt-0.5">{cat.subtitle}</p>

              <div className="mt-4 flex items-center text-xs uppercase tracking-widest font-medium text-white/90 group-hover:text-white transition">
                <span>Shop Collection</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1.5 transition duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};