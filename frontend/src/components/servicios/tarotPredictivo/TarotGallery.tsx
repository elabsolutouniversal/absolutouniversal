// components/tarot/TarotGallery.tsx
import React from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { ImageData } from '@/types/servicios/tarot-terapeutico';

interface TarotGalleryProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
}

const TarotGallery: React.FC<TarotGalleryProps> = ({ images, onImageClick }) => {
  // Mostrar solo las primeras 2 imágenes
  const displayedImages = images.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto mb-32 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {displayedImages.map((image, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-3xl shadow-xl border border-brand-light/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20 ${image.objectFit === 'contain' ? 'h-96' : 'h-80'}`}
            onClick={() => onImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`${image.objectFit === 'contain' ? 'object-contain object-center' : 'object-cover object-center'} group-hover:brightness-110 transition-filter duration-500`}
              sizes="(max-width: 640px) 100vw, 50vw"
            />

            {/* Overlay al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Título y subtítulo */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold drop-shadow-lg text-brand-dark">{image.title}</h3>
              <p className="text-sm drop-shadow-lg text-white/90">{image.subtitle}</p>
            </div>

            {/* Icono de vista */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-400 to-cyan-500 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <Eye className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotGallery;
