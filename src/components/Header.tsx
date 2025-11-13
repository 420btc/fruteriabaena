import { ShoppingCart, Phone, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate: (section: string) => void;
  onCartClick: () => void;
}

export default function Header({ onNavigate, onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => onNavigate('inicio')}
            className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
          >
            Frutas y Verduras Baena
          </button>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('productos')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => onNavigate('nosotros')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Contacto
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/frutas_y_verduras_baena_2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="tel:+34692266050"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
            <button
              onClick={onCartClick}
              className="relative bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-green-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
