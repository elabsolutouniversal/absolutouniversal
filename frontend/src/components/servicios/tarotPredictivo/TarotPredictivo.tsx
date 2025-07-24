'use client'

import { audienciaDataTarotTerapeutico, serviciosDataTarotTerapeutico } from '@/data/servicios/tarot-terapeutico'
import React, { useState } from 'react'
import { ImageData } from '@/types/servicios/tarot-terapeutico'

// Componentes
import TarotHeader from '@/components/servicios/tarotPredictivo/TarotHeader'
import TarotGallery from '@/components/servicios/tarotPredictivo/TarotGallery'
import ImageModal from '@/components/servicios/tarotPredictivo/ImageModal'
import ServicesSection from '@/components/servicios/tarotPredictivo/ServicesSection'
import AudienceSection from '@/components/servicios/tarotPredictivo/AudienceSection'
import TarotFooter from '@/components/servicios/tarotPredictivo/TarotFooter'

const TarotPredictivo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)

  const images: ImageData[] = [
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg",
      alt: "Sesión de Tarot Terapéutico",
      title: "Sesión Principal",
      subtitle: "Tarot Terapéutico"
    },
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
      alt: "Terapia Integrativa Holística",
      title: "Lectura Intuitiva",
      subtitle: "Conexión profunda"
    },
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753150894/about-profile_kuacih.jpg",
      alt: "Perfil Profesional",
      title: "Sanación Emocional",
      subtitle: "Transformación personal"
    }
  ]

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