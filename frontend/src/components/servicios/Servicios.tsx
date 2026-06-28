"use client";

import ServicioCard from "@/components/servicios/ServiciosCard";
import { servicios } from "@/data/servicios/servicios";
import { SITE_LOGO_ALT, SITE_LOGO_URL } from '@/constants/siteLogo';
import Image from 'next/image';
import Link from 'next/link';

interface ServiciosProps {
  showTitle?: boolean;
  showDescription?: boolean;
  showViewAllButton?: boolean;
  showLogoAtEnd?: boolean;
  maxItems?: number;
  className?: string;
}

export default function Servicios({ 
  showTitle = true,
  showDescription = true,
  showViewAllButton = true,
  showLogoAtEnd = false,
  maxItems,
  className = "bg-white py-16 px-6"
}: ServiciosProps) {
  
  // Si se especifica maxItems, limitar los servicios mostrados
  const serviciosToShow = maxItems ? servicios.slice(0, maxItems) : servicios;

  return (
    <section className={className} id="servicios">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección - condicional */}
        {showTitle && (
          <div className="text-center mb-12">
             <h2 className="text-6xl md:text-7xl font-lora-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  
             </h2>
             <p className="text-2xl font-lora-italic text-purple-500 max-w-4xl mx-auto my-6">
             
            </p>
          
            {showDescription && (
              <p className="text-xl font-lora text-purple-700 max-w-3xl mx-auto mb-8">
           
              </p>
            
            )}  
          </div>
        )}

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviciosToShow.map((servicio) => (
            <ServicioCard
              key={servicio.slug}
              title={servicio.title}
              slug={servicio.slug}
              image={servicio.image}
              description={servicio.description}
            />
          ))}
        </div>

        {/* Botón para ver todos los servicios - condicional */}
        {showViewAllButton && maxItems && servicios.length > maxItems && (
          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-lora-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-300/50 transition-all duration-300 transform hover:scale-105 font-normal-style"
            >
              Ver todos los servicios
            </Link>
          </div>
        )}

        {showLogoAtEnd && (
          <div className="flex justify-center mt-12 pt-6 px-4">
            <Image
              src={SITE_LOGO_URL}
              alt={SITE_LOGO_ALT}
              width={320}
              height={320}
              className="w-[min(280px,88vw)] h-auto sm:w-64 md:w-72 object-contain"
            />
          </div>
        )}

      </div>
    </section>
  );
}