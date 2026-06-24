// components/cursos/CoursesGrid.tsx
'use client';

import { usePagination } from '@/hooks/usePagination';
import CourseCard from './CourseCard';
import { Course } from '@/types/servicios/cursos';
import Pagination from '@/components/ui/Pagination';
import { FLORAL_BACKGROUND_URL } from '@/constants/floralBackground';

interface CoursesGridProps {
  courses: Course[];
  itemsPerPage?: number;
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ 
  courses, 
  itemsPerPage = 6 
}) => {
  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage
  } = usePagination({
    items: courses,
    itemsPerPage,
  });

  const handlePageChange = (page: number) => {
    goToPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden rounded-2xl py-10 md:py-12 mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${FLORAL_BACKGROUND_URL}')`,
        }}
      />
      <div className="absolute inset-0 bg-white/35" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-dark mb-2">
          Cursos y Talleres de Transformación
        </h2>
        <p className="text-brand-medium max-w-2xl mx-auto">
          Descubre herramientas para tu crecimiento espiritual y emocional
        </p>
      </div>

      {/* Grid de cursos */}
      <div className="flex justify-center mb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Paginación - solo se muestra si hay más de una página */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      )}
      </div>
    </section>
  );
};

export default CoursesGrid;