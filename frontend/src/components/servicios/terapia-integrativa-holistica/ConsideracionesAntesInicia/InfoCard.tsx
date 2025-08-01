'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  content: string
  icon: ReactNode
  isImportant?: boolean
}

export function InfoCard({ title, content, icon, isImportant = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={`
        bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col gap-4
        border ${isImportant ? 'border-purple-500' : 'border-purple-200'}
      `}
      role="region"
      aria-label={title}
    >
      <div className="flex items-start gap-4">
        <div
          className={`
            w-11 h-11 flex items-center justify-center rounded-full flex-shrink-0
            ${isImportant ? 'bg-purple-100 text-purple-700' : 'bg-purple-50 text-purple-500'}
          `}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={`font-semibold text-xl ${isImportant ? 'text-[#1f2747]' : 'text-[#2a2f55]'}`}>
              {title}
            </h3>
            {isImportant && (
              <span className="inline-block text-xs font-medium uppercase tracking-wide bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                Relevante
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  )
}