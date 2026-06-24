'use client';

import React from 'react';
import Link from 'next/link';
import { profileData } from '@/data/profile/tearseprofiledata';
import Image from 'next/image';

export default function ProfileTeaser() {
  return (
    <div className="bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-yellow-100/60 text-brand-medium rounded-full text-sm font-lora-medium mb-5">
            {profileData.content.tagline}
          </span>
          <h2 className="text-4xl md:text-5xl font-lora-bold text-brand-dark mb-6 leading-tight">
            {profileData.content.mainHeading}
          </h2>
          <p className="text-xl font-lora text-brand-medium max-w-3xl mx-auto">
            {profileData.content.subHeading}
          </p>
        </div>

        {/* Tarjetas de servicios destacados */}
       
        {/* Sección CTA con mini bio */}
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white rounded-2xl p-8 border border-brand-light/20 shadow-sm relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-100/70 to-amber-100/50 opacity-40 rounded-2xl -z-10" />

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-300/50 to-orange-200/50 rounded-2xl opacity-20 blur-md group-hover:opacity-30 transition duration-500 -z-10" />
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
            <h3 className="text-2xl font-lora-bold text-brand-dark mb-3">
              {profileData.generalInfo.name}
            </h3>

            <div className="mb-5 space-y-2">
              <p className="font-lora-semibold text-brand-medium">
                {profileData.generalInfo.title}
              </p>
              <p className="font-lora-semibold text-brand-medium">
                ({profileData.generalInfo.credential})
              </p>
              <p className="text-brand-dark font-lora-bold">
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
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-lora-medium px-8 py-4 rounded-full shadow-lg shadow-orange-300/50 transition-all duration-300 transform hover:scale-105 group font-normal-style"
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
