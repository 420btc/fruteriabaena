import { MapPin, Phone, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Frescura, Calidad y Buen Precio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Tu frutería de confianza en Churriana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ubicación</h3>
            <p className="text-gray-600">Av. San Javier, n. 26, Churriana, Spain</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pedidos</h3>
            <a href="tel:+34692266050" className="text-blue-600 hover:text-blue-800 font-medium">
              692 26 60 50
            </a>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-7 h-7 text-orange-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Reparto a Domicilio</h3>
            <p className="text-gray-600">Comodidad y frescura hasta tu puerta</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl p-8 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Ofertón del Día!</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-2xl font-bold">Mandarinas</p>
              <p className="text-4xl font-black">1,50€/kg</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-2xl font-bold">Naranjas Z</p>
              <p className="text-4xl font-black">1,00€/kg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
