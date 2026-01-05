//# Call to action de WhatsApp

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

export default function WhatsAppCTA() {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-lora-bold-italic text-amber-800 mb-6">
          Estás a un paso de transformar tu vida
        </h2>
        
        <p className="text-lg md:text-xl font-lora text-amber-700 mb-8 leading-relaxed">
          El cambio empieza dentro de ti. Escucha a tu alma, honra tu proceso y permítete sanar con amor y conciencia.
        </p>
        
        <a
          href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-normal-style"
        >
          <FaWhatsapp className="text-2xl" />
          Hablemos por WhatsApp
        </a>
      </div>
    </div>
  );
}