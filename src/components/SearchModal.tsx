"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl p-6 z-10 border border-[#E8DEC8]"
          >
            <div className="flex items-center border-b border-[#E8DEC8] pb-4">
              <Search className="w-5 h-5 text-[#8C827A] mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search heavyweight tees, hoodies, raw colors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-base focus:outline-none font-light placeholder:text-[#8C827A]"
              />
              <button
                onClick={onClose}
                className="p-1 text-[#8C827A] hover:text-[#1A1A1A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 pt-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C827A]">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["240 GSM Tee", "French Terry", "Wide Leg Pant", "Raw Ecru", "Drop No. 04"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 bg-[#EFE8DE] text-xs rounded-full hover:bg-[#1A1A1A] hover:text-white transition font-mono"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};