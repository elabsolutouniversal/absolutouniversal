'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { productos, categorias, Producto } from '@/data/tienda/productos';
import ProductoCard from './ProductoCard';
import CarritoModal from './CarritoModal';
import TiendaHero from './TiendaHero';
import NotificacionProducto from './NotificacionProducto';
import MiniCarrito from './MiniCarrito';

import { useCarrito } from '@/contexts/CarritoContext';

export default function TiendaPrincipal() {
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productos);
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todas');
  const [busqueda, setBusqueda] = useState('');
  const [ordenarPor, setOrdenarPor] = useState<'nombre' | 'precio' | 'destacado'>('destacado');
  const [isCarritoAbierto, setIsCarritoAbierto] = useState(false);
  const [isMiniCarritoVisible, setIsMiniCarritoVisible] = useState(false);
  const [notificacionProducto, setNotificacionProducto] = useState<{
    nombre: string;
    imagen: string;
    precio: number;
  } | null>(null);
  const { state } = useCarrito();

  // Filtrar productos
  useEffect(() => {
    let filtrados = productos;

    // Filtrar por categoría
    if (categoriaActiva !== 'todas') {
      filtrados = filtrados.filter(producto => producto.categoria === categoriaActiva);
    }

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      filtrados = filtrados.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.tags.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase()))
      );
    }

    // Ordenar productos
    filtrados.sort((a, b) => {
      switch (ordenarPor) {
        case 'nombre':
          return a.nombre.localeCompare(b.nombre);
        case 'precio':
          return a.precio - b.precio;
        case 'destacado':
          return (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0);
        default:
          return 0;
      }
    });

    setProductosFiltrados(filtrados);
  }, [categoriaActiva, busqueda, ordenarPor]);

  const totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);



  // Mostrar mini carrito solo cuando el usuario lo quiera ver
  useEffect(() => {
    if (isCarritoAbierto) {
      setIsMiniCarritoVisible(false);
    }
  }, [isCarritoAbierto]);



  // Función para manejar cuando se agrega un producto
  const handleProductoAgregado = (producto: Producto) => {
    setNotificacionProducto({
      nombre: producto.nombre,
      imagen: producto.imagen,
      precio: producto.precio
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      {/* Hero Section */}
      <TiendaHero />
      
      {/* Header de la tienda con filtros */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-lora-bold-normal text-brand-dark">
              Nuestros Productos
            </h2>
            
            {/* Botón del carrito */}
            <div className="flex items-center gap-3">
              {totalItems > 0 && (
                <button
                  onClick={() => setIsMiniCarritoVisible(!isMiniCarritoVisible)}
                  className="text-brand-medium hover:text-brand-dark transition-colors font-lora-medium"
                >
                  {isMiniCarritoVisible ? 'Ocultar' : 'Vista Rápida'}
                </button>
              )}
              
              <button
                onClick={() => setIsCarritoAbierto(true)}
                className="relative bg-purple-200/90 text-brand-dark p-3 rounded-full border border-purple-300/50 hover:bg-purple-300/90 transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingBag className="w-6 h-6 text-brand-dark" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filtros y búsqueda */}
        <div className="mb-8 space-y-4 md:space-y-6">
          {/* Barra de búsqueda */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar productos, categorías o tags..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-brand-light/30 rounded-lg focus:ring-2 focus:ring-brand-light/40 focus:border-transparent transition-all duration-300 text-sm md:text-base"
            />
          </div>

          {/* Filtros - Optimizados para móvil */}
          <div className="space-y-4">
            {/* Categorías */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 md:w-5 md:h-5 text-brand-medium" />
                <span className="text-sm font-medium text-brand-medium">Categorías:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategoriaActiva('todas')}
                  className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    categoriaActiva === 'todas'
                      ? 'bg-purple-200/90 text-brand-dark border border-purple-300/50 shadow-lg'
                      : 'bg-stone-100 text-brand-medium hover:bg-purple-100/60'
                  }`}
                >
                  Todas
                </button>
                
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => setCategoriaActiva(categoria.id)}
                    className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                      categoriaActiva === categoria.id
                        ? 'bg-purple-200/90 text-brand-dark border border-purple-300/50 shadow-lg'
                        : 'bg-stone-100 text-brand-medium hover:bg-purple-100/60'
                    }`}
                  >
                    <span className="md:hidden">{categoria.icono}</span>
                    <span className="hidden md:inline">{categoria.icono} {categoria.nombre}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ordenamiento */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''}
              </span>
              <select
                value={ordenarPor}
                onChange={(e) => setOrdenarPor(e.target.value as 'destacado' | 'nombre' | 'precio')}
                className="px-3 py-2 border border-brand-light/30 rounded-lg focus:ring-2 focus:ring-brand-light/40 focus:border-transparent transition-all duration-300 text-sm"
              >
                <option value="destacado">Destacados</option>
                <option value="nombre">A-Z</option>
                <option value="precio">Precio ↑</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados de búsqueda */}
        {busqueda && (
          <div className="mb-6">
            <p className="text-gray-600">
              {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''} para &ldquo;{busqueda}&rdquo;
            </p>
          </div>
        )}

        {/* Grid de productos */}
        {productosFiltrados.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {productosFiltrados.map((producto) => (
                <ProductoCard 
                  key={producto.id} 
                  producto={producto} 
                  onProductoAgregado={handleProductoAgregado}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-500 mb-6">
              Intenta ajustar los filtros o la búsqueda
            </p>
            <button
              onClick={() => {
                setBusqueda('');
                setCategoriaActiva('todas');
              }}
              className="bg-purple-200/90 text-brand-dark border border-purple-300/50 px-6 py-3 rounded-lg hover:bg-purple-300/90 transition-colors font-semibold"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Secciones adicionales */}

      {/* Mini Carrito Flotante */}
      <MiniCarrito 
        isVisible={isMiniCarritoVisible}
        onToggle={() => setIsMiniCarritoVisible(!isMiniCarritoVisible)}
        onOpenCarritoCompleto={() => {
          setIsCarritoAbierto(true);
          setIsMiniCarritoVisible(false);
        }}
      />

      {/* Notificación de producto agregado */}
      <NotificacionProducto 
        producto={notificacionProducto}
        onClose={() => setNotificacionProducto(null)}
        onVerCarrito={() => setIsMiniCarritoVisible(true)}
      />

      {/* Carrito de compras completo */}
      <CarritoModal
        isOpen={isCarritoAbierto}
        onClose={() => {
          setIsCarritoAbierto(false);
          // No abrir automáticamente el mini carrito
        }}
      />
    </div>
  );
}

