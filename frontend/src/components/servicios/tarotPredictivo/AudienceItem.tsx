import React from 'react'
import { AudienciaItem } from '@/types/servicios/tarot-terapeutico'

interface AudienceItemProps {
  item: AudienciaItem;
  index: number;
}

const AudienceItemComponent: React.FC<AudienceItemProps> = ({ item, index }) => {
  return (
    <div
      className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/60 transition-all duration-300 group"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>
      <p className="text-gray-700 leading-relaxed font-medium">
        {item.texto}
      </p>
    </div>
  )
}

export default AudienceItemComponent