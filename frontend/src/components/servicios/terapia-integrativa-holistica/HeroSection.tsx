'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
      {/* blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-black/20 z-[1]" />
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
            className="text-[2.5rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-lora-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent"
          >
            Sanación Integrativa Holística
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto leading-relaxed"
          >
           Mètodo, <span className='text-3xl'>SATHYA</span> Un enfoque que fusiona lo mejor de tres disciplinas para tu bienestar integral aplicadas para logres vivir de una manera más plena y coherente
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
               className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg group inline-flex items-center"
             >
                               Agenda tu sesion
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
            <a 
              href="#que-consiste"
              className="text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Conocer más
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
