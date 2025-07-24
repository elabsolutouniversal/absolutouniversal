import { Target, Zap, ArrowRight } from 'lucide-react'
import React from 'react'
import { AudienciaItem } from '@/types/servicios/tarot-terapeutico'
import AudienceItemComponent from './AudienceItem'

interface AudienceSectionProps {
  audiencia: AudienciaItem[];
}

const AudienceSection: React.FC<AudienceSectionProps> = ({ audiencia }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-white/40 mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          ¿Para quién es esta lectura?
        </h2>
        <p className="text-xl text-gray-600">
          Ideal si te encuentras en alguna de estas situaciones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {audiencia.map((item, index) => (
          <AudienceItemComponent 
            key={item.id} 
            item={item} 
            index={index}
          />
        ))}
      </div>

      <div className="text-center">
        <button 
          className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
          type="button"
        >
          <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span>Quiero una Sesión Psico Tarot</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

export default AudienceSection