'use client';

import React from 'react';
import { ShoppingBag, Sparkles, Heart, Star } from 'lucide-react';

export default function TiendaHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <ShoppingBag className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-lora-bold-normal text-white mb-6">
          🛍️ Tienda Holística
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed font-lora-normal">
          Descubre productos auténticos para tu crecimiento espiritual y bienestar integral
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-purple-100 mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-lora-normal">Productos Certificados</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-300" />
            <span className="font-lora-normal">Energía Positiva</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="font-lora-normal">Calidad Premium</span>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-lora-bold-normal text-white mb-2">500+</div>
            <div className="text-purple-100 font-lora-normal">Clientes Satisfechos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-lora-bold-normal text-white mb-2">100%</div>
            <div className="text-purple-100 font-lora-normal">Productos Auténticos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-lora-bold-normal text-white mb-2">24/7</div>
            <div className="text-purple-100 font-lora-normal">Soporte Espiritual</div>
          </div>
        </div>
      </div>
    </section>
  );
}