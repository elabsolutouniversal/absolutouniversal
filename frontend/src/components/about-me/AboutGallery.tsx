// components/about/AboutGallery.tsx
import React from 'react';
import Image from 'next/image';

interface AboutGalleryProps {
  workspace2?: string;
}

const AboutGallery: React.FC<AboutGalleryProps> = ({ workspace2 }) => {
  if (!workspace2) return null;
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
            Un Espacio Sagrado para Tu Transformación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada sesión es un viaje único donde la ciencia y la espiritualidad se encuentran para guiarte hacia tu sanación integral
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={workspace2}
              alt="Espacio de consulta terapéutica"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={95}
            />
            {/* Overlay más suave para mejor contraste del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Contenedor de texto con mejor legibilidad */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="max-w-4xl">
                <p className="text-white text-base md:text-lg font-medium leading-relaxed drop-shadow-lg">
                  Un ambiente cálido y acogedor donde cada elemento ha sido cuidadosamente seleccionado para facilitar tu proceso de sanación y crecimiento personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;