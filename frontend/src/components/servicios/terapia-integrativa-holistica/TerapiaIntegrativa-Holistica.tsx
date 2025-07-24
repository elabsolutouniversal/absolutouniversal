'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from '@/components/servicios/terapia-integrativa-holistica/HeroSection';
import BloqueTexto from '@/components/servicios/terapia-integrativa-holistica/BloqueTexto';
import AvisosImportantes from '@/components/servicios/terapia-integrativa-holistica/Avisos/AvisosImportantes';
import CardSesion from '@/components/servicios/terapia-integrativa-holistica/Proceso/CardSesion';
import CardBeneficio from '@/components/servicios/terapia-integrativa-holistica/Beneficios/CardBeneficio';
import CardConImagen from '@/components/servicios/terapia-integrativa-holistica/Galeria/CardConImagen';
import Lightbox from '@/components/servicios/terapia-integrativa-holistica/Galeria/Lightbox';
import CTA from '@/components/servicios/terapia-integrativa-holistica/CTA';
import { fadeInUp, staggerContainer } from '@/components/servicios/terapia-integrativa-holistica/Animations';
import FAQSection from '@/components/FAQ';

// 🔹 NUEVO IMPORT - AGREGA ESTA LÍNEA

import {
  tarjetas,
  sesiones,
  beneficios,
  faqs
} from '@/data/servicios/terapia-integrativa-holistica';
import QuickBenefitsBar from './QuickBenefitsBar/QuickBenefitsBar';
import SanacionEnergetica from './5PasosSanacionEnergetica/PasosSanacionEnergetica';

export default function TerapiaIntegrativaHolistica() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
  }, [close]);

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex, onKey]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
    {/* HERO + BARRA DE BENEFICIOS */}
<section className="relative md:overflow-visible pb-4 md:pb-20">
  {/* Hero */}
  <div className="-mx-4 sm:-mx-6 md:mx-auto md:max-w-7xl md:px-6">
    <HeroSection />
  </div>

  {/* Barra mobile */}
  <QuickBenefitsBar variant="static" className="mt-5 px-4 md:hidden" />

  {/* Barra desktop (menos espacio) */}
  <QuickBenefitsBar
    variant="floating"
    gapTop={20}        // antes 56
    gapBottom={14}     // antes 40-48
    className="hidden md:block"
  />
</section>

      {/* GALERÍA */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 relative z-10 mt-10 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900
    pt-0 md:pt-10">
            Conoce nuestras terapias
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un enfoque único que combina lo mejor de tres disciplinas para tu bienestar integral
          </p>
        </motion.div>

        {/* Mobile horizontal */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory -mx-4 px-4">
          {tarjetas.map((t, i) => (
            <div key={i} className="min-w-[85%] snap-center">
              <CardConImagen {...t} onOpen={() => setOpenIndex(i)} />
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {tarjetas.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CardConImagen {...t} onOpen={() => setOpenIndex(i)} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        <BloqueTexto
          id="que-consiste"
          titulo="¿En qué consiste este tratamiento?"
          texto={
            <>
              <p className="text-gray-600 leading-relaxed text-justify">
              La <strong>Sanación Integrativa Holística</strong> fusiona técnicas de{' '}
              <span className="font-semibold text-purple-600">psicología</span>,{' '}
              <span className="font-semibold text-blue-600">radiestesia con péndulo hebreo</span> y{' '}
              <span className="font-semibold text-pink-600">Tarot terapéutico</span>. Este protocolo está diseñado para
              abrir tu camino de transformación, abordando tanto tus necesidades emocionales como energéticas, e iniciar
              un proceso profundo de autoconocimiento y bienestar.
            </p>
            </>
          }
        />

        {/* 🔹 AQUÍ SE INSERTA EL COMPONENTE DE SANACIÓN ENERGÉTICA 🔹 */}
        <SanacionEnergetica />

        {/* Proceso */}
        <section id="proceso">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center md:text-justify md:max-w-4xl md:mx-auto"
          >
            Tu viaje de transformación
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sesiones.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <CardSesion {...s} />
              </motion.div>
            ))}
          </div>
        </section>

        <AvisosImportantes />

        {/* Beneficios */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Beneficios que transformarán tu vida
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experimenta cambios profundos en todas las áreas de tu ser
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {beneficios.map((b, i) => (
              <motion.div key={i} variants={fadeInUp} transition={{ delay: b.delay }}>
                <CardBeneficio {...b} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        <BloqueTexto
          titulo="Enfoque complementario"
          texto={
            <>
              La Sanación Integrativa Holística <span className="font-semibold">no reemplaza la medicina moderna</span>{' '}
              ni los tratamientos médicos convencionales. Es un acompañamiento complementario que busca potenciar tu
              bienestar general, actuando en armonía con el cuidado y las recomendaciones de tus profesionales de salud.
            </>
          }
          bg="bg-gradient-to-r from-blue-50 to-purple-50"
          border="border-2 border-blue-200"
        />

        {/* FAQ */}
        <FAQSection faqs={faqs} />
      </main>

      <CTA />

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            src={tarjetas[openIndex].src}
            titulo={tarjetas[openIndex].titulo}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
}