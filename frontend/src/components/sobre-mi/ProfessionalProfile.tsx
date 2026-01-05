'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuit, Sparkles, HeartPulse, Check, ChevronRight } from 'lucide-react';
import { profileData } from '@/data/profile/profileData';

// Mapeo de iconos
const iconComponents = {
  BrainCircuit: BrainCircuit,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse
} as const;

type IconName = keyof typeof iconComponents;

export default function ProfessionalProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Tarjeta principal */}
      <div className={`max-w-5xl mx-auto ${profileData.colors.cardBg} rounded-2xl shadow-xl overflow-hidden ${profileData.colors.border} border`}>
        
        {/* Encabezado con gradiente */}
        <div className={`${profileData.colors.primary} py-10 px-8 text-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10 pattern-dots pattern-indigo-100 pattern-size-4" />
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-lora-bold text-white leading-tight tracking-tight">
              {profileData.generalInfo.name}
            </h1>
            <div className="w-28 h-1.5 bg-white/80 mx-auto my-5 rounded-full" />
            <p className="text-white/95 font-lora-medium text-lg md:text-xl">
              {profileData.generalInfo.title} ({profileData.generalInfo.credential})
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          {/* Sección de presentación */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-3 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500 -z-10" />
              <Image
                src={profileData.generalInfo.imageUrl}
                alt={profileData.generalInfo.name}
                width={240}
                height={240}
                className="rounded-xl shadow-lg border-4 border-white object-cover transform group-hover:scale-103 transition duration-500"
                priority
              />
            </div>
            
            <div className="text-center lg:text-left space-y-5 flex-1">
              <h2 className="text-3xl font-lora-bold text-gray-800 leading-tight">
                Transformación personal a través de <span className="text-indigo-600">{profileData.generalInfo.specialty}</span>
              </h2>
              <p className="text-lg font-lora text-gray-600 leading-relaxed">
                Con más de <span className="font-lora-semibold">{profileData.generalInfo.experience}</span>, combino diversas técnicas holísticas para ofrecerte un camino único hacia tu bienestar integral.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                {profileData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 text-sm font-lora-medium bg-indigo-50/80 text-indigo-700 px-4 py-2 rounded-full border border-indigo-100"
                  >
                    <Check className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sección de metodología */}
          <div className="mb-16">
            <h3 className="text-3xl font-lora-bold text-gray-800 mb-10 text-center lg:text-left">
              Mi <span className="text-indigo-600">enfoque terapéutico</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {profileData.services.map((service, index) => {
                const IconComponent = iconComponents[service.icon as IconName];
                return (
                  <div 
                    key={index} 
                    className="bg-white p-7 rounded-xl hover:shadow-lg transition duration-300 border border-gray-100 hover:border-indigo-100 group"
                  >
                    <div className="flex items-center mb-5">
                      <div className="p-3 bg-indigo-100 rounded-xl mr-5 group-hover:bg-indigo-200 transition duration-300">
                        <IconComponent className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="text-xl font-lora-bold text-gray-800">{service.title}</h4>
                    </div>
                    <p className="font-lora text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-lora-semibold text-indigo-700 bg-indigo-100 rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
              <h4 className="text-2xl font-lora-bold text-gray-800 mb-5">Beneficios exclusivos de mi método:</h4>
              <ul className="grid md:grid-cols-2 gap-4">
                {profileData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-600">
                        <Check className="h-4 w-4" />
                      </div>
                    </div>
                    <span className="ml-3 font-lora text-gray-700 font-lora-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Llamado a la acción */}
          <div className="text-center">
            <div className="mb-10">
              <h3 className="text-3xl font-lora-bold text-gray-800 mb-4">
                ¿Preparado para tu transformación?
              </h3>
              <p className="text-xl font-lora text-gray-600 max-w-2xl mx-auto">
                Agenda tu primera sesión y comienza un viaje de autodescubrimiento y sanación profunda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Link
                href="https://wa.me/51962305362?text=Hola%20Dahiana,%20quisiera%20agendar%20una%20sesión"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center ${profileData.colors.whatsappBg} ${profileData.colors.whatsappHover} text-white font-lora-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-xl flex-1 sm:flex-none font-normal-style`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="mr-3 text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339.4 55.6 283.8 32 223.7 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111.9L.7 475.9c-4.8 17.4 5.1 35.5 22.5 40.3 6.7 1.9 13.6 2.9 20.4 2.9 11.2 0 22.4-3.5 31.5-10.4l56.8-41.6c35.6 20.8 75.9 32 117.8 32 122.4 0 222-99.6 222-222 0-60.1-23.6-115.7-65.1-157.2zm-43.6 306.7c-2.4 1.4-6.4 2.3-11.2 2.3-5.2 0-10.7-1.5-15.6-4.6-25.1-15.4-58.8-31.5-84.8-31.5-13.8 0-25.2 11.2-25.2 25.1 0 13.8 11.4 25.1 25.2 25.1 26.2 0 54.4 10.1 82.2 27.2 2.9 1.8 5.7 3.3 8.3 4.5 13.5 6 27.8 9.3 42.6 9.3 11.4 0 22.4-1.8 31.8-5.3 10.1-3.7 18.2-8.5 24-14.7 6-6.2 9.2-13.6 9.2-22.1 0-8.6-3.2-16-9.2-22.1-5.8-6.2-13.9-10.9-24-14.7-9.4-3.5-20.4-5.3-31.8-5.3-14.8 0-29.1 3.3-42.6 9.3-2.6 1.2-5.4 2.7-8.3 4.5z"></path>
                </svg>
                <span>WhatsApp</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="#"
                className={`inline-flex items-center justify-center ${profileData.colors.bookingBg} ${profileData.colors.bookingHover} text-white font-lora-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-xl flex-1 sm:flex-none font-normal-style`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="mr-3 text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 464V48c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zM400 128H48v32l400-11.2V128zm0 96H48v224h352V224zM240 320h-48V288h48v32zm0 96h-48v-32h48v32zm96 0h-48v-32h48v32z"></path>
                </svg>
                <span>Agendar online</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-indigo-50/50 p-4 rounded-lg inline-flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-lora text-gray-700">
                  <span className="text-indigo-600 font-lora-bold">Oferta especial:</span> {profileData.offer.text}
                </p>
                <p className="text-xs font-lora text-gray-500">{profileData.offer.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}