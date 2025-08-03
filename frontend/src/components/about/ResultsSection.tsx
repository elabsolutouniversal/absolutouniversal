// components/about/ResultsSection.tsx
import React from 'react';
import { aboutData } from '@/data/about/aboutdata';

export const ResultsSection: React.FC = () => {
  const { results } = aboutData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
            {results.title}
          </h2>
          
          {/* Features */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="text-purple-600 text-3xl mr-4">✨</span>
                Sesiones 100% Personalizadas
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nada de protocolos genéricos. Cada sesión diseñada específicamente para TU proceso único, 
                adaptándome a tus necesidades particulares y ritmo personal de transformación.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="text-blue-600 text-3xl mr-4">🔗</span>
                Técnicas que Nadie Más Integra
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {results.techniques.map((technique, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <p className="text-gray-700 text-center font-medium">
                      {technique}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results Categories */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Resultados Tangibles en 3 Dimensiones
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {results.categories.map((category, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{category.icon}</div>
                      <h4 className="text-2xl font-bold text-gray-900">
                        {category.category}
                      </h4>
                    </div>
                    
                    <ul className="space-y-4">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <span className="text-purple-500 mt-1">●</span>
                          <span className="text-gray-700 leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Promise Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-12 text-gray-900">Mi Promesa Para Ti</h3>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {aboutData.promise.quotes.map((quote, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 lg:p-12 relative border border-amber-200">
                    <div className="absolute top-4 left-6 text-4xl text-amber-400 font-serif opacity-60"> &quot;</div>
                    <div className="absolute bottom-4 right-6 text-4xl text-amber-400 font-serif opacity-60">&quot;</div>
                    <blockquote className="text-xl lg:text-2xl font-semibold text-gray-800 relative z-10 italic">
                      {quote}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-purple-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-colors duration-300 shadow-lg">
                Comienza Tu Transformación
              </button>
              <p className="text-gray-600 mt-4">Primera sesión con 15% de descuento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};