// components/cursos/CoursesGrid.tsx
'use client';

import { usePagination } from '@/hooks/usePagination';
import CourseCard from './CourseCard';
import { Course } from '@/types/servicios/cursos';
import Pagination from '@/components/ui/Pagination';

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
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-2">
          Cursos y Talleres de Transformación
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre herramientas para tu crecimiento espiritual y emocional
        </p>
      </div>

      {/* Grid de cursos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {currentItems.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      )}
    </section>
  );
};

export default CoursesGrid;