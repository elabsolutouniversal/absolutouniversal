'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { TarjetaTerapiaIntegrativa } from '@/types/servicios/terapia-integrativa-holistica';

export default function CardConImagen({
  titulo,
  src,
  fallbackBg,
  icon,
  descripcion,
  onOpen,
}: TarjetaTerapiaIntegrativa & { onOpen: () => void }) {
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {!error ? (
        <Image
          src={src}
          alt={titulo}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width:768px) 85vw, (max-width:1200px) 33vw, 25vw"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`absolute inset-0 flex flex-col ${fallbackBg} items-center justify-center`}>
          {icon}
          <p className="font-medium text-gray-700 mt-2">{titulo}</p>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
        <p className="text-white font-bold text-lg mb-2">{titulo}</p>
        <AnimatePresence>
          {isHovered && descripcion && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-white/90 text-sm"
            >
              {descripcion}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
