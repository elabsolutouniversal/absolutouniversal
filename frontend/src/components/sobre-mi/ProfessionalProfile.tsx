'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
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
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              {profileData.generalInfo.name}
            </h1>
            <div className="w-28 h-1.5 bg-white/80 mx-auto my-5 rounded-full" />
            <p className="text-white/95 font-medium text-lg md:text-xl">
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
              <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                Transformación personal a través de <span className="text-indigo-600">{profileData.generalInfo.specialty}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con más de <span className="font-semibold">{profileData.generalInfo.experience}</span>, combino diversas técnicas holísticas para ofrecerte un camino único hacia tu bienestar integral.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                {profileData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 text-sm font-medium bg-indigo-50/80 text-indigo-700 px-4 py-2 rounded-full border border-indigo-100"
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
            <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center lg:text-left">
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
                      <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
              <h4 className="text-2xl font-bold text-gray-800 mb-5">Beneficios exclusivos de mi método:</h4>
              <ul className="grid md:grid-cols-2 gap-4">
                {profileData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-600">
                        <Check className="h-4 w-4" />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Llamado a la acción */}
          <div className="text-center">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                ¿Preparado para tu transformación?
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Agenda tu primera sesión y comienza un viaje de autodescubrimiento y sanación profunda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Link
                href="https://wa.me/51962305362?text=Hola%20Dahiana,%20quisiera%20agendar%20una%20sesión"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center ${profileData.colors.whatsappBg} ${profileData.colors.whatsappHover} text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-xl flex-1 sm:flex-none`}
              >
                <FaWhatsapp className="mr-3 text-xl" />
                <span>WhatsApp</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="#"
                className={`inline-flex items-center justify-center ${profileData.colors.bookingBg} ${profileData.colors.bookingHover} text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:shadow-xl flex-1 sm:flex-none`}
              >
                <FaCalendarAlt className="mr-3 text-xl" />
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
                <p className="text-sm font-medium text-gray-700">
                  <span className="text-indigo-600 font-bold">Oferta especial:</span> {profileData.offer.text}
                </p>
                <p className="text-xs text-gray-500">{profileData.offer.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}