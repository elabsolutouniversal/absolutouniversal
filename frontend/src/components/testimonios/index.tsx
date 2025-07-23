'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Testimonio {
  nombre: string;
  rol?: string;
  contenido: string;
  rating?: number;   // 1-5
  fecha?: string;    // 'Jul 2025', etc.
  avatar?: string | null;
}

interface Props {
  testimonios: Testimonio[];
  titulo?: string;
  subtitulo?: string;
  accentClass?: string; // gradiente opcional
  className?: string;
}

export default function TestimoniosSection({
  testimonios,
  titulo = 'Testimonios',
  subtitulo = 'Lo que dicen nuestros clientes',
  accentClass = 'from-pink-500 to-purple-500',
  className = '',
}: Props) {
  return (
    <section className={`space-y-10 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {titulo}
        </h2>
        {subtitulo && (
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitulo}</p>
        )}
        <div className={`h-1 w-24 mx-auto mt-6 bg-gradient-to-r ${accentClass} rounded-full`} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonios.map((t, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            {/* Avatar */}
            {t.avatar && (
              <Image
                src={t.avatar}
                alt={t.nombre}
                className="w-14 h-14 rounded-full object-cover mb-4 mx-auto"
              />
            )}

            {/* Rating */}
            {t.rating && (
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-4 h-4 ${idx < (t.rating ?? 0) ? 'text-pink-500' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            )}

            <p className="text-gray-700 italic mb-4">&ldquo;{t.contenido}&rdquo;</p>
            <h4 className="text-gray-900 font-semibold text-sm">{t.nombre}</h4>
            {t.rol && <p className="text-gray-500 text-xs">{t.rol}</p>}
            {t.fecha && <p className="text-gray-400 text-xs mt-1">{t.fecha}</p>}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
