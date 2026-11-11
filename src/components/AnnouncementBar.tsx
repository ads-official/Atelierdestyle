"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AnnouncementBarProps {
  visible: boolean;
  onClose: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ visible, onClose }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[#EED9CE] text-[#33221C] text-xs sm:text-sm tracking-wider uppercase py-2.5 px-4 font-medium flex items-center justify-between border-b border-[#E3C8BA] relative z-50 overflow-hidden"
        >
          <div className="flex-1 flex items-center justify-center space-x-2 text-center truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-[#BA684B] animate-pulse"></span>
            <span className="font-semibold text-xs tracking-widest text-[#7C3620]">
              INDIA EXCLUSIVE:
            </span>
            <span className="text-xs">
              Free shipping across India above ₹1,999 • Use code{" "}
              <span className="font-bold underline decoration-dotted underline-offset-4">FIRST10</span> for 10% off
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#644439] hover:text-black p-1 ml-2 transition"
            aria-label="Dismiss Announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};