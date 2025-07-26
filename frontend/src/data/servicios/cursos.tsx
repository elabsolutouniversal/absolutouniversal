import { Course } from "@/types/servicios/cursos";
import { BookOpen, Calendar, Users, Heart, Moon, Sun, Feather, Eye, Leaf, Globe, Zap, Aperture } from "lucide-react";

export const courses: Course[] = [
  {
    id: '1',
    title: 'Psico educación Consciente',
    slug: 'psico-educacion-consciente',
    description: 'Talleres orientados a lograr la comprensión de la unidad universal y tu ciclo cósmico.',
    resumen: 'Programa transformador que integra psicología transpersonal con sabiduría ancestral para una comprensión holística de tu existencia.',
    contenido: [
      'Introducción a la conciencia universal',
      'Los 7 ciclos cósmicos personales',
      'Meditaciones guiadas para la sincronización',
      'Ejercicios prácticos de autoconocimiento',
      'Talleres vivenciales mensuales'
    ],
    fechaInicio: '15 de Agosto 2023',
    duracion: '8 semanas (2 meses)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg',
    icon: Users,
    price: '$89.99',
    precioOriginal: '$120.00',
    incluye: [
      'Manual digital completo',
      '8 sesiones en vivo (1 por semana)',
      'Acceso a comunidad privada',
      'Certificado de participación'
    ]
  },
  {
    id: '2',
    title: 'Tarot Predictivo Terapéutico',
    slug: 'tarot-predictivo-terapeutico',
    description: 'Aprende a interpretar el Tarot con enfoque terapéutico para el autoconocimiento.',
    resumen: 'Dominio profesional del Tarot de Marsella aplicado al desarrollo personal y acompañamiento terapéutico.',
    contenido: [
      'Arcanos mayores y menores (significado terapéutico)',
      'Tiradas para el autoconocimiento',
      'Protocolos de consulta terapéutica',
      'Ética profesional en lecturas',
      'Casos prácticos y supervisiones'
    ],
    fechaInicio: '5 de Septiembre 2023',
    duracion: '12 semanas (3 meses)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg',
    icon: BookOpen,
    price: '$150.00',
    precioOriginal: '$180.00',
    incluye: [
      'Baraja de Tarot de Marsella (digital)',
      'Manual completo de interpretación',
      '3 supervisiones grupales',
      'Certificación internacional'
    ]
  },
  {
    id: '3',
    title: 'Sanación con Péndulo Hebreo',
    slug: 'sanacion-pendulo-hebreo',
    description: 'Técnicas profesionales de radiestesia con péndulo hebreo para terapia energética.',
    resumen: 'Método certificado de sanación cuántica usando el péndulo hebreo como instrumento de diagnóstico y armonización.',
    contenido: [
      'Fundamentos de radiestesia cuántica',
      'Protocolos de limpieza energética',
      'Armonización de chakras y aura',
      'Liberación de patrones kármicos',
      'Aplicación a distancia'
    ],
    fechaInicio: '20 de Septiembre 2023',
    duracion: '6 semanas (1.5 meses)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg',
    icon: Calendar,
    price: '$125.00',
    incluye: [
      'Péndulo hebreo profesional (incluido)',
      'Manual de fórmulas hebreas',
      'Prácticas guiadas',
      'Certificado de formación'
    ]
  },
  {
    id: '4',
    title: 'Astrología Kármica Integral',
    slug: 'astrologia-karmica-integral',
    description: 'Interpretación de cartas natales con enfoque en lecciones y deudas kármicas.',
    resumen: 'Análisis profundo de tu carta astral para descubrir patrones transgeneracionales y propósitos del alma.',
    contenido: [
      'Planetas retrógrados y su significado kármico',
      'Nodos lunares y misión de vida',
      'Cuadratura T y desafíos del alma',
      'Sinastría kármica (relaciones)',
      'Técnicas de liberación'
    ],
    fechaInicio: '10 de Octubre 2023',
    duracion: '10 semanas (2.5 meses)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154286/terapiaIntegrativa-holiticia-2_uli8ak.jpg',
    icon: Moon,
    price: '$135.00',
    incluye: [
      'Software profesional de astrología',
      'Análisis completo de tu carta natal',
      '3 lecturas individuales',
      'Material de estudio avanzado'
    ]
  },
  {
    id: '5',
    title: 'Reiki Usui Nivel I - Iniciación',
    slug: 'reiki-usui-nivel-1',
    description: 'Primera iniciación en el sistema tradicional japonés de sanación energética.',
    resumen: 'Sintonización al Reiki Usui para autotratamiento y aplicación básica a otros.',
    contenido: [
      'Historia y principios del Reiki',
      'Auto-tratamiento completo',
      'Tratamiento básico a otros',
      'Meditación Gassho',
      'Técnicas japonesas originales'
    ],
    fechaInicio: '25 de Octubre 2023',
    duracion: '4 semanas (1 mes)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3665_s4whct.jpg',
    icon: Heart,
    price: '$160.00',
    incluye: [
      '4 sintonizaciones individuales',
      'Manual del método Usui original',
      'Diploma internacional',
      'Sesión de seguimiento'
    ]
  },
  {
    id: '6',
    title: 'Alquimia de los 7 Chakras',
    slug: 'alquimia-7-chakras',
    description: 'Activación y equilibrio del sistema energético mediante técnicas ancestrales.',
    resumen: 'Viaje iniciático por cada centro energético con prácticas transformadoras.',
    contenido: [
      'Anatomía sutil del sistema de chakras',
      'Diagnóstico energético personal',
      'Técnicas de activación para cada chakra',
      'Meditaciones guiadas específicas',
      'Mantras y mudras poderosos'
    ],
    fechaInicio: '5 de Noviembre 2023',
    duracion: '7 semanas (7 sesiones)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153968/pendulo-hebreo_fnvk0o.jpg',
    icon: Aperture,
    price: '$95.00',
    incluye: [
      'Kit de trabajo con cristales',
      'Audios de meditación',
      'Manual de prácticas diarias',
      'Sesión individual de diagnóstico'
    ]
  },
  {
    id: '7',
    title: 'Numerología Tántrica',
    slug: 'numerologia-tantrica',
    description: 'Interpretación de tu matriz numérica personal según la tradición tántrica.',
    resumen: 'Descifra tu propósito de vida a través de los números y sus vibraciones energéticas.',
    contenido: [
      'Cálculo de tu número de vida',
      'Matriz de desafíos y dones',
      'Ciclos personales y anuales',
      'Compatibilidad numérica',
      'Rituales de activación'
    ],
    fechaInicio: '15 de Noviembre 2023',
    duracion: '5 semanas (5 sesiones)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg',
    icon: Zap,
    price: '$85.00',
    incluye: [
      'Análisis numerológico personal',
      'Calendario de ciclos personales',
      'E-book de referencia',
      'Grupo de estudio'
    ]
  },
  {
    id: '8',
    title: 'Registros Akáshicos Profesionales',
    slug: 'registros-akashicos-profesionales',
    description: 'Formación completa para lectores profesionales de los Registros Akáshicos.',
    resumen: 'Aprende el protocolo sagrado para acceder a la biblioteca cósmica de forma ética y profesional.',
    contenido: [
      'Pre-protocolos de conexión',
      'Técnicas de protección energética',
      'Preguntas poderosas',
      'Interpretación de símbolos',
      'Casos prácticos supervisados'
    ],
    fechaInicio: '1 de Diciembre 2023',
    duracion: '8 semanas (2 meses)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg',
    icon: Eye,
    price: '$175.00',
    incluye: [
      'Manual completo del método',
      '3 supervisiones individuales',
      'Protocolos profesionales',
      'Certificación internacional'
    ]
  },
  {
    id: '9',
    title: 'Fitoterapia Sagrada Andina',
    slug: 'fitoterapia-sagrada-andina',
    description: 'Uso ceremonial de plantas maestras según la tradición andina.',
    resumen: 'Aprende los usos terapéuticos y espirituales de las plantas medicinales andinas.',
    contenido: [
      'Preparación de remedios naturales',
      'Baños de florecimiento',
      'Ceremonias de sanación',
      'Dietas vegetales',
      'Ética en el uso de plantas'
    ],
    fechaInicio: '10 de Enero 2024',
    duracion: '6 semanas (6 sesiones)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg',
    icon: Leaf,
    price: '$110.00',
    incluye: [
      'Kit inicial de hierbas',
      'Manual de preparaciones',
      'Ceremonia de iniciación',
      'Seguimiento personalizado'
    ]
  },
  {
    id: '10',
    title: 'Constelaciones Familiares Cuánticas',
    slug: 'constelaciones-familiares-cuanticas',
    description: 'Terapia sistémica avanzada con enfoque cuántico.',
    resumen: 'Método innovador que combina constelaciones familiares con física cuántica para resultados profundos.',
    contenido: [
      'Campos morfogenéticos',
      'Técnicas de liberación cuántica',
      'Protocolos a distancia',
      'Constelaciones individuales',
      'Integración emocional'
    ],
    fechaInicio: '20 de Enero 2024',
    duracion: '8 semanas (2 meses)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154286/terapiaIntegrativa-holiticia-2_uli8ak.jpg',
    icon: Globe,
    price: '$145.00',
    incluye: [
      '4 constelaciones individuales',
      'Manual de técnicas cuánticas',
      'Sesión de integración',
      'Acceso a grupo de apoyo'
    ]
  },
  {
    id: '11',
    title: 'Cristaloterapia Avanzada',
    slug: 'cristaloterapia-avanzada',
    description: 'Terapia con cristales y gemas para sanación profesional.',
    resumen: 'Dominio de las propiedades curativas de los minerales y su aplicación terapéutica.',
    contenido: [
      'Geometría sagrada en cristales',
      'Layouts terapéuticos específicos',
      'Elixires cristalinos',
      'Programación de cristales',
      'Protocolos para diferentes dolencias'
    ],
    fechaInicio: '5 de Febrero 2024',
    duracion: '6 semanas (6 sesiones)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3665_s4whct.jpg',
    icon: Feather,
    price: '$120.00',
    incluye: [
      'Set inicial de 7 cristales',
      'Manual de referencia rápida',
      'Guía de elixires',
      'Certificación profesional'
    ]
  },
  {
    id: '12',
    title: 'Terapia de Sonido Ancestral',
    slug: 'terapia-sonido-ancestral',
    description: 'Sanación con instrumentos sagrados de diversas tradiciones.',
    resumen: 'Aprende técnicas profesionales de terapia de sonido con instrumentos ancestrales.',
    contenido: [
      'Cuencos tibetanos (aplicación terapéutica)',
      'Tambores chamánicos',
      'Diapasones terapéuticos',
      'Canto armónico',
      'Protocolos completos'
    ],
    fechaInicio: '15 de Febrero 2024',
    duracion: '5 semanas (5 sesiones)',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153968/pendulo-hebreo_fnvk0o.jpg',
    icon: Sun,
    price: '$130.00',
    incluye: [
      'Cuenco tibetano de práctica',
      'Audios de referencia',
      'Manual de frecuencias curativas',
      'Sesión demostrativa'
    ]
  }
];