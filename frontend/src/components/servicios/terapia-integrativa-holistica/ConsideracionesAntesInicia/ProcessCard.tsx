// components/sanacion/ProcessCard.tsx
'use client'

import { motion } from 'framer-motion'
import { InfoItem } from '@/data/servicios/terapia-holistica-integrativa/sanacion-integrativa';

interface ProcessCardProps {
  item: InfoItem
  index: number
  total: number
}

export default function ProcessCard({ item, index, total }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      {/* Línea conectora */}
      {index < total - 1 && (
        <div className="absolute top-14 left-6 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-30" />
      )}
      
      <div className="flex gap-6">
        {/* Número del paso */}
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30"
          >
            {index + 1}
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-ping opacity-20" />
        </div>
        
        {/* Contenido */}
        <div className="flex-1 pb-12">
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {item.content}
            </p>
            
            {/* Decoración de esquina */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
              <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-purple-500 rounded-tr-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}