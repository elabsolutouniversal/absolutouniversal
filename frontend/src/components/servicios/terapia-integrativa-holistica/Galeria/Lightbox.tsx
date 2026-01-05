'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X as CloseIcon } from 'lucide-react';

export default function Lightbox({
  src,
  titulo,
  onClose,
}: {
  src: string;
  titulo: string;
  onClose: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ isolation: 'isolate' }}
    >
      <motion.div
        className="relative max-w-5xl w-full h-full flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 md:-right-16 md:top-0 text-white hover:text-pink-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm z-10"
          onClick={onClose}
          aria-label="Cerrar imagen"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="relative w-full h-[80vh] md:h-[85vh] flex items-center justify-center">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {imageError && (
            <div className="text-white text-center">
              <p className="text-xl mb-2">Error al cargar la imagen</p>
              <p className="text-gray-400">{titulo}</p>
            </div>
          )}

          {!imageError && (
            <Image
              src={src}
              alt={titulo}
              fill
              className={`object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
              priority
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {imageLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <p className="text-white text-center text-lg font-medium bg-black/60 backdrop-blur-sm rounded-full px-6 py-2 whitespace-nowrap">
              {titulo}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
