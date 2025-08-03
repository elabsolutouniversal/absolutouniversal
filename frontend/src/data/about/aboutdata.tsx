// data/aboutData.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DifferentiationItem {
  type: 'negative' | 'positive';
  title: string;
  description: string;
  number?: string;
}

export interface MethodDimension {
  icon: string;
  title: string;
  subtitle: string;
  benefits: string[];
}

export interface AssessmentQuestion {
  id: string;
  question: string;
}

export interface ResultCategory {
  category: string;
  icon: string;
  benefits: string[];
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  instagram: string;
  address?: string;
  schedule: {
    weekdays: string;
    saturday: string;
  };
}

export const aboutData = {
  images: {
    hero: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753150894/about-profile_kuacih.jpg",
    profile: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076494/IMG_3555_njpbnc.jpg",
    therapy: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
    therapy2: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154286/terapiaIntegrativa-holiticia-2_uli8ak.jpg",
    pendulo: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg"
  },
  hero: {
    title: "TU GUÍA HACIA LA TRANSFORMACIÓN PROFUNDA",
    subtitle: "¿Sientes que hay un vacío que ni la terapia tradicional ni el crecimiento personal convencional han logrado llenar?",
    description: "No es casualidad que estés aquí. Tu alma te ha guiado hasta esta página porque estás listo para una sanación radical —una que integre mente, cuerpo y espíritu en un camino de autodescubrimiento sin precedentes.",
    promise: "Yo no solo te daré herramientas: te revelaré el poder que ya existe dentro de ti.",
    professionalInfo: {
      name: "Lic. Nunash Dahiana Velásquez Guerrero",
      credentials: "Psicóloga Clínica (CPSP N.°12004 - CDR I Lima y Callao)",
      specialties: [
        "Terapeuta Transpersonal",
        "Canalizadora Psíquica", 
        "Especialista en Sanar lo que Otras Terapias no Tocan"
      ]
    }
  },

  story: {
    title: "Cuando lo Espiritual y lo Científico se Unieron",
    content: [
      "A los 11 años, mi vida cambió para siempre. Podía sentir el cáncer de mi abuela antes de que los médicos lo diagnosticaran, ver relaciones rotas en los ojos de las personas y percibir futuros posibles como si fueran películas. Al principio, fue aterrador.",
      "Pero cuando mi madre me regaló esa primera baraja de cartas españolas, entendí: mi don no era para asustarme, era para sanar.",
      "Lo que inició como una búsqueda para entender estos dones extraordinarios, se transformó en algo mayor cuando experimenté mi propia crisis personal. A través de mi proceso de sanación, no solo encontré paz interior, sino que descubrí la verdad fundamental:"
    ],
    quote: "La sanación real ocurre cuando la ciencia explica lo espiritual, y lo espiritual da sentido a la ciencia.",
    conclusion: "Decidí convertirme en Psicóloga Clínica y Psicoterapeuta Gestalt porque entendí que mis dones necesitaban estructura profesional para crear transformaciones duraderas."
  },

  differentiation: {
    title: "¿En Qué Me Diferencio de Otras Terapeutas?",
    subtitle: "No es lo mismo trabajar con:",
    items: [
      {
        type: "negative",
        title: "Una psicóloga tradicional",
        description: "Solo ve tu mente consciente, ignora tu dimensión energética y espiritual"
      },
      {
        type: "negative", 
        title: "Una vidente",
        description: "Solo lee energías sin base terapéutica ni herramientas para procesar lo que surge"
      },
      {
        type: "negative",
        title: "Una coach motivacional", 
        description: "Te da ánimos superficiales sin sanar las raíces profundas de tus patrones"
      },
      {
        type: "positive",
        title: "Mi Método: La Síntesis Definitiva",
        description: "",
        number: ""
      }
    ] as DifferentiationItem[],
    method: [
      {
        number: "1️⃣",
        title: "CIENTÍFICO",
        points: [
          "Técnicas validadas (Gestalt, Humanista) para trauma y patrones",
          "Formación profesional como Psicóloga Clínica", 
          "Estructura terapéutica que garantiza resultados"
        ]
      },
      {
        number: "2️⃣", 
        title: "PSÍQUICO",
        points: [
          "Detecto lo que no se dice en tu energía",
          "Identifico enfermedades, traiciones, bloqueos de dinero",
          "Leo tu campo energético con precisión quirúrgica"
        ]
      },
      {
        number: "3️⃣",
        title: "ALQUÍMICO", 
        points: [
          "Transformo tus heridas en poder personal",
          "Tarot Egipcio para revelar patrones kármicos",
          "Osho Zen para iluminar tu presente",
          "Registros Akáshicos para sanar desde el origen"
        ]
      }
    ]
  },

  methodDimensions: {
    title: "Mi Enfoque Único: Resultados en 3 Dimensiones",
    subtitle: "Hoy, tras 15 años y más de 3,000 sesiones, he creado un método donde:",
    dimensions: [
      {
        icon: "🔮",
        title: "Dimensión Espiritual",
        subtitle: "",
        benefits: [
          "Tus heridas ancestrales se sanan con Registros Akáshicos",
          "Tu propósito de vida se revela y activa", 
          "Tu conexión espiritual se fortalece"
        ]
      },
      {
        icon: "🧠", 
        title: "Dimensión Mental/Emocional",
        subtitle: "",
        benefits: [
          "Tus patrones inconscientes se reprograman con Psicoterapia Gestalt",
          "Tus traumas se procesan y liberan definitivamente",
          "Tu autoestima se reconstruye desde los cimientos"
        ]
      },
      {
        icon: "⚡",
        title: "Dimensión Física/Energética", 
        subtitle: "",
        benefits: [
          "Tus bloqueos energéticos se liberan con péndulo hebreo",
          "Tus síntomas inexplicables encuentran su origen y sanación",
          "Tu vitalidad se restaura completamente"
        ]
      }
    ] as MethodDimension[]
  },

  assessment: {
    title: "¿Es Este Trabajo Para Ti?",
    subtitle: "Responde con honestidad:",
    questions: [
      { id: "1", question: "¿Sientes que \"algo falta\" pero no sabes qué?" },
      { id: "2", question: "¿Repites relaciones tóxicas o fracasos financieros?" },
      { id: "3", question: "¿Tu intuición está bloqueada (o te da miedo confiar en ella)?" },
      { id: "4", question: "¿Tienes síntomas físicos que la medicina no explica? (¡El cuerpo grita lo que el alma calla!)" },
      { id: "5", question: "¿Sabes que tienes un propósito superior... pero no logras materializarlo?" },
      { id: "6", question: "¿Has probado terapias tradicionales pero sientes que no tocan el fondo del problema?" },
      { id: "7", question: "¿Necesitas respuestas que van más allá de lo racional?" }
    ] as AssessmentQuestion[],
    conclusion: "Si respondiste \"SÍ\" a cualquiera de estas preguntas, has encontrado tu lugar."
  },

  results: {
    title: "Lo Que Obtendrás en Nuestro Trabajo",
    features: [
      "Sesiones 100% Personalizadas - Nada de protocolos genéricos. Cada sesión diseñada específicamente para TU proceso único",
      "Técnicas que Nadie Más Integra"
    ],
    techniques: [
      "Combinación de péndulo hebreo con terapia de polaridades",
      "Psicotarot junguiano con lectura energética simultánea", 
      "Gestalt transpersonal con sanación akáshica"
    ],
    categories: [
      {
        category: "FÍSICO",
        icon: "💪",
        benefits: [
          "Alivio de dolores \"inexplicables\"",
          "Mejora en síntomas psicosomáticos",
          "Aumento de energía vital"
        ]
      },
      {
        category: "EMOCIONAL", 
        icon: "❤️",
        benefits: [
          "Liberación de miedos arraigados",
          "Sanación de heridas de abandono/rechazo",
          "Paz mental sostenible"
        ]
      },
      {
        category: "ESPIRITUAL",
        icon: "✨", 
        benefits: [
          "Reconexión con tu misión de vida",
          "Activación de dones dormidos",
          "Alineación con tu propósito superior"
        ]
      }
    ] as ResultCategory[]
  },

  promise: {
    quotes: [
      "No te enseñaré a sobrevivir. Te enseñaré a REINVENTARTE.",
      "La terapia convencional te ayuda a entender tu historia. Yo te ayudo a REESCRIBIRLA desde el alma."
    ]
  },

  offer: {
    title: "Tu Transformación Comienza AHORA",
    urgency: {
      subtitle: "¿Por qué seguir postergando tu transformación?",
      consequences: [
        "Relaciones que se repiten",
        "Oportunidades que se esfuman", 
        "Síntomas que empeoran",
        "Sueños que se postergan"
      ]
    },
    mainOffer: {
      title: "OFERTA DE TRANSFORMACIÓN",
      subtitle: "Primera Sesión de Descubrimiento (90 minutos)",
      benefits: [
        "15% de descuento especial",
        "BONO: Lectura de Registros Akáshicos inicial GRATIS",
        "GARANTÍA TOTAL: Si no sientes que he visto lo más profundo de tu ser en la primera hora, te devuelvo tu inversión completa (En 15 años, nunca lo he necesitado)",
        "Respuesta garantizada en menos de 12 horas"
      ],
      cta: "AGENDA AHORA MISMO TU SESIÓN",
      limitation: "Plazas limitadas por disponibilidad clínica"
    },
    exclusiveBenefits: [
      "Enfoque holístico validado científicamente",
      "Confidencialidad absoluta garantizada", 
      "Modalidades presencial y virtual disponibles",
      "Seguimiento personalizado entre sesiones",
      "Técnicas exclusivas que no encontrarás en otro lugar",
      "Resultados desde la primera sesión"
    ]
  },

  commitment: {
    title: "Mi Compromiso Sagrado Contigo",
    subtitle: "Como tu guía en este proceso de transformación, me comprometo a:",
    commitments: [
      "Ver lo que otros no han visto en ti",
      "Sanar lo que otras terapias no han tocado",
      "Activar el poder que siempre ha estado dentro de ti", 
      "Acompañarte hasta que logres la vida que mereces",
      "Revelarte tu verdadera naturaleza divina"
    ],
    finalQuote: "Hoy es el día. Te espero al otro lado de tu renacimiento."
  },

  contact: {
    whatsapp: "+51962305362",
    email: "contacto@absolutouniversal.com", 
    instagram: "@absoluto_universal",
    address: "Lima, Perú",
    schedule: {
      weekdays: "Lunes a Viernes: 9:00 AM - 7:00 PM",
      saturday: "Sábados: 9:00 AM - 1:00 PM"
    }
  } as ContactInfo
};