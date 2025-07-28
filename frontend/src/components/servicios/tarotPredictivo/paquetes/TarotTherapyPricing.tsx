// components/TarotTherapyPricing.tsx
import React from 'react';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { PricingSection } from './PricingSection';
import { TargetAudienceSection } from './TargetAudienceSection';
import { ProcessSection } from './ProcessSection';
import { TrustSection } from './TrustSection';
import { CTASection } from './CTASection';
import { tarotTherapyData } from '@/data/servicios/tarotTherapyData';

/**
 * TarotTherapyPricing - Componente principal para mostrar las tarifas y servicios de Tarot Terapéutico
 * 
 * Este componente integra todos los minicomponentes para crear una landing page completa
 * que presenta los servicios de tarot terapéutico con un enfoque moderno y profesional.
 * 
 * Características:
 * - Diseño responsive y moderno
 * - Integración con TypeScript
 * - Componentes modulares y reutilizables
 * - Optimizado para conversión
 * - Imágenes de Cloudinary integradas
 * - Efectos visuales avanzados y animaciones
 * - Scroll suave entre secciones
 * 
 * @returns JSX.Element - Landing page completa del tarot terapéutico
 */
export const TarotTherapyPricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Primera impresión impactante */}
      <HeroSection
        title={tarotTherapyData.hero.title}
        subtitle={tarotTherapyData.hero.subtitle}
        description={tarotTherapyData.hero.description}
        heroImage={tarotTherapyData.hero.heroImage}
      />

      {/* Services Section - Qué hace única cada sesión */}
      <div id="services-section">
        <ServicesSection services={tarotTherapyData.services} />
      </div>

      {/* Pricing Section - Planes y tarifas */}
      <div id="pricing-section">
        <PricingSection pricingPlans={tarotTherapyData.pricingPlans} />
      </div>

      {/* Target Audience Section - Para quién es */}
      <TargetAudienceSection targetAudience={tarotTherapyData.targetAudience} />

      {/* Process Section - Cómo funciona y modalidades */}
      <ProcessSection 
        processSteps={tarotTherapyData.processSteps}
        sessionModalities={tarotTherapyData.sessionModalities}
      />

      {/* Trust Section - Por qué confiar + testimonios */}
      <TrustSection trustIndicators={tarotTherapyData.trustIndicators} />

      {/* CTA Section - Call to action final */}
      <CTASection cta={tarotTherapyData.cta} />
    </div>
  );
};

export default TarotTherapyPricing;