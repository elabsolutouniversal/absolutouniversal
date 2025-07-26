'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

// Iconos TikTok y YouTube
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function SocialAside() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de la newsletter aquí
  };

  return (
    <aside className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
      {/* Perfil del autor */}
      <div className="flex flex-col items-center space-y-3">
        <Image
          src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753150894/about-profile_kuacih.jpg"
          alt="Dahiana Velasquez"
          width={120}
          height={120}
          className="rounded-full"
        />
        <p className="text-center text-sm text-gray-700">
          Psicóloga, Psicoterapeuta Holística<br />
          y Especialista en Sanación Energética
        </p>
        <p className="text-center text-purple-600 font-semibold">
          Dahiana Velasquez — Lima, Perú
        </p>
      </div>
   
   <h2 className="text-center text-purple-600 font-semibold">
          Siguenos en nuestras redes
        </h2>
      {/* Enlaces sociales */}
      <div className="space-y-3">
        <a
          href="https://facebook.com/tupagina"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          <Facebook className="w-5 h-5" /> Facebook
        </a>
        <a
          href="https://instagram.com/tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-xl hover:opacity-90"
        >
          <Instagram className="w-5 h-5" /> Instagram
        </a>
        <a
          href="https://tiktok.com/@tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-black text-white rounded-xl hover:opacity-90"
        >
          <TikTokIcon className="w-5 h-5" /> TikTok
        </a>
        <a
          href="https://youtube.com/tucanal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
        >
          <YoutubeIcon className="w-5 h-5" /> YouTube
        </a>
      </div>

   {/* Logo de la página */}
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png"
          alt="El Absoluto Universal"
          width={200}
          height={200}
        />
      </div>

      {/* CTA Comunidad */}
      <div className="p-4 bg-purple-50 rounded-lg text-center">
        <span className="font-semibold text-purple-600">
          ✨ Únete a mi comunidad
        </span>
        <p className="text-xs text-gray-600 mt-1">
          Tips diarios de sanación y bienestar
        </p>
      </div>

      {/* Newsletter semanal */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Newsletter semanal
        </h4>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            placeholder="Tu email"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="w-full py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90">
            Suscribirme
          </button>
        </form>
      </div>
    </aside>
  );
}
