'use client'
import React, { useState } from 'react'
import { ImageData } from '@/types/servicios/tarot-terapeutico'

// Componentes
import TarotHeader from '@/components/servicios/tarotPredictivo/TarotHeader'
import TarotGallery from '@/components/servicios/tarotPredictivo/TarotGallery'
import ImageModal from '@/components/servicios/tarotPredictivo/ImageModal'
import ServicesSection from '@/components/servicios/tarotPredictivo/ServicesSection'
import AudienceSection from '@/components/servicios/tarotPredictivo/AudienceSection'
import TarotFooter from '@/components/servicios/tarotPredictivo/TarotFooter'
import { serviciosDataTarotTerapeutico, audienciaDataTarotTerapeutico, tarotPredictivoImages } from '@/data/servicios/tarot-terapeutico';

const TarotPredictivo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
   const images: ImageData[] = tarotPredictivoImages


  const openModal = (image: ImageData): void => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = (): void => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <TarotHeader />
        
        <TarotGallery 
          images={images} 
          onImageClick={openModal}
        />
        
        <ServicesSection 
          servicios={serviciosDataTarotTerapeutico}
        />
        
        <AudienceSection 
          audiencia={audienciaDataTarotTerapeutico}
        />
        
        <TarotFooter />
      </div>

      <ImageModal 
        selectedImage={selectedImage} 
        onClose={closeModal}
      />
    </div>
  )
}

export default TarotPredictivo