// data/tarotTherapyData.ts
import { TarotTherapyData } from '@/types/servicios/tarot-terapeutico';

export const tarotTherapyData: TarotTherapyData = {
  hero: {
    title: "¿Sientes que das vueltas en círculo sin encontrar respuestas?",
    subtitle: "El Tarot Terapéutico no es adivinación. Es autoconocimiento profundo.",
    description: "Si estás aquí es porque algo en tu interior te pide claridad. Tal vez son esas decisiones que postergas, los patrones que se repiten o esa sensación de estar desconectado de tu propósito.",
    heroImage: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442586/IMG_3680_klmwz2.jpg"
  },
  
  services: [
    {
      id: "patterns",
      title: "Detección de patrones invisibles",
      description: "Identificamos las creencias y emociones que sabotean tu bienestar para que puedas transformarlas de raíz.",
      icon: "Search"
    },
    {
      id: "vision",
      title: "Visión estratégica de tu futuro",
      description: "Exploramos tus opciones reales, riesgos y oportunidades para que elijas el camino que realmente resuena contigo.",
      icon: "Compass"
    },
    {
      id: "emotional",
      title: "Contención emocional auténtica",
      description: "Integramos técnicas gestálticas y junguianas para acompañarte en cualquier proceso interno que emerja.",
      icon: "Heart"
    },
    {
      id: "action",
      title: "Plan de acción concreto",
      description: "Sales con herramientas específicas: rituales de autocuidado, ejercicios de journaling y pautas energéticas para materializar tus objetivos.",
      icon: "ClipboardList"
    }
  ],

  pricingPlans: [
    {
      id: "flash",
      name: "Flash Answer",
      description: "1 pregunta urgente (audio/texto)",
      duration: "Inmediato",
      price: 10,
      features: ["Respuesta inmediata", "Audio o texto", "Consulta puntual"]
    },
    {
      id: "essential",
      name: "Sesión Esencial",
      description: "Claridad en 1 área específica",
      duration: "30 min",
      price: 25,
      features: ["Enfoque en 1 área", "30 minutos", "Grabación incluida", "Online o presencial"]
    },
    {
      id: "deep",
      name: "Sesión Profunda",
      description: "Hasta 3 áreas + plan terapéutico",
      duration: "45 min",
      price: 50,
      features: ["Hasta 3 áreas", "Plan terapéutico", "45 minutos", "Herramientas específicas"],
      popular: true
    },
    {
      id: "integral",
      name: "Sesión Integral",
      description: "Análisis completo + estrategia a mediano plazo",
      duration: "60 min",
      price: 60,
      features: ["Análisis completo", "Estrategia mediano plazo", "60 minutos", "Plan energético detallado"]
    }
  ],

  targetAudience: [
    {
      id: "decisions",
      description: "Estás ante una decisión importante y necesitas claridad interior",
      icon: "Crosshair"
    },
    {
      id: "patterns",
      description: "Repites los mismos patrones en amor, trabajo o familia",
      icon: "RotateCcw"
    },
    {
      id: "blocks",
      description: "Sientes bloqueos energéticos que frenan tu evolución",
      icon: "Zap"
    },
    {
      id: "integration",
      description: "Buscas integrar tu crecimiento personal con tu dimensión espiritual",
      icon: "TreePine"
    },
    {
      id: "answers",
      description: "Quieres respuestas reales, no predicciones vagas",
      icon: "Target"
    }
  ],

  processSteps: [
    {
      id: "choose",
      step: 1,
      title: "Elige tu plan",
      description: "Selecciona el plan que mejor se adapte a tus necesidades"
    },
    {
      id: "modality",
      step: 2,
      title: "Selecciona modalidad",
      description: "Decide entre sesión online o presencial"
    },
    {
      id: "schedule",
      step: 3,
      title: "Agenda tu cita",
      description: "Elige fecha y horario en nuestro calendario automático"
    },
    {
      id: "payment",
      step: 4,
      title: "Pago seguro",
      description: "Realiza el pago con tarjeta o PayPal"
    },
    {
      id: "transform",
      step: 5,
      title: "Transforma tu realidad",
      description: "Vive tu experiencia de Tarot terapéutico"
    }
  ],

  sessionModalities: [
    {
      id: "online",
      type: "online",
      title: "Online",
      description: "Zoom o WhatsApp desde la comodidad de tu hogar",
      icon: "Monitor"
    },
    {
      id: "presencial",
      type: "presencial",
      title: "Presencial",
      description: "En nuestro espacio terapéutico - ambiente íntimo y energéticamente preparado",
      icon: "Home"
    }
  ],

  trustIndicators: [
    {
      id: "experience",
      title: "+10 años",
      description: "Integrando Tarot, psicología y sanación energética",
      icon: "Award"
    },
    {
      id: "ethics",
      title: "Enfoque ético",
      description: "Potenciamos tu libre albedrío, nunca lo condicionamos",
      icon: "Shield"
    },
    {
      id: "testimonials",
      title: "Testimonios reales",
      description: "Clientes que han transformado su vida",
      icon: "Star"
    },
    {
      id: "methodology",
      title: "Metodología única",
      description: "Combina intuición con herramientas terapéuticas",
      icon: "Lightbulb"
    }
  ],

  cta: {
    title: "¿Lista/o para escribir una nueva historia?",
    subtitle: "El Tarot no dicta tu destino; te revela las piezas para que construyas el tuyo.",
    buttonText: "RESERVA TU SESIÓN AHORA",
    contactText: "¿Tienes dudas? Escríbenos y te asesoramos sin compromiso."
  }
};