import { Metadata } from 'next';
import BlogWithSidebar from '@/components/blog/BlogWithSidebar';
import CoursesGrid from '@/components/servicios/psicoEducacion/cursos/CourseGrid';
import { courses } from '@/data/servicios/cursos';

export const metadata: Metadata = {
  title: 'Blog de Psico-Educación | Terapias Holísticas',
  description: 'Descubre artículos sobre terapias holísticas y bienestar mental',
};




export default function PsicoEducacionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-2">
          <CoursesGrid courses={courses} />
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogWithSidebar />
      </div>
    </main>
  );
}



