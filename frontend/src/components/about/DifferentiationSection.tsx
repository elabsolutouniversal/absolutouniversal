// components/about/DifferentiationSection.tsx
import React from 'react';
import { aboutData } from '@/data/about/aboutdata';

export const DifferentiationSection: React.FC = () => {
  const { differentiation } = aboutData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
            {differentiation.title}
          </h2>
          <p className="text-xl text-center mb-16 text-gray-600">
            {differentiation.subtitle}
          </p>
          
          {/* Comparison Grid */}
          <div className="mb-16">
            {/* Negative Examples */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {differentiation.items.filter(item => item.type === 'negative').map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 relative">
                  <div className="absolute top-4 right-4 text-red-400 text-xl">✕</div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 pr-8">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Separator */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4">
                <div className="h-px bg-gray-300 w-16"></div>
                <span className="text-gray-500 font-medium">VS</span>
                <div className="h-px bg-gray-300 w-16"></div>
              </div>
            </div>
            
            {/* Positive Method */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="text-green-500 text-2xl">✓</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Mi Método: La Síntesis Definitiva
                  </h3>
                </div>
                <p className="text-gray-600">Una integración única de ciencia, intuición y transformación</p>
              </div>
              
              {/* Method Details */}
              <div className="grid lg:grid-cols-3 gap-8">
                {differentiation.method.map((method, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{method.number}</div>
                      <h4 className="text-xl font-bold text-purple-700">
                        {method.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {method.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="text-purple-500 mr-2 mt-1 text-xs">●</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para experimentar la diferencia?
            </h3>
            <p className="mb-6 text-purple-100">
              Descubre un enfoque que va más allá de lo convencional
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
              Agenda tu Primera Sesión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};