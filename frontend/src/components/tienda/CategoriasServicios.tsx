import React from 'react';
import Link from 'next/link';
import { Star, BookOpen, Heart, Sparkles } from 'lucide-react';

const categorias = [
  {
    id: 'tarot',
    nombre: 'Tarot Terapéutico',
    descripcion: 'Lecturas personalizadas para autoconocimiento y crecimiento',
    icono: Star,
    color: 'from-purple-500 to-purple-600',
    href: '/servicios/tarot-predictivo'
  },
  {
    id: 'cursos',
    nombre: 'Cursos y Educación',
    descripcion: 'Formación especializada en técnicas espirituales',
    icono: BookOpen,
    color: 'from-blue-500 to-blue-600',
    href: '/psico-educacion'
  },
  {
    id: 'terapia',
    nombre: 'Terapia Holística',
    descripcion: 'Sesiones personalizadas de sanación integral',
    icono: Heart,
    color: 'from-pink-500 to-pink-600',
    href: '/servicios/terapia-integrativa-holistica'
  },
  {
    id: 'productos',
    nombre: 'Productos Espirituales',
    descripcion: 'Herramientas y elementos para tu práctica',
    icono: Sparkles,
    color: 'from-yellow-500 to-yellow-600',
    href: '/servicios/pendulo'
  }
];

export default function CategoriasServicios() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora-bold-normal text-gray-900 mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestros servicios organizados por especialidad para encontrar exactamente lo que necesitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria) => {
            const IconComponent = categoria.icono;
            return (
              <Link 
                key={categoria.id} 
                href={categoria.href}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                  <div className={`bg-gradient-to-r ${categoria.color} p-6 text-white`}>
                    <IconComponent className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-lora-semibold text-center mb-2">
                      {categoria.nombre}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">
                      {categoria.descripcion}
                    </p>
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                        Explorar
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

