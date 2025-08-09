import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { courses } from '@/data/servicios/cursos';

export default function ProductosGrid() {
  // Datos de servicios destacados
  const serviciosDestacados = [
    {
      id: 'tarot-consulta',
      titulo: 'Consulta de Tarot Terapéutico',
      descripcion: 'Sesión personalizada de 60 minutos para autoconocimiento y orientación',
      precio: '$80.00',
      duracion: '60 min',
      imagen: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1754677952/El-ojo-de-Ra_sbdeqb.jpg',
      categoria: 'Tarot',
      destacado: true,
      href: '/servicios/tarot-predictivo'
    },
    {
      id: 'terapia-sesion',
      titulo: 'Sesión de Terapia Holística',
      descripcion: 'Tratamiento integral para sanación emocional y energética',
      precio: '$120.00',
      duracion: '90 min',
      imagen: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/terapia1.jpg',
      categoria: 'Terapia',
      destacado: true,
      href: '/servicios/terapia-integrativa-holistica'
    },
    {
      id: 'pendulo-hebreo',
      titulo: 'Péndulo Hebreo',
      descripcion: 'Herramienta espiritual para consultas y meditación',
      precio: '$45.00',
      duracion: 'Producto físico',
      imagen: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/pendelo-hebreo.png',
      categoria: 'Productos',
      destacado: false,
      href: '/servicios/pendulo'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora-bold-normal text-gray-900 mb-4">
            Productos y Servicios Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras ofertas más populares y transformadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosDestacados.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={servicio.imagen} 
                  alt={servicio.titulo}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {servicio.destacado && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Destacado
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {servicio.categoria}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-lora-semibold text-gray-900 mb-3">
                  {servicio.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* Detalles */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{servicio.duracion}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-lora-bold-normal text-purple-600">
                    {servicio.precio}
                  </div>
                </div>

                {/* Botón */}
                <Link 
                  href={servicio.href}
                  className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105"
                >
                  Ver Detalles
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cursos disponibles */}
        <div className="mt-16">
          <h3 className="text-3xl font-lora-bold-normal text-gray-900 mb-8 text-center">
            Cursos Disponibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((curso) => (
              <div key={curso.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={curso.image} 
                    alt={curso.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-lora-semibold text-gray-900 mb-2">
                    {curso.title}
                  </h4>
                  <p className="text-gray-600 mb-3 text-sm">
                    {curso.resumen}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{curso.duracion}</span>
                    <span className="text-xl font-bold text-purple-600">{curso.price}</span>
                  </div>
                  <Link 
                    href={`/cursos/${curso.slug}`}
                    className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Ver Curso
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

