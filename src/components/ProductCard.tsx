import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../lib/supabase';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-6xl">🍎</div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          {product.is_offer && (
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
              OFERTA
            </span>
          )}
        </div>

        {product.description && (
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        )}

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-green-700">
              {product.price.toFixed(2)}€
            </span>
            <span className="text-gray-600 ml-1">/{product.unit}</span>
          </div>

          {!product.stock_available && (
            <span className="text-red-500 text-sm font-medium">Agotado</span>
          )}
        </div>

        {product.stock_available && (
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-4 bg-gray-50 rounded-2xl p-2">
              <button
                onClick={decrementQuantity}
                className="bg-white hover:bg-gray-100 p-2 rounded-full transition-colors"
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </button>
              <span className="text-lg font-semibold min-w-[3rem] text-center">
                {quantity} {product.unit}
              </span>
              <button
                onClick={incrementQuantity}
                className="bg-white hover:bg-gray-100 p-2 rounded-full transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-2xl transition-colors"
            >
              Añadir al Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
