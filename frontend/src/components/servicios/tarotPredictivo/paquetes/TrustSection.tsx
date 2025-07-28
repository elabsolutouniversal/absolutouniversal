// components/TrustSection.tsx
import React from 'react';
import { Award, Shield, Star, Lightbulb, Quote, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { TrustIndicator } from '@/types/servicios/tarot-terapeutico';

interface TrustSectionProps {
  trustIndicators: TrustIndicator[];
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Shield,
  Star,
  Lightbulb,
};

const testimonials = [
  {
    id: 1,
    name: "María Elena",
    location: "Ciudad de México",
    text: "Por primera vez entendí los patrones que me mantenían estancada en relaciones tóxicas. No fue solo una lectura, fue terapia profunda.",
    rating: 5,
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442586/IMG_3670_baozpb.jpg"
  },
  {
    id: 2,
    name: "Carlos R.",
    location: "Barcelona",
    text: "Llegué buscando respuestas sobre mi carrera y salí con un plan claro y la confianza para tomar decisiones importantes.",
    rating: 5,
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753150894/about-profile_kuacih.jpg"
  }
];

export const TrustSection: React.FC<TrustSectionProps> = ({ trustIndicators }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Trust indicators */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué confiar en <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">El Absoluto Universal?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra experiencia y metodología única garantizan resultados transformadores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = iconMap[indicator.icon];
              return (
                <div
                  key={indicator.id}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex p-6 rounded-2xl mb-6 ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    index === 1 ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                    index === 2 ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
                    'bg-gradient-to-br from-blue-400 to-indigo-500'
                  }`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {indicator.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {indicator.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimonios <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">reales</span>
            </h2>
            <p className="text-lg text-gray-600">
              Conoce las experiencias de quienes ya han transformado su vida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-full">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="pt-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More testimonials indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-purple-600 fill-current" />
              <span className="text-purple-800 font-medium">+100 testimonios de 5 estrellas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};