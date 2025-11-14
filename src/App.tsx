import { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Delivery from './components/Delivery';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [route, setRoute] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (section: string) => {
    if (route !== '#/') {
      window.location.hash = '#/';
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 0);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={handleNavigate} onCartClick={() => setIsCartOpen(true)} />
        {route === '#/checkout' ? (
          <main>
            <Checkout />
          </main>
        ) : (
          <main>
            <div id="inicio">
              <Hero />
            </div>
            <Products />
            <Delivery />
            <About />
            <Contact />
          </main>
        )}

        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
