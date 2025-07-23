'use client';

import { Gift, Clock, Calendar } from 'lucide-react';
import type { SesionTerapiaIntegrativa } from '@/types/servicios/terapia-integrativa-holistica';

export default function CardSesion({
  numero,
  titulo,
  descripcion,
  color,
  gratuita,
  duracion,
  frecuencia,
}: SesionTerapiaIntegrativa) {
  return (
    <div className={`${color} rounded-2xl p-6 sm:p-8 relative overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
      {gratuita && (
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-md">
            <Gift className="w-4 h-4 mr-1" />
            Gratuita
          </span>
        </div>
      )}

      <div className="flex items-center mb-4">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg text-gray-800 mr-4 shadow-md">
          {numero}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{titulo}</h3>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">{descripcion}</p>

      {(duracion || frecuencia) && (
        <div className="flex gap-4 text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200/50">
          {duracion && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duracion}</span>
            </div>
          )}
          {frecuencia && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{frecuencia}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
