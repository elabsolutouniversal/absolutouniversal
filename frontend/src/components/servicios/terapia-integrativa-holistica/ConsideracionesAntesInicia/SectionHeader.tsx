// components/sanacion/SectionHeader.tsx
'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="relative inline-block">
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          {title}
        </span>
        
        {/* Decoración animada debajo del título */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        />
        
        {/* Partículas decorativas */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-6 -right-6 w-8 h-8 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-6 -left-6 w-10 h-10 bg-pink-500/20 rounded-full blur-xl"
        />
      </h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}