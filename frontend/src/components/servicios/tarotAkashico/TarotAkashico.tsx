'use client';

import React from 'react';
import { serviciosDataTarotAkashico, audienciaDataTarotAkashico, tarotAkashicoImages } from '@/data/servicios/tarot-akashico/tarot-akashico';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const TarotAkashico: React.FC = () => {

  const handleBooking = () => {
    const whatsappNumber = "51962305362"; // Reemplaza con tu número de WhatsApp
    const message = `🌟 ¡Hola! Estoy interesado/a en reservar una sesión de Tarot Akáshico.\n\n• Servicio: Sesión Completa\n• Inversión: $75\n\n¿Podríamos coordinar una fecha? ✨`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Tarot Akáshico</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {tarotAkashicoImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image src={image.src} alt={image.alt} width={500} height={300} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">¿Qué puedes esperar de una sesión de Tarot Akáshico?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosDataTarotAkashico.map(servicio => (
            <div key={servicio.id} className="bg-purple-50 p-6 rounded-lg flex items-start">
              <div className="text-purple-600 mr-4">{servicio.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{servicio.titulo}</h3>
                <p className="text-gray-700">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">¿Es para ti si...?</h2>
        <ul className="space-y-4">
          {audienciaDataTarotAkashico.map(item => (
            <li key={item.id} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-800">{item.texto}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-purple-100 p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">Sesión Completa de Tarot Akáshico</h3>
            <p className="text-gray-500 mt-1">1 hora y 30 minutos</p>
            <div className="my-6">
              <span className="text-5xl font-bold text-indigo-600">$75</span>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-3 text-center">INCLUYE:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Conexión y apertura de Registros Akáshicos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Identificacion de Patrones Destructivos Generacionales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Análisis de vidas pasadas relevantes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Guía sobre tu propósito de alma y misión de vida</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Espacio para preguntas y respuestas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Guía de tu Propósito de Alma y misión de vida</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <button
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              Reservar Sesión por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarotAkashico;
