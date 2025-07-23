'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import ItemAviso from './ItemAviso';

export default function AvisosImportantes() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-amber-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 flex items-center relative z-10">
          <Shield className="w-8 h-8 mr-3 text-amber-600" />
          ¿Qué debes saber antes de iniciar?
        </h2>
        <div className="space-y-4 relative z-10">
          <ItemAviso>
            Las primeras sesiones no garantizan resultados inmediatos. Constituyen la base y el inicio de tu proceso,
            abriendo el camino para un tratamiento profundo y personalizado.
          </ItemAviso>
          <ItemAviso>
            La sanación es un proceso gradual y personal; cada persona avanza a su propio ritmo, con acompañamiento
            adaptado a sus necesidades.
          </ItemAviso>
          <ItemAviso>
            Recomendamos venir con mente abierta y disposición al cambio para obtener los mejores resultados.
          </ItemAviso>
        </div>
      </div>
    </motion.section>
  );
}
