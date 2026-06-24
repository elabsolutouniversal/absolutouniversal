'use client';

import React, { useState, useEffect, useRef } from 'react';
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

  const handleInputChange = (field: keyof BlogSearchFilters, value: string) => {
    const newFilters = {
      ...filters,
      [field]: value
    };
    setFilters(newFilters);
    
    // Llamar inmediatamente para categoría y tag
    if (field === 'categoria' || field === 'tag') {
      onSearch(newFilters);
    }
  };

  const clearFilters = () => {
    const reset: BlogSearchFilters = { query: '', categoria: '', tag: '' };
    setFilters(reset);
    onSearch(reset);
  };

  const hasActiveFilters = !!(filters.query || filters.categoria || filters.tag);

  // Debounce solo para query
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      onSearch(filters);
    }, 400);

    return () => clearTimeout(timer);
  }, [filters, onSearch]); // Incluir todas las dependencias

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-brand-light/20 p-6 mb-8">
      {/* Barra principal */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-light/70 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar en artículos, títulos, contenido..."
          value={filters.query}
          onChange={e => handleInputChange('query', e.target.value)}
          className="w-full pl-12 pr-16 py-4 text-brand-medium bg-stone-50/80 border border-brand-light/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all duration-200 placeholder-gray-400"
        />
        <button
          onClick={() => setShowFilters(x => !x)}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all duration-200 ${
            showFilters || hasActiveFilters
              ? 'bg-yellow-100/60 text-brand-medium'
              : 'bg-gray-100 text-brand-light/70 hover:bg-gray-200'
          }`}
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Filtros avanzados */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-brand-light/20 animate-in slide-in-from-top-2 duration-200">
          <div>
            <label className="block text-sm font-medium text-brand-medium mb-2">
              Categoría
            </label>
            <select
              value={filters.categoria}
              onChange={e => handleInputChange('categoria', e.target.value)}
              className="w-full px-4 py-3 bg-stone-50/80 border border-brand-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all duration-200"
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
            <label className="block text-sm font-medium text-brand-medium mb-2">
              Etiqueta
            </label>
            <input
              type="text"
              placeholder="ej: meditación, chakras..."
              value={filters.tag}
              onChange={e => handleInputChange('tag', e.target.value)}
              className="w-full px-4 py-3 bg-stone-50/80 border border-brand-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all duration-200 placeholder-gray-400"
            />
          </div>
        </div>
      )}

      {/* Resultados y limpiar */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-light/20">
        <div className="text-sm">
          {typeof totalResults === 'number' && (
            <span className={`${isLoading ? 'text-brand-medium' : 'text-brand-medium'} ${isLoading ? 'animate-pulse' : ''}`}>
              {isLoading ? (
                <span className="flex items-center">
                  <div className="w-4 h-4 border-2 border-brand-medium border-t-transparent rounded-full animate-spin mr-2"></div>
                  Buscando...
                </span>
              ) : (
                <>
                  <span className="font-semibold text-brand-medium">{totalResults}</span>
                  <span className="text-brand-medium"> artículo{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}</span>
                </>
              )}
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 px-4 py-2 text-sm text-brand-dark bg-yellow-200/90 hover:bg-yellow-300/90 border border-yellow-300/60 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
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