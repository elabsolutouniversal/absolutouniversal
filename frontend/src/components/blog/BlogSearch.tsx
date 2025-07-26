'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { BlogSearchProps, BlogSearchFilters } from '@/types/blog';

const BlogSearchComponent: React.FC<BlogSearchProps> = ({
  onSearch,
  categorias,
  totalResults,
  isLoading = false
}) => {
  const [filters, setFilters] = useState<BlogSearchFilters>({
    query: '',
    categoria: '',
    tag: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  
  // Ref para trackear si es el primer render
  const isFirstRender = useRef(true);
  const prevFiltersRef = useRef(filters);

  const handleSearch = useCallback(() => {
    onSearch(filters);
  }, [filters, onSearch]);

  const handleInputChange = (field: keyof BlogSearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearFilters = () => {
    const reset: BlogSearchFilters = { query: '', categoria: '', tag: '' };
    setFilters(reset);
    onSearch(reset);
  };

  const hasActiveFilters = !!(filters.query || filters.categoria || filters.tag);

  // Debounce mejorado que no se ejecuta en el primer render
  useEffect(() => {
    // Skip en el primer render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Solo ejecutar si realmente cambiaron los filtros
    const filtersChanged = 
      prevFiltersRef.current.query !== filters.query ||
      prevFiltersRef.current.categoria !== filters.categoria ||
      prevFiltersRef.current.tag !== filters.tag;

    if (filtersChanged) {
      const id = setTimeout(handleSearch, 300);
      prevFiltersRef.current = filters;
      return () => clearTimeout(id);
    }
  }, [filters, handleSearch]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      {/* Barra principal */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar en artículos, títulos, contenido..."
          value={filters.query}
          onChange={e => handleInputChange('query', e.target.value)}
          className="w-full pl-12 pr-16 py-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 placeholder-gray-400"
        />
        <button
          onClick={() => setShowFilters(x => !x)}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-200 ${
            showFilters || hasActiveFilters
              ? 'bg-purple-100 text-purple-600'
              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
          }`}
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Filtros avanzados */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría
            </label>
            <select
              value={filters.categoria}
              onChange={e => handleInputChange('categoria', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            >
              <option value="">Todas las categorías</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.nombre}>
                  {cat.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Etiqueta
            </label>
            <input
              type="text"
              placeholder="ej: meditación, chakras..."
              value={filters.tag}
              onChange={e => handleInputChange('tag', e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 placeholder-gray-400"
            />
          </div>
        </div>
      )}

      {/* Resultados y limpiar */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600">
          {typeof totalResults === 'number' && (
            <span>
              {isLoading
                ? 'Buscando...'
                : `${totalResults} artículo${totalResults !== 1 ? 's' : ''} encontrado${totalResults !== 1 ? 's' : ''}`}
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <X className="w-4 h-4" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(BlogSearchComponent);