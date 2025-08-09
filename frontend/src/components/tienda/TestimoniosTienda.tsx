'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonios = [
  {
    id: 1,
    nombre: 'María Elena',
    ubicacion: 'Lima, Perú',
    texto: 'Los cuarzos que compré tienen una energía increíble. Desde que los tengo, siento más paz en mi hogar.',
    rating: 5,
    producto: 'Cuarzo Rosa'
  },
  {
    id: 2,
    nombre: 'Carlos Mendoza',
    ubicacion: 'Arequipa, Perú',
    texto: 'El péndulo hebreo cambió mi práctica de radiestesia. La calidad es excepcional y llegó perfectamente empacado.',
    rating: 5,
    producto: 'Péndulo Hebreo'
  },
  {
    id: 3,
    nombre: 'Ana Sofía',
    ubicacion: 'Cusco, Perú',
    texto: 'Mi primera compra en la tienda y no será la última. El tarot que pedí es hermoso y muy preciso en las lecturas.',
    rating: 5,
    producto: 'Tarot Egipcio'
  }
];

export default function TestimoniosTienda() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora-bold-normal text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lora-normal">
            Testimonios reales de personas que han transformado su vida con nuestros productos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div 
              key={testimonio.id}
              className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-purple-400 mr-3" />
                <div className="flex">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic font-lora-normal leading-relaxed">
                &ldquo;{testimonio.texto}&rdquo;
              </p>
              
              <div className="border-t border-purple-100 pt-4">
                <div className="font-lora-semibold text-gray-900">{testimonio.nombre}</div>
                <div className="text-sm text-gray-500 mb-2">{testimonio.ubicacion}</div>
                <div className="text-sm text-purple-600 font-medium">
                  Compró: {testimonio.producto}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
