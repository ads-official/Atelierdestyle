"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-md bg-[#FAF7F2] rounded-2xl p-8 z-10 border border-[#E8DEC8] shadow-2xl space-y-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#8C827A] hover:text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <span className="font-serif text-2xl uppercase tracking-widest font-light">
                atelierdestyle
              </span>
              <h3 className="font-serif text-lg mt-2 text-[#1A1A1A]">Client Sign In</h3>
              <p className="text-xs text-[#8C827A] font-light mt-1">
                Access bespoke order tracking and saved wishlists
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("OTP sent to mobile number!");
                onClose();
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C827A] block mb-1">
                  Mobile Number (India)
                </label>
                <div className="flex">
                  <span className="px-3 py-2.5 bg-[#EFE8DE] text-xs font-mono border border-r-0 border-[#D5C9B7] rounded-l text-[#555]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    className="flex-1 bg-white border border-[#D5C9B7] rounded-r px-3 py-2 text-xs font-mono focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium rounded hover:bg-[#333] transition"
              >
                Send OTP
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};