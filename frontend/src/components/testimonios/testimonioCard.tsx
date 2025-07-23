'use client';

import React, { useState } from 'react';
import { Quote, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { ITestimonio } from '@/types/testimonios/testimonio';
import StarRating from '@/components/ui/StarRating';

interface TestimonioCardProps {
  testimonio: ITestimonio;
  className?: string;
}

const TestimonioCard: React.FC<TestimonioCardProps> = ({
  testimonio,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 280;

  // Generar avatar por defecto basado en el nombre
  const generateAvatar = (nombre: string): string => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      nombre
    )}&background=8b5cf6&color=fff&size=64&font-size=0.33`;
  };

  // Verificar si el texto necesita truncarse
  const needsTruncation = testimonio.contenido.length > maxLength;
  
  // Obtener el texto a mostrar
  const displayText = needsTruncation && !isExpanded 
    ? testimonio.contenido.substring(0, maxLength).trim() + '...'
    : testimonio.contenido;

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group ${className}`}
    >
      {/* Quote Icon y Rating */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-purple-500 opacity-60 group-hover:opacity-80 transition-opacity" />
        <StarRating rating={testimonio.rating} size="sm" />
      </div>

      {/* Contenido del testimonio */}
      <div className="mb-6">
        <blockquote className="text-gray-700 text-base leading-relaxed font-medium text-justify">
          &ldquo;{displayText}&rdquo;
        </blockquote>
        
        {/* Botón Ver más/Ver menos */}
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center mt-3 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200 group/btn"
          >
            {isExpanded ? (
              <>
                <span>Ver menos</span>
                <ChevronUp className="w-4 h-4 ml-1 group-hover/btn:transform group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>Ver más</span>
                <ChevronDown className="w-4 h-4 ml-1 group-hover/btn:transform group-hover/btn:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Información del autor */}
      <div className="flex items-center">
        <div className="relative">
          <Image
            src={testimonio.avatar || generateAvatar(testimonio.nombre)}
            alt={`${testimonio.nombre} avatar`}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-100 group-hover:border-purple-200 transition-colors"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = generateAvatar(testimonio.nombre);
            }}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="ml-4 flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">
            {testimonio.nombre}
          </h4>
          
          {testimonio.rol && (
            <div className="flex items-center text-xs text-purple-600 mt-1">
              <MapPin className="w-3 h-3 mr-1" />
              {testimonio.rol}
            </div>
          )}
          
          {testimonio.fecha && (
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Calendar className="w-3 h-3 mr-1" />
              {testimonio.fecha}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonioCard;