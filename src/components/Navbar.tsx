"use client";
import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';

interface NavbarProps {
  totalCartCount: number;
  wishlistCount: number;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalCartCount,
  wishlistCount,
  onOpenMobileMenu,
  onOpenSearch,
  onOpenAccount,
  onOpenCart,
  onOpenWishlist
}) => {
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);

  const navLinks = ["New Arrivals", "Menswear", "Oversized", "Collections", "Gifting", "Sale"];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EFE8DE] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 text-[#1A1A1A] hover:opacity-70 transition"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-widest uppercase">
              {navLinks.map((item) => (
                <div
                  key={item}
                  className="relative group py-6 cursor-pointer"
                  onMouseEnter={() => setActiveMegamenu(item)}
                  onMouseLeave={() => setActiveMegamenu(null)}
                >
                  <span className="transition duration-200 hover:text-[#9B5B3E] relative">
                    {item}
                    {item === "Sale" && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[9px] bg-[#9B5B3E] text-white rounded font-bold uppercase tracking-wider">
                        -25%
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1A1A1A] transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {activeMegamenu === item && (
                    <div className="absolute top-full left-0 w-[620px] bg-[#FAF7F2] border border-[#E8DEC8] shadow-2xl p-6 rounded-b-xl grid grid-cols-3 gap-6 animate-fadeIn z-50">
                      <div className="space-y-3">
                        <p className="text-[11px] font-semibold text-[#8C827A] tracking-widest uppercase border-b border-[#E8DEC8] pb-1">
                          Curated Edits
                        </p>
                        <ul className="space-y-2 text-xs font-normal text-[#333]">
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
                        <ul className="space-y-2 text-xs font-normal text-[#333]">
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
                        <div className="relative z-10 text-white">
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

          <div className="flex-1 text-center lg:flex-initial">
            <a href="#" className="inline-block group">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] uppercase font-light text-[#1A1A1A] group-hover:text-[#9B5B3E] transition duration-300">
                atelierdestyle
              </span>
              <span className="block text-[8px] sm:text-[9px] tracking-[0.35em] text-[#8C827A] uppercase -mt-0.5">
                Haute Prêt-à-Porter
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={onOpenSearch}
              className="p-2 hover:text-[#9B5B3E] transition text-[#1A1A1A]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenAccount}
              className="hidden sm:block p-2 hover:text-[#9B5B3E] transition text-[#1A1A1A]"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

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

            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333] transition flex items-center shadow-md hover:shadow-lg"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="ml-1.5 text-xs font-medium font-mono">{totalCartCount}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};