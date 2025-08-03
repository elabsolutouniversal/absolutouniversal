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

      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Elementos decorativos de fondo mejorados */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-purple-200 blur-xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>

          <motion.div
            className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-rose-200 blur-xl"
            animate={{
              x: [0, 15, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24">
            {/* Contenido de texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2 max-w-2xl">
              <motion.div
                className="bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl p-6 md:p-10 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(244, 114, 182, 0.1), 0 10px 10px -5px rgba(244, 114, 182, 0.04)"
                }}
              >
                <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-pink-700 mb-4 leading-snug">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Todo volverá a estar bien y no tiene por que hacerlo solo
                  </span>
                  <span className="block font-medium text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-4 leading-relaxed">
                    Te acompañaré en <span className="italic font-semibold text-rose-500">el proceso</span>
                  </span>
                </h1>
  
              </motion.div>
            </div>
            {/* Imagen */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-2xl shadow-rose-200/50 hover:shadow-rose-300/70 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(244, 114, 182, 0.4)"
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Terapeuta - Sanación integrativa holística"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 rounded-full border-4 border-white/30 pointer-events-none"></div>
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
                src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg"
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