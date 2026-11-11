"use client";
import React, { useState, useMemo } from 'react';
import { Heart, Eye } from 'lucide-react';
import { Product } from '@/types/store';

interface ProductShowcaseProps {
  products: Product[];
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onAddToCart: (product: Product, size: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "Signature Heavyweight") {
      return products.filter((p) => p.category === "Signature Heavyweight");
    }
    if (activeTab === "New In") {
      return products.filter((p) => p.category === "New In");
    }
    return products;
  }, [activeTab, products]);

  return (
    <section id="product-showcase" className="py-16 bg-[#F6F1EA] border-y border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C827A]">
              The Edit
            </span>
            <h2 className="text-3xl font-serif text-[#1A1A1A] mt-1 font-normal">
              Signature Wardrobe Staples
            </h2>
          </div>

          <div className="flex p-1 bg-[#EBE3D7] rounded-full space-x-1">
            {["Best Sellers", "New In", "Signature Heavyweight"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1A1A1A] text-white shadow-md"
                    : "text-[#625950] hover:text-[#1A1A1A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="group bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#E8DFC8] flex flex-col transition duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE2D5] cursor-pointer">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 z-10 flex flex-col space-y-1.5">
                    <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase bg-[#1A1A1A]/90 text-white rounded backdrop-blur-sm">
                      {product.tag}
                    </span>
                    <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#EED9CE] text-[#553225] font-semibold rounded w-max">
                      {product.gsm}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1A1A1A] hover:text-[#BA684B] transition shadow-sm"
                    aria-label="Toggle Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? "fill-[#BA684B] text-[#BA684B]" : ""
                      }`}
                    />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-white text-[11px] font-medium tracking-wider uppercase mb-1">
                      <span>Select Size:</span>
                      <button
                        onClick={() => onQuickView(product)}
                        className="flex items-center text-[10px] text-white/90 underline hover:text-white"
                      >
                        <Eye className="w-3 h-3 mr-1" /> Quick Look
                      </button>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => onAddToCart(product, sz)}
                          className="py-1.5 text-xs font-mono font-medium bg-white/95 text-[#1A1A1A] hover:bg-[#BA684B] hover:text-white rounded transition shadow-sm text-center"
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8C827A] mb-1">
                      <span>{product.color}</span>
                      <span className="flex items-center text-[#9B5B3E] font-medium">
                        ★ {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-serif text-lg font-normal text-[#1A1A1A] hover:text-[#9B5B3E] transition cursor-pointer"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#EFE8DE] flex items-center justify-between">
                    <div className="flex items-baseline space-x-2 font-mono">
                      <span className="text-base font-semibold text-[#1A1A1A]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#8C827A] line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onAddToCart(product, product.sizes[0])}
                      className="text-xs uppercase font-medium tracking-wider text-[#1A1A1A] hover:text-[#9B5B3E] transition flex items-center"
                    >
                      <span>+ Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};