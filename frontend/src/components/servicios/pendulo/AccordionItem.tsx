'use client';

import React, { useMemo } from 'react';
import { ChevronDown, ChevronUp, Sparkles, MapPin, Clock, Home, LucideIcon } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  iconType?: 'healing' | 'distance' | 'time' | 'space' | 'default';
  isOpen?: boolean;
  onClick?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  iconType = 'default',
  isOpen = false,
  onClick
}) => {
  const iconConfig = useMemo((): { icon: LucideIcon; color: string } => {
    switch (iconType) {
      case 'healing':
        return { icon: Sparkles, color: 'text-pink-600' };
      case 'distance':
        return { icon: MapPin, color: 'text-pink-600' };
      case 'time':
        return { icon: Clock, color: 'text-pink-600' };
      case 'space':
        return { icon: Home, color: 'text-pink-600' };
      case 'default':
      default:
        return { icon: Sparkles, color: 'text-pink-300 opacity-70' };
    }
  }, [iconType]);

  const IconComponent = iconConfig.icon;
  
  // Verificar si hay contenido válido para mostrar
  const hasContent = content && content.trim() !== "";

  return (
    <div className="border border-pink-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-colors duration-200 flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-2 shadow-sm">
            <IconComponent className={`w-6 h-6 ${iconConfig.color}`} />
          </div>
          <h3 className="text-lg font-semibold text-pink-700">
            {title}
          </h3>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-pink-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-pink-600" />
          )}
        </div>
      </button>
      
      {/* SOLUCIÓN: Solo renderizar contenido si existe Y está abierto */}
      {isOpen && hasContent && (
        <div 
          className="overflow-hidden transition-all duration-300 ease-in-out"
          id={`accordion-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
          role="region"
          aria-labelledby={`accordion-header-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="px-6 py-4 bg-white border-t border-pink-100">
            <p className="text-gray-700 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};