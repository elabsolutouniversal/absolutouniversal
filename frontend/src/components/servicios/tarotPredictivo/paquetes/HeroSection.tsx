// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  heroImage
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Tarot Terapéutico"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce z-20">
        <Sparkles className="w-8 h-8 text-yellow-300 opacity-70" />
      </div>
      <div className="absolute bottom-32 right-16 animate-pulse z-20">
        <Sparkles className="w-6 h-6 text-pink-300 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <p className="text-lg md:text-xl font-semibold">
              {subtitle}
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
            Ver Planes y Precios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
            Conocer más
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};