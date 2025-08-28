"use client";

import ServicioCard from "@/components/servicios/ServiciosCard";
import { servicios } from "@/data/servicios/servicios";
import Link from "next/link";

interface ServiciosProps {
  showTitle?: boolean;
  showDescription?: boolean;
  showViewAllButton?: boolean;
  maxItems?: number;
  className?: string;
}

export default function Servicios({ 
  showTitle = true,
  showDescription = true,
  showViewAllButton = true,
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
                Descubre mi <i>Método</i> <b>SATHYA</b>
             </h2>
             <p className="text-xl font-lora-italic text-purple-800 max-w-3xl mx-auto my-4">
              Sanación Ancestral, Transpersonal, Holística y Akasha
            </p>
            <h2 className="text-2xl md:text-3xl font-lora-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Herramientas que integro en las sesiones
            </h2>
            {showDescription && (
              <p className="text-lg font-lora text-purple-700 max-w-2xl mx-auto">
             El Mètodo SATHYA es un enfoque único que combina lo mejor de tres disciplinas para tu bienestar integral.
              </p>
            )}
          </div>
        )}

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-lora-semibold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 font-normal-style"
            >
              Ver todos los servicios
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}