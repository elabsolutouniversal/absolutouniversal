'use client';

import type { BeneficioTerapiaIntegrativa } from '@/types/servicios/terapia-integrativa-holistica';

export default function CardBeneficio({ icon, titulo, descripcion }: BeneficioTerapiaIntegrativa) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 border border-gray-100">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">{titulo}</h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{descripcion}</p>
    </div>
  );
}
