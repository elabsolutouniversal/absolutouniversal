'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCarrito } from '@/contexts/CarritoContext';

interface CarritoComprasProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CarritoCompras({ isOpen, onClose }: CarritoComprasProps) {
  const { state, cambiarCantidad, removerProducto, limpiarCarrito } = useCarrito();
  const [isEnviando, setIsEnviando] = useState(false);

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(precio);
  };

  const generarMensajeWhatsApp = () => {
    if (state.items.length === 0) return '';

    const productos = state.items.map(item => 
      `• ${item.producto.nombre} x${item.cantidad} - ${formatearPrecio(item.producto.precio * item.cantidad)}`
    ).join('\n');

    const mensaje = `🛒 *PEDIDO - El Absoluto Universal*

*Productos solicitados:*
${productos}

*Total: ${formatearPrecio(state.total)}*

¿Podrías ayudarme con este pedido? 🙏✨`;

    return encodeURIComponent(mensaje);
  };

  const enviarWhatsApp = () => {
    if (state.items.length === 0) return;

    setIsEnviando(true);
    const mensaje = generarMensajeWhatsApp();
    const url = `https://wa.me/51962305362?text=${mensaje}`;
    
    window.open(url, '_blank');
    
    // Limpiar carrito después de enviar
    setTimeout(() => {
      limpiarCarrito();
      setIsEnviando(false);
      onClose();
    }, 1000);
  };

  return (
    <>
      {/* Overlay que solo aparece cuando está abierto */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 transition-opacity duration-300 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Carrito */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-l border-gray-200 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-lora-semibold text-gray-900">
              Carrito de Compras
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido del carrito */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500">
                Agrega productos para comenzar a comprar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.producto.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  {/* Imagen */}
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.producto.imagen}
                      alt={item.producto.nombre}
                      fill
                      className="object-cover rounded-lg"
                      sizes="64px"
                    />
                  </div>
                  
                  {/* Detalles */}
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {item.producto.nombre}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {formatearPrecio(item.producto.precio)} c/u
                    </p>
                    
                    {/* Controles de cantidad */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => cambiarCantidad(item.producto.id, item.cantidad - 1)}
                        className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-8 text-center font-medium">
                        {item.cantidad}
                      </span>
                      
                      <button
                        onClick={() => cambiarCantidad(item.producto.id, item.cantidad + 1)}
                        className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Precio total y botón eliminar */}
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 mb-2">
                      {formatearPrecio(item.producto.precio * item.cantidad)}
                    </p>
                    <button
                      onClick={() => removerProducto(item.producto.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con total y botones */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-lora-bold-normal text-purple-600">
                {formatearPrecio(state.total)}
              </span>
            </div>

            {/* Botones */}
            <div className="space-y-3">
              <button
                onClick={enviarWhatsApp}
                disabled={isEnviando}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {isEnviando ? 'Enviando...' : 'Comprar por WhatsApp'}
              </button>
              
              <button
                onClick={limpiarCarrito}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Limpiar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

