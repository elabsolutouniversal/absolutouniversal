'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FLORAL_BACKGROUND_URL } from '@/constants/floralBackground';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Fondo florado — mismo que el inicio */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${FLORAL_BACKGROUND_URL}')`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 z-[2]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-lora-bold mb-6 text-hero-gradient"
          >
            Sanación Transpersonal, Holística y Akasha
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-brand-medium max-w-3xl mx-auto leading-relaxed"
          >
           {/* Mètodo, <span className='text-3xl'>SATHYA</span> Un enfoque que fusiona lo mejor de tres disciplinas para tu bienestar integral aplicadas para logres vivir de una manera más plena y coherente */}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
                         <a 
               href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%20de%20Sanaci%C3%B3n%20Integrativa%20Hol%C3%ADstica%3F"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-lora-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-300/50 transition-all duration-300 transform hover:scale-105 group"
             >
                               Agenda tu sesion
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
            <a 
              href="#que-consiste"
              className="bg-yellow-200/90 text-brand-dark font-lora-semibold italic px-8 py-4 rounded-full text-lg hover:bg-yellow-300/90 shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Conocer más
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}