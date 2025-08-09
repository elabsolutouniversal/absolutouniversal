'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCarrito } from '@/contexts/CarritoContext';

interface MiniCarritoProps {
  isVisible: boolean;
  onToggle: () => void;
  onOpenCarritoCompleto: () => void;
}

export default function MiniCarrito({ isVisible, onToggle, onOpenCarritoCompleto }: MiniCarritoProps) {
  const { state, cambiarCantidad, removerProducto } = useCarrito();

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(precio);
  };

  const totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);

  if (totalItems === 0) return null;

  return (
    <div className={`fixed top-20 right-2 md:right-4 z-40 w-72 md:w-80 bg-white rounded-xl shadow-xl border border-gray-200 transform transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-purple-100 rounded-t-xl">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-purple-600" />
          <span className="font-medium text-purple-800">Mini Carrito ({totalItems})</span>
        </div>
        <button 
          onClick={onToggle}
          className="text-purple-600 hover:text-purple-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Items */}
      <div className="max-h-60 overflow-y-auto p-4 space-y-3">
        {state.items.slice(0, 3).map((item) => (
          <div key={item.producto.id} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                            <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={item.producto.imagen}
                    alt={item.producto.nombre}
                    fill
                    className="object-cover rounded-lg"
                    sizes="48px"
                  />
                </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 line-clamp-1">
                {item.producto.nombre}
              </p>
              <p className="text-xs text-gray-500">
                {formatearPrecio(item.producto.precio)} c/u
              </p>
              
              {/* Controles de cantidad mini */}
              <div className="flex items-center gap-1 mt-1">
                <button
                  onClick={() => cambiarCantidad(item.producto.id, item.cantidad - 1)}
                  className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors flex items-center justify-center"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center text-xs font-medium">
                  {item.cantidad}
                </span>
                <button
                  onClick={() => cambiarCantidad(item.producto.id, item.cantidad + 1)}
                  className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors flex items-center justify-center"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                {formatearPrecio(item.producto.precio * item.cantidad)}
              </p>
              <button
                onClick={() => removerProducto(item.producto.id)}
                className="text-red-400 hover:text-red-600 transition-colors mt-1"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
        
        {state.items.length > 3 && (
          <div className="text-center py-2">
            <span className="text-xs text-gray-500">
              y {state.items.length - 3} producto(s) más...
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-xl">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-gray-900">Total:</span>
          <span className="text-lg font-bold text-purple-600">
            {formatearPrecio(state.total)}
          </span>
        </div>
        
        <button 
          onClick={onOpenCarritoCompleto}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-sm"
        >
          Ver Carrito Completo
        </button>
      </div>
    </div>
  );
}
