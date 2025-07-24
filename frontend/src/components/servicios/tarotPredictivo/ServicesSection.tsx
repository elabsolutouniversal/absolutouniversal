import React from 'react'
import { Servicio } from '@/types/servicios/tarot-terapeutico'
import ServiceCard from './ServiceCard'

interface ServicesSectionProps {
  servicios: Servicio[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicios }) => {
  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          ¿Qué incluye tu sesión?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cada consulta combina técnicas de tarot con enfoque terapéutico
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <ServiceCard 
            key={servicio.id} 
            servicio={servicio} 
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
