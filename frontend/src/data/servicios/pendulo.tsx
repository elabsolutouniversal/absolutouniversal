// data/servicios/pendulo.ts

export interface AccordionSection {
  id: string;
  title: string;
  content: string;
  iconType?: 'healing' | 'distance' | 'time' | 'space';
}

export interface BenefitItem {
  text: string;
}

export interface PenduloData {
  title: string;
  description: string;
  benefitsSection: {
    title: string;
    iconType?: 'healing' | 'distance' | 'time' | 'space';
    benefits: BenefitItem[];
  };
  accordionSections: AccordionSection[];
  ctaButton: {
    text: string;
    link: string;
  };
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  description?: string;
}

export interface GalleryData {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

export const penduloData: PenduloData = {
  title: "Terapia Con Péndulo Hebreo",
  description: "La terapia de péndulo hebreo es una técnica avanzada de radiestesia, permitiendo limpiar y equilibrar todos los niveles del ser humano: físico, mental, emocional y espiritual.",
  benefitsSection: {
    title: "¿Para qué sirve el péndulo hebreo?",
    iconType: "healing",
    benefits: [
      { text: "Detecta y limpia el campo electromagnético (aura) de miasmas, larvas y parásitos energéticos." },
      { text: "Reprograma el organismo a nivel celular, genético, metabólico y químico." },
      { text: "Limpia y combate magia negra, mal de ojo, maldiciones, amarres y malas vibraciones." },
      { text: "Desbloquea, limpia, activa y re-equilibra los chakras del cuerpo." },
      { text: "Elimina creencias limitantes, reafirmando autoestima y confianza." },
      { text: "Cancela contratos, votos y promesas de vidas pasadas y bloqueos ancestrales." },
      { text: "Detecta y repara grietas en el aura, equilibrando y restaurando este campo." },
      { text: "Corrige alteraciones físicas, mentales y emocionales." },
      { text: "Ayuda a la desintoxicación y eliminación de adicciones." },
      { text: "Desbloquea la conexión con la fuente divina, estimulando capacidades y dones." },
      { text: "Alivia situaciones de alto estrés emocional (accidentes, depresión, duelos, ansiedad, etc.)." }
    ]
  },
  accordionSections: [
    {
      id: "como-se-cura",
      title: "¿Cómo se cura con el péndulo hebreo?",
      content: "Se tenta cada centro energético para detectar desequilibrios en sus primeras fases, antes que se manifiesten en el cuerpo físico. Funciona gracias a la alta vibración que transmiten las letras hebreas, escritas en la plaquita que se coloca alrededor del péndulo, permitiendo la sanación física, mental, emocional y espiritual.",
      iconType: "time"
    },
    {
      id: "tratamiento-distancia",
      title: "¿Qué es el tratamiento a distancia con el Péndulo Hebreo?",
      content: "La energía se dirige a intención la fuerza, sin las limitaciones de tiempo y espacio, como ha demostrado la física cuántica. El tratamiento a distancia se realiza siempre con el permiso de la persona que deseará la liberación. Cuando el tratamiento es presencial, el receptor se encuentra cómodamente sobre una camilla de masaje.",
      iconType: "distance"
    },
    {
      id: "duracion-tratamiento",
      title: "¿Cuánto dura un tratamiento con el Péndulo Hebreo?",
      content: "Un tratamiento dura en promedio entre 1 hora 30 y 2 horas. Se recomienda recibir 3 sesiones para potenciar los efectos, aunque desde la primera ya se sienten beneficios. Nota: Esta terapia es complementaria y no reemplaza el seguimiento médico o terapéutico tradicional.",
      iconType: "time"
    },
    {
      id: "limpieza-lugares",
      title: "Limpieza, Purificación y Armonización de los Lugares",
      content: "Purificar tu hogar o lugar de trabajo elimina energías negativas y renueva el ambiente. La limpieza energética permite vivir mejor, liberarse de dolencias físicas y trastornos emocionales. Se recomienda hacerlo regularmente o cuando la intuición lo sugiera.",
      iconType: "space"
    }
  ],
  ctaButton: {
    text: "Agenda tu sesión por WhatsApp",
    link: "https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
  }
};

export const galleryData: GalleryData = {
  title: "Galería de Terapias",
  subtitle: "Conoce más sobre nuestras sesiones de Péndulo Hebreo",
  images: [
    {
      id: "pendulo-hebreo-1",
      url: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg",
      alt: "Péndulo Hebreo - Sesión de Terapia",
      title: "Péndulo Hebreo",
      description: "Técnica avanzada de radiestesia para equilibrar todos los niveles del ser humano"
    },
    {
      id: "terapia-integrativa-1",
      url: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
      alt: "Terapia Integrativa Holística",
      title: "Terapia Integrativa",
      description: "Enfoque holístico que combina múltiples técnicas de sanación"
    },
    {
      id: "terapia-integrativa-2",
      url: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154284/terapiaIntegrativa-holiticia-2_itvxcj.jpg",
      alt: "Sesión Holística",
      title: "Sesión Holística",
      description: "Ambiente tranquilo y armonioso para la sanación integral"
    }
  ]
};