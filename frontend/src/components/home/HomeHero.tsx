'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
} from 'react-icons/fa';
import ProfessionalProfile from './ProfessionalProfile'; // Asegúrate de tener este componente en la misma carpeta

export default function HomeHero() {
  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const heroBg = "bg-pink-100";
  const cardBg = "bg-white";
  const textColor = "text-gray-700";
  const buttonBg = "bg-pink-600";
  const buttonHover = "hover:bg-pink-700";
  const buttonText = "text-white";

  return (
    <>
      {/* Hero de bienvenida */}
      <section className={`${heroBg} py-20`}>
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className={`${cardBg} rounded-2xl shadow-xl p-8 text-center md:text-left`}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">
                Bienvenido a tu espacio de bienestar
              </h1>
              <p className={`${textColor} text-lg mb-6 leading-relaxed text-justify`}>
                Un lugar para reconectar contigo, sanar desde la raíz y transformar tu vida desde la
                consciencia y el corazón.
              </p>
              <Link
                href="/servicios"
                className={`inline-flex items-center gap-2 ${buttonBg} ${buttonHover} ${buttonText} font-semibold px-6 py-3 rounded-full shadow-md transition duration-300`}
              >
                Conoce más
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Psicoterapia con péndulo"
                width={320}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reemplazamos la sección antigua con el nuevo componente */}
      <ProfessionalProfile />
    </>
  );
}