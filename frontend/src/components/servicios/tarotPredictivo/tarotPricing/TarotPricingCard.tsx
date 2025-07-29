// components/TarotPricingCard.tsx
'use client';

import { whatsappConfig } from '@/data/servicios/tarot-terapeutico/tarotPricing.ts';
import type { TarotPlan } from '@/data/servicios/tarot-terapeutico/tarotPricing.ts';

interface TarotPricingCardProps {
  plan: TarotPlan;
}

export default function TarotPricingCard({ plan }: TarotPricingCardProps) {
  const handleWhatsAppClick = () => {
    window.open(whatsappConfig.getLink(plan.name), '_blank');
  };

  return (
    <div className={`relative transform transition-transform duration-300 hover:-translate-y-2 ${plan.recommended ? 'lg:scale-105' : ''}`}>
      {/* Badge Recomendado - Ahora más arriba */}
      {plan.recommended && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-36 text-center z-10">
          <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Recomendado
          </span>
        </div>
      )}
      
      {/* Card Container */}
      <div className={`
        h-full rounded-3xl p-6 md:p-8 transition-all duration-300
        ${plan.recommended 
          ? 'bg-gradient-to-br from-pink-50 to-fuchsia-50 border-2 border-fuchsia-300' 
          : 'bg-white border border-pink-200'
        }
        shadow-lg hover:shadow-2xl hover:shadow-pink-200/50
      `}>
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-fuchsia-100 rounded-2xl flex items-center justify-center text-3xl">
            {plan.icon}
          </div>
          <h3 className="text-2xl font-bold text-fuchsia-600 mb-2">{plan.name}</h3>
          <p className="text-gray-600 text-sm">{plan.duration}</p>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-lg text-gray-500">{plan.currency}</span>
            <span className="text-5xl font-bold text-fuchsia-600 mx-2">{plan.price}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6 min-h-[3rem]">
          {plan.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg 
                className="w-5 h-5 text-fuchsia-500 mr-3 flex-shrink-0 mt-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className={`
            w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300
            flex items-center justify-center gap-3 group
            ${plan.recommended
              ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white shadow-lg'
              : 'bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-600 border border-fuchsia-200'
            }
          `}
        >
          <svg 
            className="w-5 h-5 group-hover:scale-110 transition-transform" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Agendar por WhatsApp</span>
        </button>
      </div>
    </div>
  );
}