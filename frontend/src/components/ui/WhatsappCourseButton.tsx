// components/ui/WhatsappCourseButton.tsx
'use client';
import React from 'react';

const FaWhatsapp: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    className={className}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380.9 97.1C339.4 55.6 283.8 32 223.7 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.7 111.9L.7 475.9c-4.8 17.4 5.1 35.5 22.5 40.3 6.7 1.9 13.6 2.9 20.4 2.9 11.2 0 22.4-3.5 31.5-10.4l56.8-41.6c35.6 20.8 75.9 32 117.8 32 122.4 0 222-99.6 222-222 0-60.1-23.6-115.7-65.1-157.2zm-43.6 306.7c-2.4 1.4-6.4 2.3-11.2 2.3-5.2 0-10.7-1.5-15.6-4.6-25.1-15.4-58.8-31.5-84.8-31.5-13.8 0-25.2 11.2-25.2 25.1 0 13.8 11.4 25.1 25.2 25.1 26.2 0 54.4 10.1 82.2 27.2 2.9 1.8 5.7 3.3 8.3 4.5 13.5 6 27.8 9.3 42.6 9.3 11.4 0 22.4-1.8 31.8-5.3 10.1-3.7 18.2-8.5 24-14.7 6-6.2 9.2-13.6 9.2-22.1 0-8.6-3.2-16-9.2-22.1-5.8-6.2-13.9-10.9-24-14.7-9.4-3.5-20.4-5.3-31.8-5.3-14.8 0-29.1 3.3-42.6 9.3-2.6 1.2-5.4 2.7-8.3 4.5z"></path>
  </svg>
);

interface WhatsappCourseButtonProps {
  courseTitle: string;
  className?: string;
}

export default function WhatsappCourseButton({ 
  courseTitle,
  className = '' 
}: WhatsappCourseButtonProps) {
  const message = `Hola, deseo inscribirme al curso: ${courseTitle}`;
  const whatsappUrl = `https://wa.me/51962305362?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group ${className}`}
      aria-label="Inscribirse al curso por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip actualizado */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Inscríbete a este curso!
        <div className="absolute top-1/2 left-full w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent -translate-y-1/2"></div>
      </div>
    </a>
  );
}