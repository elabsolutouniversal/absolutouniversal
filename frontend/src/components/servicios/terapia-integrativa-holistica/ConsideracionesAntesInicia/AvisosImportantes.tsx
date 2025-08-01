// components/servicios/terapia-integrativa-holistica/ConsideracionesAntesInicia/AvisosImportantesSection.tsx
'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Clock, Heart, Sparkles } from 'lucide-react'
import { sanacionIntegrativaData } from '@/data/servicios/terapia-holistica-integrativa/sanacion-integrativa'

// Mapeo de iconos
const iconMap: { [key: string]: React.ReactNode } = {
  '🌱': <Sparkles className="w-6 h-6 text-purple-600" />,
  '⏰': <Clock className="w-6 h-6 text-purple-600" />,
  '💫': <Heart className="w-6 h-6 text-purple-600" />
}

export default function AvisosImportantesSection() {
  // Obtener las secciones de la data
  const infoCardsSection = sanacionIntegrativaData.find(section => section.type === 'info-cards')
  const processSection = sanacionIntegrativaData.find(section => section.type === 'process')
  const disclaimerSection = sanacionIntegrativaData.find(section => section.type === 'disclaimer')

  return (
    <section className="py-16">
      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          {infoCardsSection?.title || 'Prepárate para tu proceso de sanación'}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {infoCardsSection?.subtitle || 'Lo que necesitas saber antes de tu primera sesión'}
        </p>
      </motion.div>

      {/* Tarjetas informativas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {infoCardsSection?.items?.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-6 rounded-xl border hover:shadow-lg transition-all ${
              item.highlight ? 'border-purple-200' : 'border-purple-100'
            } hover:border-purple-300`}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              {item.icon && iconMap[item.icon] ? iconMap[item.icon] : <Sparkles className="w-6 h-6 text-purple-600" />}
            </div>
            <h3 className="font-semibold text-lg mb-3 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Proceso terapéutico */}
      {processSection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
            {processSection.title}
          </h3>
          {processSection.subtitle && (
            <p className="text-gray-600 text-lg text-center mb-8 -mt-4">
              {processSection.subtitle}
            </p>
          )}
          
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <div className="space-y-8">
              {processSection.items?.map((item, index) => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-3 text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  {index < (processSection.items?.length || 0) - 1 && (
                    <div className="ml-6 border-l-2 border-purple-200 h-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Disclaimer */}
      {disclaimerSection && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{disclaimerSection.title}</h4>
                <p className="text-gray-700 leading-relaxed">
                  {disclaimerSection.content}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}