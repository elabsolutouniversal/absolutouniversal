// app/(website)/servicios/[slug]/page.tsx
import { notFound } from 'next/navigation';
import PenduloHebreo from '@/components/servicios/pendulo/PenduloHebreo';
import PsicoEducacion from '@/components/servicios/psicoEducacion/PsicoEducacion';
import TarotPredictivo from '@/components/servicios/tarotPredictivo/TarotPredictivo';
import TerapiaIntegrativaHolistica from '@/components/servicios/terapia-integrativa-holistica/TerapiaIntegrativa-Holistica';

const componentBySlug: Record<string, React.ComponentType> = {
  'sanacion-integrativa-holistica': TerapiaIntegrativaHolistica,
  'tarot-predictivo': TarotPredictivo,
  'psicoeducacion-consciente': PsicoEducacion,
  'pendulo-hebreo': PenduloHebreo,
};

// Si quieres SSG para estos slugs
export function generateStaticParams() {
  return Object.keys(componentBySlug).map((slug) => ({ slug }));
}

// Opcional: evita params dinámicos fuera de la lista
export const dynamicParams = false; // o true si quieres permitir otros slugs

type Params = { slug: string };

export default async function ServicioIndividualPage({
  params,
}: {
  params: Promise<Params>; // 👈 Nota: Promise
}) {
  const { slug } = await params; // 👈 await obligatorio
  const Componente = componentBySlug[slug];

  if (!Componente) notFound();

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Componente />
      </div>
    </div>
  );
}
