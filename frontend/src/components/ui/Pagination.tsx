"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationProps } from '@/types/testimonios/testimonio';

const navButtonClass =
  "flex items-center px-5 py-2.5 text-sm font-lora-semibold italic text-brand-dark bg-yellow-200/90 rounded-full shadow-md hover:bg-yellow-300/90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-yellow-200/90 transition-all duration-200";

const pageButtonClass = (isActive: boolean) =>
  isActive
    ? "min-w-[2.5rem] px-4 py-2.5 text-sm font-lora-semibold italic text-brand-dark bg-yellow-200/90 rounded-full shadow-lg hover:bg-yellow-300/90 transition-all duration-200"
    : "min-w-[2.5rem] px-4 py-2.5 text-sm font-lora-medium italic text-brand-medium bg-white/90 border border-brand-light/25 rounded-full hover:bg-yellow-100/70 hover:text-brand-dark transition-all duration-200";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) return null;

  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={navButtonClass}
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Anterior
      </button>

      <div className="flex items-center space-x-2">
        {visiblePages.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-2 py-2 text-sm font-lora-medium text-brand-light">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={pageButtonClass(currentPage === page)}
                aria-label={`Página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={navButtonClass}
        aria-label="Página siguiente"
      >
        Siguiente
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </nav>
  );
};

export default Pagination;
