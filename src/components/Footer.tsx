"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setNewsletterDone(true);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF7F2] pt-16 pb-12 border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#333]">
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.25em] uppercase font-light text-white block">
              atelierdestyle
            </span>
            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              A design laboratory crafting architectural streetwear and heavyweight minimal staples for those who value structure over transient trends.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#F5E5DC] block mb-2">
                Privileged Access • 10% Off First Drop
              </span>
              {newsletterDone ? (
                <div className="p-3 bg-white/10 rounded border border-white/20 text-xs text-[#F5E5DC] flex items-center">
                  <Check className="w-4 h-4 mr-2 text-emerald-400" />
                  Thank you. Check your inbox for your 10% welcome voucher.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white/10 border border-white/20 px-4 py-2.5 text-xs text-white rounded-l focus:outline-none focus:border-[#F5E5DC] flex-1 font-light placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    className="bg-[#FAF7F2] text-[#1A1A1A] px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-r hover:bg-[#F5E5DC] transition"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D2BBAA]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs font-light text-white/70">
              <li className="hover:text-white transition cursor-pointer">Heavyweight Tees</li>
              <li className="hover:text-white transition cursor-pointer">French Terry Hoodies</li>
              <li className="hover:text-white transition cursor-pointer">Tailored Pleated Pants</li>
              <li className="hover:text-white transition cursor-pointer">Overdyed Sweaters</li>
              <li className="hover:text-white transition cursor-pointer">Drop No. 04 Lookbook</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D2BBAA]">
              Client Care
            </h4>
            <ul className="space-y-2 text-xs font-light text-white/70">
              <li className="hover:text-white transition cursor-pointer">Track Pan-India Order</li>
              <li className="hover:text-white transition cursor-pointer">7-Day Return Portal</li>
              <li className="hover:text-white transition cursor-pointer">Garment Wash & Care Guide</li>
              <li className="hover:text-white transition cursor-pointer">Detailed Size Architecture</li>
              <li className="hover:text-white transition cursor-pointer">WhatsApp Concierge (+91)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D2BBAA]">
              The Atelier
            </h4>
            <ul className="space-y-2 text-xs font-light text-white/70">
              <li className="hover:text-white transition cursor-pointer">Our 240 GSM Philosophy</li>
              <li className="hover:text-white transition cursor-pointer">Tamil Nadu Mills & Ethics</li>
              <li className="hover:text-white transition cursor-pointer">Flagship Studio (Indiranagar)</li>
              <li className="hover:text-white transition cursor-pointer">Privacy & Terms</li>
              <li className="hover:text-white transition cursor-pointer">Careers in Fashion</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-light space-y-4 sm:space-y-0">
          <p>© 2026 atelierdestyle. All rights reserved. Designed in India.</p>
          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span>UPI / CARDS / NETBANKING</span>
            <span>•</span>
            <span>100% SECURE SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};