// components/ServicesSection.tsx
import React from 'react';
import { Search, Compass, Heart, ClipboardList, LucideIcon } from 'lucide-react';
import { Service } from '@/types/servicios/tarot-terapeutico';

interface ServicesSectionProps {
  services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
  Search,
  Compass,
  Heart,
  ClipboardList,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué hace <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">única</span> cada sesión?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' 
                    : 'bg-white border-2 border-gray-200 hover:border-purple-300 text-gray-900'
                }`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-current"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-current"></div>
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl mb-6 ${
                    index % 2 === 0 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-purple-500 to-indigo-600'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      index % 2 === 0 ? 'text-white' : 'text-white'
                    }`} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className={`leading-relaxed ${
                    index % 2 === 0 ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-700' 
                    : 'bg-gradient-to-br from-purple-50 to-indigo-50'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Benefits summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {['Tomar decisiones desde la serenidad', 'Romper patrones limitantes', 'Encontrar tu camino auténtico'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-purple-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};