import { Sparkles } from 'lucide-react'
import React from 'react'

const TarotHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 md:mb-20 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-4 md:mb-6">
        <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      
      {/* Título optimizado para móviles */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
        <span className="block sm:inline">Tarot Predictivo</span>
        <span className="block sm:inline sm:ml-2">con Enfoque</span>
        <span className="block sm:inline sm:ml-2">Terapéutico</span>
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
        El Tarot no dicta tu destino, te muestra cómo estás creándolo, para que puedas transformarlo
      </p>
      
      <div className="mt-6 md:mt-8 flex justify-center">
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  )
}

export default TarotHeader