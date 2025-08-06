'use client';

import React from 'react';
import { socialMediaData } from '@/data/RedesSocialesData';
import { SocialMedia } from '@/types/RedesSocialesTypes';

export const SocialMediaSimple: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
       Contactame
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {socialMediaData.map((media: SocialMedia) => {
          const Icon = media.icon;
          return (
            <div
              key={media.id}
              className="flex flex-col items-center text-center relative bg-white p-8 rounded-2xl shadow-sm border border-pink-100 overflow-hidden group transition hover:shadow-lg"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-0 group-hover:opacity-100 transition duration-500 -z-10 rounded-2xl" />

              <Icon
                className={`w-12 h-12 mb-4 ${media.iconColor} transition group-hover:opacity-80`}
              />

              <h3 className="font-semibold text-xl text-gray-800 mb-1">
                {media.name}
              </h3>
              <p className="text-sm text-gray-600">{media.username}</p>
              <p className="mt-2 text-sm text-gray-700 font-medium">
                {media.followers} seguidores
              </p>

              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
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
