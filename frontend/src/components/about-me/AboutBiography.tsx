import React from 'react';
import Image from 'next/image';
import { AboutData } from '@/data/aboutme/aboutData'; // Ajusta la ruta según tu estructura de proyecto

interface AboutBiographyProps {
  biography: AboutData['biography'];
  images: {
    terapiaHolistica: string;
    workspace1: string;
    tarot: string;
    workspace2?: string;
  };
}

const AboutBiography: React.FC<AboutBiographyProps> = ({ biography, images }) => {
  const SectionIcon: React.FC<{ number: string | number; color?: 'purple' | 'indigo' | 'amber' | 'teal' }> = ({ number, color = 'purple' }) => {
    const colorClasses = {
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      amber: 'bg-amber-100 text-amber-600',
      teal: 'bg-teal-100 text-teal-600',
    };

    return (
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${colorClasses[color]}`}> 
        <span className="text-lg font-semibold">{number}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Sección 1: El Despertar de un Don */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 lg:items-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent shadow-md">
            <SectionIcon number="1" color="purple" />
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{biography.awakening.title}</h3>
            <div className="space-y-4 text-gray-600">
              {biography.awakening.content.map((p, idx) => (
                <p key={idx} className="text-justify">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80">
            <Image
              src={images.terapiaHolistica}
              alt="Terapia Holística"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sección 2: La Formación Profesional */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 lg:items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80 lg:order-1">
            <Image
              src={images.workspace1}
              alt="Formación Profesional"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent shadow-md lg:order-2">
            <SectionIcon number="2" color="indigo" />
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{biography.professionalFormation.title}</h3>
            <div className="space-y-4 text-gray-600">
              {biography.professionalFormation.content.map((p, idx) => (
                <p key={idx} className="text-justify">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Sección 3: La Fusión */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 lg:items-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-transparent shadow-md">
            <SectionIcon number="3" color="amber" />
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{biography.fusion.title}</h3>
            <div className="space-y-4 text-gray-600">
              {biography.fusion.content.map((p, idx) => (
                <p key={idx} className="text-justify">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-2 text-lg font-semibold text-gray-900">Especializaciones:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {biography.fusion.studies.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80">
            <Image
              src={images.workspace2 || images.tarot}
              alt="Fusión de disciplinas"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sección 4: La Integración de Enfoques */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80 lg:order-1">
            <Image
              src={images.tarot}
              alt="Tarot Integrativo"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-transparent shadow-md lg:order-2">
            <SectionIcon number="4" color="teal" />
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{biography.integration.title}</h3>
            <div className="space-y-4 text-gray-600 mb-4">
              {biography.integration.content.map((p, idx) => (
                <p key={idx} className="text-justify">
                  {p}
                </p>
              ))}
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {biography.integration.studies.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBiography;
