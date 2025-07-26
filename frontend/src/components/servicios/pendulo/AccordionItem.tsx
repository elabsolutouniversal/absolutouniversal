"use client";

import React from 'react';
import { ChevronDown, ChevronUp, Clock, Home, HeartPulse, Globe } from 'lucide-react';

interface Props {
  id: string;
  title: string;
  content: React.ReactNode;
  iconType?: 'healing' | 'distance' | 'time' | 'space';
  isOpen: boolean;
  onClick: () => void;
}

const iconMap = {
  healing: { Icon: HeartPulse, color: 'bg-pink-100 text-pink-600' },
  distance: { Icon: Globe, color: 'bg-purple-100 text-purple-600' },
  time: { Icon: Clock, color: 'bg-blue-100 text-blue-600' },
  space: { Icon: Home, color: 'bg-teal-100 text-teal-600' },
};

export default function AccordionItem({ id, title, content, iconType = 'healing', isOpen, onClick }: Props) {
  const { Icon, color } = iconMap[iconType] || iconMap.healing;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-3 last:mb-0">
      <button
        id={`hdr-${id}`}
        aria-controls={`panel-${id}`}
        aria-expanded={isOpen}
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="font-medium text-base sm:text-lg text-gray-800 text-left">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
        )}
      </button>
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`hdr-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 p-4 bg-gray-50' : 'max-h-0 opacity-0'}`}
      >
        <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
}