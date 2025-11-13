import { Heart, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Frutas y Verduras Baena
            </h3>
            <p className="text-gray-400 mb-4">
              Tu frutería de confianza en Churriana desde 2006. Frescura, calidad y buen precio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/frutas_y_verduras_baena_2006"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+34692266050"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:dmtisagloria@hotmail.com"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>Av. San Javier, n. 26</p>
              <p>Churriana, Spain</p>
              <p>
                <a href="tel:+34692266050" className="hover:text-green-400 transition-colors">
                  692 26 60 50
                </a>
              </p>
              <p>
                <a href="mailto:dmtisagloria@hotmail.com" className="hover:text-green-400 transition-colors break-all">
                  dmtisagloria@hotmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horario</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lunes - Viernes</p>
              <p className="text-sm">9:00 - 14:00, 17:00 - 20:00</p>
              <p className="mt-2">Sábados</p>
              <p className="text-sm">9:00 - 14:00</p>
              <p className="mt-2 text-red-400">Domingos: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <img
            src="/footer.jpg"
            alt="Detalle Frutas y Verduras Baena"
            className="mx-auto h-12 w-auto object-contain opacity-90"
          />
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> en Churriana
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Frutas y Verduras Baena. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
