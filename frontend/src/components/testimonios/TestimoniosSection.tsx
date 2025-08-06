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
  const { currentItems, currentPage, totalPages, goToPage } = usePagination({
    items: testimonios,
    itemsPerPage,
  });

  // Rating promedio
  const testimoniosConRating = testimonios.filter(t => t.rating !== undefined);
  const ratingPromedio = testimoniosConRating.length > 0
    ? Math.round(
        testimoniosConRating.reduce((acc, t) => acc + (t.rating || 0), 0) /
        testimoniosConRating.length * 10
      ) / 10
    : 5;

  if (testimonios.length === 0) {
    return (
      <section className={`py-16 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 text-pink-400 mx-auto mb-4" />
          <h2 className="text-2xl font-lora-bold text-gray-700 mb-2">No hay testimonios disponibles</h2>
          <p className="text-gray-600">Sé el primero en compartir tu experiencia con nosotros.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50 ${className}`}>      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-lg">
            <Sparkles className="w-6 h-6 text-pink-600 mr-3" />
            <span className="text-pink-600 font-lora-bold text-base uppercase tracking-wide">Testimonios</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-lora-bold bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-lora">
            {subtitle}
          </p>

          <div className="flex items-center justify-center mt-16 space-x-16">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-lora-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {testimonios.length}+
              </div>
              <div className="text-base font-lora-semibold text-purple-600 mt-2">Testimonios</div>
            </div>

            <div className="h-16 w-px bg-gradient-to-b from-purple-300 to-pink-300" />

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-lora-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {ratingPromedio}★
              </div>
              <div className="text-base font-lora-semibold text-purple-600 mt-2">Calificación promedio</div>
            </div>
          </div>
        </div>

        {/* Testimonios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentItems.map((testimonio, idx) => (
            <TestimonioCard key={idx} testimonio={testimonio} className="h-full" />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          className="mt-16"
        />

        {/* Info página */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 font-lora">
            Mostrando {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, testimonios.length)} de {testimonios.length} testimonios
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
