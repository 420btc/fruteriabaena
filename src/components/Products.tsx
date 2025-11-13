import { useEffect, useState } from 'react';
import { supabase, Product, Category } from '../lib/supabase';
import ProductCard from './ProductCard';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching categories:', error);
    } else if (data) {
      setCategories(data);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('is_featured', { ascending: false })
      .order('name');

    if (error) {
      console.error('Error fetching products:', error);
    } else if (data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const filteredProducts = selectedCategory === 'todas'
    ? products
    : products.filter(p => {
        const category = categories.find(c => c.id === p.category_id);
        return category?.slug === selectedCategory;
      });

  return (
    <section className="py-16 bg-gray-50" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nuestros Productos
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('todas')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === 'todas'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-100'
            }`}
          >
            Todas
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.slug
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No hay productos disponibles en esta categoría
          </div>
        )}
      </div>
    </section>
  );
}
