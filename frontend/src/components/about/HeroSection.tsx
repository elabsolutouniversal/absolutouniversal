'use client';
import React from 'react';
import Image from 'next/image';
import { aboutData, MethodDimension } from '@/data/about/aboutdata';
import { motion } from 'framer-motion';
import { Diamond } from 'lucide-react';

const SpecialtyPill: React.FC<{ label: string; icon?: React.ReactNode }> = ({
  label,
  icon,
}) => {
  return (
    <div
      role="status"
      aria-label={label}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-gray-200 shadow-sm
                 hover:shadow-md transition-all duration-200 cursor-default
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 active:scale-95"
    >
      <div className="flex-none text-violet-600">
        {icon ? <span className="flex items-center">{icon}</span> : <Diamond className="w-3 h-3" />}
      </div>
      <span className="text-gray-800">{label}</span>
    </div>
  );
};

const DimensionCard: React.FC<{ dimension: MethodDimension }> = ({ dimension }) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-none w-10 h-10 flex items-center justify-center bg-violet-100 text-violet-600 rounded-full">
          <span className="text-lg">{dimension.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{dimension.title}</h3>
          {dimension.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{dimension.subtitle}</p>
          )}
        </div>
      </div>
      <ul className="mt-2 space-y-2 list-inside">
        {dimension.benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="inline-block text-violet-500 mt-1">✔</span>
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const { hero, images, methodDimensions } = aboutData;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-violet-50 py-16 md:py-20">
      {/* Fondos decorativos sutiles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-100 rounded-full opacity-15 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-gray-900 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)' }}
          >
            SOBRE MÍ:{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">
              {hero.title}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-2 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>
        </div>

        {/* Contenido principal */}
        <div className="grid gap-16 lg:grid-cols-2 items-center mb-20">
          {/* Texto y CTA */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="mb-8 text-gray-700 leading-relaxed text-lg">
                {hero.description}
              </p>

              <blockquote className="relative mb-10 pl-6 italic text-gray-700 font-medium text-lg border-l-4 border-violet-300">
                <span className="block">{hero.promise}</span>
                <span
                  className="absolute -left-1 top-0 text-4xl opacity-10 select-none"
                  aria-hidden="true"
                >
                  “
                </span>
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Descubre Mi Método"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-3.5 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-lg">🔍</span> Descubre Mi Método
                </motion.button>
                <p className="text-sm text-gray-500">
                  Respuesta garantizada en menos de 12 horas
                </p>
              </div>
            </motion.div>
          </div>

          {/* Imagen hero */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[480px]"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/50">
                <Image
                  src={images.hero}
                  alt={hero.professionalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-violet-100 to-pink-100 opacity-20 blur-xl mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Info profesional con header morado y cuerpo blanco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-lg mb-16"
        >
          {/* Header gradiente */}
          <div className="px-8 py-6 bg-gradient-to-r from-violet-600 to-fuchsia-500">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {hero.professionalInfo.name}
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-20 bg-white rounded-full" />
              </div>
              <p className="text-xs sm:text-sm mt-3 text-white font-medium uppercase tracking-wider">
                {hero.professionalInfo.credentials}
              </p>
            </div>
          </div>
          {/* Cuerpo */}
          <div className="bg-white px-8 py-8 border border-gray-100">
            <div className="flex flex-wrap justify-center gap-3">
              {hero.professionalInfo.specialties.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <SpecialtyPill label={s} icon={<Diamond className="w-4 h-4" />} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enfoque holístico: dimensiones */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase font-medium text-violet-600 tracking-wider mb-2">
            {methodDimensions.title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {methodDimensions.subtitle}
          </h3>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methodDimensions.dimensions.map((dim, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <DimensionCard dimension={dim} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
