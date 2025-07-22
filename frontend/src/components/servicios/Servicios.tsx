"use client";

import ServicioCard from "@/components/servicios/ServiciosCard";
import { servicios } from "@/data/servicios";
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
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
              Herramientas que integro en las sesiones
            </h2>
            {showDescription && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre las diferentes modalidades terapéuticas que combino para ofrecerte una experiencia integral de sanación y crecimiento personal.
              </p>
            )}
          </div>
        )}

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              Ver todos los servicios
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}