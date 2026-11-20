"use client";
import React from 'react';
import { X } from 'lucide-react';

interface AnnouncementBarProps {
  visible: boolean;
  onClose: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="w-full bg-[#EED9CE] text-[#33221C] text-xs sm:text-sm tracking-wider uppercase py-2.5 px-4 font-medium flex items-center justify-between border-b border-[#E3C7B8]">
      <div className="flex-1 flex items-center justify-center space-x-2 text-center truncate">
        <span className="inline-block w-2 h-2 rounded-full bg-[#BA684B] animate-pulse shrink-0"></span>
        <span className="font-semibold text-[11px] sm:text-xs tracking-widest text-[#7C3620]">
          INDIA EXCLUSIVE:
        </span>
        <span className="text-[11px] sm:text-xs truncate">
          Free shipping across India above ₹1,999 • Use code{" "}
          <span className="font-bold underline decoration-dotted underline-offset-4">
            FIRST10
          </span>{" "}
          for 10% off
        </span>
      </div>
      <button
        onClick={onClose}
        className="ml-3 p-1 hover:bg-[#33221C]/10 rounded-full transition shrink-0"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};