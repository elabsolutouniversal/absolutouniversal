// src/data/therapies.ts
import type { TherapiesData } from '../../types/therapy.types';

export const therapiesData: TherapiesData = {
  holistica: {
    id: 'holistica',
    name: "Sanación Integrativa Holística",
    description: "Combino recursos de la psicología moderna con radiestesia mediante péndulo hebreo y Tarot terapéutico para liberar bloqueos y guiarte hacia un proceso de sanación integral.",
    image: "/images/sanacion-holistica.jpg",
    slug: "sanacion-integrativa-holistica",
   packages: [
      {
        id: 'pendulo-sanacion',
        name: "Sesión de Sanación Inicial  Basica",
        description: "Limpieza y Curación Energética Integrativa (Tratamiento Base)",
        price: 285,
        duration: "5 sesiones tratamiento base",
        includes: [
          "Diagnóstico energético completo",
          "Limpieza  Inicial de bloqueo Energeticos",
          "Equilibrio de todos los chakras",
          "Protección energética avanzada",
          "Instrucciones de mantenimiento"
        ],
        popular: true
      },
      {
        id: 'pendulo-hogar',
        name: "Limpieza Energética de Lugares, Negocios y Hogar",
        description: "Servicio a domicilio para limpieza espacial",
        price: 250,
        duration: "2 horas",
        includes: [
          "Diagnóstico energético del espacio",
          "Limpieza completa de la vivienda",
          "Protección de todos los ambientes",
          "Ritual de consagración del hogar",
          "Kit de mantenimiento energético"
        ]
      },
      {
        id: 'retiro-danos-amarres',
        name: "Limpieza y Sanación Energética Integral contra Daños, Brujería, Amarres y Trabajos de Magia",
        description: "Combinación poderosa: se eliminan influencias negativas externas (daños, brujería y amarres) y se integra una sanación energética profunda para restaurar, proteger y alinear tu campo energético en su totalidad.",
        price: 500,
        duration: "7 sesiones de  tratamiento",
        includes: [
          "Sesión de Sanación Energética Completa (como en 'Sesión de Sanación Completa')",
          "Retiro de daños energéticos, brujería y amarres",
          "Limpieza profunda de bloqueos y ataduras",
          "Reequilibrio de chakras y campo áurico",
          "Protección energética reforzada y personalizada",
          "Ritual de cierre y fortalecimiento",
          "Guía de mantenimiento y seguimiento post sesión"
        ]
      }
    ]
  },
  
  tarot: {
    id: 'tarot',
    name: "Tarot Predictivo con Enfoque Terapéutico",
    description: "Sesiones de Tarot para orientación, toma de decisiones y guía espiritual. El Tarot no dicta tu destino, te muestra cómo estás creándolo, para que puedas transformarlo.",
    image: "/images/tarot-terapeutico.jpg",
    slug: "tarot-predictivo-terapeutico",
    packages: [
      {
        id: 'tarot-rapida-15',
        name: "1 Pregunta Rápida",
        description: "Respuesta clara y directa a una pregunta específica",
        price: 15,
        duration: "15 min",
        includes: [
          "Respuesta Sí o No",
          "Respuesta inmediata",
          "Orientación puntual",
          "Mensaje de cierre"
        ]
      },
      {
        id: 'tarot-completa',
        name: "Sesión Tarot con Enfoque Terapéutico",
        description: "Consulta integral con enfoque terapéutico completo",
        price: 70,
        duration: "1 hora",
        includes: [
          "Lectura completa y profunda",
          "Análisis de patrones inconscientes",
          "Trabajo con bloqueos emocionales",
          "Plan de acción personalizado",
          "2 Lecturas de Seguimiento con 10% descuento en el año",
          "Material de apoyo incluido"
        ],
        popular: true
      },
      {
        id: 'tarot-media',
        name: "Sesión Media Hora",
        description: "Exploración profunda de tu situación actual",
        price: 50,
        duration: "30 min",
        includes: [
          "Análisis detallado",
          "1 Lectura de Seguimiento con 10% descuento en el año",
          "Múltiples preguntas",
          "Identificación de patrones",
          "Guía personalizada",
          "Recomendaciones específicas"
        ]
      },
      {
        id: 'tarot-15-minutos-rapida',
        name: "Sesión 15 Minutos",
        description: "Respuesta clara y directa a varias preguntas específicas",
        price: 30,
        duration: "15 min",
        includes: [
          "Varias preguntas concretas",
          "Respuesta inmediata",
          "Orientación puntual",
          "Mensaje de cierre"
        ]
      },
      {
        id: 'tarot-anual',
        name: "Lectura Anual Completa",
        description: "Predicciones y guía energética para todo el año",
        price: 85,
        duration: "2 horas",
        includes: [
          "Tirada anual mes por mes",
          "Rituales estacionales",
          "Lectura de Seguimiento 10% descuento a mitad de año",
          "Material Digital de Apoyo",
          "Tratamiento incluido de Flores de Bach y California personalizado"
        ]
      }
    ]
  },
  
  pendulo: {
    id: 'pendulo',
    name: "Péndulo Hebreo",
    description: "La terapia del péndulo hebreo es una técnica avanzada de radiestesia. Utiliza este péndulo para diagnosticar y tratar, trabajando específicamente en la limpieza energética y sanación.",
    image: "/images/pendulo-hebreo.jpg",
    slug: "pendulo-hebreo",
    packages: [
      {
        id: 'pendulo-sanacion',
        name: "Sesión de Sanación Inicial  Basica",
        description: "Limpieza y Curación Energética Integrativa (Tratamiento Base)",
        price: 285,
        duration: "5 sesiones",
        includes: [
          "Diagnóstico energético completo",
          "Limpieza  Inicial de bloqueo Energeticos",
          "Equilibrio de todos los chakras",
          "Protección energética avanzada",
          "Instrucciones de mantenimiento"
        ],
        popular: true
      },
      {
        id: 'pendulo-hogar',
        name: "Limpieza Energética de Lugares, Negocios y Hogar",
        description: "Servicio a domicilio para limpieza espacial",
        price: 250,
        duration: "2 horas",
        includes: [
          "Diagnóstico energético del espacio",
          "Limpieza completa de la vivienda",
          "Protección de todos los ambientes",
          "Ritual de consagración del hogar",
          "Kit de mantenimiento energético"
        ]
      },
      {
        id: 'retiro-danos-amarres',
        name: "Limpieza y Sanación Energética Integral contra Daños, Brujería, Amarres y Trabajos de Magia",
        description: "Combinación poderosa: se eliminan influencias negativas externas (daños, brujería y amarres) y se integra una sanación energética profunda para restaurar, proteger y alinear tu campo energético en su totalidad.",
        price: 500,
        duration: "7 Sesiones ",
        includes: [
          "Sesión de Sanación Energética Completa (como en 'Sesión de Sanación Completa')",
          "Retiro de daños energéticos, brujería y amarres",
          "Limpieza profunda de bloqueos y ataduras",
          "Reequilibrio de chakras y campo áurico",
          "Protección energética reforzada y personalizada",
          "Ritual de cierre y fortalecimiento",
          "Guía de mantenimiento y seguimiento post sesión"
        ]
      }
    ]
  }
};