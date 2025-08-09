'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ShoppingCart, X } from 'lucide-react';

interface NotificacionProductoProps {
  producto: {
    nombre: string;
    imagen: string;
    precio: number;
  } | null;
  onClose: () => void;
  onVerCarrito?: () => void;
}

export default function NotificacionProducto({ producto, onClose, onVerCarrito }: NotificacionProductoProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (producto) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Esperar animación de salida
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [producto, onClose]);

  if (!producto) return null;

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(precio);
  };

  return (
    <div 
      className={`fixed top-4 right-4 z-50 max-w-sm bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      }`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 mb-1">
              ¡Producto agregado al carrito!
            </p>
            
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  fill
                  className="object-cover rounded-lg"
                  sizes="40px"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium line-clamp-1">
                  {producto.nombre}
                </p>
                <p className="text-sm text-purple-600 font-semibold">
                  {formatearPrecio(producto.precio)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <button 
                onClick={() => {
                  if (onVerCarrito) onVerCarrito();
                  setIsVisible(false);
                  setTimeout(onClose, 300);
                }}
                className="flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full hover:bg-purple-200 transition-colors"
              >
                <ShoppingCart className="w-3 h-3" />
                Vista Rápida
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Barra de progreso */}
      <div className="h-1 bg-gray-200">
        <div className={`h-full bg-green-500 transition-all duration-3000 ease-linear ${
          isVisible ? 'w-0' : 'w-full'
        }`} />
      </div>
    </div>
  );
}
