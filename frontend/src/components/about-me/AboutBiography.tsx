"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AboutData } from '@/data/aboutme/aboutData'; // Ajusta la ruta según tu proyecto
import { 
  // Brain, 
  // Heart, 
  // Sparkles, 
  // BookOpen, 
  // Eye, 
  // Zap,
  // GraduationCap,
  // Users,
  // Target,
  // Star
} from 'lucide-react';
// import Link from 'next/link';

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

  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedStudy(expandedStudy === title ? null : title);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">

        {/* Sección 1: El Despertar de un Don */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 lg:items-center">
          {/* Imagen primero en móvil, segunda en lg */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80 order-1 lg:order-2">
            <Image
              src={images.terapiaHolistica}
              alt="Terapia Holística"
              fill
              className="object-cover"
            />
          </div>
          {/* Texto segundo en móvil, primero en lg */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-transparent shadow-md order-2 lg:order-1">
            <SectionIcon number="1" color="purple" />
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{biography.awakening.title}</h3>
            <div className="space-y-4 text-purple-700">
              {biography.awakening.content.map((p, idx) => (
                <p key={idx} className="text-justify">{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Sección 2: La Formación Profesional */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 lg:items-center">
          {/* Imagen primero en móvil y lg */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80">
            <Image
              src={images.workspace1}
              alt="Formación Profesional"
              fill
              className="object-cover"
            />
          </div>
          {/* Texto segundo */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent shadow-md">
            <SectionIcon number="2" color="indigo" />
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{biography.professionalFormation.title}</h3>
            <div className="space-y-4 text-purple-700">
              {biography.professionalFormation.content.map((p, idx) => (
                <p key={idx} className="text-justify">{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Sección 3: La Fusión */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 lg:items-center">
          {/* Imagen primero en móvil, segunda en lg */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80 order-1 lg:order-2">
            <Image
              src={images.workspace2 || images.tarot}
              alt="Fusión de disciplinas"
              fill
              className="object-cover"
            />
          </div>
          {/* Texto segundo en móvil, primero en lg */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-transparent shadow-md order-2 lg:order-1">
            <SectionIcon number="3" color="amber" />
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{biography.fusion.title}</h3>
            <div className="space-y-4 text-purple-700">
              {biography.fusion.content.map((p, idx) => (
                <p key={idx} className="text-justify">
                  {typeof p === 'string' ? p.split(/\*\*(.*?)\*\*/).map((part, i) => 
                    i % 2 === 1
                      ? <span key={i} className="text-2xl font-normal bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent uppercase">{part}</span>
                      : part
                  ) : p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Sección 4: La Integración de Enfoques */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Imagen primero */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 lg:h-80">
            <Image
              src={images.tarot}
              alt="Tarot Integrativo"
              fill
              className="object-cover"
            />
          </div>
          {/* Texto segundo */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-transparent shadow-md">
            <SectionIcon number="4" color="teal" />
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{biography.integration.title}</h3>
            <div className="space-y-4 text-purple-700 mb-4">
              {biography.integration.content.map((p, idx) => (
                <p key={idx} className="text-justify">{p}</p>
              ))}
            </div>
                         <div className="grid gap-4 mt-6">
               {biography.integration.studies.map((study, idx) => (
                 <div key={idx} className="flex flex-col gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-purple-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                   onClick={() => toggleExpand(study.title)}>
                   <div className="flex items-center gap-4">
                     <div className="flex-shrink-0 text-3xl">
                       {study.icon}
                     </div>
                     <div className="flex-1">
                       <h4 className="font-lora-semibold text-purple-800 text-sm mb-1">{study.title}</h4>
                       <p className="text-purple-600 text-xs font-lora">{study.description}</p>
                     </div>
                     {/* Toggle icon */}
                     <svg
                       className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${expandedStudy === study.title ? 'rotate-180' : ''}`}
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                     </svg>
                   </div>
                   {expandedStudy === study.title && (
                     <div className="mt-4 text-sm text-gray-700 bg-purple-50 p-3 rounded-md">
                       {study.longDescription}
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBiography;
