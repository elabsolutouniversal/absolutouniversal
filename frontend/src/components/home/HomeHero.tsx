'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomeHero(): JSX.Element {
  return (
    <>
      {/* Configuración de fuentes elegantes */}
      <style jsx global>{`
        /* Estilos de texto elegantes con Lora en cursiva */
        .text-elegant-title {
          font-family: var(--font-lora), Georgia, serif;
          font-style: italic;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .text-elegant-subtitle {
          font-family: var(--font-lora), Georgia, serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .text-elegant-body {
          font-family: var(--font-lora), Georgia, serif;
          font-weight: 400;
          font-style: italic;
          line-height: 1.7;
        }
      `}</style>

      {/* Hero de bienvenida - segunda sección */}
      <section id="bienvenida" className="bg-gradient-to-b from-white via-pink-50/30 to-pink-100/40 py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
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
                Un lugar para reconectar contigo, sanar desde la raíz y transformar tu vida desde la
                consciencia y el corazón.
              </p>
              <Link
                href="/servicios"
                aria-label="Descubre mis servicios"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-normal-style"
              >
                Descubre mis servicios
                <FaArrowRight className="text-base" />
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
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
                width={400}
                height={500}
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