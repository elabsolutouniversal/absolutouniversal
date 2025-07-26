import { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';
import { blogPosts } from '@/data/servicios/blog';


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
      <BlogList posts={blogPosts} postsPerPage={6} />
    </main>
  )
}
