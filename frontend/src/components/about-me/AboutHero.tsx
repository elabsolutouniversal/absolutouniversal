// components/about/AboutHero.tsx
import React from 'react';
import Image from 'next/image';

interface AboutHeroProps {
  name: string;
  title: string;
  license: string;
  specialties: string[];
  tagline: string;
  profileImage?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  name,
  title,
  license,
  specialties,
  tagline,
  profileImage,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-pink-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          {profileImage && (
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-50"></div>
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
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-lora-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {name}
          </h1>

          {/* Title */}
          <p className="mb-2 text-xl md:text-2xl font-lora-semibold text-purple-700">
            {title}
          </p>

          {/* License */}
          <p className="mb-6 text-lg font-lora text-purple-600 font-lora-medium">
            {license}
          </p>

                    {/* Specialties */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-lora-medium text-purple-600 shadow-lg border border-purple-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {specialty}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="mx-auto max-w-4xl text-lg md:text-xl font-lora text-purple-700 font-lora-medium leading-relaxed mb-8">
            {tagline}
          </p>

          {/* Subtext */}
          <div className="mt-8">
            <p className="text-lg md:text-xl font-lora-medium text-purple-700 leading-relaxed">
              Nada sucede por casualidad, si has llegado hasta aquí ,es porque estás listo para empezar a vivir de una forma más plena y coherente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;