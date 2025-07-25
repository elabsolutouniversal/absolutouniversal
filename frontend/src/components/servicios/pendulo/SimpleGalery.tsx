'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Loader2 } from 'lucide-react';
import { galleryData } from '@/data/servicios/pendulo';

export const SimpleGallery = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const openImage = (imageUrl: string) => {
    console.log('Abriendo imagen:', imageUrl);
    setSelectedImage(imageUrl);
    setModalImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    setModalImageLoaded(false);
    document.body.style.overflow = 'unset';
  };

  const handleModalImageLoad = () => {
    setModalImageLoaded(true);
  };

  // Limpiar overflow al desmontar componente
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-2">
            {galleryData.title}
          </h2>
          {galleryData.subtitle && (
            <p className="text-gray-600 text-lg">
              {galleryData.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-pink-50 to-purple-50 cursor-pointer"
              onClick={() => {
                console.log('Click en imagen:', image.title);
                openImage(image.url);
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 animate-pulse" />
                )}
                
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-all duration-300 group-hover:scale-110 ${
                    loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => handleImageLoad(image.id)}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  {image.description && (
                    <p className="text-sm opacity-90">{image.description}</p>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h4 className="font-semibold text-pink-700 mb-2">{image.title}</h4>
                {image.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
                )}
                {image.category && (
                  <span className="inline-block mt-2 px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeImage}
        >
          {/* Botón Cerrar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Contenedor de Imagen */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Spinner */}
            {!modalImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                  <p className="text-white text-sm mt-2">Cargando imagen...</p>
                </div>
              </div>
            )}

            {/* Imagen Grande */}
            <div className={`relative w-full h-full transition-opacity duration-500 ${
              modalImageLoaded ? 'opacity-100' : 'opacity-20'
            }`}>
              <Image
                src={selectedImage}
                alt="Imagen ampliada"
                fill
                className="object-contain"
                sizes="100vw"
                onLoad={handleModalImageLoad}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};