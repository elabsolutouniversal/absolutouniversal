// components/sanacion/Disclaimer.tsx
'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

interface DisclaimerProps {
  title: string
  content: string
}

export default function Disclaimer({ title, content }: DisclaimerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 animate-pulse" />
      
      <div className="relative bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-500/30">
        {/* Icono animado */}
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="absolute top-6 right-6"
        >
          <AlertTriangle className="w-8 h-8 text-amber-400" />
        </motion.div>
        
        {/* Título */}
        <h3 className="text-2xl font-bold mb-4 text-amber-300 flex items-center gap-3">
          <span className="relative">
            {title}
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400"
            />
          </span>
        </h3>
        
        {/* Contenido */}
        <p className="text-gray-200 leading-relaxed text-lg pl-4 border-l-4 border-amber-400/50">
          {content}
        </p>
        
        {/* Decoraciones de esquina */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-400 rounded-tl-xl"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-400 rounded-br-xl"
          />
        </div>
      </div>
    </motion.div>
  )
}