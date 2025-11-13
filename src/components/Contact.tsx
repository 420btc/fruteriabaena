import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Av. San Javier, n. 26<br />
                    Churriana, Spain
                  </p>
                  <a
                    href="https://maps.google.com/?q=Av.+San+Javier+26+Churriana+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium mt-2 inline-block"
                  >
                    Ver en el mapa →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Teléfono</h3>
                  <a
                    href="tel:+34692266050"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    692 26 60 50
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Realiza tu pedido por teléfono
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                  <a
                    href="mailto:dmtisagloria@hotmail.com"
                    className="text-purple-600 hover:text-purple-700 font-medium break-all"
                  >
                    dmtisagloria@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Instagram className="w-6 h-6 text-pink-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/frutas_y_verduras_baena_2006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    @frutas_y_verduras_baena_2006
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Síguenos para ver nuestras ofertas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Horario</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lunes - Viernes: 9:00 - 14:00, 17:00 - 20:00</p>
                    <p>Sábados: 9:00 - 14:00</p>
                    <p className="text-red-500 font-medium">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un mensaje
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tu teléfono"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Gracias por tu mensaje. Te contactaremos pronto.');
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
