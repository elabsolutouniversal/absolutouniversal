// app/psico-educacion/page.tsx
import { Metadata } from 'next';
import BlogWithSidebar from '@/components/blog/BlogWithSidebar';

export const metadata: Metadata = {
  title: 'Blog de Psico‑Educación | Terapias Holísticas y Bienestar',
  description:
    'Descubre artículos sobre terapias holísticas, bienestar mental y crecimiento personal. Aprende sobre meditación, chakras, astrología y más.',
  keywords:
    'psicoeducación, terapias holísticas, bienestar, meditación, chakras, astrología, desarrollo personal',
  openGraph: {
    title: 'Blog de Psico‑Educación',
    description: 'Artículos sobre terapias holísticas y bienestar integral',
    type: 'website',
  },
};

export default function PsicoEducacion() {
  return (
    <section className="bg-pink-50 py-16">
      {/* Contenedor centralizado con padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogWithSidebar />
      </div>
    </section>
  );
}
