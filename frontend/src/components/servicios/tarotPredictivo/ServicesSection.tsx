import React from 'react'
import { Servicio } from '@/types/servicios/tarot-terapeutico'
import ServiceCard from './ServiceCard'

interface ServicesSectionProps {
  servicios: Servicio[];
  title?: string;
  subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  servicios,
  title = '¿Qué incluye tu sesión?',
  subtitle = 'Cada consulta combina técnicas de tarot con enfoque terapéutico',
}) => {
  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
          {title}
        </h2>
        <p className="text-xl text-brand-medium max-w-2xl mx-auto">
          {subtitle}
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
