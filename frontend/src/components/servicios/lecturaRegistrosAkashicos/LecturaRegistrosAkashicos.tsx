'use client';

import React from 'react';
import { serviciosDataLecturaRegistros, audienciaDataLecturaRegistros, lecturaRegistrosImages } from '@/data/servicios/lectura-registros-akashicos/lectura-registros-akashicos';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const LecturaRegistrosAkashicos: React.FC = () => {

  const handleBooking = () => {
    const whatsappNumber = "51962305362"; // Reemplaza con tu número de WhatsApp
    const message = `🌟 ¡Hola! Estoy interesado/a en reservar una sesión de Lectura de Registros Akáshicos.\n\n• Servicio: Sesión Completa\n• Inversión: $70\n\n¿Podríamos coordinar una fecha? ✨`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Lectura de Registros Akáshicos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {lecturaRegistrosImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image src={image.src} alt={image.alt} width={500} height={300} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6 text-center">¿Qué puedes esperar de una sesión?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosDataLecturaRegistros.map(servicio => (
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
        <h2 className="text-3xl font-semibold text-pink-600 mb-6 text-center">¿Es para ti si...?</h2>
        <ul className="space-y-4 max-w-4xl mx-auto">
          {audienciaDataLecturaRegistros.map(item => (
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
            <h3 className="text-2xl font-bold text-gray-800">Sesión de Lectura de Registros Akáshicos</h3>
            <p className="text-gray-500 mt-1">1 hora y 15 minutos</p>
            <div className="my-6">
              <span className="text-5xl font-bold text-indigo-600">$70</span>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-3 text-center">INCLUYE:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Apertura de tus Registros Akáshicos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Canalización de mensajes de tus guías</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Sanación de bloqueos energéticos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Claridad sobre tu propósito de vida</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-2 text-gray-700">Espacio para preguntas y respuestas</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <button
              onClick={handleBooking}
              className="btn-gold w-full py-3 px-6"
            >
              Reservar Sesión por WhatsApp
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LecturaRegistrosAkashicos;
