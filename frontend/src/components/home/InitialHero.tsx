'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function InitialHero(): JSX.Element {
  return (
    <>
      {/* Configuración de fuentes elegantes */}
      <style jsx global>{`
        /* Efecto de degradado suave y elegante - invertido */
        .hero-gradient {
          background: linear-gradient(180deg,
            #ffccdb 0%,
            #ffd6e0 20%,
            #ffe0e8 40%,
            #ffebf0 60%,
            #fff5f7 80%,
            #ffffff 100%);
          position: relative;
        }
        
        .hero-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at top center, 
              rgba(255, 204, 219, 0.4) 0%,
              transparent 60%),
            radial-gradient(ellipse at bottom center, 
              rgba(255, 255, 255, 0.9) 0%,
              transparent 60%);
          pointer-events: none;
        }
        
        /* Efecto de brillo suave mejorado */
        .text-glow {
          text-shadow: 0 0 20px rgba(236, 72, 153, 0.3),
                       0 0 40px rgba(168, 85, 247, 0.2),
                       0 0 60px rgba(236, 72, 153, 0.1);
        }

        /* Estilos de texto elegantes con Lora en cursiva */
        .text-elegant-title {
          font-family: var(--font-lora), Georgia, serif;
          font-style: italic;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .text-elegant-subtitle {
          font-family: var(--font-lora), Georgia, serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .text-elegant-body {
          font-family: var(--font-lora), Georgia, serif;
          font-weight: 400;
          font-style: italic;
          line-height: 1.7;
        }

        /* Colores de texto mejorados */
        .text-primary-elegant {
          color: #4c1d95; /* Purple-900 más suave */
        }

        .text-secondary-elegant {
          color: #7c3aed; /* Purple-600 */
        }

        .text-accent-elegant {
          color: #ec4899; /* Pink-500 */
        }

        .text-muted-elegant {
          color: #6b7280; /* Gray-500 más suave */
        }

        .text-soft-dark {
          color: #374151; /* Gray-700 más elegante */
        }

        /* Efecto de glassmorphism mejorado */
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 8px 32px rgba(236, 72, 153, 0.12),
            0 4px 16px rgba(168, 85, 247, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 
            0 20px 40px rgba(236, 72, 153, 0.18),
            0 8px 24px rgba(168, 85, 247, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        /* Efecto de logo mejorado */
        .logo-container {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          box-shadow: 
            0 12px 24px rgba(236, 72, 153, 0.15),
            0 4px 12px rgba(168, 85, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .logo-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.4) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .logo-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, 
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%);
          z-index: 2;
          pointer-events: none;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        /* Botón mejorado */
        .gradient-button {
          background: linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #ec4899 100%);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          box-shadow: 
            0 4px 15px rgba(236, 72, 153, 0.3),
            0 2px 8px rgba(168, 85, 247, 0.2);
        }

        .gradient-button:hover {
          background: linear-gradient(135deg, #db2777 0%, #9333ea 50%, #db2777 100%);
          box-shadow: 
            0 8px 25px rgba(236, 72, 153, 0.4),
            0 4px 12px rgba(168, 85, 247, 0.3);
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Sección principal con logo grande y texto */}
      <section className="hero-gradient py-16 md:py-20 lg:py-24 overflow-hidden relative">
        {/* Elementos decorativos flotantes mejorados */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.08, 0.12, 0.08],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 blur-3xl"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -15, 0],
              opacity: [0.06, 0.10, 0.06],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Logo con efecto suave mejorado */}
            <div className="w-full lg:w-2/5 xl:w-5/12 flex justify-center order-2 lg:order-1 mb-8 lg:mb-0">
              <motion.div
                className="logo-container relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] transition-all duration-700 group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                aria-label="Logo de Absoluto Universal"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-purple-100/30 group-hover:from-pink-200/40 group-hover:to-purple-200/40 transition-all duration-500 z-0" />
                <Image
                  src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076399/IMG_3519_absuy1.jpg"
                  alt="Logo Absoluto Universal"
                  fill
                  className="object-cover w-full h-full relative z-10 rounded-3xl"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 420px, 480px"
                />
                <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none z-20" />
              </motion.div>
            </div>

            {/* Texto principal con estilo elegante mejorado */}
            <div className="w-full lg:w-3/5 xl:w-7/12 text-center lg:text-left order-1 lg:order-2 px-4 lg:px-0">
              <motion.div
                className="glass-card rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 transition-all duration-700"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <h1 className="mb-8">
                  <motion.span 
                    className="block text-elegant-title text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent leading-tight text-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Todo volverá a estar bien
                  </motion.span>
                  <motion.span 
                    className="block text-elegant-subtitle text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-clip-text text-transparent mt-8 leading-tight text-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    ¿Te acompaño en el proceso?
                  </motion.span>
                </h1>
                
                {/* Botón mejorado */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="mt-10"
                >
                  <Link
                    href="/servicios"
                    className="gradient-button inline-flex items-center gap-4 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-normal-style"
                  >
                    <span>Descubre más</span>
                    <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 