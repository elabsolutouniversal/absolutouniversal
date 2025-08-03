// components/about/CommitmentContactSection.tsx
import React from 'react';
import { aboutData } from '@/data/about/aboutdata';

export const CommitmentContactSection: React.FC = () => {
  const { commitment, contact } = aboutData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Commitment Section */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
              {commitment.title}
            </h2>
            <p className="text-xl text-center mb-12 text-gray-600 max-w-4xl mx-auto">
              {commitment.subtitle}
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-12 border border-purple-100">
              <ul className="space-y-6 max-w-4xl mx-auto">
                {commitment.commitments.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="text-purple-600 text-2xl mt-1 flex-shrink-0">●</span>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Final Quote */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto relative border border-amber-200">
                <div className="absolute top-4 left-6 text-5xl text-amber-400 font-serif opacity-60"> &quot;</div>
                <div className="absolute bottom-4 right-6 text-5xl text-amber-400 font-serif opacity-60">&quot;</div>
                <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 relative z-10 mb-6">
                  {commitment.finalQuote}
                </blockquote>
                <p className="text-lg font-semibold text-purple-700">
                  - Lic. Nunash Dahiana Velásquez Guerrero
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Información de Contacto
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* WhatsApp */}
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4 text-green-500">📱</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">WhatsApp</h4>
                <a 
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="text-purple-700 hover:text-purple-800 transition-colors duration-300 font-medium"
                >
                  {contact.whatsapp}
                </a>
              </div>
              
              {/* Email */}
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4 text-blue-500">📧</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Email</h4>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-purple-700 hover:text-purple-800 transition-colors duration-300 text-sm"
                >
                  {contact.email}
                </a>
              </div>
              
              {/* Instagram */}
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4 text-pink-500">📸</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Instagram</h4>
                <a 
                  href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                  className="text-purple-700 hover:text-purple-800 transition-colors duration-300"
                >
                  {contact.instagram}
                </a>
              </div>
              
              {/* Location */}
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4 text-yellow-500">📍</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Ubicación</h4>
                <p className="text-gray-600 text-sm">{contact.address}</p>
              </div>
            </div>
            
            {/* Schedule */}
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Horarios de Atención</h4>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <p className="text-lg text-gray-700">{contact.schedule.weekdays}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <p className="text-lg text-gray-700">{contact.schedule.saturday}</p>
                </div>
              </div>
            </div>
            
            {/* Main CTA Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-700 to-blue-700 text-white font-bold text-xl px-12 py-4 rounded-lg hover:from-purple-800 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Agenda Tu Transformación Ahora
              </button>
              <p className="text-gray-600 mt-4">Respuesta garantizada en menos de 12 horas</p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-12">
            <div className="h-px bg-gray-200 max-w-md mx-auto mb-6"></div>
            <p className="text-gray-500">
              © 2024 El Absoluto Universal - Especialistas en Transformación Integral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};