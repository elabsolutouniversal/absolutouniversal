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
  const [loading, setLoading] = useState(true);

  // Función para validar si la URL es válida
  const isValidImageUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      // Si no es una URL completa, asumimos que es una ruta local
      return url.startsWith('/') || url.startsWith('./') || !url.includes('://');
    }
  };

  const handleImageError = () => {
    console.error(`Error cargando imagen: ${src}`);
    setError(true);
    setLoading(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
    setError(false);
  };

  // Verificar si la src es válida al renderizar
  const shouldShowImage = src && isValidImageUrl(src);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Loading state */}
      {loading && shouldShowImage && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Image or fallback */}
      {shouldShowImage && !error ? (
        <Image
          src={src}
          alt={titulo}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'
            }`}
          sizes="100vw"
          unoptimized={src.includes('proceso') || src.includes('sanacion')}
          onError={handleImageError}
          onLoad={handleImageLoad}
          priority={false}
          quality={75}
          placeholder="empty"
        />
      ) : (
        // Fallback when there's no image or error
        <div className={`absolute inset-0 flex flex-col ${fallbackBg} items-center justify-center`}>
          {icon}
          <p className="font-medium text-gray-700 mt-2 text-center px-4">{titulo}</p>
          {error && (
            <p className="text-xs text-gray-500 mt-1">Error al cargar imagen</p>
          )}
        </div>
      )}

      {/* Overlay - solo si la imagen se cargó correctamente */}
      {!error && shouldShowImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      )}

      {/* Content overlay - solo si la imagen se cargó correctamente */}
      {!error && shouldShowImage && (
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
      )}
    </motion.div>
  );
}