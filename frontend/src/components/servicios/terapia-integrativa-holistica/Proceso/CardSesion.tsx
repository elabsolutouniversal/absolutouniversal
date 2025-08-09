'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CardSesionProps {
  titulo: string;
  descripcion: string;
  color: string;
}

const CardSesion: React.FC<CardSesionProps> = ({ titulo, descripcion, color }) => {
  return (
    <div className={`${color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <CheckCircle className="w-8 h-8 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">{titulo}</h3>
          <p className="text-purple-700 leading-relaxed">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSesion;
