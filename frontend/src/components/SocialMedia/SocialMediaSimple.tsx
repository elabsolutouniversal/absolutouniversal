// src/components/SocialMedia/SocialMediaSimple.tsx
'use client';

import React from 'react';
import { socialMediaData } from '@/data/RedesSocialesData';
import { SocialMedia } from '@/types/RedesSocialesTypes';

export const SocialMediaSimple: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Conecta con Nosotros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {socialMediaData.map((media: SocialMedia) => {
          const Icon = media.icon;
          return (
            <div
              key={media.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
            >
              <Icon className={`w-12 h-12 mb-3 ${media.iconColor}`} />
              <h3 className="font-semibold text-xl">{media.name}</h3>
              <p className="text-sm text-gray-500">{media.username}</p>
              <p className="mt-2 text-sm text-gray-700">{media.followers} seguidores</p>
              
              {/* Botón "Visitar" */}
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-block
                  bg-indigo-600 text-white font-medium
                  py-2 px-4 rounded-full
                  transition-colors duration-200
                  hover:bg-white  hover:text-indigo-600
                "
              >
                Visitar →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
