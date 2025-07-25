import { 
  Heart, 
  Sparkles, 
  Star, 
  Users, 
  Brain, 
  Flower2, 
  Zap, 
} from 'lucide-react';

import { 
  User,           // Evaluación personal
  Sparkle,        // Energía/limpieza  
  FlowerLotus,          // Chakras/meditación
  SunDim,         // Aura/protección energética
  Target,         // Integración/objetivos
} from 'phosphor-react';

import type { 
  TarjetaTerapiaIntegrativa, 
  SesionTerapiaIntegrativa, 
  BeneficioTerapiaIntegrativa, 
  TestimonioTerapiaIntegrativa, 
  FAQTerapiaIntegrativa 
} from '@/types/servicios/terapia-integrativa-holistica';



export const tarjetas: TarjetaTerapiaIntegrativa[] = [
  {
    titulo: 'Terapia Integrativa Holística',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg',
    fallbackBg: 'bg-purple-200',
    icon: <Heart className="w-12 h-12 mx-auto mb-2 text-purple-600" />,
    href: '/servicios/psicoterapia-integrativa-holistica',
    descripcion: 'Equilibra tu mente, cuerpo y espíritu a través de técnicas psicológicas avanzadas'
  },
  {
    titulo: 'Péndulo Hebreo',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg',
    fallbackBg: 'bg-blue-200',
    icon: <Sparkles className="w-12 h-12 mx-auto mb-2 text-blue-600" />,
    href: '/servicios/pendulo-hebreo',
    descripcion: 'Limpieza energética profunda utilizando frecuencias vibracionales ancestrales'
  },
  {
    titulo: 'Proceso de Sanación',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154284/terapiaIntegrativa-holiticia-2_itvxcj.jpg',
    fallbackBg: 'bg-pink-200',
    icon: <Star className="w-12 h-12 mx-auto mb-2 text-pink-600" />,
    href: '/servicios/proceso-de-sanacion',
    descripcion: 'Acompañamiento personalizado en tu viaje de transformación integral'
  },
];

export const sesiones: SesionTerapiaIntegrativa[] = [
  {
    numero: '1–4',
    titulo: 'Evaluación y Preparación',
    descripcion: 'Enfocadas en la evaluación, diagnóstico energético, limpieza inicial y desbloqueo. Abordamos tus desafíos, necesidades y expectativas.',
    color: 'bg-gradient-to-r from-pink-100 to-purple-100',
    duracion: '90 min',
    frecuencia: 'Semanal',
  },
  {
    numero: '5',
    titulo: 'Inicio del Tratamiento',
    descripcion: 'Sesión gratuita que marca el inicio  del tratamiento personalizado definido en en las sesiones previas.',
    color: 'bg-gradient-to-r from-green-100 to-blue-100',
    gratuita: true,
    duracion: '120 min',
    frecuencia: 'Única',
  },
];

export const beneficios: BeneficioTerapiaIntegrativa[] = [
  {
    icon: <Heart className="w-6 h-6 text-pink-600" />,
    titulo: 'Equilibrio emocional',
    descripcion: 'Bienestar mental y emocional a través de técnicas integradas de sanación.',
    delay: 0
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-600" />,
    titulo: 'Armonía energética',
    descripcion: 'Limpieza y fortalecimiento de tu campo electromagnético para un flujo energético óptimo.',
    delay: 0.1
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    titulo: 'Crecimiento personal',
    descripcion: 'Desarrollo y evolución a partir de un protocolo personalizado y acompañamiento continuo.',
    delay: 0.2
  },
  {
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    titulo: 'Claridad mental',
    descripcion: 'Mejora tu enfoque y toma de decisiones eliminando bloqueos mentales.',
    delay: 0.3
  },
  {
    icon: <Flower2 className="w-6 h-6 text-green-600" />,
    titulo: 'Conexión espiritual',
    descripcion: 'Fortalece tu conexión con tu esencia y propósito de vida.',
    delay: 0.4
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    titulo: 'Vitalidad renovada',
    descripcion: 'Recupera tu energía vital y entusiasmo por la vida.',
    delay: 0.5
  }
];

