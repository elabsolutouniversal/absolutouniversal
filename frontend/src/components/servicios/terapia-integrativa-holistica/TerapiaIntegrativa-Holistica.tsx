'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from '@/components/servicios/terapia-integrativa-holistica/HeroSection';
import BloqueTexto from '@/components/servicios/terapia-integrativa-holistica/BloqueTexto';
import CardSesion from '@/components/servicios/terapia-integrativa-holistica/Proceso/CardSesion';
import CardBeneficio from '@/components/servicios/terapia-integrativa-holistica/Beneficios/CardBeneficio';
import Lightbox from '@/components/servicios/terapia-integrativa-holistica/Galeria/Lightbox';
// import CTA from '@/components/servicios/terapia-integrativa-holistica/CTA';
import { fadeInUp, staggerContainer } from '@/components/servicios/terapia-integrativa-holistica/Animations';
import FAQSection from '@/components/FAQ';

// 🔹 NUEVO IMPORT - AGREGA ESTA LÍNEA

import {
  tarjetas,
  sesiones,
  beneficios,
  faqs
} from '@/data/servicios/terapia-holistica-integrativa/terapia-integrativa-holistica';
import SanacionEnergetica from './5PasosSanacionEnergetica/PasosSanacionEnergetica';
import TherapyPricing from '@/components/therapy/TherapyPricing';
import ConsideracionesTratamiento from './ConsideracionesAntesInicia/ConsideracionesTratamiento';
import PenduloHebreo from '@/components/servicios/pendulo/PenduloHebreo';


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
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      {/* HERO + BARRA DE BENEFICIOS */}
      <section className="relative md:overflow-visible pb-4 md:pb-20">
        {/* Hero */}
        <div className="-mx-4 sm:-mx-6 md:mx-auto md:max-w-7xl md:px-6">
          <HeroSection />
        </div>

      </section>



      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        <BloqueTexto
          id="que-consiste"
          titulo={
            <>
              ¿En qué consiste el método{' '}
              <span className="font-lora-bold not-italic text-4xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">SATHYA</span>?
            </>
          }
          texto={
            <>
              <p className="text-brand-medium leading-relaxed text-justify font-medium">
              El metodo{' '}
                <span className="font-semibold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent not-italic">SATHYA</span>{' '}
                integra y combina  técnicas de{' '}
                <span className="font-semibold text-brand-dark">Psicología Cientifica</span>{' '}
                <span className="font-semibold text-brand-dark">Terapia de Radiestecia con Pendulo Hebreo</span> y{' '}
                <span className="font-semibold text-brand-dark"> lectura de tarot terapeutico y akashico</span>.
                Este tratamiento está diseñado para abrir tu camino hacia el máximo bienestar,
                abordando tanto tus necesidades emocionales, fisicas y energèticas, iniciando
                un profundo proceso de autoconocimiento y armonía para vivir en verdad y coherencia.
              </p>
            </>
          }
        />

          {/* Proceso */}
        
        {/* 🔹 AQUÍ SE INSERTA EL COMPONENTE DE SANACIÓN ENERGÉTICA 🔹 */}
        <SanacionEnergetica />

      
        {/* Avisos Importantes */}
        {/* <ConsideracionesTratamiento /> */}

        {/* Beneficios */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-brand-dark">
              Beneficios que transformarán tu vida
            </h2>
            <p className="text-brand-medium text-lg max-w-2xl mx-auto">
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



        <TherapyPricing category="holistica" />

        {/* FAQ */}
        <FAQSection faqs={faqs} />
      </main>

      <PenduloHebreo />

      {/* <CTA /> */}

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