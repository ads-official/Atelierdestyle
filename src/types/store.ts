export interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Category {
  title: string;
  subtitle: string;
  count: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  tag: string;
  price: number;
  originalPrice?: number;
  color: string;
  gsm: string;
  rating: number;
  reviews: number;
  images: string[];
  sizes: string[];
  description: string;
}

export interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

export interface InstagramPost {
  id: number;
  handle: string;
  image: string;
  likes: string;
}