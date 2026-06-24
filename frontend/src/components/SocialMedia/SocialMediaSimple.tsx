'use client';

import React from 'react';
import Image from 'next/image';
import { socialMediaData } from '@/data/RedesSocialesData';
import { SocialMedia } from '@/types/RedesSocialesTypes';
import { Sparkles } from 'lucide-react';

export const SocialMediaSimple: React.FC = () => {
  // Función para obtener el color de fondo del icono según la red social
  const getIconBgColor = (mediaId: string) => {
    switch (mediaId) {
      case 'facebook':
        return 'bg-blue-600';
      case 'instagram':
        return 'bg-gradient-to-br from-purple-600 to-pink-500';
      case 'tiktok':
        return 'bg-purple-600';
      case 'youtube':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-brand-light/40 shadow-lg">
            <Sparkles className="w-6 h-6 text-brand-medium mr-3" />
            <span className="text-brand-medium font-lora-bold text-base uppercase tracking-wide">Redes Sociales</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-lora-bold text-brand-dark mb-8 leading-tight">
            Conecta conmigo
          </h2>

          <p className="text-lg md:text-xl text-brand-medium max-w-3xl mx-auto leading-relaxed font-lora">
            Sígueme en mis redes sociales para estar al día con contenido sobre bienestar, 
            psicología y transformación personal.
          </p>
        </div>

        {/* Botones simples apilados verticalmente */}
        <div className="max-w-md mx-auto space-y-4">
          {socialMediaData.map((media: SocialMedia) => {
            const Icon = media.icon;
            return (
              <a
                key={media.id}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full px-6 py-4 bg-white rounded-xl shadow-lg border border-brand-light/20 hover:shadow-xl hover:border-brand-light/40 hover:bg-amber-50/30 transition-all duration-300 group"
              >
                {/* Icono con color sólido */}
                <div className={`w-12 h-12 ${getIconBgColor(media.id)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Contenido de texto */}
                <div className="flex-1">
                  <h3 className="font-lora-bold text-lg text-brand-dark mb-1">
                    {media.name}
                  </h3>
                  <p className="text-sm text-brand-medium font-lora mb-1">
                    @{media.username}
                  </p>
                </div>
                
                {/* Flecha indicadora */}
                <div className="text-brand-medium group-hover:text-brand-dark group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          {/* Logo de la página */}
          <div className="flex justify-center mb-6">
            <Image
              src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png"
              alt="El Absoluto Universal"
              width={192}
              height={192}
              className="w-48 h-48"
            />
          </div>
          
          <p className="text-brand-medium font-lora text-sm">
            ¡Conectemos y compartamos este viaje de transformación juntos!
          </p>
        </div>
      </div>
    </section>
  );
};
