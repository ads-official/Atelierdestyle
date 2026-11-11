import { HeroSlide, Category, Product, InstagramPost } from '../types/store';

export const FREE_SHIPPING_THRESHOLD = 1999;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: "Autumn / Winter '26 Capsule",
    title: "Sculpted Architecture. Heavyweight Touch.",
    subtitle: "Engineered from 280 GSM combed French terry and custom milled long-staple cotton for effortless drape.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80",
    ctaPrimary: "Explore Capsule",
    ctaSecondary: "View Lookbook"
  },
  {
    id: 2,
    tag: "Signature Drop No. 04",
    title: "Quiet Luxury for Modern Silhouettes",
    subtitle: "Precision dropped-shoulders, reinforced herringbone collars, and deep earth-toned palettes.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80",
    ctaPrimary: "Shop Oversized",
    ctaSecondary: "The Fabric Story"
  },
  {
    id: 3,
    tag: "The Tailored Edit",
    title: "Minimalist Essentials Re-Imagined",
    subtitle: "Bespoke high-density basics designed to survive 100+ wash cycles without shape distortion.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80",
    ctaPrimary: "Discover Essentials",
    ctaSecondary: "Read Craft Notes"
  }
];

export const CATEGORIES: Category[] = [
  {
    title: "Heavyweight Tees",
    subtitle: "240 GSM Pre-Shrunk",
    count: "18 Styles",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Oversized Hoodies",
    subtitle: "420 GSM French Terry",
    count: "12 Styles",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pleated & Cargo Pants",
    subtitle: "Structured Twill Cotton",
    count: "9 Styles",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Minimal Knitwear",
    subtitle: "Superfine Merino Blends",
    count: "14 Styles",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "L'Atelier Heavy Box Tee",
    category: "Signature Heavyweight",
    tag: "Best Seller",
    price: 2490,
    originalPrice: 2990,
    color: "Raw Ecru",
    gsm: "240 GSM Cotton",
    rating: 4.9,
    reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Constructed with 100% custom-milled combed cotton with a high-density 1x1 rib knit collar that never sags. Finished with blind stitching on hems for a seamless, ultra-modern silhouette."
  },
  {
    id: 2,
    name: "Architectural Drape Hoodie",
    category: "Signature Heavyweight",
    tag: "240 GSM",
    price: 4890,
    originalPrice: 5490,
    color: "Charcoal Slate",
    gsm: "420 GSM Terry",
    rating: 4.95,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["M", "L", "XL"],
    description: "Features a double-layered rigid hood without drawstrings for an uncompromising architectural look. Finished in heavy enzyme wash for buttery softness."
  },
  {
    id: 3,
    name: "Solstice Raw Hem Overshirt",
    category: "New In",
    tag: "Limited Drop",
    price: 3890,
    originalPrice: 4200,
    color: "Warm Oat",
    gsm: "280 GSM Twill",
    rating: 4.8,
    reviews: 54,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Layering perfection tailored with horn buttons, drop-shoulder armholes, and subtle side-seam pockets."
  },
  {
    id: 4,
    name: "Atelier Relaxed Pleated Trouser",
    category: "Best Sellers",
    tag: "Essential",
    price: 3990,
    originalPrice: 4500,
    color: "Deep Espresso",
    gsm: "Cotton Gabardine",
    rating: 4.9,
    reviews: 73,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["30", "32", "34", "36"],
    description: "High-waisted silhouette with single front pleats, hidden drawstring elastic waist, and tailored wide leg break."
  },
  {
    id: 5,
    name: "Monolith Mockneck Sweater",
    category: "New In",
    tag: "Limited",
    price: 4490,
    originalPrice: 5190,
    color: "Alabaster",
    gsm: "Merino Wool Blend",
    rating: 5.0,
    reviews: 31,
    images: [
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Seamless knitted mock collar with ribbed cuffs and subtle lateral vented hemline for seamless drape over trousers."
  },
  {
    id: 6,
    name: "Vintage Mineral Washed Tee",
    category: "Signature Heavyweight",
    tag: "240 GSM",
    price: 2690,
    originalPrice: 3100,
    color: "Faded Sage",
    gsm: "260 GSM Cotton",
    rating: 4.88,
    reviews: 110,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Hand-treated mineral wash giving every individual piece a unique subtle patina and unmatched softness."
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, handle: "@atelierdestyle", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", likes: "1.4k" },
  { id: 2, handle: "@atelierdestyle", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80", likes: "2.1k" },
  { id: 3, handle: "@atelierdestyle", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80", likes: "980" },
  { id: 4, handle: "@atelierdestyle", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80", likes: "3.2k" }
];