// components/tarot/TarotGallery.tsx
import { Eye, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ImageData } from '@/types/servicios/tarot-terapeutico'

interface TarotGalleryProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
}

const TarotGallery: React.FC<TarotGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Imagen principal */}
        <div className="lg:col-span-2 group cursor-pointer" onClick={() => onImageClick(images[0])}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 transform group-hover:-translate-y-2 transition-all duration-500">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold drop-shadow-lg">{images[0].title}</h3>
              <p className="text-white/90 drop-shadow-lg">{images[0].subtitle}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="space-y-8">
          {[images[1], images[2]].map((image: ImageData, idx: number) => (
            <div key={idx} className="group cursor-pointer" onClick={() => onImageClick(image)}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-44 transform group-hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg mb-2">
                    {idx === 0 ? <Eye className="w-4 h-4" /> : <Heart className="w-4 h-4" />}
                  </div>
                  <p className="font-semibold drop-shadow-lg">{image.title}</p>
                  <p className="text-xs text-white/80 drop-shadow-lg">{image.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TarotGallery