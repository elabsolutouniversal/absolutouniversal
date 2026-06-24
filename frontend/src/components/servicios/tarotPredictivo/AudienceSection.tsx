import { Target, Zap, ArrowRight } from 'lucide-react'
import React from 'react'
import { AudienciaItem } from '@/types/servicios/tarot-terapeutico'
import AudienceItemComponent from './AudienceItem'

interface AudienceSectionProps {
  audiencia: AudienciaItem[];
  title?: string;
  subtitle?: string;
}

const AudienceSection: React.FC<AudienceSectionProps> = ({
  audiencia,
  title = '¿Para quién es esta lectura?',
  subtitle = 'Ideal si te encuentras en alguna de estas situaciones',
}) => {
 return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-white/40 mb-8 sm:mb-12 md:mb-16 mx-4 sm:mx-0">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4 sm:mb-6">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-3 sm:mb-4 px-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-brand-medium px-4">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
        {audiencia.map((item, index) => (
          <AudienceItemComponent 
            key={item.id} 
            item={item} 
            index={index}
          />
        ))}
      </div>

        <div className="text-center px-4">
        <a 
          href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-yellow-200/90 hover:bg-yellow-300/90 text-brand-dark px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-xl hover:shadow-2xl border border-yellow-300/60 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
          <span className="text-center leading-tight">
            <span className="block sm:inline">Quiero una Sesión</span>
            <span className="block sm:inline sm:ml-1">Psico Tarot</span>
          </span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
        </a>
      </div>
    </div>
  )
}

export default AudienceSection