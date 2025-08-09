'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCarrito } from '@/contexts/CarritoContext';

interface CarritoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CarritoModal({ isOpen, onClose }: CarritoModalProps) {
  const { state, cambiarCantidad, removerProducto, limpiarCarrito } = useCarrito();
  const [isEnviando, setIsEnviando] = useState(false);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    
    setTimeout(() => {
      limpiarCarrito();
      setIsEnviando(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Fondo con blur */}
      <div 
        className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Contenido del carrito centrado */}
      <div className="relative z-10 h-full flex items-center justify-center p-2 md:p-4">
        <div className="w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-purple-100">
            <div className="flex items-center gap-2 md:gap-3">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              <h2 className="text-lg md:text-2xl font-lora-bold-normal text-purple-800">
                Carrito de Compras
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Contenido del carrito */}
          <div className="max-h-60 md:max-h-96 overflow-y-auto p-4 md:p-6">
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
              <div className="space-y-3 md:space-y-4">
                {state.items.map((item) => (
                  <div key={item.producto.id} className="flex gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl">
                    {/* Imagen */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                      <Image
                        src={item.producto.imagen}
                        alt={item.producto.nombre}
                        fill
                        className="object-cover rounded-lg"
                        sizes="80px"
                      />
                    </div>
                    
                    {/* Detalles */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-lora-semibold text-gray-900 mb-1 text-sm md:text-base line-clamp-2">
                        {item.producto.nombre}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
                        {formatearPrecio(item.producto.precio)} c/u
                      </p>
                      
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => cambiarCantidad(item.producto.id, item.cantidad - 1)}
                          className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                        
                        <span className="w-8 md:w-12 text-center font-medium text-sm md:text-base">
                          {item.cantidad}
                        </span>
                        
                        <button
                          onClick={() => cambiarCantidad(item.producto.id, item.cantidad + 1)}
                          className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Precio total y botón eliminar */}
                    <div className="text-right flex flex-col items-end justify-between">
                      <p className="font-bold text-gray-900 text-sm md:text-lg mb-1">
                        {formatearPrecio(item.producto.precio * item.cantidad)}
                      </p>
                      <button
                        onClick={() => removerProducto(item.producto.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer con total y botones */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
              {/* Total */}
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <span className="text-lg md:text-xl font-lora-semibold text-gray-900">Total:</span>
                <span className="text-2xl md:text-3xl font-lora-bold-normal text-purple-600">
                  {formatearPrecio(state.total)}
                </span>
              </div>

              {/* Botones */}
              <div className="space-y-3">
                <button
                  onClick={enviarWhatsApp}
                  disabled={isEnviando}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-base md:text-lg"
                >
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  {isEnviando ? 'Enviando...' : 'Comprar por WhatsApp'}
                </button>
                
                <button
                  onClick={limpiarCarrito}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 md:py-3 px-3 md:px-4 rounded-xl font-medium transition-colors text-sm md:text-base"
                >
                  Limpiar Carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
