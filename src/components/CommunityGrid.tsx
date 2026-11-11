"use client";
import React from 'react';
import { InstagramPost } from '@/types/store';

interface CommunityGridProps {
  posts: InstagramPost[];
}

export const CommunityGrid: React.FC<CommunityGridProps> = ({ posts }) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-md mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C827A]">
          Seen On You
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] mt-1 font-normal">
          Join the Atelier Community
        </h2>
        <p className="text-xs text-[#6F6760] font-light mt-2">
          Tag <span className="font-medium text-[#1A1A1A]">@atelierdestyle</span> and use #LAtelierDrape to be featured in our seasonal lookbook.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[#ECE5DA] cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.handle}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 text-white">
              {/* Clean inline SVG for Instagram without library bugs */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xs font-mono font-medium">{post.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};