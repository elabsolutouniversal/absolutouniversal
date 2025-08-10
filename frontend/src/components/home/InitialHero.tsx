'use client';

import React from 'react';
import { JSX } from 'react';
import { motion } from 'framer-motion';

export default function InitialHero(): JSX.Element {
  return (
    <>
      {/* Configuración de fuentes elegantes */}
      <style jsx global>{`
        /* Efecto de degradado suave y elegante - invertido */
        .hero-gradient {
          background-image: url('https://res.cloudinary.com/dhhjcvwll/image/upload/v1754843228/bosque_orquideas_luminoso_1_rc734f.jpg');
          background-size: cover;
          background-position: center;
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
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.15);
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

        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Texto principal con estilo elegante mejorado */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <h1 className="mb-8">
                <motion.span 
                  className="block text-elegant-title text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-9xl text-violet-400 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Todo volverá a estar bien
                </motion.span>
                <motion.span 
                  className="block text-elegant-subtitle text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-violet-400 mt-10 leading-tight"
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
                <button
                  onClick={() => {
                    const element = document.getElementById('bienvenida');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="bg-yellow-100/90 text-violet-500 font-lora-semibold italic text-xl rounded-full px-10 py-4 shadow-lg hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <span>Descubre más</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 