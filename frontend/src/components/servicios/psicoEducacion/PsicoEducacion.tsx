import { Metadata } from 'next';

import BlogPageWrapper from '@/components/blog/BlogPageWrapper';
import BlogWithSidebar from '@/components/blog/BlogWithSidebar';


export const metadata: Metadata = {
  title: 'Blog de Psico-Educación | Terapias Holísticas y Bienestar',
  description: 'Descubre artículos sobre terapias holísticas, bienestar mental y crecimiento personal. Aprende sobre meditación, chakras, astrología y más.',
  keywords: 'psicoeducación, terapias holísticas, bienestar, meditación, chakras, astrología, desarrollo personal',
  openGraph: {
    title: 'Blog de Psico-Educación',
    description: 'Artículos sobre terapias holísticas y bienestar integral',
    type: 'website',
  },
};

export default function PsicoEducacion() {
  return (
    <main>
       <BlogWithSidebar />;
    </main>
  )
}
