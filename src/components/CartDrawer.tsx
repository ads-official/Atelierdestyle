"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Minus, Plus, Check, ArrowRight } from 'lucide-react';
import { CartItem, Product } from '@/types/store';
import { FREE_SHIPPING_THRESHOLD } from '@/data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  upsellProducts: Product[];
  onUpdateQty: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  upsellProducts,
  onUpdateQty,
  onRemoveItem,
  onAddToCart
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const discountAmount = Math.round(cartSubtotal * appliedDiscount);
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);
  const shippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "FIRST10") {
      setAppliedDiscount(0.1);
      setPromoMessage("10% discount applied to your order!");
    } else {
      setPromoMessage("Invalid promo code. Try FIRST10");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF7F2] shadow-2xl z-50 flex flex-col justify-between"
          >
            <div className="p-6 border-b border-[#E8DEC8] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-normal text-[#1A1A1A]">
                  Your Shopping Bag
                </h3>
                <span className="text-xs text-[#8C827A] font-mono">
                  {totalCartCount} {totalCartCount === 1 ? "Item" : "Items"}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#1A1A1A] hover:opacity-60 transition rounded-full hover:bg-[#EFE8DE]"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#F3ECE1] px-6 py-3 border-b border-[#E8DEC8]">
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="text-[#554E48]">
                  {shippingRemaining === 0 ? (
                    <span className="text-emerald-700 font-semibold flex items-center">
                      <Check className="w-3.5 h-3.5 mr-1" /> Unlocked Free Pan-India Shipping!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-[#1A1A1A]">₹{shippingRemaining.toLocaleString("en-IN")}</strong> for Free Shipping
                    </span>
                  )}
                </span>
                <span className="font-semibold text-[#1A1A1A]">{freeShippingProgress}%</span>
              </div>
              <div className="w-full bg-[#DFD6C8] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#BA684B] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#8C827A]">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <p className="font-serif text-xl text-[#1A1A1A]">Your bag is empty</p>
                  <p className="text-xs text-[#7A7169] max-w-xs mx-auto">
                    Explore our 240+ GSM heavyweight drop and discover sculpted modern essentials.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-6 py-2.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest rounded hover:bg-[#333] transition"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex space-x-4 pb-4 border-b border-[#EFE8DE] items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded-md bg-[#E8DEC8]"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm text-[#1A1A1A] font-medium leading-tight">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-xs text-[#8C827A] hover:text-red-500 ml-2"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-[#7A7169] font-mono">
                          Size: <span className="text-[#1A1A1A] font-medium">{item.size}</span> | {item.color}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[#D5C9B7] rounded bg-white">
                            <button
                              onClick={() => onUpdateQty(idx, -1)}
                              className="p-1 hover:bg-[#FAF7F2] text-[#333]"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-mono font-medium">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQty(idx, 1)}
                              className="p-1 hover:bg-[#FAF7F2] text-[#333]"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-mono text-sm font-semibold text-[#1A1A1A]">
                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <div className="pt-4 border-t border-[#E8DEC8]">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#7A7169] block mb-3">
                    Complete The Look
                  </span>
                  <div className="space-y-3">
                    {upsellProducts.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between bg-white/70 p-3 rounded-lg border border-[#E8DEC8]"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-12 h-14 object-cover rounded bg-[#E8DEC8]"
                          />
                          <div>
                            <p className="font-serif text-xs text-[#1A1A1A] font-medium line-clamp-1">
                              {p.name}
                            </p>
                            <p className="font-mono text-xs text-[#7A7169]">
                              ₹{p.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => onAddToCart(p, p.sizes[0])}
                          className="text-[11px] font-mono px-3 py-1.5 bg-[#1A1A1A] text-white rounded hover:bg-[#9B5B3E] transition"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-[#F3ECE1] border-t border-[#E8DEC8] space-y-4">
                <form onSubmit={handleApplyPromo} className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Promo Code (Try FIRST10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="bg-white border border-[#D5C9B7] px-3 py-2 text-xs font-mono uppercase rounded flex-1 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-medium uppercase tracking-wider rounded hover:bg-[#333] transition"
                  >
                    Apply
                  </button>
                </form>
                {promoMessage && (
                  <p className="text-[11px] font-medium text-[#9B5B3E]">{promoMessage}</p>
                )}

                <div className="space-y-1.5 text-xs text-[#6F6760] font-light">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-[#1A1A1A]">₹{cartSubtotal.toLocaleString("en-IN")}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-[#BA684B] font-medium">
                      <span>Discount (10%)</span>
                      <span className="font-mono">-₹{discountAmount.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping (Pan-India)</span>
                    <span className="font-mono text-[#1A1A1A]">
                      {shippingRemaining === 0 ? "FREE" : "₹150"}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-medium text-[#1A1A1A] pt-2 border-t border-[#DFD6C8]">
                    <span>Estimated Total</span>
                    <span className="font-mono font-bold">
                      ₹{(cartTotal + (shippingRemaining === 0 ? 0 : 150)).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert(`Proceeding to secure gateway for ₹${(cartTotal + (shippingRemaining === 0 ? 0 : 150)).toLocaleString("en-IN")}. Razorpay / UPI ready.`);
                  }}
                  className="w-full py-3.5 bg-[#1A1A1A] text-white font-medium text-xs uppercase tracking-widest rounded hover:bg-[#333] transition flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-[#8C827A] font-light">
                  Taxes calculated at checkout • 7-day hassle free returns
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};