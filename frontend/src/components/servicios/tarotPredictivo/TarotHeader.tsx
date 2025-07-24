import { Sparkles } from 'lucide-react'
import React from 'react'

const TarotHeader: React.FC = () => {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6">
        <Sparkles className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
        Tarot Predictivo con Enfoque Terapéutico
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        El Tarot no dicta tu destino, te muestra cómo estás creándolo, para que puedas transformarlo
      </p>
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  )
}
export default TarotHeader
