'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  Heart,
  Sparkles,
  Users,
  Shield,
  Star,
  CheckCircle,
  Gift,
  ArrowRight,
  X as CloseIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

/* ============= Tipos ============= */
type Beneficio = {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
};

type TarjetaImg = {
  titulo: string;
  src: string;
  fallbackBg: string;
  icon: React.ReactNode;
  href?: string;
};

/* ============= Componente principal ============= */
export default function SanacionIntegrativa() {
  const tarjetas: TarjetaImg[] = [
    {
      titulo: 'Terapia Integrativa Holística',
      src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg',
      fallbackBg: 'bg-purple-200',
      icon: <Heart className="w-12 h-12 mx-auto mb-2 text-purple-600" />,
      href: '/servicios/psicoterapia-integrativa-holistica',
    },
    {
      titulo: 'Péndulo Hebreo',
      src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg',
      fallbackBg: 'bg-blue-200',
      icon: <Sparkles className="w-12 h-12 mx-auto mb-2 text-blue-600" />,
      href: '/servicios/pendulo-hebreo',
    },
    {
      titulo: 'Proceso de Sanación',
      src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154284/terapiaIntegrativa-holiticia-2_itvxcj.jpg',
      fallbackBg: 'bg-pink-200',
      icon: <Star className="w-12 h-12 mx-auto mb-2 text-pink-600" />,
      href: '/servicios/proceso-de-sanacion',
    },
  ];

  const sesiones = [
    {
      numero: '1–4',
      titulo: 'Evaluación y Preparación',
      descripcion:
        'Enfocadas en la evaluación, diagnóstico energético, limpieza inicial y desbloqueo. Abordamos tus desafíos, necesidades y expectativas.',
      color: 'bg-gradient-to-r from-pink-100 to-purple-100',
    },
    {
      numero: '5',
      titulo: 'Inicio del Tratamiento',
      descripcion:
        'Sesión gratuita que marca el inicio real del tratamiento personalizado basado en las sesiones previas.',
      color: 'bg-gradient-to-r from-green-100 to-blue-100',
      gratuita: true,
    },
  ];

  const beneficios: Beneficio[] = [
    {
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      titulo: 'Equilibrio emocional',
      descripcion: 'Bienestar mental y emocional a través de técnicas integradas de sanación.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      titulo: 'Armonía energética',
      descripcion: 'Limpieza y fortalecimiento de tu campo electromagnético para un flujo energético óptimo.',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      titulo: 'Crecimiento personal',
      descripcion: 'Desarrollo y evolución a partir de un protocolo personalizado y acompañamiento continuo.',
    },
  ];

  // Lightbox
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);
  const onKey = useCallback((e: KeyboardEvent) => e.key === 'Escape' && close(), [close]);

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
      {/* HERO */}
      <HeroSection />

      {/* GALERÍA */}
      <section className="max-w-7xl mx-auto px-4 pb-14 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Conoce nuestras terapias
        </h2>

        {/* Mobile: scroll horizontal / Desktop: grid */}
        <div className="md:hidden flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory">
          {tarjetas.map((t, i) => (
            <div key={i} className="min-w-[80%] snap-center">
              <CardConImagen {...t} onOpen={() => setOpenIndex(i)} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {tarjetas.map((t, i) => (
            <CardConImagen key={i} {...t} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>
      </section>

      {/* CONTENIDO */}
      <main className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8 space-y-20">
        <BloqueTexto
          titulo="¿En qué consiste este tratamiento?"
          texto={
            <>
              La <strong>Sanación Integrativa Holística</strong> fusiona técnicas de{' '}
              <span className="font-semibold text-purple-600">psicología</span>,{' '}
              <span className="font-semibold text-blue-600">radiestesia con péndulo hebreo</span> y{' '}
              <span className="font-semibold text-pink-600">Tarot terapéutico</span>. Este protocolo está diseñado para
              abrir tu camino de transformación, abordando tanto tus necesidades emocionales como energéticas, e iniciar
              un proceso profundo de autoconocimiento y bienestar.
            </>
          }
        />

        {/* Proceso */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">¿Cómo es el proceso?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sesiones.map((s, i) => (
              <CardSesion key={i} {...s} />
            ))}
          </div>
        </section>

        {/* Avisos */}
        <AvisosImportantes />

        {/* Beneficios */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">Beneficios integrales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((b, i) => (
              <CardBeneficio key={i} {...b} />
            ))}
          </div>
        </section>

        {/* Complementario */}
        <BloqueTexto
          titulo="Enfoque complementario"
          texto={
            <>
              La Sanación Integrativa Holística <span className="font-semibold">no reemplaza la medicina moderna</span>{' '}
              ni los tratamientos médicos convencionales. Es un acompañamiento complementario que busca potenciar tu
              bienestar general, actuando en armonía con el cuidado y las recomendaciones de tus profesionales de salud.
            </>
          }
          bg="bg-blue-50"
          border="border border-blue-200"
        />
      </main>

      {/* CTA */}
      <CTA />

      {/* LIGHTBOX */}
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

/* ============= Sub-componentes ============= */

function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Sanación Integrativa Holística
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-4xl mx-auto leading-relaxed">
            Un punto de partida integral para tu proceso de sanación emocional, mental, energética y espiritual.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Iniciar mi transformación
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardConImagen({
  titulo,
  src,
  fallbackBg,
  icon,
  href,
  onOpen,
}: TarjetaImg & { onOpen: () => void }) {
  const [error, setError] = useState(false);
  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
      onClick={onOpen}
    >
      {!error ? (
        <Image
          src={src}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 80vw, (max-width:1200px) 33vw, 25vw"
          onError={() => setError(true)}
          priority={false}
        />
      ) : (
        <div className={`absolute inset-0 flex flex-col ${fallbackBg} items-center justify-center`}>
          {icon}
          <p className="font-medium text-gray-700">{titulo}</p>
        </div>
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-white font-semibold text-sm md:text-base">{titulo}</p>
      </div>

      {href && (
        <a
          href={href}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 text-white/80 hover:text-white text-xs underline"
        >
          Ver más
        </a>
      )}
    </div>
  );
}

function BloqueTexto({
  titulo,
  texto,
  bg = 'bg-white',
  border = '',
}: {
  titulo: string;
  texto: React.ReactNode;
  bg?: string;
  border?: string;
}) {
  return (
    <section>
      <div className={`${bg} ${border} rounded-3xl shadow-xl p-8 md:p-12`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">{titulo}</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">{texto}</p>
      </div>
    </section>
  );
}

function CardSesion({
  numero,
  titulo,
  descripcion,
  color,
  gratuita,
}: {
  numero: string;
  titulo: string;
  descripcion: string;
  color: string;
  gratuita?: boolean;
}) {
  return (
    <div className={`${color} rounded-2xl p-8 relative overflow-hidden`}>
      {gratuita && (
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <Gift className="w-4 h-4 mr-1" />
            Gratuita
          </span>
        </div>
      )}
      <div className="flex items-center mb-4">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg text-gray-800 mr-4">
          {numero}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{titulo}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{descripcion}</p>
    </div>
  );
}

function AvisosImportantes() {
  return (
    <section>
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-amber-400">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
          <Shield className="w-8 h-8 mr-3 text-amber-600" />
          ¿Qué debes saber antes de iniciar?
        </h2>
        <div className="space-y-4">
          <ItemAviso>
            Las primeras sesiones no garantizan resultados inmediatos. Constituyen la base y el inicio de tu proceso,
            abriendo el camino para un tratamiento profundo y personalizado.
          </ItemAviso>
          <ItemAviso>
            La sanación es un proceso gradual y personal; cada persona avanza a su propio ritmo, con acompañamiento
            adaptado a sus necesidades.
          </ItemAviso>
        </div>
      </div>
    </section>
  );
}

function ItemAviso({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start">
      <CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

function CardBeneficio({ icon, titulo, descripcion }: Beneficio) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{titulo}</h3>
      <p className="text-gray-600 leading-relaxed">{descripcion}</p>
    </div>
  );
}

function CTA() {
  return (
    <section className="text-center px-4 pb-16">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Lista para iniciar tu proceso de transformación?</h2>
        <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
          Comienza tu camino de sanación integral con este protocolo de 5 sesiones (la última gratuita) y experimenta
          los beneficios de un enfoque que armoniza mente, emociones y energía.
        </p>
        <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Reservar mi primera sesión
        </button>
      </div>
    </section>
  );
}

/* ============= Lightbox ============= */
function Lightbox({
  src,
  titulo,
  onClose,
}: {
  src: string;
  titulo: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-[90%] md:w-auto"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 text-white hover:text-pink-300 transition"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <CloseIcon className="w-7 h-7" />
        </button>

        <div className="relative w-full h-[80vh]">
          <Image
            src={src}
            alt={titulo}
            fill
            className="object-contain rounded-xl"
            sizes="100vw"
            priority
          />
        </div>

        <p className="text-white mt-3 text-center">{titulo}</p>
      </motion.div>
    </motion.div>
  );
}
