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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-50"></div>
              <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
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
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold italic bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </h1>

          {/* Title */}
          <p className="mb-2 text-xl md:text-2xl font-semibold italic text-purple-600">
            {title}
          </p>

          {/* License */}
          <p className="mb-6 text-lg italic text-gray-700">
            {license}
          </p>

          {/* Specialties */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm border border-pink-100"
              >
                {specialty}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="mx-auto max-w-3xl text-lg md:text-xl italic text-gray-800 font-medium">
            {tagline}
          </p>

          {/* Subtext */}
          <div className="mt-8">
            <p className="text-lg md:text-xl font-medium italic text-pink-600">
              No es causalidad que estés aquí. Tu alma te ha guiado hasta esta página porque estás listo para una sanación radical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;