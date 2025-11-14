import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'tarjeta' | 'efectivo' | 'bizum'>('tarjeta');

  const canSubmit = name && phone && address && city && postal && cart.length > 0;

  const handlePlaceOrder = () => {
    if (!canSubmit) return;
    clearCart();
    alert('Pedido registrado. Te contactaremos para confirmar el pago y la entrega.');
  };

  return (
    <section id="checkout" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Finalizar Pedido</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-50 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Dirección de envío</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre completo" className="w-full rounded-2xl border border-gray-300 p-3" />
                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Teléfono" className="w-full rounded-2xl border border-gray-300 p-3" />
                <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Dirección" className="md:col-span-2 w-full rounded-2xl border border-gray-300 p-3" />
                <input value={city} onChange={e => setCity(e.target.value)} placeholder="Ciudad" className="w-full rounded-2xl border border-gray-300 p-3" />
                <input value={postal} onChange={e => setPostal(e.target.value)} placeholder="Código Postal" className="w-full rounded-2xl border border-gray-300 p-3" />
                <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notas para el reparto" className="md:col-span-2 w-full rounded-2xl border border-gray-300 p-3 h-24" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pago</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setPaymentMethod('tarjeta')} className={`px-5 py-3 rounded-2xl border ${paymentMethod === 'tarjeta' ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-700 border-gray-300'}`}>Tarjeta</button>
                <button onClick={() => setPaymentMethod('bizum')} className={`px-5 py-3 rounded-2xl border ${paymentMethod === 'bizum' ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-700 border-gray-300'}`}>Bizum</button>
                <button onClick={() => setPaymentMethod('efectivo')} className={`px-5 py-3 rounded-2xl border ${paymentMethod === 'efectivo' ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-700 border-gray-300'}`}>Efectivo</button>
              </div>
              <p className="mt-3 text-sm text-gray-600">Confirmaremos el método de pago al finalizar.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Resumen</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500">No hay productos en el carrito.</p>
              ) : (
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <span className="text-gray-700">{item.name} × {item.quantity}</span>
                      <span className="font-semibold">{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="text-lg text-gray-800">Total</span>
                    <span className="text-xl font-bold text-green-600">{total.toFixed(2)}€</span>
                  </div>
                </div>
              )}
            </div>

            <button disabled={!canSubmit} onClick={handlePlaceOrder} className={`w-full py-4 rounded-2xl font-bold transition-colors ${canSubmit ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </section>
  );
}