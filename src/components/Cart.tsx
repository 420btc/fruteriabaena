import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  const total = getTotalPrice();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Mi Carrito
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
              <button
                onClick={onClose}
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Explorar productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span className="text-3xl">🍎</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.price.toFixed(2)}€/{item.unit}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-white hover:bg-gray-100 p-1 rounded-lg transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-700" />
                      </button>
                      <span className="text-sm font-medium min-w-[3rem] text-center">
                        {item.quantity} {item.unit}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-white hover:bg-gray-100 p-1 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="font-bold text-lg text-gray-800">
                      {(item.price * item.quantity).toFixed(2)}€
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-gray-800">Total:</span>
              <span className="text-green-600">{total.toFixed(2)}€</span>
            </div>

            <button
              onClick={() => {
                alert('Funcionalidad de pago próximamente. Por favor, llama al 692 26 60 50 para realizar tu pedido.');
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors"
            >
              Realizar Pedido
            </button>

            <button
              onClick={clearCart}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-2xl transition-colors"
            >
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
