'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Heart, Leaf, Sparkles } from 'lucide-react'
import { consideracionesData } from '@/data/servicios/terapia-holistica-integrativa/consideracionesTratamiento'
import { InfoCard } from './InfoCard'

export default function ConsideracionesTratamientoHolistico() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:px-8 lg:px-12 bg-white">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-1 font-serif text-[#1f2747] leading-tight">
          {consideracionesData.title}
        </h1>
        <p className="text-base text-gray-500 max-w-2xl mx-auto">
          {consideracionesData.subtitle}
        </p>
      </motion.div>

      {/* Aviso importante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12 p-5 bg-[#fff9f0] border border-[#f4e1c4] rounded-2xl flex gap-4 items-start"
        role="alert"
        aria-label="Aviso importante"
      >
        <div className="flex-shrink-0">
          <AlertTriangle className="w-6 h-6 text-[#d18f00]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-[#2a2f55] mb-1">
            {consideracionesData.warning.title}
          </h3>
          <p className="text-sm text-gray-700">
            {consideracionesData.warning.content}
          </p>
        </div>
      </motion.div>

      {/* Puntos clave */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {consideracionesData.essentialPoints.map(point => (
          <InfoCard
            key={point.id}
            title={point.title}
            content={point.content}
            icon={
              point.id === 'compromiso' ? <Clock className="w-5 h-5" aria-hidden="true" /> :
              point.id === 'actitud' ? <Heart className="w-5 h-5" aria-hidden="true" /> :
              point.id === 'complemento' ? <Leaf className="w-5 h-5" aria-hidden="true" /> :
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            }
            isImportant={point.isImportant}
          />
        ))}
      </div>

      {/* Protocolo de sanación */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl p-10 bg-gradient-to-br from-white to-[#f5f7fc] shadow-lg border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-center mb-6 font-serif text-[#5f3dc4]">
          {consideracionesData.processOverview.title}
        </h2>
        <div className="space-y-10">
          {consideracionesData.processOverview.stages.map((stage, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-400 text-white font-bold text-lg shadow">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-[#3f2975]">
                  {stage.title}
                </h3>
                <div className="text-gray-700">
                  {stage.content.map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}