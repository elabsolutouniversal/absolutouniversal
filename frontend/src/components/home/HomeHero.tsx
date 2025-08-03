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
    heroBg: "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50",
    cardBg: "bg-white",
    textColor: "text-gray-700",
    buttonBg: "bg-pink-600",
    buttonHover: "hover:bg-pink-700",
    buttonText: "text-white"
  };

  return (
    <>
      {/* Sección principal con logo grande y texto */}
      <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Fondos animados sutiles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="absolute top-16 left-8 w-44 h-44 rounded-2xl bg-pink-200 blur-xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.16, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-28 right-12 w-32 h-32 rounded-2xl bg-purple-200 blur-xl"
            animate={{ y: [0, -18, 0], opacity: [0.1, 0.16, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-24 h-24 rounded-2xl bg-rose-200 blur-xl"
            animate={{ x: [0, 12, 0], opacity: [0.1, 0.16, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Logo cuadrado con texto morado (SVG) */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 mb-8 lg:mb-0">
              <motion.div
                className="relative w-96 h-96 sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-400"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.04 }}
                aria-label="Logo de Absoluto Universal"
              >
                <Image
                  src="/images/logo.png" // <- SVG con letras moradas
                  alt="Logo Absoluto Universal con texto morado"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                  priority
                  sizes="(max-width: 768px) 360px, 500px"
                />
                <div className="absolute inset-0 rounded-3xl border-2 border-white/40 pointer-events-none" />
              </motion.div>
            </div>

            {/* Texto principal */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2 max-w-2xl">
              <motion.div
                className="bg-white/60 shadow-lg rounded-2xl p-6 md:p-10 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 25px -5px rgba(244,114,182,0.1), 0 10px 10px -5px rgba(244,114,182,0.04)"
                }}
              >
                <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-pink-700 mb-4 leading-snug">
                  <span className="block">
                    <span className="bg-purple-700 bg-clip-text text-transparent">
                      Todo volverá a estar bien  y no tienes por qué hacerlo solo 💜
                    </span>{" "}
                  </span>
                  <span className="block font-medium text-2xl md:text-3xl lg:text-4xl text-purple-500 mt-3 leading-relaxed">
                    Te acompañaré en  el proceso
                  </span>
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero de bienvenida - segunda sección */}
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
                aria-label="Descubre mis servicios"
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
