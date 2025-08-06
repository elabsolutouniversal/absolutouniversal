'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="text-center px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
      >
        {/* decorativos */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full translate-x-28 translate-y-28"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-lora-bold mb-6">
            ¿Lista para iniciar tu proceso de transformación?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Comienza tu camino de sanación integral con este protocolo de 5 sesiones (la última gratuita)
            y experimenta los beneficios de un enfoque que armoniza mente, emociones y energía.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20mi%20primera%20sesi%C3%B3n%20de%20Sanaci%C3%B3n%20Integrativa%20Hol%C3%ADstica%3F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-lora-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-lg inline-block font-normal-style"
            >
              Reservar mi primera sesión
            </motion.a>
            <motion.a
              href="https://wa.me/51962305362?text=Hola%20.%20Tengo%20algunas%20preguntas%20sobre%20la%20Sanaci%C3%B3n%20Integrativa%20Hol%C3%ADstica"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 border-white/50 px-10 py-4 rounded-full font-lora-bold text-lg hover:bg-white/10 transition-all duration-300 inline-block font-normal-style"
            >
              Hablar con un especialista
            </motion.a>
          </div>

          <p className="mt-6 text-purple-200 text-sm">
            ✨ Agenda tu cita hoy y recibe un 20% de descuento en el paquete de sanacion básica inicial de 5 sesiones
          </p>
        </div>
      </motion.div>
    </section>
  );
}
