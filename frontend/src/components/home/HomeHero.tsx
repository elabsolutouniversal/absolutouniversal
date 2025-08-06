'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeroColors {
  heroBg: string;
  cardBg: string;
  textColor: string;
  buttonBg: string;
  buttonHover: string;
  buttonText: string;
}

export default function HomeHero(): JSX.Element {
  const colors: HeroColors = {
    heroBg: "bg-gradient-to-b from-pink-100 via-pink-50/30 to-white",
    cardBg: "bg-white/85 backdrop-blur-sm",
    textColor: "text-gray-700",
    buttonBg: "bg-gradient-to-r from-pink-500 to-purple-500",
    buttonHover: "hover:from-pink-600 hover:to-purple-600",
    buttonText: "text-white"
  };

  return (
    <>
      {/* Añadir fuente script en el head */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Pacifico&family=Satisfy&display=swap');
        
        .text-script {
          font-family: 'Dancing Script', cursive;
        }
        
        .text-pacifico {
          font-family: 'Pacifico', cursive;
        }
        
        .text-satisfy {
          font-family: 'Satisfy', cursive;
        }
        
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
              rgba(255, 204, 219, 0.3) 0%,
              transparent 50%),
            radial-gradient(ellipse at bottom center, 
              rgba(255, 255, 255, 0.8) 0%,
              transparent 50%);
          pointer-events: none;
        }
        
        /* Efecto de brillo suave */
        .text-glow {
          text-shadow: 0 0 15px rgba(236, 72, 153, 0.2),
                       0 0 30px rgba(168, 85, 247, 0.15);
        }
      `}</style>

      {/* Sección principal con logo grande y texto */}
      <section className="hero-gradient py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Elementos decorativos flotantes más sutiles */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pink-200 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-purple-100 blur-3xl"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.06, 0.10, 0.06]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-rose-100 blur-3xl"
            animate={{ 
              x: [0, 15, 0],
              y: [0, -10, 0],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Logo con efecto suave */}
            <div className="w-full lg:w-2/5 xl:w-5/12 flex justify-center order-2 lg:order-1 mb-4 lg:mb-0">
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
                aria-label="Logo de Absoluto Universal"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 group-hover:from-pink-200/30 group-hover:to-purple-200/30 transition-all duration-500" />
                <Image
                  src="/images/logo.png"
                  alt="Logo Absoluto Universal"
                  width={420}
                  height={420}
                  className="object-contain w-full h-full relative z-10"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 420px"
                />
                <div className="absolute inset-0 rounded-3xl border border-white/30 pointer-events-none" />
              </motion.div>
            </div>

            {/* Texto principal con estilo manuscrito */}
            <div className="w-full lg:w-3/5 xl:w-7/12 text-center lg:text-left order-1 lg:order-2 px-4 lg:px-0">
              <motion.div
                className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 hover:shadow-2xl transition-all duration-500 border border-pink-50/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px -10px rgba(236, 72, 153, 0.15)"
                }}
              >
                <h1 className="mb-6">
                  <span className="block text-script font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-4xl 2xl:text-6xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent leading-relaxed text-glow sm:whitespace-nowrap">
                    Todo volverá a estar bien
                  </span>
                  <span className="block text-satisfy text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 bg-clip-text text-transparent mt-4 leading-relaxed sm:whitespace-nowrap">
                    ¿Te acompaño en el proceso?
                  </span>
                </h1>
                
                {/* Botón opcional con estilo mejorado */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-6"
                >
                  <Link
                    href="/servicios"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-base md:text-lg"
                  >
                    Descubre más
                    <FaArrowRight className="text-base" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero de bienvenida - segunda sección */}
      <section className="bg-gradient-to-b from-white via-pink-50/30 to-pink-100/40 py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100/30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-script font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 leading-tight">
                Bienvenido a tu espacio de bienestar
              </h2>
              <p className="font-sans text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                Un lugar para reconectar contigo, sanar desde la raíz y transformar tu vida desde la
                consciencia y el corazón.
              </p>
              <Link
                href="/servicios"
                aria-label="Descubre mis servicios"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
              >
                Descubre mis servicios
                <FaArrowRight className="text-base" />
              </Link>
            </motion.div>
          </div>

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