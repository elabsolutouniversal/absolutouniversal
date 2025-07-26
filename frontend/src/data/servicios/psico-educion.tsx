// psico-educion.tsx
export interface BlogPost {
  id: number;
  titulo: string;
  fecha: string;
  categoria: string;
  slug: string;
  imagen: string;
  resumen: string;
  contenido: string;
  tags: string[];
  estado: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface Metadatos {
  total_posts: number;
  fecha_creacion: string;
  idioma: string;
  tema_principal: string;
  formato: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    titulo: "Introducción a la Terapia Holística",
    fecha: "2025-01-15",
    categoria: "Terapia Holística",
    slug: "introduccion-terapia-holistica",
    imagen: "",
    resumen: "La terapia holística aborda al ser humano como un todo integrado: cuerpo, mente y espíritu trabajan en conjunto para alcanzar el bienestar.",
    contenido: "En este artículo exploramos el origen histórico de la terapia holística y cómo su visión integradora difiere de los enfoques convencionales. Verás ejemplos prácticos de casos en los que se combinan técnicas físicas (como masajes y acupuntura), energéticas (reiki, imposición de manos) y mentales (meditación, visualización). Además, repasaremos recomendaciones para elegir un terapeuta y establecer un plan de sesiones personalizado según tus necesidades. Finalmente, compartimos testimonios breves de personas que lograron un cambio profundo al adoptar esta disciplina.",
    tags: ["terapia holística", "bienestar integral", "cuerpo-mente-espíritu", "sanación"],
    estado: "publicado"
  },
  {
    id: 2,
    titulo: "Sanación con Péndulo Hebreo",
    fecha: "2025-02-15",
    categoria: "Péndulo",
    slug: "sanacion-pendulo-hebreo",
    imagen: "",
    resumen: "El péndulo hebreo es una herramienta de radiestesia que equilibra las vibraciones energéticas del cuerpo.",
    contenido: "En esta entrada detallamos el origen esotérico del péndulo hebreo y su vinculación con alfabetos sagrados. Te enseñamos el protocolo paso a paso: desde la limpieza previa del espacio hasta la creación de un mapa de chakras para guiar la práctica. También revisamos las precauciones a tener en cuenta y los errores comunes que pueden alterar los resultados. Incluimos casos de éxito de sanación emocional y física, y sugerimos ejercicios de refuerzo para consolidar tu experiencia energética.",
    tags: ["péndulo hebreo", "radiestesia", "energía", "chakras", "sanación"],
    estado: "publicado"
  },
  {
    id: 3,
    titulo: "Cómo Equilibrar tus Chakras",
    fecha: "2025-03-15",
    categoria: "Energía",
    slug: "como-equilibrar-chakras",
    imagen: "",
    resumen: "Los chakras son centros de energía que influyen en tu salud física y emocional.",
    contenido: "Analizaremos cada uno de los siete chakras principales: ubicación, color asociado y desequilibrios frecuentes. Te proponemos ejercicios de respiración, visualización y uso de cristales para actuar sobre cada centro energético. También explicamos rutinas cortas de yoga y mantras específicos para reforzar el flujo vital. A lo largo del artículo encontrarás fotografías de ejemplo y consejos para crear un ambiente propicio en tu hogar o espacio de trabajo.",
    tags: ["chakras", "energía", "cristales", "yoga", "mantras", "equilibrio energético"],
    estado: "publicado"
  },
  {
    id: 4,
    titulo: "Meditación y Sanación Interior",
    fecha: "2025-04-15",
    categoria: "Meditación",
    slug: "meditacion-sanacion-interior",
    imagen: "",
    resumen: "La meditación no es solo relajación: es un puente hacia tu propio proceso de sanación interior.",
    contenido: "En este artículo revisamos varias tradiciones meditativas (mindfulness, metta, vipassana) y sus beneficios específicos para la sanación del cuerpo y la mente. Incluimos una guía de prácticas guiadas de 5, 10 y 20 minutos, con instrucciones paso a paso y archivos de audio de apoyo. Profundizamos en cómo detectar patrones de pensamiento limitantes y transformar emociones negativas en oportunidades de crecimiento.",
    tags: ["meditación", "mindfulness", "vipassana", "sanación interior", "crecimiento personal"],
    estado: "publicado"
  },
  {
    id: 5,
    titulo: "Rituales de Luz y Limpieza Energética",
    fecha: "2025-05-15",
    categoria: "Rituales",
    slug: "rituales-luz-limpieza-energetica",
    imagen: "",
    resumen: "Los rituales de luz te ayudan a purificar tu espacio y tu campo áurico.",
    contenido: "Descubriremos por qué la luz es símbolo universal de purificación y protección. Te enseñamos a preparar baños de sal marina, sahumerios con hierbas sagradas y visualizaciones guiadas para renovar tu energía. Cada ritual viene con indicaciones sobre la frecuencia ideal, materiales necesarios y precauciones. Ilustramos con ejemplos prácticos cómo adaptar estos rituales a diferentes espacios (hogar, oficina) y momentos (antes de dormir, al iniciar el día).",
    tags: ["rituales", "limpieza energética", "purificación", "sal marina", "sahumerios"],
    estado: "publicado"
  },
  {
    id: 6,
    titulo: "Autoconocimiento a través de la Astrología",
    fecha: "2025-06-15",
    categoria: "Astrología",
    slug: "autoconocimiento-astrologia",
    imagen: "",
    resumen: "Tu carta natal es un mapa de influencias planetarias que puede revelar patrones de vida.",
    contenido: "En esta publicación analizamos los componentes básicos de la carta astral: Sol, Luna y Ascendente, y cómo sus combinaciones influyen en tu personalidad y emociones. Explicamos con ejemplos qué significa un trígono, una cuadratura o una conjunción, y proponemos ejercicios de reflexión para integrar esos arquetipos en tu día a día. Incluimos un mini-glosario de términos técnicos y enlaces a herramientas gratuitas para trazar tu propia carta.",
    tags: ["astrología", "carta natal", "autoconocimiento", "planetas", "aspectos astrológicos"],
    estado: "publicado"
  },
  {
    id: 7,
    titulo: "Flores de Bach para el Equilibrio Emocional",
    fecha: "2025-07-15",
    categoria: "Homeopatía",
    slug: "flores-bach-equilibrio-emocional",
    imagen: "",
    resumen: "Las esencias florales de Bach son remedios suaves para la mente y las emociones.",
    contenido: "Revisamos las 38 fórmulas originales de Edward Bach y sus indicaciones terapéuticas. Te explicamos cómo preparar una fórmula personalizada, dosis y frecuencia de toma. Acompañamos con relatos de personas que han superado bloqueos emocionales gracias a estas esencias naturales. También hablamos de contraindicaciones y cómo combinar las flores de Bach con otras terapias holísticas para potenciar sus efectos.",
    tags: ["flores de Bach", "esencias florales", "equilibrio emocional", "remedios naturales", "Edward Bach"],
    estado: "publicado"
  },
  {
    id: 8,
    titulo: "Tarot Terapéutico: Más Allá de la Adivinación",
    fecha: "2025-08-15",
    categoria: "Tarot",
    slug: "tarot-terapeutico",
    imagen: "",
    resumen: "El tarot puede ser una poderosa herramienta de autoexploración y sanación.",
    contenido: "En este artículo hablamos de la diferencia entre tarot predictivo y tarot terapéutico. Te enseñamos tres tiradas diseñadas para trabajar la autoestima, la resolución de conflictos y el desarrollo de la intuición. Incluimos ejemplos de interpretación de cartas (Arcanos Mayores y Menores) desde una perspectiva psicológica. Además, damos pautas para crear un espacio sagrado de lectura y proteger tu energía antes y después de la sesión.",
    tags: ["tarot terapéutico", "autoexploración", "arcanos", "intuición", "desarrollo personal"],
    estado: "publicado"
  },
  {
    id: 9,
    titulo: "Sonidos Curativos y Musicoterapia",
    fecha: "2025-09-15",
    categoria: "Musicoterapia",
    slug: "sonidos-curativos-musicoterapia",
    imagen: "",
    resumen: "Los sonidos armónicos pueden equilibrar tu sistema nervioso y elevar tu estado de ánimo.",
    contenido: "Analizamos el fundamento científico de la resonancia y cómo las vibraciones influyen en las células. Te proponemos sesiones de musicoterapia casera con guías de vídeo y audio. Hablamos de las frecuencias 432 Hz y 528 Hz y sus supuestos beneficios, así como de la terapia de sonido con diapasones. Incluimos testimonios de practicantes que integran estos sonidos en su rutina de sanación.",
    tags: ["musicoterapia", "sonidos curativos", "frecuencias", "resonancia", "diapasones"],
    estado: "publicado"
  },
  {
    id: 10,
    titulo: "Respiración Consciente para el Bienestar",
    fecha: "2025-10-15",
    categoria: "Pranayama",
    slug: "respiracion-consciente-bienestar",
    imagen: "",
    resumen: "La respiración es la llave maestra del sistema nervioso.",
    contenido: "En esta entrada profundizamos en ejercicios como respiración 4-7-8, kapalabhati y nadi shodhana. Explicamos paso a paso cómo realizarlos, sus beneficios fisiológicos y contraindicaciones. Acompañamos con ilustraciones anatómicas que muestran el diafragma y la oxigenación cerebral. Finalmente, sugerimos rutinas diarias cortas y cómo combinar pranayama con meditación para potenciar sus efectos.",
    tags: ["pranayama", "respiración consciente", "sistema nervioso", "bienestar", "técnicas respiratorias"],
    estado: "publicado"
  }
];

