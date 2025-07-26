// page.tsx
"use client";
import { Metadata } from 'next';
import CoursesGrid from './cursos/CourseGrid';
import { courses } from '@/data/servicios/cursos';

export const metadata: Metadata = {
  title: 'Cursos de Transformación | Terapias Holísticas',
  description: 'Talleres y cursos para tu crecimiento espiritual y emocional',
};

export default function PsicoEducacion() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-2">
          <CoursesGrid courses={courses} />
        </div>
      </section>
    </main>
  );
}