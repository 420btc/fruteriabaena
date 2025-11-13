import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  unit: string;
  category_id: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_offer: boolean;
  stock_available: boolean;
  created_at: string;
}

export interface SpecialOffer {
  id: string;
  product_id: string;
  offer_text: string;
  discount_price: number | null;
  is_active: boolean;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}
