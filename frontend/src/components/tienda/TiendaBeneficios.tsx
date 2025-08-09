'use client';

import React from 'react';
import { Shield, Truck, CreditCard, HeartHandshake, Star, Gift } from 'lucide-react';

const beneficios = [
  {
    icon: Shield,
    titulo: 'Garantía Espiritual',
    descripcion: 'Todos nuestros productos están energéticamente limpiados y bendecidos',
    color: 'text-green-600'
  },
  {
    icon: Truck,
    titulo: 'Envío Protegido',
    descripcion: 'Empaque especial que preserva la energía de tus productos',
    color: 'text-blue-600'
  },
  {
    icon: CreditCard,
    titulo: 'Pago Seguro',
    descripcion: 'Múltiples formas de pago y comunicación directa por WhatsApp',
    color: 'text-purple-600'
  },
  {
    icon: HeartHandshake,
    titulo: 'Consulta Gratuita',
    descripcion: 'Asesoramiento personalizado para elegir el producto ideal',
    color: 'text-pink-600'
  },
  {
    icon: Star,
    titulo: 'Calidad Premium',
    descripcion: 'Productos seleccionados con los más altos estándares',
    color: 'text-yellow-600'
  },
  {
    icon: Gift,
    titulo: 'Sorpresas Especiales',
    descripcion: 'Regalos energéticos incluidos en cada pedido',
    color: 'text-indigo-600'
  }
];

export default function TiendaBeneficios() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora-bold-normal text-gray-900 mb-4">
            ¿Por Qué Elegir Nuestra Tienda?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lora-normal">
            Más que una tienda, somos tu compañero en el camino del crecimiento espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`${beneficio.color} mb-4`}>
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-lora-semibold text-gray-900 mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed font-lora-normal">
                  {beneficio.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
