// aboutData.ts

interface StudyItem {
  title: string;
  description: string;
}

export interface AboutData {
  name: string;
  title: string;
  license: string;
  specialties: string[];
  tagline: string;
  images: {
    profile: string;
    terapiaHolistica: string;
    workspace1: string;
    tarot: string;
    workspace2: string;
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
      content: string[];
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
  specialties: ["Terapeuta Transpersonal", "Canalizadora Psíquica", "Especialista en Curaciones Energéticas"],
  tagline: "¿Sientes que hay un vacío que ni la terapia tradicional ni el crecimiento personal convencional han logrado llenar?",
  images: {
    profile: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg",
    terapiaHolistica: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg",
    workspace1: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg",
    tarot: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076494/IMG_3535_1_ecjcra.jpg",
    workspace2: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154286/terapiaIntegrativa-holiticia-2_uli8ak.jpg"
  },
  biography: {
    awakening: {
      title: "El Despertar de un Don",
      content: [
        "Supe a través de las conversaciones de mis padres que yo desde muy pequeñita tenia un don peculiar, pues mi madre contaba entre risas que yo podía encontrar objetos perdidos con mucha facilidad y percibir con claridad las intenciones ,y energía de las personas",

        "A los 11 años, esa sensibilidad se hizo más evidente cuando  aprendo a leer las cartas españolas logrando predecir sucesos y acontecimientos que ocurrirían en mi familia  , al notar esta capacidad  mi padre, me obsequia mi primer tarot , el Tarot egipcio Fournier, el  cuál también se mi hizo muy fácil de comprender e interpretar. mas adelante adquirí el hermoso tarot de Osho zen descubriendo su gran potencial para el beneficio de los seres humanos, herramienta que he tomado  como guía para orientar a los demás en base a esta filosofía basada en el aquí y ahora."
      ]
    },
    professionalFormation: {
      title: "La Formación Profesional",
      content: [
        "Posteriormente, estudie psicología especializándome en psicoterapia gestalt . Lo que le dio forma y estructura a mis habilidades ,  convenciéndome  de la capacidad  y fuerza de  que tenemos todos  los seres humanos para  resolver nuestros problemas y afrontarlos."
      ]
    },
    fusion: {
      title: "La Fusión: Ciencia, Mente, Cuerpo y Espíritu",
      content: [
        "Por este motivo, seguí investigando y estudiando otras disciplinas complementarias que trabajan no solo sobre la psique y el cuerpo físico, sino también a niveles energéticos y espirituales.",
        "Decidí formarme en terapia de resonancia con péndulo hebreo y posteriormente me especialicé en registros akáshicos y Tarot Akáshicos.",
        "Luego afiné todos estos conocimientos con disciplinas como el Tarot terapéutico Junguiano basado en la psicoterapia analítica de Carl Gustav Jung, y el Tarot para el desarrollo personal.",
        "Todas estas herramientas son las que actualmente combino para abordar a mis clientes.",
        "Estoy convencida de que haber nacido humano es maravilloso, que nuestro ser es profundamente perfecto y que el cuerpo humano es también profundamente perfecto, con un sistema operativo bastante complejo. Mientras tenga vida, seguiré investigando en las profundidades de lo que significa ser humano y lo que implica haber nacido humano."
      ],
             studies: [
         {
           title: "Radiestesia con péndulo hebreo",
           description: "Técnica ancestral para diagnóstico energético"
         },
         {
           title: "Psicotarot desde el enfoque terapéutico de Carl Gustav Jung",
           description: "Integración de arquetipos y psicología profunda"
         },
         {
           title: "Terapia Transpersonal",
           description: "Abordaje que trasciende el ego personal"
         },
         {
           title: "Registros Akáshicos",
           description: "Acceso a la memoria universal del alma"
         },
         {
           title: "Integración de simbología y arquetipos",
           description: "Comprensión profunda de patrones inconscientes"
         },
         {
           title: "Lectura energética intuitiva",
           description: "Percepción y sanación del campo energético"
         }
       ]
    },
    integration: {
      title: "Especializaciones:",
      content: [
      ""
      ],
      studies: [
        {
          title: "Formacion Profesional en Psicología Clínica",
          description: "Base científica y metodológica para el abordaje terapéutico"
        },
        {
          title: "Especialización en Psicoterapia Gestalt",
          description: "Enfoque holístico centrado en el aquí y ahora"
        },
        {
          title: "Terapista de Radiestecia con Péndulo Hebreo",
          description: "Técnica ancestral para diagnóstico y sanación energética"
        },
        {
          title: "Formacion en Registros Akáshicos",
          description: "Acceso a la memoria universal del alma"
        },
        {
          title: "Formacion en Tarot Akashicos",
          description: "Lectura profunda de patrones kármicos y espirituales"
        },
        {
          title: "Formacion en Tarot Terapéutico desde el enfoque de la psicología analítica de Carl Gustavo Jung",
          description: "Integración de arquetipos y psicología profunda"
        }
      ]
    }
  },
  approach: {
    title: "MI ENFOQUE: LA SÍNTESIS ENTRE CIENCIA Y CONSCIENCIA",
    subtitle: "Mi Metodo Integrado",
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
          "Limpieza y Desintoxiacion del Campo Aurico"
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
          "Liberación de tensiones crónicas",
          "Comprensión del origen emocional de síntomas",
          "Restauración del flujo y vitalidad energética"
        ]
      },
      spiritual: {
        title: "Nivel Espiritual/Existencial",
        benefits: [
          "Claridad en tu propósito de vida",
          "Reconexión con tu sabiduría interior",
          "Desarrollo de intuición y alineamiento profundo"
        ]
      }
    }
  },
  isThisForYou: {
    title: "¿ES ESTE ENFOQUE PARA TI?",
    points: [
      "Sientes que algo falta en tu proceso, aunque no sabes exactamente qué.",
      "Repetes patrones en relaciones o situaciones de vida.",
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
        "Asistencia y Soporte Psicologico entre Sesiones"
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
    title: "COMIENZA HOY , DA EL PASO HACIA UNA VERSION MAS AUTENTICA Y PLENA DE TI",
    subtitle: "",
    quote: "La sanación real integra mente, cuerpo y espíritu en un diálogo consciente y amoroso.",
    author: "Lic. Nunash Dahiana Velásquez Guerrero"
  }
};