export const categorias: Categoria[] = [
  {
    id: 1,
    nombre: "Terapia Holística",
    descripcion: "Enfoque integral del bienestar que considera cuerpo, mente y espíritu"
  },
  {
    id: 2,
    nombre: "Péndulo",
    descripcion: "Herramientas de radiestesia para equilibrio energético"
  },
  {
    id: 3,
    nombre: "Energía",
    descripcion: "Trabajo con centros energéticos y equilibrio del campo áurico"
  },
  {
    id: 4,
    nombre: "Meditación",
    descripcion: "Prácticas contemplativas para la sanación y el crecimiento personal"
  },
  {
    id: 5,
    nombre: "Rituales",
    descripcion: "Ceremonias y prácticas para purificación y protección energética"
  },
  {
    id: 6,
    nombre: "Astrología",
    descripcion: "Autoconocimiento a través del estudio de influencias planetarias"
  },
  {
    id: 7,
    nombre: "Homeopatía",
    descripcion: "Remedios naturales y esencias florales para el equilibrio emocional"
  },
  {
    id: 8,
    nombre: "Tarot",
    descripcion: "Herramienta de autoexploración y desarrollo de la intuición"
  },
  {
    id: 9,
    nombre: "Musicoterapia",
    descripcion: "Sanación a través de sonidos, frecuencias y vibraciones"
  },
  {
    id: 10,
    nombre: "Pranayama",
    descripcion: "Técnicas de respiración consciente para el bienestar integral"
  }
];

export const metadatos: Metadatos = {
  total_posts: 10,
  fecha_creacion: "2025-07-25",
  idioma: "español",
  tema_principal: "Terapias Holísticas y Bienestar Integral",
  formato: "blog_posts_database"
};

// Funciones útiles para el componente
export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (categoria: string): BlogPost[] => {
  return blogPosts.filter(post => post.categoria === categoria);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const allTags = blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)];
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, limit);
};