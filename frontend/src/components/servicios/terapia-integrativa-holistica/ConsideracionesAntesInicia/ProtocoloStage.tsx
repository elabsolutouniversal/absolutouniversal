// components/consideraciones/ProtocolStage.tsx
'use client'

import React from 'react'

interface ProtocolStageProps {
  index: number
  title: string
  paragraphs: string[]
}

export default function ProtocolStage({ index, title, paragraphs }: ProtocolStageProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#8B6048] to-brand-dark text-white font-bold text-base sm:text-lg shadow">
          {index + 1}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#3f2975]">{title}</h3>
        <div className="text-brand-medium">
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-3 text-sm sm:text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
