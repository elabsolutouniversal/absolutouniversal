'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import React from 'react';

export default function ItemAviso({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <CheckCircle className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
      <p className="text-gray-700">{children}</p>
    </motion.div>
  );
}
