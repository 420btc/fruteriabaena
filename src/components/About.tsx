import { Heart, Users, Award, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-white" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Sobre Nosotros
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Tu Frutería de Confianza desde 2006
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              En Frutas y Verduras Baena, llevamos más de 15 años ofreciendo a nuestros clientes los productos más frescos y de mejor calidad en Churriana.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Nos enorgullece seleccionar cuidadosamente cada fruta y verdura, trabajando directamente con productores locales para garantizar la máxima frescura y sabor.
            </p>
            <p className="text-gray-600 text-lg">
              Nuestro compromiso es ofrecerte productos de primera calidad a los mejores precios, con el servicio cercano y personalizado que nos caracteriza.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-96">
            <img
              src="/hero1.png"
              alt="Frutas y Verduras Baena"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Pasión</h4>
            <p className="text-gray-600">
              Amor por lo que hacemos en cada producto
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Familia</h4>
            <p className="text-gray-600">
              Negocio familiar con trato cercano
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-6 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Calidad</h4>
            <p className="text-gray-600">
              Solo los mejores productos
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Frescura</h4>
            <p className="text-gray-600">
              Productos frescos cada día
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
