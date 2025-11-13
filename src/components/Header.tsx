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
    <header className="sticky top-0 z-50 shadow-sm relative overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover blur-[1px]"
        style={{
          backgroundImage: "url('/fondohero.png')",
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between py-3 md:grid md:py-4 md:gap-6"
          style={{ gridTemplateColumns: 'auto 1fr auto' }}
        >
          <button
            onClick={() => onNavigate('inicio')}
            className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white hover:text-white transition-colors whitespace-nowrap truncate max-w-[60vw] md:max-w-[28rem] md:justify-self-start"
            style={{ textShadow: '1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000' }}
          >
            Frutas y Verduras Baena
          </button>

          <nav className="hidden md:flex md:justify-self-center justify-center space-x-6 md:space-x-10">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-black md:text-white md:text-lg font-semibold transition-colors drop-shadow md:drop-shadow-xl md:bg-black/40 md:px-4 md:py-2 md:rounded-full md:border md:border-white/30 hover:md:bg-black/60"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('productos')}
              className="text-black md:text-white md:text-lg font-semibold transition-colors drop-shadow md:drop-shadow-xl md:bg-black/40 md:px-4 md:py-2 md:rounded-full md:border md:border-white/30 hover:md:bg-black/60"
            >
              Productos
            </button>
            <button
              onClick={() => onNavigate('nosotros')}
              className="text-black md:text-white md:text-lg font-semibold transition-colors drop-shadow md:drop-shadow-xl md:bg-black/40 md:px-4 md:py-2 md:rounded-full md:border md:border-white/30 hover:md:bg-black/60"
            >
              Nosotros
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="text-black md:text-white md:text-lg font-semibold transition-colors drop-shadow md:drop-shadow-xl md:bg-black/40 md:px-4 md:py-2 md:rounded-full md:border md:border-white/30 hover:md:bg-black/60"
            >
              Contacto
            </button>
          </nav>

          <div className="flex items-center space-x-3 md:justify-self-end">
            <a
              href="https://instagram.com/frutas_y_verduras_baena_2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:opacity-90 transition bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="tel:+34692266050"
              className="p-2 rounded-full hover:opacity-90 transition bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 shadow-lg"
            >
              <Phone className="w-6 h-6 text-white" />
            </a>
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:opacity-90 transition bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 shadow-lg"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
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
