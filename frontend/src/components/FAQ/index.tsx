'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

interface Props {
  faqs: FAQItem[];
  titulo?: string;
  subtitulo?: string;
}

export default function FAQSection({
  faqs,
  titulo = 'Preguntas frecuentes',
  subtitulo = 'Resolvemos tus dudas más comunes',
}: Props) {
  return (
    <section className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
          {titulo}
        </h2>
        {subtitulo && (
          <p className="text-purple-700 max-w-2xl mx-auto font-medium">{subtitulo}</p>
        )}
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-purple-200 rounded-2xl bg-white shadow-lg border border-purple-100">
        {faqs.map((f, i) => (
          <FAQRow key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FAQRow({ pregunta, respuesta }: FAQItem) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none hover:bg-purple-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-purple-800">{pregunta}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-600 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`px-6 pb-4 text-purple-700 text-sm transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {respuesta}
      </div>
    </div>
  );
}
