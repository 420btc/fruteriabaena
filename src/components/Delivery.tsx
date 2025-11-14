export default function Delivery() {
  return (
    <section id="entregas" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/entregas.jpg"
            alt="Entregas a domicilio"
            className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-lg"
          />
          <img
            src="/entregas2.jpg"
            alt="Entregas a domicilio 2"
            className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}