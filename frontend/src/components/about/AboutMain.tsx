// components/about/AboutMain.tsx
import React from 'react';
import { HeroSection } from './HeroSection';
import { DifferentiationSection } from './DifferentiationSection';
import { MethodDimensionsSection } from './MethodDimensionsSection';
import { AssessmentSection } from './AssessmentSection';
import { ResultsSection } from './ResultsSection';
import { OfferSection } from './OfferSection';
import { CommitmentContactSection } from './CommitmentContactSection';
import { StorySection } from './StorySection';


interface AboutMainProps {
  className?: string;
}

export const AboutMain: React.FC<AboutMainProps> = ({ className = '' }) => {
  return (
    <main className={`min-h-screen ${className}`}>
      {/* Sección Hero - Presentación principal */}
      <HeroSection />
      
      {/* Sección Historia - Narrativa personal */}
      <StorySection />
      
      {/* Sección Diferenciación - Comparación con otros terapeutas */}
      <DifferentiationSection />
      
      {/* Sección Método 3D - Enfoque único en 3 dimensiones */}
      <MethodDimensionsSection />
      
      {/* Sección Evaluación - Autoevaluación interactiva */}
      <AssessmentSection />
      
      {/* Sección Resultados - Beneficios y promesas */}
      <ResultsSection />
      
      {/* Sección Oferta - Transformación y CTA principal */}
      <OfferSection />
      
      {/* Sección Compromiso y Contacto - Información final */}
      <CommitmentContactSection />
    </main>
  );
};

// Export por defecto para uso directo
export default AboutMain;