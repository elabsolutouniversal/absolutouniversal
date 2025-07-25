'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { galleryData } from '@/data/servicios/pendulo';
import Lightbox from './Lightbox';


interface Props {
  data?: typeof galleryData;
}

export default function SimpleGallery({ data = galleryData }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    if (currentImageIndex === null) return;
    setDirection(-1);
    setCurrentImageIndex(prev => 
      (prev as number) === 0 ? data.images.length - 1 : (prev as number) - 1
    );
  };

  const goToNext = () => {
    if (currentImageIndex === null) return;
    setDirection(1);
    setCurrentImageIndex(prev => 
      (prev as number) === data.images.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <div className="space-y-4 px-2 sm:px-4">
      <div className="text-center px-2">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-700">{data.title}</h2>
        {data.subtitle && (
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            {data.subtitle}
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {data.images.map((img, index) => (
          <motion.div
            key={img.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={index > 2 ? "lazy" : "eager"}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-sm sm:text-base">
                {img.title}
              </h3>
              {img.description && (
                <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                  {img.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {currentImageIndex !== null && (
          <Lightbox
            images={data.images}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={goToNext}
            onPrev={goToPrev}
            direction={direction}
          />
        )}
      </AnimatePresence>
    </div>
  );
}