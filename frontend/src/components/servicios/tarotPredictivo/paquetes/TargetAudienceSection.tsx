// components/TargetAudienceSection.tsx
import React from 'react';
import { Crosshair, RotateCcw, Zap, TreePine, Target, LucideIcon } from 'lucide-react';
import { TargetAudience } from '@/types/servicios/tarot-terapeutico';

interface TargetAudienceSectionProps {
  targetAudience: TargetAudience[];
}

const iconMap: Record<string, LucideIcon> = {
  Crosshair,
  RotateCcw,
  Zap,
  TreePine,
  Target,
};

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ targetAudience }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-pink-300"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-yellow-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Esta lectura es <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">para ti</span> si...
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Descubre si nuestro enfoque terapéutico resuena con lo que estás buscando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {targetAudience.map((audience) => {
            const IconComponent = iconMap[audience.icon];
            return (
              <div
                key={audience.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 font-semibold text-sm">✓ Esto es para ti</span>
                    </div>
                    <p className="text-white leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">
            ¿Alguna de estas frases resuena contigo?
          </h3>
          <p className="text-indigo-200 mb-6 text-lg">
            Si tu respuesta es sí, esta lectura está diseñada específicamente para tu proceso de crecimiento.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Quiero mi sesión ahora
          </button>
        </div>
      </div>
    </section>
  );
};