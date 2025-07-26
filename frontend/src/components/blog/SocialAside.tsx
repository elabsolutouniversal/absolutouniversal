'use client';

import React from 'react';

// Iconos personalizados como SVG para evitar deprecaciones

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  hoverColor: string;
}

const SocialAside: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      icon: <FacebookIcon className="w-5 h-5" />,
      url: 'https://facebook.com/tupagina',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-5 h-5" />,
      url: 'https://instagram.com/tuperfil',
      color: 'bg-gradient-to-br from-purple-600 to-pink-500',
      hoverColor: 'hover:from-purple-700 hover:to-pink-600'
    },
    {
      name: 'TikTok',
      icon: <TikTokIcon className="w-5 h-5" />,
      url: 'https://tiktok.com/@tuperfil',
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-900'
    },
    {
      name: 'YouTube',
      icon: <YoutubeIcon className="w-5 h-5" />,
      url: 'https://youtube.com/tucanal',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    }
  ];

  return (
    <>
      {/* Versión Desktop - Barra lateral */}
      <aside className="hidden lg:block sticky top-24 h-fit">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              ¡Sígueme en mis redes!
            </h3>
            <p className="text-sm text-gray-600">
              Conecta conmigo para más contenido de bienestar
            </p>
          </div>

          {/* Social Links - Vertical */}
          <div className="space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center gap-3 w-full px-4 py-3
                  ${social.color} ${social.hoverColor}
                  text-white rounded-xl transition-all duration-300
                  transform hover:scale-105 hover:shadow-lg
                  group
                `}
              >
                <span className="transform transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-6 p-4 bg-purple-50 rounded-xl">
            <p className="text-sm text-center text-purple-800">
              <span className="font-semibold">✨ Únete a mi comunidad</span>
              <br />
              <span className="text-xs">
                Comparto tips diarios de sanación y bienestar
              </span>
            </p>
          </div>

          {/* Newsletter opcional */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Newsletter semanal
            </h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Versión Mobile - Sección horizontal */}
      <div className="lg:hidden mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            ¡Sígueme en mis redes!
          </h3>
          <p className="text-sm text-gray-600">
            Conecta para más contenido
          </p>
        </div>

        {/* Social Links - Horizontal Grid */}
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center justify-center gap-2 px-4 py-3
                ${social.color} ${social.hoverColor}
                text-white rounded-xl transition-all duration-300
                transform active:scale-95
              `}
            >
              {social.icon}
              <span className="font-medium text-sm">{social.name}</span>
            </a>
          ))}
        </div>

        {/* CTA Mobile */}
        <div className="mt-4 p-3 bg-purple-50 rounded-lg">
          <p className="text-xs text-center text-purple-800">
            <span className="font-semibold">✨ Tips diarios de bienestar</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialAside;