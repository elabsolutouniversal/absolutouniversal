// data/servicios/terapia-holistica-integrativa/sanacion-integrativa.ts

export interface InfoItem {
  id: string;
  icon?: string;
  title?: string;
  content: string;
  highlight?: boolean;
}

export interface SanacionSection {
  id: string;
  title: string;
  subtitle?: string;
  items?: InfoItem[];
  content?: string;
  type: 'info-cards' | 'process' | 'disclaimer';
}

export const sanacionIntegrativaData: SanacionSection[] = [
  {
    id: 'antes-de-iniciar',
    title: 'Prepárate para tu proceso de sanación',
    subtitle: 'Lo que necesitas saber antes de tu primera sesión',
    type: 'info-cards',
    items: [
      {
        id: 'primeras-sesiones',
        icon: '🌱',
        title: 'Expectativas realistas',
        content: 'Las primeras sesiones no garantizan resultados inmediatos. Son la base de tu proceso, abriendo el camino para un tratamiento profundo y personalizado.',
        highlight: true
      },
      {
        id: 'proceso-gradual',
        icon: '⏰',
        title: 'Tu propio ritmo',
        content: 'La sanación es personal. Cada persona avanza a su propio ritmo, con acompañamiento adaptado a sus necesidades individuales.'
      },
      {
        id: 'mente-abierta',
        icon: '💫',
        title: 'Actitud receptiva',
        content: 'Recomendamos venir con mente abierta y disposición al cambio para obtener los mejores resultados en tu proceso.'
      }
    ]
  },
  {
    id: 'proceso-terapeutico',
    title: 'Comprende nuestro proceso terapéutico',
    subtitle: 'Cómo funciona el tratamiento con Péndulo Hebreo',
    type: 'process',
    items: [
      {
        id: 'etapa-inicial',
        title: 'Etapa 1: Limpieza y Alineación Energética',
        content: 'El tratamiento inicia con cinco sesiones fundamentales que preparan tu campo energético. Esta primera etapa elimina bloqueos, energías estancadas y desequilibrios superficiales. Es como preparar un jardín: primero retiramos las malas hierbas antes de plantar nuevas semillas.'
      },
      {
        id: 'casos-profundos',
        title: 'Etapa 2: Tratamiento especializado (si es necesario)',
        content: 'Las primeras cinco sesiones son solo el inicio. Si existen trabajos energéticos negativos profundos (daños, brujería, amarres o magia), se requiere un tratamiento extendido de dos sesiones adicionales, completando siete sesiones altamente personalizadas para resultados óptimos.'
      }
    ]
  },
  {
    id: 'disclaimer',
    title: 'Nota importante',
    type: 'disclaimer',
    content: 'Esta terapia no sustituye el tratamiento médico convencional. Es un acompañamiento holístico y espiritual que potencia tu sanación integral. La paciencia, el compromiso personal y una actitud abierta son fundamentales para alcanzar resultados significativos y sostenibles.'
  }
];