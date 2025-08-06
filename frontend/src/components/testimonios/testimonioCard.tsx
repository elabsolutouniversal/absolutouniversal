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
    `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=7c3aed&color=fff&size=64&font-size=0.33`;

  const needsTruncation = testimonio.contenido.length > maxLength;
  const displayText = needsTruncation && !isExpanded
    ? testimonio.contenido.substring(0, maxLength).trim() + '...'
    : testimonio.contenido;

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100/50 p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/95 ${className}`}>      
      <div className="flex justify-between items-start mb-6">
        <Quote className="w-8 h-8 text-purple-500 opacity-80 group-hover:opacity-100 transition-opacity" />
        {/* Aquí iría tu componente StarRating personalizado */}
        <span className="text-purple-600 font-lora-bold text-lg">{testimonio.rating ?? '★'}</span>
      </div>

      <blockquote className="text-gray-600 text-base leading-relaxed font-lora text-justify mb-6">
        &ldquo;{displayText}&rdquo;
      </blockquote>

      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center text-sm font-lora-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg mb-6"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
        </button>
      )}

      <div className="flex items-center">
        <div className="relative">
          <Image
            src={testimonio.avatar || generateAvatar(testimonio.nombre)}
            alt={`${testimonio.nombre} avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-200 transition-all duration-300 hover:ring-purple-300 hover:scale-110"
            onError={(e) => { (e.target as HTMLImageElement).src = generateAvatar(testimonio.nombre); }}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>
        <div className="ml-4 flex-1">
          <h4 className="font-lora-semibold text-gray-700 text-sm">{testimonio.nombre}</h4>
          {testimonio.rol && (
            <div className="flex items-center text-xs text-purple-600 mt-1 font-lora">
              <MapPin className="w-3 h-3 mr-1" />{testimonio.rol}
            </div>
          )}
          {testimonio.fecha && (
            <div className="flex items-center text-xs text-gray-500 mt-1 font-lora">
              <Calendar className="w-3 h-3 mr-1" />{testimonio.fecha}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonioCard;
