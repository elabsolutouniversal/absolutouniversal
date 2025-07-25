'use client';

import { X as CloseIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface LightboxProps {
  images: {
    url: string;
    alt: string;
    title: string;
    description?: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  direction: number;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  direction
}: LightboxProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Gestos táctiles
  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 50
  });

  // Resetear estado de imagen al cambiar
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      {...swipeHandlers}
    >
      {/* Botón de cerrar */}
      <button
        className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3 backdrop-blur-sm z-10"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Cerrar lightbox"
      >
        <CloseIcon className="w-6 h-6" />
      </button>

      {/* Botón anterior - IMPORTANTE: e.stopPropagation() */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 transition-colors p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm z-10"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Botón siguiente - IMPORTANTE: e.stopPropagation() */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 transition-colors p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm z-10"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenedor de imagen que también previene la propagación */}
      <div 
        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {imageError && (
              <div className="text-white text-center">
                <p className="text-xl mb-2">Error al cargar la imagen</p>
                <p className="text-gray-400">{images[currentIndex].title}</p>
              </div>
            )}

            {!imageError && (
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
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
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pie de foto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center text-white bg-black/60 backdrop-blur-sm rounded-full px-6 py-2">
          <h3 className="text-lg font-medium">
            {images[currentIndex].title}
          </h3>
          {images[currentIndex].description && (
            <p className="text-sm text-white/90">
              {images[currentIndex].description}
            </p>
          )}
          <p className="text-xs text-white/70 mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}