// src/data/therapies.ts
import type { TherapiesData } from '../../types/therapy.types';

export const therapiesData: TherapiesData = {
  holistica: {
    id: 'holistica',
    name: "Metodo SATHYA",
    subtitle: "Sanacion Transpersonal, Holistica y Akasha",
    description: "",
    image: "/images/sanacion-holistica.jpg",
    slug: "sanacion-integrativa-holistica",
   packages: [
      {
        id: 'pendulo-sanacion',
        name: "Tratamiento de Limpieza Energética Completo",
        description: "Limpieza y Curación Energética Integrativa (Tratamiento Base)",
        price: 245 ,
        pricePEN: 860, // Assuming 1 USD = 3.75 PEN
        duration: "5 sesiones",
        includes: [
          "Diagnóstico energético completo",
          "Limpieza  Inicial de bloqueos Energeticos",
          "Equilibrio de todos los chakras",
          "Reparaciòn de Grietas del Aura y Sellado Aurico",
          "Lectura de Tarot Terapeutico y Askachico",
          "Protección energética avanzada",
          "Instrucciones de mantenimiento"
        ],
        popular: true
      },
      {
        id: 'pendulo-hogar',
        name: "Limpieza Energética de Lugares, Negocios y Hogar",
        description: "Tratamiento y limpieza energética de hogares y negocios",
        price: 200,
        originalPrice: 200,
        currency: "$",
        currencyPEN: "S/ ",
        pricePEN: 700,
        duration: "2 horas",
        popular: false,
        iconBgColor: 'bg-yellow-400',
        includes: [
          "Diagnóstico energético del espacio",
          "Limpieza completa de la vivienda",
          "Protección de todos los ambientes",
          "Ritual de consagración del hogar",
          "Kit de mantenimiento energético",
        ]
      },
             {
         id: 'retiro-danos-amarres',
         name: "Limpieza y curación energética completa contra daños energéticos profundos , brujería, amarres , y magias.",
         description: "Combinación poderosa: se eliminan influencias negativas externas (daños, brujería y amarres) y se integra una sanación energética profunda para restaurar, proteger y alinear tu campo energético en su totalidad.",
         price: 500,
         pricePEN: 1875.00, // Assuming 1 USD = 3.75 PEN
         duration: "7 sesiones de  tratamiento",
         popular: false,
         iconBgColor: 'bg-fuchsia-500',
                  includes: [
           "Incluye Tratamiento de Limpieza Energetica Inicial",
           "Retiro de daños energéticos, liberación de trabajos de brujería, magias y amarres",
           "Limpieza profunda de bloqueos y ataduras",
           "Protección energética reforzada y personalizada",
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
        pricePEN: 50, // Assuming 1 USD = 3.75 PEN
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
        pricePEN: 245, // Assuming 1 USD = 3.75 PEN
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
        pricePEN: 170, // Assuming 1 USD = 3.75 PEN
        duration: "30 min",
        includes: [
          "Múltiples preguntas",
          "Identificación de patrones Inconscientes - Logra que se den la condiciones optimas para resolucion de cualquier desafio de vida que afrontes como por ejemplo asuntos judiciales, mejorar la economìa . mejorar tus relaciones interpresonales y de pareja , etc",
          "1 Lectura de Seguimiento con 10% descuento en el año",
          "Guía personalizada",
          "Recomendaciones específicas"
        ]
      },
      {
        id: 'tarot-15-minutos-rapida',
        name: "Sesión 15 Minutos",
        description: "Respuesta clara y directa a varias preguntas específicas",
        price: 30,
        pricePEN: 100, // Assuming 1 USD = 3.75 PEN
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
        pricePEN: 297, // Assuming 1 USD = 3.75 PEN
        duration: "2 horas",
        includes: [
          "Tirada anual mes por mes",
          "Rituales estacionales",
          "1 Lectura de Seguimiento 10% descuento a mitad de año",
          "Material  de Apoyo",
          "Tratamiento incluido de Flores de Bach y California personalizado"
        ]
      }
    ]
  },
  
  pendulo: {
    id: 'pendulo',
    name: "Metodo SATHYA",
    subtitle: "Sanacion Ancestral, Transpersonal, Holistica y Akasha",
    description: "",
    image: "/images/sanacion-holistica.jpg",
    slug: "sanacion-integrativa-holistica",
   packages: [
      {
        id: 'pendulo-sanacion',
        name: "Tratamiento de Limpieza Energética Basico",
        description: "Limpieza y Curación Energética Integrativa (Tratamiento Base)",
        price: 245 ,
        pricePEN: 860, // Assuming 1 USD = 3.75 PEN
        duration: "5 sesiones tratamiento base",
        includes: [
          "Diagnóstico energético completo",
          "Limpieza  Inicial de bloqueos Energeticos",
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
        price: 200,
        pricePEN: 700.00, // Assuming 1 USD = 3.75 PEN
        isStartingPrice: true,
        duration: "2 horas",
        popular: false,
        iconBgColor: 'bg-yellow-400',
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
         name: "Limpieza y curación energética completa contra daños energéticos profundos , brujería, amarres , y magias.",
         description: "Combinación poderosa: se eliminan influencias negativas externas (daños, brujería y amarres) y se integra una sanación energética profunda para restaurar, proteger y alinear tu campo energético en su totalidad.",
         price: 500,
         pricePEN: 1875.00, // Assuming 1 USD = 3.75 PEN
         duration: "7 sesiones de  tratamiento",
                  includes: [
           "Incluye Tratamiento de Limpieza Energetica Inicial",
           "Retiro de daños energéticos, liberación de trabajos de brujería, magias y amarres",
           "Limpieza profunda de bloqueos y ataduras",
           "Protección energética reforzada y personalizada",
           "Guía de mantenimiento y seguimiento post sesión"
         ]
      }
    ]
  }
};