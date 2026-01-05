'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function InitialHero(): React.ReactElement {
  return (
    <section className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <h1 className="mb-2">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span 
                  className="block text-elegant-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl leading-tight"
                  style={{ color: '#A370FF' }}
                >
                  Todo volverá a estar bien
                </span>
              </motion.div>
              <motion.div 
                className="inline-block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span 
                  className="block text-elegant-subtitle text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl leading-tight"
                  style={{ color: '#A370FF' }}
                >
                  ¿Te acompaño en el proceso?
                </span>
              </motion.div>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6"
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
                className="bg-yellow-200/90 text-gray-700 font-lora-semibold italic text-xl rounded-full px-10 py-3 shadow-lg hover:bg-yellow-300/90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <span>Descubre más</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}