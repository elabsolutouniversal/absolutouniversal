'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaArrowRight, FaHeart, FaCalendarAlt } from 'react-icons/fa';
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
  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const colors: HeroColors = {
    heroBg: "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50",
    cardBg: "bg-white",
    textColor: "text-gray-700",
    buttonBg: "bg-pink-600",
    buttonHover: "hover:bg-pink-700",
    buttonText: "text-white"
  };

  return (
    <>
      {/* Sección personal - Ahora primera */}
       <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-16 md:py-24 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-pink-300 blur-md"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full border-2 border-purple-300 blur-md"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full border-2 border-rose-300 blur-md"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Foto personal */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-2xl shadow-rose-200 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg"
                alt="Terapeuta - Sanación integrativa holística"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </div>

          {/* Mensaje personal */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2 max-w-2xl">
            {/* Título principal */}
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-pink-700 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Todo estará bien... y no tienes que hacerlo sola
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="font-sans text-xl md:text-2xl text-rose-600 mb-4 font-light italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Aquí comienza tu camino de vuelta a ti misma
            </motion.p>

            {/* Afirmación */}
            <motion.p
              className="font-sans text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Estoy aquí para caminar contigo, con amor y presencia, en tu proceso de sanación y transformación.
            </motion.p>

            {/* Corazones */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 text-pink-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <FaHeart className="text-lg animate-pulse" />
              <span className="font-sans text-base font-medium">Con amor y consciencia</span>
              <FaHeart className="text-lg animate-pulse" />
            </motion.div>

            {/* Botones */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link
                href="/sobre-mi"
                aria-label="Conoce a la terapeuta"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Conecta conmigo
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                href="/servicios"
                aria-label="Agenda tu primera sesión"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-pink-700 font-semibold px-8 py-4 rounded-full shadow-lg border-2 border-pink-200 hover:border-pink-300 transition-all duration-300"
              >
              
                <FaCalendarAlt className="text-sm" />
                Agenda tu primera sesión
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* Hero de bienvenida - Ahora segunda */}
      <section className={`${colors.heroBg} py-16 md:py-24`}>
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className={`${colors.cardBg} rounded-3xl shadow-xl p-8 border border-pink-100`}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 mb-6 leading-tight">
                Bienvenido a tu espacio de bienestar
              </h2>
              <p className={`font-sans ${colors.textColor} text-lg mb-8 leading-relaxed`}>
                Un lugar para reconectar contigo, sanar desde la raíz y transformar tu vida desde la
                consciencia y el corazón.
              </p>
              <Link
                href="/servicios"
                className={`inline-flex items-center gap-3 ${colors.buttonBg} ${colors.buttonHover} ${colors.buttonText} font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                Descubre mis servicios
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <Image
                src="/images/logo.png"
                alt="Psicoterapia con péndulo"
                width={400}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}