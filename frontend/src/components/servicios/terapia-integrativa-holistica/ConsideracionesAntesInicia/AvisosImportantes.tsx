// components/servicios/terapia-integrativa-holistica/ConsideracionesAntesInicia/AvisosImportantesSection.tsx
'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock, Heart, Sparkles, Leaf } from 'lucide-react'
import { consideracionesData } from '@/data/servicios/terapia-holistica-integrativa/consideracionesTratamiento'

export default function AvisosImportantesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          {consideracionesData.title}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {consideracionesData.subtitle}
        </p>
      </motion.div>

      {/* Aviso importante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg"
      >
        <div className="flex gap-4">
          <AlertCircle className="flex-shrink-0 w-6 h-6 text-amber-600 mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-2 text-gray-900">
              {consideracionesData.warning.title}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {consideracionesData.warning.content}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Puntos clave */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {consideracionesData.essentialPoints.map((point, index) => {
          let icon;
          switch(point.id) {
            case 'compromiso':
              icon = <Clock className="w-6 h-6 text-purple-600" />;
              break;
            case 'actitud':
              icon = <Heart className="w-6 h-6 text-purple-600" />;
              break;
            case 'complemento':
              icon = <Leaf className="w-6 h-6 text-purple-600" />;
              break;
            case 'acompanamiento':
              icon = <Sparkles className="w-6 h-6 text-purple-600" />;
              break;
            default:
              icon = <Sparkles className="w-6 h-6 text-purple-600" />;
          }

          return (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-xl border-2 hover:shadow-lg transition-all ${
                point.isImportant ? 'border-purple-300 bg-purple-50' : 'border-purple-100'
              }`}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                {point.title}
                {point.isImportant && (
                  <span className="ml-2 text-xs font-medium text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
                    Importante
                  </span>
                )}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.content}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Protocolo de sanación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-12"
      >
        <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
          {consideracionesData.processOverview.title}
        </h3>
        
        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
          <div className="space-y-8">
            {consideracionesData.processOverview.stages.map((stage, index) => (
              <div key={index}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-3 text-gray-900">
                      {stage.title}
                    </h4>
                    <div className="space-y-4">
                      {stage.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {index < consideracionesData.processOverview.stages.length - 1 && (
                  <div className="ml-6 border-l-2 border-purple-200 h-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}