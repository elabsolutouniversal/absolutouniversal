'use client';

import React, { useState } from 'react';
import { Quote, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { ITestimonio } from '@/types/testimonios/testimonio';

interface TestimonioCardProps {
  testimonio: ITestimonio;
  className?: string;
}

const TestimonioCard: React.FC<TestimonioCardProps> = ({ testimonio, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 280;

  const generateAvatar = (nombre: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=ec4899&color=fff&size=64&font-size=0.33`;

  const needsTruncation = testimonio.contenido.length > maxLength;
  const displayText = needsTruncation && !isExpanded
    ? testimonio.contenido.substring(0, maxLength).trim() + '...'
    : testimonio.contenido;

  return (
    <div className={`bg-white rounded-2xl shadow-md border border-pink-100 p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 ${className}`}>      
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-pink-500 opacity-70 group-hover:opacity-90 transition-opacity" />
        {/* Aquí iría tu componente StarRating personalizado */}
        <span className="text-pink-600 font-bold">{testimonio.rating ?? '★'}</span>
      </div>

      <blockquote className="text-gray-700 text-base leading-relaxed font-medium text-justify mb-4">
        &ldquo;{displayText}&rdquo;
      </blockquote>

      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full transition-transform hover:scale-105 mb-4"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
        </button>
      )}

      <div className="flex items-center">
        <div className="relative">
          <Image
            src={testimonio.avatar || generateAvatar(testimonio.nombre)}
            alt={`${testimonio.nombre} avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-200 transition-ring hover:ring-pink-300"
            onError={(e) => { (e.target as HTMLImageElement).src = generateAvatar(testimonio.nombre); }}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="ml-4 flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{testimonio.nombre}</h4>
          {testimonio.rol && (
            <div className="flex items-center text-xs text-pink-600 mt-1">
              <MapPin className="w-3 h-3 mr-1" />{testimonio.rol}
            </div>
          )}
          {testimonio.fecha && (
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Calendar className="w-3 h-3 mr-1" />{testimonio.fecha}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonioCard;
