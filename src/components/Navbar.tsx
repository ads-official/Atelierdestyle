"use client";
import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  totalCartCount: number;
  wishlistCount: number;
  onOpenMobileMenu?: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalCartCount,
  wishlistCount,
  onOpenSearch,
  onOpenAccount,
  onOpenCart,
  onOpenWishlist
}) => {
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navLinks = ["New Arrivals", "Menswear", "Oversized", "Collections", "Gifting", "Sale"];

  return (
    <>
      <header className="relative w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EFE8DE] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            {/* Left: Mobile 3-Line Toggle (Sirf Phone par) + Desktop Nav Links */}
            <div className="flex items-center flex-1 min-w-0">
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="md:hidden p-2 -ml-2 text-[#1A1A1A] hover:opacity-70 transition"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 text-[10px] lg:text-[11px] font-medium tracking-[0.12em] uppercase">
                {navLinks.map((item) => (
                  <div
                    key={item}
                    className="relative group py-6 cursor-pointer whitespace-nowrap"
                    onMouseEnter={() => setActiveMegamenu(item)}
                    onMouseLeave={() => setActiveMegamenu(null)}
                  >
                    <span className="transition duration-200 hover:text-[#9B5B3E] relative inline-flex items-center">
                      {item}
                      {item === "Sale" && (
                        <span className="ml-1 px-1.5 py-0.5 text-[8px] bg-[#9B5B3E] text-white rounded font-bold uppercase tracking-wider">
                          -25%
                        </span>
                      )}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1A1A1A] transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    {activeMegamenu === item && (
                      <div className="absolute top-full left-0 w-[600px] bg-[#FAF7F2] border border-[#E8DEC8] shadow-2xl p-6 rounded-b-xl grid grid-cols-3 gap-6 z-50 whitespace-normal">
                        <div className="space-y-3">
                          <p className="text-[11px] font-semibold text-[#8C827A] tracking-widest uppercase border-b border-[#E8DEC8] pb-1">
                            Curated Edits
                          </p>
                          <ul className="space-y-2 text-xs font-normal text-[#333] normal-case tracking-normal">
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Heavy Box Tees</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">420 GSM Hoodies</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Relaxed Tailored Pants</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Garment Dyed Sweaters</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Raw Hem Outerwear</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <p className="text-[11px] font-semibold text-[#8C827A] tracking-widest uppercase border-b border-[#E8DEC8] pb-1">
                            The Essentials
                          </p>
                          <ul className="space-y-2 text-xs font-normal text-[#333] normal-case tracking-normal">
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Zero Distortion Collars</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Pre-Shrunk Guarantee</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Signature Neutral Palette</li>
                            <li className="hover:text-[#9B5B3E] transition cursor-pointer">Gift Sets & Bundles</li>
                          </ul>
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-[#F2ECE3] p-4 flex flex-col justify-end min-h-[160px]">
                          <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
                            alt="Featured Drop"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                          <div className="relative z-10 text-white normal-case tracking-normal">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5E5DC]">New Capsule</span>
                            <p className="text-sm font-serif font-medium leading-tight mt-1">Autumn Raw Tones</p>
                            <span className="text-[11px] underline mt-1 inline-block text-white/90">Shop Now</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="shrink-0 text-center px-1">
              <a href="#" className="inline-block group">
                <span className="font-serif text-lg sm:text-xl lg:text-2xl tracking-[0.16em] uppercase font-light text-[#1A1A1A] group-hover:text-[#9B5B3E] transition duration-300 whitespace-nowrap">
                  atelierdestyle
                </span>
                <span className="block text-[7px] sm:text-[8px] tracking-[0.28em] text-[#8C827A] uppercase -mt-0.5 whitespace-nowrap">
                  Haute Prêt-à-Porter
                </span>
              </a>
            </div>

            {/* Right: Search -> Wishlist -> Cart -> Account */}
            <div className="flex items-center justify-end flex-1 space-x-1.5 sm:space-x-3">
              {/* 1. Search */}
              <button
                onClick={onOpenSearch}
                className="p-2 hover:text-[#9B5B3E] transition text-[#1A1A1A]"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* 2. Wishlist */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2 hover:text-[#9B5B3E] transition text-[#1A1A1A]"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#BA684B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* 3. Cart */}
              <button
                onClick={onOpenCart}
                className="relative px-2.5 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333] transition flex items-center shadow-sm"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="ml-1.5 text-xs font-medium font-mono">{totalCartCount}</span>
              </button>

              {/* 4. Account (Cart ke side me) */}
              <button
                onClick={onOpenAccount}
                className="p-2 hover:text-[#9B5B3E] transition text-[#1A1A1A]"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Menu Drawer (Phone Users Ke Liye) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-80 max-w-[85vw] bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-[#E8DEC8] pb-4">
                <div>
                  <p className="font-serif text-lg tracking-[0.18em] uppercase text-[#1A1A1A]">
                    atelierdestyle
                  </p>
                  <p className="text-[8px] tracking-[0.25em] text-[#8C827A] uppercase">
                    Haute Prêt-à-Porter
                  </p>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 rounded-full hover:bg-[#EFE8DE] text-[#1A1A1A]"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 space-y-1">
                {navLinks.map((item) => (
                  <button
                    key={item}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="w-full flex items-center justify-between py-3.5 px-2 border-b border-[#EFE8DE] text-left text-xs font-medium tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#9B5B3E] transition"
                  >
                    <span className="flex items-center">
                      {item}
                      {item === "Sale" && (
                        <span className="ml-2 px-1.5 py-0.5 text-[9px] bg-[#9B5B3E] text-white rounded font-bold">
                          -25%
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#8C827A]" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Quick Account & Support Actions */}
            <div className="pt-6 border-t border-[#E8DEC8] space-y-3">
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenAccount();
                }}
                className="w-full py-3 px-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                My Account / Orders
              </button>
              <p className="text-[11px] text-center text-[#8C827A]">
                Free Shipping Across India Above ₹1,999
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};