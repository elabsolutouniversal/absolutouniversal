// components/about/OfferSection.tsx
import React from 'react';
import { aboutData } from '@/data/about/aboutdata';

export const OfferSection: React.FC = () => {
  const { offer } = aboutData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 text-gray-900">
            {offer.title}
          </h2>
          
          {/* Urgency Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-800">
              {offer.urgency.subtitle}
            </h3>
            <p className="text-lg text-center mb-8 text-gray-600">
              Cada mes que pasa es otro ciclo de:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {offer.urgency.consequences.map((consequence, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                  <div className="text-2xl mb-2 text-red-500">➠</div>
                  <p className="text-red-700 font-medium">{consequence}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-center text-purple-700 italic font-medium">
              Si has llegado hasta aquí, no es casualidad. Tu alma está lista para el siguiente nivel.
            </p>
          </div>
          
          {/* Main Offer */}
          <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-3xl p-8 lg:p-12 text-white mb-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  {offer.mainOffer.title}
                </h3>
                <h4 className="text-xl lg:text-2xl mb-8 text-purple-100">
                  {offer.mainOffer.subtitle}
                </h4>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {offer.mainOffer.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-400 text-xl mt-1 flex-shrink-0">✅</span>
                      <p className="text-purple-100 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🎯</div>
                    <button className="bg-white text-purple-700 font-bold text-xl px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg w-full mb-4">
                      {offer.mainOffer.cta}
                    </button>
                    <p className="text-purple-200 text-sm italic">
                      {offer.mainOffer.limitation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Exclusive Benefits */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">
              Beneficios Exclusivos de Mi Método
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offer.exclusiveBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-purple-500 text-lg mt-1 flex-shrink-0">✨</span>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
            
            {/* Final CTA */}
            <div className="text-center mt-12">
              <div className="bg-gray-50 rounded-xl p-6 inline-block">
                <p className="text-gray-600 mb-4">¿Listo para tu transformación?</p>
                <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300">
                  Solicita Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};