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
        id: 'holistica-basica',
        name: "Sesión Básica",
        description: "Sesión individual con técnicas básicas de sanación",
        price: 120,
        duration: "60 min",
        includes: [
          "Diagnóstico energético inicial",
          "Técnicas de radiestesia básica",
          "Orientación personalizada",
          "Recomendaciones para casa"
        ]
      },
      {
        id: 'holistica-completa',
        name: "Sesión Completa",
        description: "Sesión integral con todas las herramientas terapéuticas",
        price: 180,
        duration: "90 min",
        includes: [
          "Diagnóstico energético completo",
          "Péndulo hebreo avanzado",
          "Tarot terapéutico",
          "Técnicas de psicología moderna",
          "Plan de seguimiento personalizado",
          "Audio de la sesión"
        ],
        popular: true
      },
      {
        id: 'holistica-intensiva',
        name: "Proceso Intensivo",
        description: "Paquete de 4 sesiones para proceso profundo de transformación",
        price: 600,
        originalPrice: 720,
        duration: "4 sesiones de 90 min",
        includes: [
          "4 sesiones completas",
          "Seguimiento entre sesiones",
          "Material de apoyo digitalizado",
          "Consultas por WhatsApp",
          "Ritual de cierre personalizado"
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
        name: "1 Pregunta Rapida",
        description: "Respuesta clara y directa a una pregunta específica",
        price: 15,
        duration: "15 min",
        includes: [
          "Respuesta Si o No",
          "Respuesta inmediata",
          "Orientación puntual",
          "Mensaje de cierre"
        ]
      },
       {
        id: 'tarot-completa',
        name: "Sesión Tarot con Enfoque Terapuetico",
        description: "Consulta integral con enfoque terapéutico completo",
        price: 70,
        duration: "1 hora",
        includes: [
          "Lectura completa y profunda",
          "Análisis de patrones inconscientes",
          "Trabajo con bloqueos emocionales",
          "Plan de acción personalizado",
          "2 Lectura de Seguimiento  con 10% descuento en el  Año",
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
          "1 Lectura de Seguimiento  con 10% descuento en el  Año",
          "Múltiples preguntas",
          "Identificación de patrones",
          "Guía personalizada",
          "Recomendaciones específicas"
        ],
       
      },
     
      {
        id: 'tarot-15-minutos-rapida',
        name: "Sesion 15 Minutos",
        description: "Respuesta clara y directa a una pregunta específica",
        price: 30,
        duration: "",
        includes: [
          "Varias pregunta concretas",
          "Respuesta inmediata",
          "Orientación puntual",
          "Mensaje de cierre"
        ]
      },
      // Manteniendo el paquete anual como opción premium
       {
         id: 'tarot-anual',
         name: "Lectura Anual Completa",
         description: "Predicciones y guía energética para todo el año",
         price: 85,
         duration: "2  horas ",
         includes: [
           "Tirada anual mes por mes",
           "Rituales estacionales",
           "Lectura de Seguimiento 10% descuento a mitad de Año",
           "Material Digital de Apoyo",
           "Tratamiento Incluido de Flores de bach y california personalizada"
         ]
       }
    ]
  },
  
  // psico: {
  //   id: 'psico',
  //   name: "Psico Educación Consciente",
  //   description: "Talleres y cursos orientados a lograr la comprensión de la consciencia de unidad. La conexión con el ciclo cósmico y comprensión de la unidad universal.",
  //   image: "/images/psico-educacion.jpg",
  //   slug: "psico-educacion-consciente",
  //   packages: [
  //     {
  //       id: 'psico-individual',
  //       name: "Sesión Individual",
  //       description: "Sesión personalizada de psico-educación consciente",
  //       price: 90,
  //       duration: "60 min",
  //       includes: [
  //         "Evaluación de consciencia personal",
  //         "Técnicas de expansión consciente",
  //         "Material educativo digital",
  //         "Ejercicios prácticos personalizados"
  //       ]
  //     },
  //     {
  //       id: 'psico-taller',
  //       name: "Taller Consciencia Universal",
  //       description: "Taller grupal de conexión cósmica y consciencia",
  //       price: 150,
  //       duration: "3 horas",
  //       includes: [
  //         "Taller teórico-práctico completo",
  //         "Ejercicios grupales de conexión",
  //         "Material completo digital",
  //         "Certificado de participación",
  //         "Grupo de práctica continua"
  //       ],
  //       popular: true
  //     },
  //     {
  //       id: 'psico-curso',
  //       name: "Curso Completo (8 semanas)",
  //       description: "Programa completo de transformación consciente",
  //       price: 800,
  //       originalPrice: 1200,
  //       duration: "8 sesiones de 2 horas",
  //       includes: [
  //         "8 módulos de transformación",
  //         "Material completo del curso",
  //         "Sesiones grupales y seguimiento",
  //         "Certificación avanzada",
  //         "Comunidad exclusiva de práctica",
  //         "3 meses de seguimiento post-curso"
  //       ]
  //     }
  //   ]
  // },
  
  pendulo: {
    id: 'pendulo',
    name: "Péndulo Hebreo",
    description: "La terapia del péndulo hebreo es una técnica avanzada de radiestesia. Utiliza este péndulo para diagnosticar y tratar, trabajando específicamente en la limpieza energética y sanación.",
    image: "/images/pendulo-hebreo.jpg",
    slug: "pendulo-hebreo",
    packages: [
      {
        id: 'pendulo-sanacion',
        name: "Sesión de Sanación Completa",
        description: "Limpieza y Curaciòn Energetica Integrativa (Tratamiento Base)",
        price: 285,
        duration: "5 sesiones",
        includes: [
          "Diagnóstico energético completo",
          "Limpieza profunda de bloqueos",
          "Equilibrio de todos los chakras",
          "Protección energética avanzada",
          "Instrucciones de mantenimiento"
        ],
        popular: true
      },
      {
        id: 'pendulo-hogar',
        name: "Limpieza Energética de Lugares, Negocios y  Hogar",
        description: "Servicio a domicilio para limpieza espacial",
        price: 300,
        duration: "2 horas",
        includes: [
          "Diagnóstico energético del espacio",
          "Limpieza completa de la vivienda",
          "Protección de todos los ambientes",
          "Ritual de consagración del hogar",
          "Kit de mantenimiento energético"
        ]
      }
    ]
  }
};