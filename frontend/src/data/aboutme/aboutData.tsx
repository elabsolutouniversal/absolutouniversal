// aboutData.ts
import React from 'react';

interface StudyItem {
  title: string;
  description: string;
  longDescription: string; // Re-adding longDescription
  slug: string; // Re-adding slug
  icon: string;
}

export interface AboutData {
  name: string;
  title: string;
  license: string;
  specialties: { title: string; longDescription: string }[];
  tagline: string;
  images: {
    profile: string;
    terapiaHolistica: string;
    workspace1: string;
    tarot: string;
    workspace2: string;
    especializaciones: string;
  };
  biography: {
    awakening: {
      title: string;
      content: string[];
    };
    professionalFormation: {
      title: string;
      content: string[];
    };
    fusion: {
      title: string;
      content: (string | React.ReactElement)[];
      studies: StudyItem[];
    };
    integration: {
      title: string;
      content: string[];
      studies: StudyItem[];
    };
  };
  approach: {
    title: string;
    subtitle: string;
    comparisons: {
      traditional: {
        title: string;
        description: string;
      };
      spiritual: {
        title: string;
        description: string;
      };
      coaching: {
        title: string;
        description: string;
      };
    };
    dimensions: {
      scientific: {
        title: string;
        icon: string;
        points: string[];
      };
      transpersonal: {
        title: string;
        icon: string;
        points: string[];
      };
      integrative: {
        title: string;
        icon: string;
        points: string[];
      };
    };
  };
  results: {
    title: string;
    levels: {
      mental: {
        title: string;
        benefits: string[];
      };
      physical: {
        title: string;
        benefits: string[];
      };
      spiritual: {
        title: string;
        benefits: string[];
      };
    };
  };
  isThisForYou: {
    title: string;
    points: string[];
  };
  commitment: {
    title: string;
    points: string[];
    modalities: {
      title: string;
      options: string[];
    };
  };
  testimonials: {
    title: string;
    items: {
      text: string;
      author: string;
      age: number;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    quote: string;
    author: string;
  };
}

export const aboutData: AboutData = {
  name: "Lic. Nunash Dahiana  Velásquez Guerrero",
  title: "Psicóloga Clínica",
  license: "CPSP N.°12004 - CDR I Lima y Callao",
  specialties: [
    {
      title: "Terapeuta Transpersonal",
      longDescription: "Acompañamiento más allá del ego, explorando dimensiones espirituales para sanación profunda y propósito de vida."
    },
    {
      title: "Canalizadora Psíquica",
      longDescription: "Acceso a información intuitiva para guiar y conectar con sabiduría interior, facilitando decisiones y crecimiento."
    },
    {
      title: "Especialista en Curaciones Energéticas",
      longDescription: "Trabajo con el campo áurico para detectar y liberar bloqueos, restaurando el flujo vital y promoviendo sanación integral."
    }
  ],
  tagline: "",
  images: {
    profile: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg",
    terapiaHolistica: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg",
    workspace1: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg",
    tarot: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076494/IMG_3535_1_ecjcra.jpg",
    workspace2: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154286/terapiaIntegrativa-holiticia-2_uli8ak.jpg",
    especializaciones: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1782310096/WhatsApp_Image_2026-06-24_at_9.04.52_AM_xayvbq.jpg"
  },
  biography: {
    awakening: {
      title: "El Despertar de un Don",
      content: [
        "Supe a través de las conversaciones de mis padres que yo desde muy pequeñita tenía un don peculiar, pues mi madre contaba entre risas que yo podía encontrar objetos perdidos con mucha facilidad y percibir con claridad las intenciones y la energía de las personas",

        "A los 11 años, esa sensibilidad se hizo más evidente cuando aprendí a leer las cartas españolas, logrando predecir sucesos y acontecimientos que ocurrirían en mi familia. Al notar esta capacidad, mi padre me obsequió mi primer tarot, el Tarot Egipcio Fournier, el cual también se me hizo muy fácil de comprender e interpretar. Más adelante, adquirí el hermoso Tarot de Osho Zen, descubriendo su gran potencial para el beneficio de los seres humanos, herramienta que he tomado como guía para orientar a los demás en base a esta filosofía basada en el aquí y ahora."
      ]
    },
    professionalFormation: {
      title: "La Formación Profesional",
      content: [
        "Posteriormente, estudié psicología, especializándome en psicoterapia Gestalt. Esto le dio forma y estructura a mis habilidades, convenciéndome de la capacidad y fuerza que tenemos todos los seres humanos para resolver y afrontar nuestros problemas."
      ]
    },
    fusion: {
      title: "La Fusión: Ciencia, Mente, Cuerpo y Espíritu",
      content: [
        "Por este motivo, seguí investigando y estudiando otras disciplinas complementarias que trabajan no solo sobre la psique y el cuerpo físico, sino también a niveles energéticos y espirituales.",
        "Decidí formarme en terapia de radiestesia con péndulo hebreo y posteriormente me especialicé en Registros Akáshicos y Tarot Akáshico.",
        "Así nace mi método :  **SATHYA**, palabra en sánscrito que significa **VERDAD** , en el pensamiento, la palabra y la acción. cuyo objetivo  es sanar y habilitar al ser humano en el arte de vivir guiándolo hacia una vida más plena , coherente y con propósito,   recuperando el amor por la vida y la compasión por sus semejantes.",

        "Todas estas herramientas son las que actualmente combino para abordar a mis clientes.",
        "Estoy convencida de que haber nacido humano es maravilloso, que nuestro ser es profundamente perfecto y que el cuerpo humano es también profundamente perfecto, con un sistema operativo bastante complejo. Mientras tenga vida, seguiré investigando en las profundidades de lo que significa ser humano y lo que implica haber nacido humano."
      ],
             studies: [
         {
           title: "Radiestesia con péndulo hebreo",
           description: "Técnica ancestral para diagnóstico energético",
           longDescription: "La radiestesia con péndulo hebreo es una técnica que utiliza un péndulo con letras hebreas para detectar y armonizar desequilibrios energéticos en el campo áurico, promoviendo la sanación física, emocional y espiritual.",
           slug: "radiestesia-con-pendulo-hebreo",
           icon: "🔮"
         },
         {
           title: "Psicotarot desde el enfoque terapéutico de Carl Gustav Jung",
           description: "Integración de arquetipos y psicología profunda",
           longDescription: "El psicotarot, basado en la psicología de Jung, utiliza las cartas como un espejo del inconsciente para explorar arquetipos y símbolos, facilitando el autoconocimiento y el crecimiento personal.",
           slug: "psicotarot-desde-el-enfoque-terapeutico-de-carl-gustav-jung",
           icon: "🧠"
         },
         {
           title: "Terapia Transpersonal",
           description: "Abordaje que trasciende el ego personal",
           longDescription: "La terapia transpersonal es un enfoque que integra dimensiones espirituales y trascendentes de la experiencia humana para la sanación profunda, el autodescubrimiento y la conexión con un propósito mayor.",
           slug: "terapia-transpersonal",
           icon: "✨"
         },
         {
           title: "Registros Akáshicos",
           description: "Acceso a la memoria universal del alma",
           longDescription: "Los Registros Akáshicos son la 'biblioteca' energética universal que contiene la información de todas las experiencias del alma, ofreciendo claridad y sanación de patrones pasados y presentes.",
           slug: "registros-akashicos",
           icon: "📚"
         },
         {
           title: "Integración de simbología y arquetipos",
           description: "Comprensión profunda de patrones inconscientes",
           longDescription: "La integración de simbología y arquetipos es el estudio de patrones universales y símbolos que emergen del inconsciente, facilitando la comprensión de comportamientos y la transformación personal.",
           slug: "integracion-de-simbologia-y-arquetipos",
           icon: "🗝️"
         },
         {
           title: "Lectura energética intuitiva",
           description: "Percepción y sanación del campo energético",
           longDescription: "La lectura energética intuitiva es la capacidad de percibir y trabajar con las vibraciones sutiles del campo áurico para identificar y liberar bloqueos, promoviendo el equilibrio y bienestar.",
           slug: "lectura-energetica-intuitiva",
           icon: "⚡"
         }
       ]
    },
    integration: {
      title: "Especializaciones:",
      content: [
      "Conoce mis áreas de estudio y cómo cada una enriquece mi práctica para tu bienestar."
      ],
      studies: [
        {
          title: "Formación Profesional en Psicología Clínica",
          description: "Base científica y metodológica para el abordaje terapéutico",
          longDescription: "La psicología clínica es una rama que se enfoca en el diagnóstico, tratamiento y prevención de trastornos mentales, emocionales y del comportamiento, utilizando métodos científicos y terapéuticos.",
          slug: "formacion-profesional-en-psicologia-clinica",
          icon: "🧠"
        },
        {
          title: "Especialización en Psicoterapia Gestalt",
          description: "Enfoque holístico centrado en el aquí y ahora",
          longDescription: "La psicoterapia Gestalt es un enfoque humanista que promueve la autoconciencia y la responsabilidad personal, centrándose en la experiencia presente para integrar pensamientos, sentimientos y acciones.",
          slug: "especializacion-en-psicoterapia-gestalt",
          icon: "⏳"
        },
        {
          title: "Terapeuta de Radiestesia con Péndulo Hebreo",
          description: "Técnica ancestral para diagnóstico y sanación energética",
          longDescription: "La radiestesia con péndulo hebreo es una técnica que utiliza un péndulo con letras hebreas para detectar y armonizar desequilibrios energéticos en el campo áurico, promoviendo la sanación física, emocional y espiritual.",
          slug: "terapeuta-de-radiestesia-con-pendulo-hebreo",
          icon: "🔮"
        },
        {
          title: "Formación en Registros Akáshicos",
          description: "Acceso a la memoria universal del alma",
          longDescription: "Los Registros Akáshicos son la 'biblioteca' energética universal que contiene la información de todas las experiencias del alma, ofreciendo claridad y sanación de patrones pasados y presentes.",
          slug: "formacion-en-registros-akashicos",
          icon: "📚"
        },
        {
          title: "Formación en Tarot Akáshico",
          description: "Lectura profunda de patrones kármicos y espirituales",
          longDescription: "El Tarot Akáshico utiliza las cartas como un portal simbólico para conectar con los Registros Akáshicos, desvelando patrones kármicos y espirituales que influyen en el presente para guía y sanación. Utilizo como herramienta el Tarot Akáshico.",
          slug: "formacion-en-tarot-akashico",
          icon: "🃏"
        },
        {
          title: "Formación en Tarot Terapéutico desde el enfoque de la psicología analítica de Carl Gustav Jung",
          description: "Integración de arquetipos y psicología profunda",
          longDescription: "El Tarot Terapéutico, bajo el enfoque junguiano, emplea arquetipos y símbolos del tarot para iluminar el inconsciente, facilitando el autoconocimiento, la integración personal y la individuación más allá de la adivinación. Las herramientas que yo utilizo son Tarot Egipcio, Tarot Osho y Tarot Rider-Waite.",
          slug: "formacion-en-tarot-terapeutico-desde-el-enfoque-de-la-psicologia-analitica-de-carl-gustav-jung",
          icon: "🔍"
        }
      ]
    }
  },
  approach: {
    title: "MI ENFOQUE: LA SÍNTESIS ENTRE CIENCIA Y CONCIENCIA",
    subtitle: "Mi Método SATHYA",
    comparisons: {
      traditional: {
        title: "Psicología Tradicional",
        description: "Se enfoca principalmente en la mente consciente y deja fuera lo energético y espiritual."
      },
      spiritual: {
        title: "Enfoques Espirituales",
        description: "Trabajan con energía pero muchas veces carecen de estructura terapéutica y seguimiento."
      },
      coaching: {
        title: "Coaching Motivacional",
        description: "Ofrece impulso temporal sin llegar a la raíz de los patrones que repites."
      }
    },
    dimensions: {
      scientific: {
        title: "DIMENSIÓN CIENTÍFICA",
        icon: "🧠",
        points: [
          "Técnicas psicoterapéuticas validadas (Gestalt, Humanística)",
          "Formación profesional en Psicología Clínica",
          "Procesos estructurados que generan cambios sostenibles"
        ]
      },
      transpersonal: {
        title: "DIMENSIÓN TRANSPERSONAL",
        icon: "🔮",
        points: [
          "Lectura profunda del campo energético",
          "Identificación de patrones inconscientes y kármicos",
          "Limpieza y Desintoxicación del Campo Áurico"
        ]
      },
      integrative: {
        title: "DIMENSIÓN INTEGRATIVA",
        icon: "⚖️",
        points: [
          "Radiestesia para reequilibrar energías",
          "Tarot terapéutico para revelar tramas ocultas",
          "Registros Akáshicos para sanar desde la raíz"
        ]
      }
    }
  },
  results: {
    title: "RESULTADOS QUE PUEDES ESPERAR",
    levels: {
      mental: {
        title: "Nivel Mental/Emocional",
        benefits: [
          "Transformación de patrones limitantes",
          "Procesamiento y liberación de traumas",
          "Reconstrucción de la autoestima desde la autenticidad"
        ]
      },
      physical: {
        title: "Nivel Físico/Energético",
        benefits: [
          "Desarrollo de tu Coherencia Enérgetica",
          "Comprensión del origen emocional de síntomas",
          "Restauración del flujo y vitalidad energética"
        ]
      },
      spiritual: {
        title: "Nivel Espiritual/Existencial",
        benefits: [
          "Claridad en tu propósito de vida",
          "Reconexión con tu sabiduría interior",
          "Desarrollo de tu Coherencia Cuantica",
          "Descubrimiento de tu Supra Conciencia"
        ]
      }
    }
  },
  isThisForYou: {
    title: "¿ES ESTE ENFOQUE PARA TI?",
    points: [
      "Sientes que algo falta en tu proceso, aunque no sabes exactamente qué.",
      "Repites patrones en relaciones o situaciones de vida.",
      "Experimentas síntomas físicos sin explicación médica clara.",
      "Quieres integrar tu crecimiento personal con tu evolución espiritual.",
      "Deseas descubrir y vivir tu propósito auténtico.",
      "Has probado terapias tradicionales pero sigues con vacío interno.",
      "Quieres activar tu intuición y desaprender viejos condicionamientos."
    ]
  },
  commitment: {
    title: "MI COMPROMISO CONTIGO",
    points: [
      "Ofrecerte un espacio seguro, confidencial y sin juicios.",
      "Combinar lo científico y lo transpersonal con ética.",
      "Acompañarte respetando tu ritmo y verdad interior.",
      "Guiarte con claridad, compasión y profesionalismo.",
      "Sostener tu camino hasta que los resultados se integren."
    ],
    modalities: {
      title: "Modalidades de Trabajo",
      options: [
        "Presencial: sesiones en consultorio con atención personalizada",
        "Virtual: acompañamiento profundo desde cualquier lugar",
        "Asistencia y Soporte Psicológico entre Sesiones"
      ]
    }
  },
  testimonials: {
    title: "TESTIMONIOS DE TRANSFORMACIÓN",
    items: [
      {
        text: "Después de años de terapia convencional, el acompañamiento de Nunash me permitió acceder a niveles de sanación que jamás imaginé. Hoy vivo con más propósito y paz.",
        author: "María Elena",
        age: 34
      },
      {
        text: "Su capacidad de ver lo invisible y unirlo con una estructura real me ayudó a reprogramar mi vida. Es un antes y un después.",
        author: "Carlos",
        age: 42
      }
    ]
  },
  cta: {
    title: "COMIENZA HOY, DA EL PASO HACIA UNA VERSIÓN MÁS AUTÉNTICA Y PLENA DE TI",
    subtitle: "",
    quote: "La sanación real integra mente, cuerpo y alma en un diálogo consciente y amoroso.",
    author: "Lic. Nunash Dahiana Velásquez Guerrero"
  }
};