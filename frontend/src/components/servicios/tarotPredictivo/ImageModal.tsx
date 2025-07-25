import { X } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

interface ImageData {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface ImageModalProps {
  selectedImage: ImageData | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={handleModalClick}
    >
      <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          type="button"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>
        
        {/* Imagen ampliada: uso de fill dentro de contenedor relativo */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Información de la imagen */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
          <p className="text-white/90">{selectedImage.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageModal
