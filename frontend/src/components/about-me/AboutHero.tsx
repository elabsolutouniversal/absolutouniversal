"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { FLORAL_BACKGROUND_URL } from '@/constants/floralBackground';

interface AboutHeroProps {
  name: string;
  title: string;
  license: string;
  specialties: { title: string; longDescription: string }[];
  tagline: string;
  profileImage?: string;
}

const AboutHero: React.FC<AboutHeroProps> = (
  {
  name,
  title,
  license,
  specialties,
  tagline,
  profileImage,
}) => {
  const [expandedSpecialty, setExpandedSpecialty] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedSpecialty(expandedSpecialty === title ? null : title);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero con fondo florado */}
      <div className="relative py-16 md:py-24">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${FLORAL_BACKGROUND_URL}')`,
          }}
        />
        <div className="absolute inset-0 z-[1] bg-white/35" />

        <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            {profileImage && (
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/60 to-orange-200/50 rounded-full blur-xl opacity-50"></div>
                <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <Image
                    src={profileImage}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 224px"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Name */}
            <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-lora-bold text-brand-dark">
              {name}
            </h1>

            {/* Title */}
            <p className="mb-2 text-xl md:text-2xl font-lora-semibold text-brand-medium">
              {title}
            </p>

            {/* License */}
            <p className="mb-6 text-lg font-lora text-brand-medium font-lora-medium">
              {license}
            </p>

            {/* Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-yellow-200/90 backdrop-blur-sm rounded-xl shadow-md border border-yellow-300/60 text-brand-dark hover:bg-yellow-300/90 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => toggleExpand(specialty.title)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-lora-semibold text-brand-dark text-center">
                      {specialty.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-dark transition-transform duration-300 ${
                        expandedSpecialty === specialty.title ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedSpecialty === specialty.title && (
                    <p className="mt-4 text-xs text-brand-medium leading-relaxed text-justify">
                      {specialty.longDescription}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Texto introductorio */}
      <div className="bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="mx-auto max-w-4xl text-lg md:text-xl font-lora text-brand-medium font-lora-medium leading-relaxed mb-8">
              {tagline}
            </p>

            <div>
              <p className="text-2xl md:text-xl font-lora-medium leading-relaxed text-justify text-brand-dark mb-10">
                Uso en mis sesiones el pendulo hebreo, el tarot , y el tarot akashico como herramientas terapeuticas y espirituales
              </p>
              <p className="text-xl md:text-2xl font-lora-medium text-brand-medium leading-relaxed">
                Nada sucede por casualidad, si has llegado hasta aquí ,es porque estás listo para empezar a vivir de una forma más plena y coherente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;