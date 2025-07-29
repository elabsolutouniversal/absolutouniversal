'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { sesiones5Pasos as sesiones } from '@/data/servicios/terapia-integrativa-holistica';

const SanacionEnergetica = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 md:mb-6">
          <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
          Sanación Integrativa Energética
        </h2>
        <h3 className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-3 md:mb-4 px-2">
          Tratamiento Integral Básico de 5 Sesiones para tu Bienestar Completo
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
          Transforma tu vida con nuestro programa integral diseñado para restablecer tu equilibrio
          emocional, físico y energético. Cada sesión ha sido cuidadosamente estructurada para
          guiarte hacia un estado profundo de bienestar y armonía interior.
        </p>
      </motion.div>

      {/* ¿Qué Incluye tu Tratamiento? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6 md:mb-8"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 px-2">
          ¿Qué Incluye tu Tratamiento?
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
      </motion.div>

      {/* Sesiones */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-4 md:gap-6"
      >
        {sesiones.map((sesion, i) => {
          const Icon = sesion.icon;
          return (
            <motion.div
              key={sesion.numero}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="group hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300"
            >
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex flex-col space-y-4 md:flex-row md:items-start md:gap-6 md:space-y-0">
                    <div className="flex items-center justify-center md:flex-col md:flex-shrink-0">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${sesion.color} flex items-center justify-center text-white shadow-lg mr-3 md:mr-0`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div className="md:text-center md:mt-2">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                          {sesion.numero}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-between mb-4">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-tight">
                          Sesión {sesion.numero}: {sesion.titulo}
                        </h4>
                        <div className="flex items-center justify-between md:justify-start gap-3">
                          {sesion.badge && (
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                              {sesion.badge}
                            </span>
                          )}
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="font-semibold text-xs sm:text-sm md:text-base">
                              {sesion.duracion}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        {sesion.puntos.map((p, j) => (
                          <div key={j} className="flex items-start gap-2 md:gap-3">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                              {p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CALL TO ACTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 md:mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 text-white">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">
            ¿Listo para Transformar tu Vida?
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
            Inicia tu camino hacia el bienestar integral y descubre el poder de la sanación energética
          </p>

          <Link
            href="https://wa.me/51962305362?text=Hola%20Dahiana,%20quisiera%20agendar%20una%20sesión"
            className="
              w-full sm:inline-block sm:w-auto
              bg-white text-purple-600
              px-6 sm:px-8 md:px-8
              py-3 sm:py-3 md:py-4
              rounded-full
              font-bold
              text-sm sm:text-base md:text-lg
              hover:bg-gray-100
              transition-colors duration-300
              shadow-lg hover:shadow-xl
              transform hover:scale-105
              active:scale-95
              min-h-[48px] sm:min-h-[52px]
              text-center
            "
          >
            Reservar mi Tratamiento
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SanacionEnergetica;
