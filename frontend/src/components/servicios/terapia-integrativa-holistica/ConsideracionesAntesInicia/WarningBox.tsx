// components/consideraciones/WarningBox.tsx
'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

interface WarningBoxProps {
  title: string
  content: string
}

export default function WarningBox({ title, content }: WarningBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-10 p-4 sm:p-5 bg-[#fff9f0] border border-[#f4e1c4] rounded-2xl flex gap-3 items-start"
      role="alert"
      aria-label={title}
    >
      <div className="flex-shrink-0 mt-0.5">
        <AlertTriangle className="w-5 h-5 text-[#d18f00]" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-[#2a2f55] mb-1 text-sm sm:text-base">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  )
}
