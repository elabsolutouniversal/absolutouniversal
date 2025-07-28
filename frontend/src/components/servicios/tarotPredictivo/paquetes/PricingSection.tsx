// components/PricingSection.tsx
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { PricingPlan } from '@/types/servicios/tarot-terapeutico';

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ pricingPlans }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Inversión</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elige el plan que mejor se adapte a tus necesidades. Todas las sesiones incluyen grabación y son completamente confidenciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl ring-4 ring-indigo-300'
                  : 'bg-white border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    MÁS POPULAR
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-indigo-200' : 'text-gray-500'}`}>
                    USD
                  </span>
                </div>
                
                {plan.duration !== 'Inmediato' && (
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {plan.duration}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular ? 'bg-white/20' : 'bg-indigo-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-indigo-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-indigo-700 hover:bg-indigo-50 hover:scale-105'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:scale-105'
              }`}>
                {plan.id === 'flash' ? 'Consultar Ahora' : 'Agendar Sesión'}
              </button>
            </div>
          ))}
        </div>

        {/* Session info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Todas las sesiones incluyen:</h4>
                <p className="text-gray-600">Online (Zoom/WhatsApp) o Presenciales • Completamente confidenciales • Grabación incluida</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-indigo-600">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Respuesta garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};