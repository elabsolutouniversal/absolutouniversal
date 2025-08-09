'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, Tag } from 'lucide-react';
import { Producto } from '@/data/tienda/productos';
import { useCarrito } from '@/contexts/CarritoContext';

interface ProductoCardProps {
  producto: Producto;
  onProductoAgregado?: (producto: Producto) => void;
}

export default function ProductoCard({ producto, onProductoAgregado }: ProductoCardProps) {
  const { agregarProducto, obtenerCantidadProducto } = useCarrito();
  const cantidadEnCarrito = obtenerCantidadProducto(producto.id);

  const handleAgregarProducto = () => {
    agregarProducto(producto);
    if (onProductoAgregado) {
      onProductoAgregado(producto);
    }
  };

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
    }).format(precio);
  };

  const calcularDescuento = () => {
    if (!producto.precioOriginal) return 0;
    return Math.round(((producto.precioOriginal - producto.precio) / producto.precioOriginal) * 100);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Imagen del producto */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={producto.imagen} 
          alt={producto.nombre}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {producto.destacado && (
            <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="w-3 h-3" />
              Destacado
            </div>
          )}
          {producto.precioOriginal && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              -{calcularDescuento()}%
            </div>
          )}
        </div>

        {/* Stock */}
        <div className="absolute top-3 right-3">
          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
            producto.stock > 5 ? 'bg-green-500 text-white' : 
            producto.stock > 0 ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {producto.stock > 5 ? 'En Stock' : 
             producto.stock > 0 ? `Solo ${producto.stock}` : 'Agotado'}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        {/* Categoría */}
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-purple-600 font-medium capitalize">
            {producto.categoria}
          </span>
        </div>

        {/* Nombre del producto */}
        <h3 className="text-lg font-lora-semibold text-gray-900 mb-2 line-clamp-2">
          {producto.nombre}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {producto.descripcion}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {producto.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Precio */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-lora-bold-normal text-purple-600">
            {formatearPrecio(producto.precio)}
          </span>
          {producto.precioOriginal && (
            <span className="text-lg text-gray-400 line-through">
              {formatearPrecio(producto.precioOriginal)}
            </span>
          )}
        </div>

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAgregarProducto}
          disabled={producto.stock === 0}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
            producto.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transform hover:scale-105'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {producto.stock === 0 ? 'Agotado' : 
           cantidadEnCarrito > 0 ? `Agregado (${cantidadEnCarrito})` : 'Agregar al Carrito'}
        </button>

        {/* Indicador de cantidad en carrito */}
        {cantidadEnCarrito > 0 && (
          <div className="mt-2 text-center">
            <span className="text-sm text-purple-600 font-medium">
              {cantidadEnCarrito} en tu carrito
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