export const testimonios: TestimonioTerapiaIntegrativa[] = [
  {
    nombre: "María L.",
    edad: "35 años",
    contenido: "Las sesiones me ayudaron a liberar bloqueos emocionales que llevaba años cargando. Me siento más ligera y en paz conmigo misma.",
    rating: 5
  },
  {
    nombre: "Carlos R.",
    edad: "42 años",
    contenido: "El enfoque integral fue exactamente lo que necesitaba. No solo trabajamos mis síntomas, sino las raíces profundas de mis problemas.",
    rating: 5
  },
  {
    nombre: "Ana S.",
    edad: "28 años",
    contenido: "Increíble transformación en solo 5 sesiones. El péndulo hebreo fue revelador y la terapia psicológica muy profesional.",
    rating: 5
  }
];

export const faqs: FAQTerapiaIntegrativa[] = [
  {
    pregunta: "¿Cuánto dura cada sesión?",
    respuesta: "Las primeras 4 sesiones duran aproximadamente 90 minutos cada una. La quinta sesión gratuita tiene una duración de 120 minutos para establecer el tratamiento personalizado."
  },
  {
    pregunta: "¿Con qué frecuencia debo asistir?",
    respuesta: "Recomendamos sesiones semanales para las primeras 4 sesiones. Esto permite un proceso gradual y efectivo de sanación. Después de la quinta sesión, estableceremos un plan personalizado."
  },
  {
    pregunta: "¿Es compatible con otros tratamientos?",
    respuesta: "Absolutamente. Nuestro enfoque es complementario y trabaja en armonía con tratamientos médicos o psicológicos convencionales. Siempre recomendamos informar a todos tus profesionales de salud sobre los tratamientos que estás recibiendo."
  },
  {
    pregunta: "¿Qué debo esperar en la primera sesión?",
    respuesta: "En la primera sesión realizaremos una evaluación integral de tu estado actual, identificaremos tus necesidades específicas y comenzaremos con técnicas suaves de limpieza energética y equilibrio emocional."
  }
];

export const sesiones5Pasos = [
  {
    numero: 1,
    titulo: "Evaluación Integral Personalizada",
    duracion: "90 minutos",
    icon: User,        // ✅ MANTENER - funciona perfecto
    color: "from-purple-400 to-pink-400",
    puntos: [
      "Entrevista profunda para conocer tu historia y necesidades específicas",
      "Identificación de patrones energéticos y emocionales",
      "Diseño de tu plan de tratamiento personalizado"
    ]
  },
  {
    numero: 2,
    titulo: "Diagnóstico y Limpieza Energética",
    duracion: "75 minutos",
    icon: Sparkle,     // 🔹 CAMBIO: era Sparkles → ahora Sparkle (más específico)
    color: "from-blue-400 to-cyan-400",
    puntos: [
      "Testeo energético completo de tu sistema",
      "Limpieza profunda de bloqueos energéticos acumulados",
      "Técnicas avanzadas de reprogramación celular",
      "Revitalización de tu campo energético"
    ]
  },
  {
    numero: 3,
    titulo: "Armonización de Chakras",
    duracion: "75 minutos",
    icon: FlowerLotus,       // 🔹 CAMBIO: era Heart → ahora Lotus (PERFECTO para chakras!)
    color: "from-green-400 to-emerald-400",
    puntos: [
      "Desbloqueo y equilibrio de los 7 chakras principales",
      "Potenciación de tu flujo energético natural",
      "Restauración del equilibrio emocional, mental y físico",
      "Técnicas de activación energética"
    ]
  },
  {
    numero: 4,
    titulo: "Reparación y Fortalecimiento del Aura",
    duracion: "75 minutos",
    icon: SunDim,      // 🔹 CAMBIO: era Shield → ahora SunDim (ideal para aura/energía)
    color: "from-yellow-400 to-orange-400",
    puntos: [
      "Sellado y reparación de tu campo áurico",
      "Fortalecimiento de tu protección energética natural",
      "Prevención de futuras pérdidas energéticas",
      "Técnicas de autoprotección energética"
    ]
  },
  {
    numero: 5,
    titulo: "Integración y Consolidación",
    duracion: "60 minutos",
    icon: Target,      // 🔹 CAMBIO: era Star → ahora Target (mejor para objetivos)
    color: "from-indigo-400 to-purple-400",
    badge: "GRATUITA",
    puntos: [
      "Sesión personalizada basada en tus necesidades específicas",
      "Consolidación de todos los avances logrados",
      "Herramientas para mantener tu equilibrio energético",
      "Plan de seguimiento personalizado"
    ]
  }
];