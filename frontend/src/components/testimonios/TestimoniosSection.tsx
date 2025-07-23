// src/components/TestimoniosSection.tsx
'use client';

import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { ITestimonio } from '@/types/testimonios/testimonio';
import { usePagination } from '@/hooks/usePagination';
import TestimonioCard from '@/components/testimonios/index';
import Pagination from '@/components/ui/Pagination';

interface TestimoniosSectionProps {
  testimonios: ITestimonio[];
  itemsPerPage?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

const TestimoniosSection: React.FC<TestimoniosSectionProps> = ({
  testimonios,
  itemsPerPage = 6,
  title = 'Testimonios de nuestros clientes',
  subtitle = 'Experiencias reales de personas que han encontrado claridad y transformación',
  className = '',
}) => {
  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination({
    items: testimonios,
    itemsPerPage,
  });

  // Calcular rating promedio solo de testimonios que tienen rating
  const testimoniosConRating = testimonios.filter(t => t.rating !== undefined);
  const ratingPromedio = testimoniosConRating.length > 0 
    ? Math.round(
        testimoniosConRating.reduce((acc, t) => acc + (t.rating || 0), 0) / testimoniosConRating.length * 10
      ) / 10
    : 5; // Default si no hay ratings

  if (testimonios.length === 0) {
    return (
      <section className={`py-16 bg-gradient-to-br from-purple-50 to-pink-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageSquare className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No hay testimonios disponibles
            </h2>
            <p className="text-gray-600">
              Sé el primero en compartir tu experiencia con nosotros.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge mejorado */}
          <div className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
            <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
            <span className="text-purple-600 font-bold text-lg uppercase tracking-wider">
              Testimonios
            </span>
          </div>
          
          {/* Título principal más grande */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-6 leading-tight">
            {title}
          </h2>
          
          {/* Subtítulo mejorado */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>

          {/* Stats con mejor diseño */}
          <div className="flex items-center justify-center mt-12 space-x-12">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {testimonios.length}+
              </div>
              <div className="text-base font-semibold text-purple-600 mt-2">Testimonios</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-purple-300 via-pink-300 to-purple-300"></div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {ratingPromedio}★
              </div>
              <div className="text-base font-semibold text-purple-600 mt-2">Calificación promedio</div>
            </div>
          </div>
        </div>

        {/* Testimonios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((testimonio, index) => (
            <TestimonioCard
              key={`${testimonio.nombre}-${index}`}
              testimonio={testimonio}
              className="h-full"
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          className="mt-12"
        />

        {/* Page Info */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Mostrando {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, testimonios.length)} de {testimonios.length} testimonios
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;