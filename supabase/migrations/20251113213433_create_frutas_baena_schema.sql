/*
  # Schema para Frutas y Verduras Baena
  
  1. Nuevas Tablas
    - `categories` (categorías de productos)
      - `id` (uuid, primary key)
      - `name` (text, nombre de la categoría)
      - `slug` (text, identificador único)
      - `created_at` (timestamp)
    
    - `products` (productos de la frutería)
      - `id` (uuid, primary key)
      - `name` (text, nombre del producto)
      - `description` (text, descripción)
      - `price` (decimal, precio por kg o unidad)
      - `unit` (text, 'kg' o 'unidad')
      - `category_id` (uuid, foreign key)
      - `image_url` (text, URL de la imagen)
      - `is_featured` (boolean, producto destacado)
      - `is_offer` (boolean, si está en oferta)
      - `stock_available` (boolean, disponibilidad)
      - `created_at` (timestamp)
    
    - `special_offers` (ofertas especiales)
      - `id` (uuid, primary key)
      - `product_id` (uuid, foreign key)
      - `offer_text` (text, texto de la oferta)
      - `discount_price` (decimal, precio con descuento)
      - `is_active` (boolean)
      - `created_at` (timestamp)
  
  2. Seguridad
    - Enable RLS en todas las tablas
    - Políticas públicas de lectura (tienda pública)
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  unit text DEFAULT 'kg',
  category_id uuid REFERENCES categories(id),
  image_url text,
  is_featured boolean DEFAULT false,
  is_offer boolean DEFAULT false,
  stock_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS special_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  offer_text text NOT NULL,
  discount_price decimal(10,2),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_offers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view active offers"
  ON special_offers FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

INSERT INTO categories (name, slug) VALUES
  ('Frutas', 'frutas'),
  ('Verduras', 'verduras'),
  ('Cítricos', 'citricos'),
  ('Frutas Tropicales', 'frutas-tropicales'),
  ('Verduras de Hoja', 'verduras-de-hoja');

INSERT INTO products (name, description, price, unit, category_id, is_featured, is_offer, stock_available) VALUES
  ('Mandarinas', 'Mandarinas frescas y jugosas', 1.50, 'kg', (SELECT id FROM categories WHERE slug = 'citricos'), true, true, true),
  ('Naranjas de Zumo', 'Perfectas para zumo natural', 1.00, 'kg', (SELECT id FROM categories WHERE slug = 'citricos'), true, true, true),
  ('Plátanos', 'Plátanos de Canarias', 2.20, 'kg', (SELECT id FROM categories WHERE slug = 'frutas'), true, false, true),
  ('Tomates', 'Tomates frescos de la huerta', 2.50, 'kg', (SELECT id FROM categories WHERE slug = 'verduras'), false, false, true),
  ('Lechuga', 'Lechuga fresca y crujiente', 1.20, 'unidad', (SELECT id FROM categories WHERE slug = 'verduras-de-hoja'), false, false, true),
  ('Aguacates', 'Aguacates maduros', 3.50, 'kg', (SELECT id FROM categories WHERE slug = 'frutas-tropicales'), false, false, true);

INSERT INTO special_offers (product_id, offer_text, discount_price, is_active) VALUES
  ((SELECT id FROM products WHERE name = 'Mandarinas'), '1 kg → 2,50€ | 2 kg → 3,00€', 2.50, true);
