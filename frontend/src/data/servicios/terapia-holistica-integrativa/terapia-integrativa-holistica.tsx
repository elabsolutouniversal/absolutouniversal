import { 
  Heart, 
  Sparkles, 
  Users, 
  Brain, 
  Flower2, 
  Zap,
  Droplet,
  ShieldCheck,
  RefreshCw, 
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
    titulo: 'Sesión 1: Evaluación Integral Personalizada',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg',
    fallbackBg: 'bg-yellow-200',
    icon: <User className="w-12 h-12 mx-auto mb-2 text-brand-medium" />,
    href: '/servicios/proceso-de-sanacion',
    descripcion:
      'Entrevista profunda, detección de patrones energéticos y emocionales y diseño de un plan de tratamiento personalizado.'
  },
  {
    titulo: 'Sesión 2: Diagnóstico y Limpieza Energética',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153968/pendulo-hebreo_fnvk0o.jpg',
    fallbackBg: 'bg-blue-200',
    icon: <Zap className="w-12 h-12 mx-auto mb-2 text-blue-600" />,
    href: '/servicios/proceso-de-sanacion',
    descripcion:
      'Testeo energético completo, limpieza profunda de bloqueos, reprogramación celular y revitalización de tu campo energético.'
  },
  {
    titulo: 'Sesión 3: Armonización de Chakras',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154284/terapiaIntegrativa-holiticia-2_itvxcj.jpg',
    fallbackBg: 'bg-green-200',
    icon: <Droplet className="w-12 h-12 mx-auto mb-2 text-green-600" />,
    href: '/servicios/proceso-de-sanacion',
    descripcion:
      'Desbloqueo y equilibrio de chakras, potenciación del flujo energético natural y restauración del equilibrio emocional, mental y físico.'
  },
  {
    titulo: 'Sesión 4: Reparación y Fortalecimiento del Aura',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076399/IMG_3519_absuy1.jpg',
    fallbackBg: 'bg-yellow-200',
    icon: <ShieldCheck className="w-12 h-12 mx-auto mb-2 text-yellow-600" />,
    href: '/servicios/proceso-de-sanacion',
    descripcion:
      'Sellado y reparación del campo áurico, fortalecimiento de tu protección energética y prevención de pérdidas futuras.'
  },
  {
    titulo: 'Sesión 5: Integración y Consolidación',
    src: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076494/IMG_3555_njpbnc.jpg',
    fallbackBg: 'bg-amber-200',
    icon: <RefreshCw className="w-12 h-12 mx-auto mb-2 text-brand-medium" />,
    href: '/servicios/proceso-de-sanacion',
    descripcion:
      'Sesión personalizada gratuita para consolidar avances, recibir herramientas de mantenimiento y establecer un plan de seguimiento.'
  }
]


export const sesiones: SesionTerapiaIntegrativa[] = [
  {
    numero: '1–5',
    titulo: 'Etapa 1: Tratamiento de Limpieza Energética Basico',
    descripcion: '5 Sesiones Enfocadas en la evaluación, diagnóstico, limpieza inicial y desbloqueo energético. Abordamos tus desafíos, necesidades y expectativas.',
    color: 'bg-gradient-to-r from-yellow-100 to-amber-100',
    duracion: '90 min',
    frecuencia: 'Semanal',
  },
  {
    numero: '6',
    titulo: 'Etapa 2: Tratamiento Personalizado',
    descripcion: 'El tratamiento personalizado, esta orientado a tratar temas especificos y/o situaciones de forma individual para cada persona,ya sea un problema de salud, fisico emocional o espiritual o algun desafio de vida, asi como algùn problema especifico a nivel personal , economico y/o espiritual.',
    color: 'bg-gradient-to-r from-amber-100 to-orange-100',
    duracion: '1 hora',
    frecuencia: '',
  },
];

export const beneficios: BeneficioTerapiaIntegrativa[] = [
  {
    icon: <Heart className="w-6 h-6 text-brand-medium" />,
    titulo: 'Equilibrio emocional',
    descripcion: 'Bienestar mental y emocional a través de técnicas integradas de sanación.',
    delay: 0
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-medium" />,
    titulo: 'Armonía energética',
    descripcion: 'Limpieza y fortalecimiento de tu campo electromagnético para una mayor coherencia energetica.',
    delay: 0.1
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    titulo: 'Crecimiento personal',
    descripcion: 'Desarrollo y evolución a partir de un protocolo personalizado y acompañamiento continuo.',
    delay: 0.2
  },
  {
    icon: <Brain className="w-6 h-6 text-brand-medium" />,
    titulo: 'Claridad mental',
    descripcion: 'Mejora tu enfoque y toma de decisiones eliminando bloqueos mentales.',
    delay: 0.3
  },
  {
    icon: <Flower2 className="w-6 h-6 text-green-600" />,
    titulo: 'Coherencia Cuántica',
    descripcion: 'Fortalece la conexión con tu esencia y propósito de vida.',
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
    respuesta: "La entrevista inicial dura una hora. El diagnóstico y limpieza energética duran aproximadamente dos horas y las sesiones posteriores duran aproximadamente 1 hora."
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
    respuesta: "En la primera sesión, la entrevista, realizaremos una evaluación integral de tu estado actual, identificaremos tus necesidades específicas y posteriormente comenzaremos con las técnicas de limpieza energética, buscando tu equilibrio emocional de forma gradual."
  }
];

export const sesiones5Pasos = [
  {
    numero: 1,
    titulo: "Evaluación Integral Personalizada",
    duracion: "1 hora",
    icon: User,        // ✅ MANTENER - funciona perfecto
    color: "from-amber-400 to-orange-500",
    puntos: [
      "Entrevista profunda para conocer tu historia y necesidades específicas",
      "Identificación de patrones repetitivos , y bloqueos energéticos y emocionales",
      "Diseño de tu plan de tratamiento personalizado"
    ]
  },
  {
    numero: 2,
    titulo: "Diagnóstico y Limpieza Energética",
    duracion: "2 horas",
    icon: Sparkle,     // 🔹 CAMBIO: era Sparkles → ahora Sparkle (más específico)
    color: "from-amber-500 to-yellow-500",
    puntos: [
      "Testeo energético completo de tu sistema",
      "Limpieza Inicial de bloqueos energéticos acumulados",
      "Reprogramacion energética celular.",
      "Revitalización de tu campo aurico"
    ]
  },
  {
    numero: 3,
    titulo: "Armonización de Chakras",
    duracion: "1 hora",
    icon: FlowerLotus,       // 🔹 CAMBIO: era Heart → ahora Lotus (PERFECTO para chakras!)
    color: "from-orange-400 to-amber-500",
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
    duracion: "2 horas",
    icon: SunDim,      // 🔹 CAMBIO: era Shield → ahora SunDim (ideal para aura/energía)
    color: "from-yellow-400 to-orange-400",
    puntos: [
      "Reparacion de grietas y Sellado de tu campo áurico",
      "Fortalecimiento de tu protección energética natural",
      "Prevención de futuras fugas energéticas",
      "Técnicas de autoprotección energética"
    ]
  },
  {
    numero: 5,
    titulo: "Integración y Consolidación",
    duracion: "1 Hora",
    icon: Target,      // 🔹 CAMBIO: era Star → ahora Target (mejor para objetivos)
    color: "from-teal-400 to-cyan-500",
    badge: "GRATUITA",
    puntos: [
      "Sesión personalizada basada en tus necesidades específicas",
      "Consolidación de todos los avances logrados",
      "Herramientas para mantener tu equilibrio energético",
      "Plan de seguimiento personalizado"
    ]
  }
];

