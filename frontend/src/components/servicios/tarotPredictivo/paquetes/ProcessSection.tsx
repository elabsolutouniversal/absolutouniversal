// components/ProcessSection.tsx
import React from 'react';
import { Monitor, Home, ArrowRight, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { ProcessStep, SessionModality } from '@/types/servicios/tarot-terapeutico';

interface ProcessSectionProps {
  processSteps: ProcessStep[];
  sessionModalities: SessionModality[];
}

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Home,
};

export const ProcessSection: React.FC<ProcessSectionProps> = ({ 
  processSteps, 
  sessionModalities 
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Session Modalities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modalidades <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">disponibles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige la modalidad que mejor se adapte a tus necesidades y comodidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {sessionModalities.map((modality, index) => {
              const IconComponent = iconMap[modality.icon];
              return (
                <div
                  key={modality.id}
                  className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                    index === 0 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-600 text-white'
                  }`}
                >
                  {/* Background image for presencial */}
                  {index === 1 && (
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3665_s4whct.jpg"
                        alt="Espacio terapéutico"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{modality.title}</h3>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-white/90">
                      {modality.description}
                    </p>

                    <div className="mt-6">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Disponible ahora</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Cómo <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">funciona?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso simple y transparente para tu transformación
            </p>
          </div>

          {/* Desktop version */}
          <div className="hidden lg:flex items-center justify-between mb-12">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' 
                      : 'bg-gradient-to-br from-pink-500 to-purple-600 text-white'
                  }`}>
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile version */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' 
                    : 'bg-gradient-to-br from-pink-500 to-purple-600 text-white'
                }`}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Listo para comenzar tu transformación?
              </h3>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Elegir mi plan ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};