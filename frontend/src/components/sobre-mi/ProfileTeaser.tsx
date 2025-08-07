'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, HeartPulse, BrainCircuit } from 'lucide-react';
import { profileData } from '@/data/profile/tearseprofiledata';
import Image from 'next/image';

// Mapeo de iconos con tipo seguro
const iconComponents = {
  BrainCircuit: BrainCircuit,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse
} as const;

type IconName = keyof typeof iconComponents;

export default function ProfileTeaser() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-rose-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-lora-medium mb-5">
            {profileData.content.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl font-lora-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            {profileData.content.mainHeading}
          </h2>
          <p className="text-xl font-lora text-purple-700 max-w-3xl mx-auto">
            {profileData.content.subHeading}
          </p>
        </div>

        {/* Tarjetas de servicios destacados */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profileData.services.map((service, index) => {
            const IconComponent = iconComponents[service.icon as IconName];

            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-pink-100 hover:border-pink-200 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

                <div className="flex justify-center mb-5">
                  <div className="p-4 bg-pink-50 rounded-xl group-hover:bg-pink-100 transition duration-300">
                    <IconComponent className="h-10 w-10 text-pink-600" />
                  </div>
                </div>

                                 <h3 className="text-xl font-lora-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">{service.title}</h3>
                <p className="font-lora text-purple-600 text-center mb-4">{service.description}</p>

                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs font-lora-semibold text-pink-700 bg-pink-100 rounded-full">
                    {service.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección CTA con mini bio */}
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white rounded-2xl p-8 border border-pink-100 shadow-sm relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-100 to-purple-100 opacity-40 rounded-2xl -z-10" />

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl opacity-20 blur-md group-hover:opacity-30 transition duration-500 -z-10" />
              <Image 
                src={profileData.generalInfo.imageUrl} 
                alt={profileData.generalInfo.name} 
                width={160}
                height={160}
                className="w-40 h-40 rounded-xl object-cover border-4 border-white shadow-lg group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-lora-bold text-fuchsia-600 mb-3">
              {profileData.generalInfo.name}
            </h3>

            <div className="mb-5 space-y-2">
              <p className="font-lora-semibold text-pink-600">
                {profileData.generalInfo.title} ({profileData.generalInfo.credential})
              </p>
                             <p className="text-purple-700 font-lora-bold">
                 {profileData.generalInfo.specialty} con {profileData.generalInfo.experience}
               </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {profileData.badges.map((badge, index) => (
                <span 
                  key={index} 
                  className={`bg-${badge.color}-100 text-${badge.color}-800 text-xs font-lora-semibold px-2.5 py-1 rounded-full flex items-center`}
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge.text}
                </span>
              ))}
            </div>

            <Link
              href="/sobre-mi"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-lora-medium px-6 py-3 rounded-lg transition-all group shadow-md hover:shadow-lg font-normal-style"
            >
              {profileData.content.ctaText}
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
