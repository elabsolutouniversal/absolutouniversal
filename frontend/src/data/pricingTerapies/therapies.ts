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
        price: 255 ,
        pricePEN: 860, // Assuming 1 USD = 3.75 PEN
        duration: "5 sesiones",
        includes: [
          "Diagnóstico energético completo",
          "Limpieza de la Energias Densas y de Baja Vibración",
          "Desbloqueo y Potenciamiento de los Principales Centros Energéticos - Chakras",
          "Reparaciòn de Grietas del Aura y Sellado Aurico",
          "Lectura de Tarot Terapeutico y Askachico",
          "Protecciones Enérgeticas Avanzadas",
          "Instrucciones de mantenimiento"
        ],
        popular: true
      },
      {
        id: 'pendulo-hogar',
        name: "Limpieza Energética de Lugares, Negocios y Hogar",
        description: "Tratamiento y limpieza energética de hogares y negocios",
        price: 300,
        originalPrice: 200,
        currency: "$",
        currencyPEN: "S/ ",
        pricePEN: 1000,
        duration: "2 horas",
        popular: false,
        iconBgColor: 'bg-yellow-400',
        includes: [
          "Diagnóstico energético del espacio",
          "Limpieza Energetica Completa del espacio",
          "Proteccion Energetica de todos los Ambientes",
          "Ritual de consagración del hogar",
          "Códigos para el Mantemiento Energetico Optimo del Espacio",
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
           "Incluye el Tratamiento de Limpieza Energetica completo",
           "Retiro de daños energéticos, liberación de trabajos de brujería, magias y amarres",
           "Limpieza profunda de bloqueos y ataduras",
           "Protecciones Enérgeticas Avanzadas",
           "Códigos de Protección y Seguimiento Post Sesion"
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
        id: 'tarot-esencial',
        name: "Lectura esencial",
        description: "Tirada de visión general con espacio para preguntas y seguimiento",
        price: 55,
        pricePEN: 185,
        duration: "30 minutos",
        includes: [
          "Tirada de visión general personalizada",
          "Espacio para preguntas",
          "1 Lectura esencial de Seguimiento con 10% descuento en el año",
          "Mensaje del oráculo de Ángeles",
          "Palabra clave",
          "Recomendaciones específicas",
          "Atención privada y confidencial"
        ]
      },
      {
        id: 'tarot-profunda',
        name: "Lectura profunda",
        description: "Sesión privada y personalizada para identificar patrones inconscientes y tomar mejores decisiones frente a cualquier desafío de vida",
        price: 100,
        pricePEN: 335,
        duration: "60 minutos (recomendable)",
        includes: [
          "2 Tiradas principales personalizadas",
          "Tiradas complementarias para profundizar",
          "Análisis de relaciones, trabajo, decisiones o proyectos según lo que surja",
          "Espacio para preguntas durante la sesión",
          "Palabra clave",
          "Mensaje de cierre",
          "Fotografía de la sesión",
          "Atención privada y confidencial"
        ],
        popular: true
      },
      {
        id: 'tarot-premium',
        name: "Lectura premium",
        description: "Método de lectura Las 7 puertas, con interpretación profunda de las cartas",
        price: 130,
        pricePEN: 435,
        duration: "90 minutos",
        includes: [
          "Método de lectura: las 7 puertas",
          "Interpretación profunda de las cartas",
          "2 Tiradas personalizadas",
          "Tiradas complementarias cuando sea necesario",
          "Espacio para preguntas",
          "Fotografía de la tirada",
          "Mensaje del oráculo de Ángeles",
          "Palabra clave",
          "Atención privada y confidencial"
        ]
      },
      {
        id: 'tarot-anual',
        name: "Lectura especial anual y de cumpleaños",
        description: "Tirada anual mes por mes, con seguimiento y terapia floral personalizada",
        price: 180,
        pricePEN: 600,
        duration: "120 minutos",
        includes: [
          "Tirada anual mes por mes",
          "Tiradas complementarias cuando sea necesario",
          "1 Lectura profunda de Seguimiento con 10% de descuento al año",
          "Espacio para preguntas",
          "Palabra clave",
          "Mensaje de cierre",
          "Tratamiento incluido de Flores de Bach y California personalizado",
          "Atención privada y confidencial"
        ]
      },
      {
        id: 'tarot-pregunta',
        name: "1 Pregunta",
        description: "Respuesta clara y directa a una pregunta específica",
        price: 20,
        pricePEN: 67,
        duration: "1 pregunta",
        includes: [
          "Respuesta inmediata",
          "Orientación puntual",
          "Mensaje de cierre",
          "Atención privada y confidencial"
        ]
      },
      {
        id: 'tarot-express',
        name: "Lectura express",
        description: "Respuesta clara y directa a varias preguntas concretas",
        price: 35,
        pricePEN: 117,
        duration: "15 minutos",
        includes: [
          "Varias preguntas concretas",
          "Respuesta inmediata",
          "Orientación puntual",
          "Palabra clave",
          "Mensaje de cierre",
          "Atención privada y confidencial"
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
          "Limpieza de la Energias Densas y de Baja Vibración",
          "Desbloqueo y Potenciamiento de los Principales Centros Energéticos - Chakras",
          "Protecciones Enérgeticas Avanzadas",
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
          "Limpieza Energetica Completa del espacio",
          "Proteccion Energetica de todos los Ambientes",
          "Ritual de consagración del hogar",
          "Códigos para el Mantemiento Energetico Optimo del Espacio"
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
           "Incluye el Tratamiento de Limpieza Energetica completo",
           "Retiro de daños energéticos, liberación de trabajos de brujería, magias y amarres",
           "Limpieza profunda de bloqueos y ataduras",
           "Protecciones Enérgeticas Avanzadas",
           "Códigos de Protección y Seguimiento Post Sesion"
         ]
      }
    ]
  }
};