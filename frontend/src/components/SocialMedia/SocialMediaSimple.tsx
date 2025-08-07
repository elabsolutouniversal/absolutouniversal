'use client';

import React from 'react';
import { socialMediaData } from '@/data/RedesSocialesData';
import { SocialMedia } from '@/types/RedesSocialesTypes';
import { Sparkles } from 'lucide-react';

export const SocialMediaSimple: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-8 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-lg">
            <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
            <span className="text-purple-600 font-lora-bold text-base uppercase tracking-wide">Redes Sociales</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-lora-bold bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
            Conecta conmigo
          </h2>

          <p className="text-lg md:text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed font-lora">
            Sígueme en mis redes sociales para estar al día con contenido sobre bienestar, 
            psicología y transformación personal.
          </p>
        </div>

        {/* Grid de redes sociales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialMediaData.map((media: SocialMedia) => {
            const Icon = media.icon;
            return (
              <div
                key={media.id}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white/95"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition duration-500 -z-10 rounded-2xl" />

                {/* Icono con efecto */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 shadow-md">
                    <Icon
                      className={`w-10 h-10 ${media.iconColor} transition-all duration-300 group-hover:scale-110`}
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="text-center">
                  <h3 className="font-lora-bold text-xl text-gray-700 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                    {media.name}
                  </h3>
                  
                  <p className="text-sm text-purple-600 font-lora mb-2">
                    @{media.username}
                  </p>
                  
                  <p className="text-sm text-purple-600 font-lora-semibold mb-6">
                    {media.followers} seguidores
                  </p>

                  {/* Botón mejorado */}
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-lora-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                  >
                    <span>Visitar</span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-purple-600 font-lora text-sm">
            ¡Conectemos y compartamos este viaje de transformación juntos!
          </p>
        </div>
      </div>
    </section>
  );
};
