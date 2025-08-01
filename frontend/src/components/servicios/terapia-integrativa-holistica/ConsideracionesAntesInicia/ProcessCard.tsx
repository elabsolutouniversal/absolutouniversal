// components/sanacion/ProcessCard.tsx
'use client'

import { motion } from 'framer-motion'
import { InfoItem } from '@/data/servicios/terapia-holistica-integrativa/sanacion-integrativa'

interface ProcessCardProps {
  item: InfoItem
  index: number
  total: number
}

export default function ProcessCard({ item, index, total }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative"
    >
      {/* Contenedor principal */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Número del paso - Versión móvil arriba, desktop a la izquierda */}
        <div className="sm:relative flex justify-center sm:block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/30 mx-auto sm:mx-0"
          >
            {index + 1}
          </motion.div>
          
          {/* Línea conectora vertical para mobile */}
          {index < total - 1 && (
            <div className="sm:hidden absolute top-10 left-1/2 w-0.5 h-full bg-gradient-to-b from-amber-400 to-amber-600 opacity-30 transform -translate-x-1/2" />
          )}
          
          {/* Línea conectora horizontal para desktop */}
          {index < total - 1 && (
            <div className="hidden sm:block absolute top-14 left-6 w-0.5 h-full bg-gradient-to-b from-amber-400 to-amber-600 opacity-30" />
          )}
        </div>
        
        {/* Contenido */}
        <div className="flex-1 pb-8 sm:pb-12">
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/10 hover:border-amber-500/30 transition-colors duration-300 shadow-md"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {item.content}
            </p>
            
            {/* Decoración de esquina */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-10">
              <div className="absolute top-1 right-1 w-12 h-12 sm:top-2 sm:right-2 sm:w-16 sm:h-16 border-t-2 border-r-2 border-amber-500 rounded-tr-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}