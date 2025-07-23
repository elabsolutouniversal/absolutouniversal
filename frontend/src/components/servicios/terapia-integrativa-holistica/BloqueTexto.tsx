'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  id?: string;
  titulo: string;
  texto: React.ReactNode;
  bg?: string;
  border?: string;
}

export default function BloqueTexto({
  id,
  titulo,
  texto,
  bg = 'bg-white',
  border = '',
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`${bg} ${border} rounded-3xl shadow-xl p-8 md:p-12 backdrop-blur-sm`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
          {titulo}
        </h2>
        <div className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          {texto}
        </div>
      </div>
    </motion.section>
  );
}
