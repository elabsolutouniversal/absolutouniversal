// components/about/MethodDimensionsSection.tsx
import React from 'react';
import Image from 'next/image';
import { aboutData } from '@/data/about/aboutdata';

export const MethodDimensionsSection: React.FC = () => {
  const { methodDimensions, images } = aboutData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
            {methodDimensions.title}
          </h2>
          <p className="text-xl text-center mb-16 text-gray-600 max-w-4xl mx-auto">
            {methodDimensions.subtitle}
          </p>
          
          {/* Hero Image and Intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Técnicas Energéticas Exclusivas
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mi método integra herramientas milenarias con enfoques científicos modernos, 
                como el péndulo hebreo para la liberación de bloqueos energéticos profundos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Liberación de bloqueos ancestrales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Sanación en múltiples dimensiones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Resultados tangibles y duraderos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={images.pendulo}
                alt="Péndulo hebreo - Técnica energética"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
          
          {/* Dimensions Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {methodDimensions.dimensions.map((dimension, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-6 text-center">
                    {dimension.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                    {dimension.title}
                  </h3>
                  
                  {/* Benefits */}
                  <ul className="space-y-4">
                    {dimension.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <span className="text-purple-500 mt-1 text-sm">●</span>
                        <span className="text-gray-700 leading-relaxed text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Experience Stats */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Experiencia Comprobada</h3>
              <p className="text-gray-300">Más de una década transformando vidas</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Años de experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">3,000+</div>
                <div className="text-gray-300">Sesiones realizadas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300">Resultados satisfactorios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};