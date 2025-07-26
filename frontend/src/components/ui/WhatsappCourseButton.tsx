// components/ui/WhatsappCourseButton.tsx
'use client';
import { FaWhatsapp } from "react-icons/fa";

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