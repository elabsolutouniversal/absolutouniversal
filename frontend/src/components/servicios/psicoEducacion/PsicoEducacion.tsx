// page.tsx
"use client";
import CoursesGrid from './cursos/CourseGrid';
import { courses } from '@/data/servicios/cursos';

export default function PsicoEducacion() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-2">
          <CoursesGrid courses={courses} />
        </div>
      </section>
    </main>
  );
}