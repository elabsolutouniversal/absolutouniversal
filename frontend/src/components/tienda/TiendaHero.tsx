'use client';

import React from 'react';
import { ShoppingBag, Sparkles, Heart, Star } from 'lucide-react';
import { FLORAL_BACKGROUND_URL } from '@/constants/floralBackground';

export default function TiendaHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${FLORAL_BACKGROUND_URL}')`,
        }}
      />
      <div className="absolute inset-0 bg-white/35" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-md border border-brand-light/20">
            <ShoppingBag className="w-12 h-12 text-brand-medium" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-lora-bold-normal text-brand-dark mb-6">
          🛍️ Tienda Holística
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-medium mb-8 max-w-3xl mx-auto leading-relaxed font-lora-normal">
          Descubre Lindos Productos Esotericos y Misticos
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-brand-medium mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-light" />
            <span className="font-lora-normal">Productos Certificados</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-brand-light" />
            <span className="font-lora-normal">Energía Positiva</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-brand-light" />
            <span className="font-lora-normal">Calidad Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
}