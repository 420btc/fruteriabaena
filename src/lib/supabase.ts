export const CATEGORIES: Category[] = [
  { id: 'cat-frutas', name: 'Frutas', slug: 'frutas', created_at: new Date().toISOString() },
  { id: 'cat-verduras', name: 'Verduras', slug: 'verduras', created_at: new Date().toISOString() },
  { id: 'cat-citricos', name: 'Cítricos', slug: 'citricos', created_at: new Date().toISOString() }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-mandarinas',
    name: 'Mandarinas',
    description: 'Mandarinas frescas y jugosas',
    price: 1.5,
    unit: 'kg',
    category_id: 'cat-citricos',
    image_url: '/mandarina.jpg',
    is_featured: true,
    is_offer: true,
    stock_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'prod-naranjas',
    name: 'Naranjas de Zumo',
    description: 'Perfectas para zumo natural',
    price: 1.0,
    unit: 'kg',
    category_id: 'cat-citricos',
    image_url: '/naranjas.jpg',
    is_featured: true,
    is_offer: true,
    stock_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'prod-tomates',
    name: 'Tomates',
    description: 'Tomates frescos de la huerta',
    price: 2.5,
    unit: 'kg',
    category_id: 'cat-verduras',
    image_url: '/tomates.jpg',
    is_featured: false,
    is_offer: false,
    stock_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'prod-pimientos',
    name: 'Pimientos',
    description: 'Pimientos verdes y rojos',
    price: 2.2,
    unit: 'kg',
    category_id: 'cat-verduras',
    image_url: '/pimientos.jpg',
    is_featured: false,
    is_offer: false,
    stock_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'prod-pepinos',
    name: 'Pepinos',
    description: 'Pepinos crujientes',
    price: 1.3,
    unit: 'kg',
    category_id: 'cat-verduras',
    image_url: '/pepinos.jpg',
    is_featured: false,
    is_offer: false,
    stock_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'prod-uvas',
    name: 'Uvas',
    description: 'Uvas dulces',
    price: 2.8,
    unit: 'kg',
    category_id: 'cat-frutas',
    image_url: '/uvas.jpg',
    is_featured: false,
    is_offer: false,
    stock_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'prod-coles',
    name: 'Coles',
    description: 'Coles frescas',
    price: 1.6,
    unit: 'kg',
    category_id: 'cat-verduras',
    image_url: '/coles.jpg',
    is_featured: false,
    is_offer: false,
    stock_available: true,
    created_at: new Date().toISOString()
  }
];

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
