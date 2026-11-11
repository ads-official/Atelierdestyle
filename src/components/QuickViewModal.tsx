"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { Product } from '@/types/store';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2 border border-[#E8DEC8]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-black hover:bg-black hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="aspect-[3/4] bg-[#EAE2D5] relative overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#1A1A1A] text-white rounded">
                  {product.tag}
                </span>
                <span className="text-xs text-[#9B5B3E] font-medium">
                  ★ {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                {product.name}
              </h3>

              <div className="mt-2 flex items-baseline space-x-3 font-mono">
                <span className="text-xl font-bold text-[#1A1A1A]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C827A] line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs text-[#554E48] leading-relaxed font-light">
                {product.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#E8DEC8] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Fabric Density:</span>
                  <span className="font-mono font-medium">{product.gsm}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C827A]">Color Tone:</span>
                  <span className="font-medium">{product.color}</span>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-widest font-mono text-[#8C827A] block mb-2">
                  Choose Size:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => {
                        onAddToCart(product, sz);
                        onClose();
                      }}
                      className="px-4 py-2 border border-[#1A1A1A] text-xs font-mono rounded hover:bg-[#1A1A1A] hover:text-white transition"
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onAddToCart(product, product.sizes[0]);
                onClose();
              }}
              className="w-full py-3.5 bg-[#1A1A1A] text-white font-medium text-xs uppercase tracking-widest rounded hover:bg-[#333] transition flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add To Bag (Default {product.sizes[0]})</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};