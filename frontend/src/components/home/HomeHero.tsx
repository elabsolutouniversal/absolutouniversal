'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FaArrowRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1792 1792"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1743 783q21 17 21 48 0 21-10 40l-288 288q-14 14-35 14-19 0-33-14t-14-33q0-19 14-33l192-192h-1312q-26 0-45-19t-19-45q0-26 19-45t45-19h1312l-192-192q-14-14-14-33t14-33q14-14 33-14 19 0 35 14l288 288z"></path>
  </svg>
);

export default function HomeHero(): React.ReactElement {
  return (
    <>
      {/* Estilos globales */}
      <style jsx global>{`
        .text-elegant-title {
          font-family: var(--font-lora), Georgia, serif;
          font-style: italic;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .text-elegant-body {
          font-family: var(--font-lora), Georgia, serif;
          font-weight: 400;
          font-style: italic;
          line-height: 1.7;
        }
      `}</style>

      {/* Hero */}
      <section
        id="bienvenida"
        className="bg-gradient-to-b from-white via-pink-50/30 to-pink-100/40 py-12 md:py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Texto */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-elegant-title text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
                Bienvenido a tu espacio de bienestar
              </h2>

              <p className="text-elegant-body text-purple-700 text-base md:text-lg mb-6 leading-relaxed">
                Un lugar para reconectar contigo, sanar desde la raíz y transformar tu vida
                desde la conciencia y el corazón.
              </p>

              <Link
                href="/servicios/sanacion-integrativa-holistica"
                aria-label="Descubre mis servicios"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold"
              >
                Metodo <span className="text-3xl">SATHYA</span>
                <FaArrowRight className="text-base" />
              </Link>
            </motion.div>
          </div>

          {/* Imagen */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-lg border-2 border-white/60"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg"
                alt="Psicoterapia con péndulo"
                width={500}
                height={600}
                className="object-cover w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
