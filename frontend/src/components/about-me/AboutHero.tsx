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

const AboutHero: React.FC<AboutHeroProps> = ({ name, title, license, specialties, tagline, profileImage }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          {profileImage && (
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-xl opacity-50"></div>
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
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {name}
          </h1>
          
          <p className="mb-2 text-xl font-medium text-purple-600 md:text-2xl">
            {title}
          </p>
          
          <p className="mb-6 text-lg text-gray-600">
            {license}
          </p>
          
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
            {tagline}
          </p>
          
          <div className="mt-8">
            <p className="text-lg font-medium text-purple-600">
              No es casualidad que estés aquí. Tu alma te ha guiado hasta esta página porque estás listo para una sanación radical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;