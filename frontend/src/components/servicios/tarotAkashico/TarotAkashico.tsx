'use client';

import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { ImageData } from '@/types/servicios/tarot-terapeutico';
import {
  serviciosDataTarotAkashico,
  audienciaDataTarotAkashico,
  tarotAkashicoImages,
} from '@/data/servicios/tarot-akashico/tarot-akashico';
import TarotHeader from '@/components/servicios/tarotPredictivo/TarotHeader';
import TarotGallery from '@/components/servicios/tarotPredictivo/TarotGallery';
import ImageModal from '@/components/servicios/tarotPredictivo/ImageModal';
import ServicesSection from '@/components/servicios/tarotPredictivo/ServicesSection';
import AudienceSection from '@/components/servicios/tarotPredictivo/AudienceSection';
import TarotFooter from '@/components/servicios/tarotPredictivo/TarotFooter';
import { FLORAL_BACKGROUND_URL } from '@/constants/floralBackground';

const TarotAkashico: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const handleBooking = () => {
    const whatsappNumber = '51962305362';
    const priceUSD = 95;
    const pricePEN = 320;
    const message = `🌟 ¡Hola! Estoy interesado/a en reservar una sesión de Tarot Akáshico.\n\n• Servicio: Sesión Completa\n• Inversión: $${priceUSD} (S/ ${pricePEN.toFixed(2)})\n\n¿Podríamos coordinar una fecha? ✨`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openModal = (image: ImageData): void => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <div className="container mx-auto px-4 py-16">
        <TarotHeader
          titleLines={['Tarot Akáshico', 'Lectura de Registros Akáshicos']}
          subtitle="Accede a la memoria universal: las cartas actúan como puertas simbólicas que facilitan el acceso a memorias profundas, aprendizajes kármicos y bloqueos transpersonales."
        />

        <TarotGallery images={tarotAkashicoImages} onImageClick={openModal} />

        <ServicesSection
          servicios={serviciosDataTarotAkashico}
          title="¿Qué puedes esperar de una sesión?"
          subtitle="Exploración profunda de tus registros akáshicos con enfoque terapéutico y espiritual"
        />

        <AudienceSection
          audiencia={audienciaDataTarotAkashico}
          title="¿Es para ti si...?"
          subtitle="Esta lectura puede ser especialmente transformadora si te identificas con lo siguiente"
        />

        {/* Precio */}
        <div className="mt-16">
          <div className="max-w-md mx-auto relative overflow-hidden rounded-2xl shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${FLORAL_BACKGROUND_URL}')`,
              }}
            />
            <div className="absolute inset-0 bg-white/35" />

            <div className="relative z-10 p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 shadow-md shadow-orange-300/40">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">
                  Sesión Completa de Lectura de Registros Akáshicos
                </h3>
                <p className="text-brand-medium mt-1">1 hora y 30 minutos</p>
                <div className="my-6">
                  <span className="text-5xl font-bold text-brand-dark">$95</span>
                  <span className="text-lg text-brand-medium ml-2">(S/ 320)</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-medium mb-3 text-center">INCLUYE:</h4>
                <ul className="space-y-2">
                  {[
                    'Conexión y apertura de Registros Akáshicos',
                    'Identificación de Patrones Destructivos Generacionales',
                    'Análisis de vidas pasadas relevantes',
                    'Guía sobre tu propósito de alma y misión de vida',
                    'Espacio para preguntas y respuestas',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-brand-medium mt-0.5" />
                      <span className="ml-2 text-brand-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-yellow-200/90 hover:bg-yellow-300/90 text-brand-dark font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-md border border-yellow-300/60"
              >
                Reservar Sesión por WhatsApp
              </button>
            </div>
          </div>
        </div>

        <TarotFooter />
      </div>

      <ImageModal selectedImage={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default TarotAkashico;