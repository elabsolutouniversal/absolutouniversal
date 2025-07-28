// components/CTASection.tsx
import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import Image from 'next/image';

interface CTASectionProps {
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    contactText: string;
  };
}

export const CTASection: React.FC<CTASectionProps> = ({ cta }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
      
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3665_s4whct.jpg"
          alt="Transformación"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-bounce">
        <Sparkles className="w-8 h-8 text-yellow-300 opacity-70" />
      </div>
      <div className="absolute bottom-32 right-16 animate-pulse">
        <Sparkles className="w-6 h-6 text-pink-300 opacity-60" />
      </div>
      <div className="absolute top-1/2 left-10 animate-bounce delay-1000">
        <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              {cta.title}
            </span>
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-200 italic">
                {cta.subtitle}
              </p>
            </div>
          </div>

          <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto mb-8">
            <Calendar className="w-6 h-6" />
            {cta.buttonText}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-indigo-200 text-lg">
            🎯 Inicia tu transformación hoy mismo
          </p>
        </div>

        {/* Contact info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold">¿Tienes dudas?</h3>
          </div>
          <p className="text-indigo-200 mb-6">
            {cta.contactText}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2 justify-center">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white/10">
              Enviar email
            </button>
          </div>
        </div>

        {/* Final trust elements */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-indigo-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Pagos seguros</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Sesiones confidenciales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Grabación incluida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Soporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};