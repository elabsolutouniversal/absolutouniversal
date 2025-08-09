import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function TiendaCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-lora-bold-normal text-white mb-6">
          ¿Tienes Preguntas?
        </h2>
        
        <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Estamos aquí para ayudarte a encontrar el servicio perfecto para tu crecimiento personal y espiritual. 
          Contáctanos para una consulta gratuita.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-lora-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-purple-100 mb-4">Consulta rápida y directa</p>
            <a 
              href="https://wa.me/51962305362?text=Hola! Me gustaría consultar sobre los servicios de la tienda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-lora-semibold text-white mb-2">Teléfono</h3>
            <p className="text-purple-100 mb-4">Llamada directa</p>
            <a 
              href="tel:+51962305362"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Llamar Ahora
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-lora-semibold text-white mb-2">Email</h3>
            <p className="text-purple-100 mb-4">Consulta detallada</p>
            <a 
              href="mailto:info@absolutouniversal.com"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-lora-semibold text-white mb-4">
            Horarios de Atención
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-100">
            <div>
              <p className="font-medium">Lunes - Viernes</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Sábados</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <p className="text-purple-100 mt-4">
            <MapPin className="w-4 h-4 inline mr-2" />
            Consultas presenciales y virtuales disponibles
          </p>
        </div>
      </div>
    </section>
  );
}

