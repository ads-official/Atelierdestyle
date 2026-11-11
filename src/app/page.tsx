"use client";
import React, { useState } from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { Categories } from '@/components/Categories';
import { ProductShowcase } from '@/components/ProductShowcase';
import { FabricStory } from '@/components/FabricStory';
import { TrustBar } from '@/components/TrustBar';
import { CommunityGrid } from '@/components/CommunityGrid';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { SearchModal } from '@/components/SearchModal';
import { AccountModal } from '@/components/AccountModal';

import { HERO_SLIDES, CATEGORIES, PRODUCTS, INSTAGRAM_POSTS } from '@/data/mockData';
import { CartItem, Product } from '@/types/store';

export default function Home() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [wishlist, setWishlist] = useState<number[]>([2]);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      productId: 1,
      name: "L'Atelier Heavy Box Tee",
      price: 2490,
      size: "L",
      color: "Raw Ecru",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    }
  ]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, selectedSize = "M") => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id && item.size === selectedSize);
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: Date.now(),
          productId: product.id,
          name: product.name,
          price: product.price,
          size: selectedSize,
          color: product.color,
          quantity: 1,
          image: product.images[0]
        }
      ];
    });
    setCartOpen(true);
  };

  const handleUpdateQty = (index: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item, idx) => {
          if (idx === index) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A] font-sans antialiased selection:bg-[#F5E5DC] selection:text-[#1A1A1A]">
      <AnnouncementBar
        visible={announcementVisible}
        onClose={() => setAnnouncementVisible(false)}
      />

      <Navbar
        totalCartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => alert(`You have ${wishlist.length} items saved in your wishlist.`)}
      />

      <main>
        <HeroSlider slides={HERO_SLIDES} />
        <Categories categories={CATEGORIES} />
        <ProductShowcase
          products={PRODUCTS}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
        <FabricStory />
        <TrustBar />
        <CommunityGrid posts={INSTAGRAM_POSTS} />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        upsellProducts={PRODUCTS.slice(2, 4)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromCart}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
      />
    </div>
  );
}