'use client'

import { motion } from 'framer-motion'
import { InfoItem } from '@/data/servicios/terapia-holistica-integrativa/sanacion-integrativa';

interface InfoCardProps {
  item: InfoItem
  index: number
}

export default function InfoCard({ item, index }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className={`
        relative p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
        ${item.highlight 
          ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20' 
          : 'bg-white/5 border border-white/10'
        }
        hover:shadow-lg sm:hover:shadow-2xl hover:shadow-purple-500/10
        transition-all duration-300
      `}
    >
      {item.highlight && (
        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold">
          Importante
        </div>
      )}
      
      {item.icon && (
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-pulse">
          {item.icon}
        </div>
      )}
      
      {item.title && (
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          {item.title}
        </h3>
      )}
      
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        {item.content}
      </p>
      
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}