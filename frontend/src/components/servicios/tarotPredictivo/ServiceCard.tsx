import React from 'react'
import { Servicio } from '@/types/servicios/tarot-terapeutico'

interface ServiceCardProps {
  servicio: Servicio;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ servicio, index }) => {
  return (
    <div
      className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 hover:scale-105 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          {servicio.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {servicio.titulo}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {servicio.descripcion}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard