// components/TarotPricing.tsx
import { tarotPlans } from '@/data/servicios/tarot-terapeutico/tarotPricing.ts';
import TarotPricingCard from './TarotPricingCard';

export default function TarotPricing() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-fuchsia-600 mb-4">
            Tarifas de Consulta
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Elige la sesión que mejor se adapte a tus necesidades. 
            Cada consulta incluye enfoque terapéutico personalizado.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {tarotPlans.map((plan) => (
            <TarotPricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-900 text-sm md:text-base">
            Todas las sesiones son confidenciales y se realizan en un espacio seguro y de confianza.
          </p>
        </div>
      </div>
    </section>
  )
}