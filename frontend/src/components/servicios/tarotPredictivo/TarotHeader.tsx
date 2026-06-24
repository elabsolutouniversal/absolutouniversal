import { Sparkles } from 'lucide-react'
import React from 'react'

interface TarotHeaderProps {
  titleLines?: string[];
  subtitle?: string;
}

const TarotHeader: React.FC<TarotHeaderProps> = ({
  titleLines = ['Tarot Predictivo', 'con Enfoque', 'Terapéutico'],
  subtitle = 'El Tarot no dicta tu destino, te muestra cómo estás creándolo, para que puedas transformarlo',
}) => {
  return (
    <div className="text-center mb-16 md:mb-20 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4 md:mb-6">
        <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark mb-4 md:mb-6 leading-tight">
        {titleLines.map((line, index) => (
          <span key={index} className={`block sm:inline${index > 0 ? ' sm:ml-2' : ''}`}>
            {line}
          </span>
        ))}
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl text-brand-medium max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
        {subtitle}
      </p>
      
      <div className="mt-6 md:mt-8 flex justify-center">
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-brand-light to-brand-dark rounded-full"></div>
      </div>
    </div>
  )
}

export default TarotHeader