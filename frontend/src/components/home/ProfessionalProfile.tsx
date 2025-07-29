'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function ProfessionalProfile() {
  // Colores configurables
  const colors = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600",
    primaryHover: "hover:from-purple-700 hover:to-pink-700",
    cardBg: "bg-white/95",
    textDark: "text-gray-800",
    textLight: "text-white",
    accent: "text-pink-500",
    border: "border-white/30",
    whatsappBg: "bg-green-500",
    whatsappHover: "hover:bg-green-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Tarjeta principal */}
      <div className={`max-w-3xl mx-auto ${colors.cardBg} rounded-2xl shadow-xl overflow-hidden ${colors.border}`}>
        
        {/* Encabezado con gradiente */}
        <div className={`${colors.primary} py-6 px-8 text-center`}>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Lic. Numash Dahiana Velásquez Guerrero</h1>
          <div className="w-20 h-1 bg-white/50 mx-auto my-3 rounded-full"></div>
          <p className="text-white/90 font-medium">Psicóloga colegiada (CPSP N.°12004) - CDR I Lima y Callao</p>
        </div>

        {/* Contenido */}
        <div className="p-8">
          {/* Foto y especialidades */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="shrink-0">
              <Image
                src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg"
                alt="Lic. Numash Dahiana"
                width={160}
                height={160}
                className="rounded-full shadow-lg border-4 border-white/50 object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg italic text-pink-600 font-medium mb-2 text-justify">
                Terapeuta Gestalt | Especialista en Tarot Terapéutico Junguiano y Sanación Energética con Péndulo Hebreo
              </p>
              <div className="flex justify-center md:justify-start gap-3 mt-4">
                {['Psicoterapia', 'Tarot', 'Sanación'].map((tag, i) => (
                  <span key={i} className="text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Descripción - Texto justificado */}
          <div className="text-gray-700 mb-8 space-y-4">
            <p className="text-justify">
              Psicóloga titulada y habilitada, con enfoque integrador que combina la psicoterapia humanista y simbólica con herramientas energéticas.
            </p>
            <p className="text-justify">
              Mi acompañamiento se centra en facilitar procesos de sanación emocional, liberación de bloqueos y conexión profunda con el alma, mediante el Tarot terapéutico junguiano, el enfoque Gestalt y la sanación energética con péndulo hebreo.
            </p>
            <p className="font-medium text-pink-600 text-justify">
              Uniendo ciencia, conciencia y espiritualidad desde una mirada ética, respetuosa y transformadora.
            </p>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* WhatsApp */}
          <div className="text-center mb-8">
            <Link
              href="https://wa.me/51962305362?text=Hola%20Dahiana,%20quisiera%20agendar%20una%20sesión"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center ${colors.whatsappBg} ${colors.whatsappHover} ${colors.textLight} font-semibold px-6 py-3 rounded-full shadow-lg transition-all`}
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Hablemos por WhatsApp
            </Link>
          </div>

          {/* Separador decorativo */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-pink-500 text-lg">✨</span>
            </div>
          </div>

          {/* Mensaje inspirador */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">Estás a un paso de transformar tu vida</h2>
            <p className="text-lg italic text-pink-600 max-w-md mx-auto text-justify">
              &quot;El cambio empieza dentro de ti. Escucha a tu alma, honra tu proceso y permítete sanar con amor y conciencia.&quot;
            </p>
          </div>

          {/* Herramientas terapéuticas */}
          <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center">Herramientas terapéuticas</h3>
            <ul className="space-y-3">
              {[
                "Psicoterapia Integrativa Holística",
                "Psico Educación",
                "Tarot Predictivo con Enfoque Terapéutico"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-pink-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}