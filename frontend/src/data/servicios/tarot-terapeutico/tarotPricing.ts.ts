export interface TarotPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  recommended?: boolean;
  icon?: string;
}

export const tarotPlans: TarotPlan[] = [
  {
    id: 'single-question',
    name: 'Consulta Rápida',
    duration: '1 Pregunta',
    price: 15,
    currency: '$',
    description: 'Respuesta clara y directa a una pregunta específica',
    features: [
      'Una pregunta concreta',
      'Respuesta inmediata',
      'Orientación puntual',
      'Mensaje de cierre'
    ],
    icon: '✨'
  },
  {
    id: 'half-session',
    name: 'Sesión Media',
    duration: '30 minutos',
    price: 50,
    currency: '$',
    description: 'Exploración profunda de tu situación actual',
    features: [
      'Análisis detallado',
      'Múltiples preguntas',
      'Identificación de patrones',
      'Guía personalizada',
      'Recomendaciones específicas'
    ],
    recommended: true,
    icon: '🔮'
  },
  {
    id: 'full-session',
    name: 'Sesión Completa',
    duration: '1 hora',
    price: 70,
    currency: '$',
    description: 'Consulta integral con enfoque terapéutico completo',
    features: [
      'Lectura completa y profunda',
      'Análisis de patrones inconscientes',
      'Trabajo con bloqueos emocionales',
      'Plan de acción personalizado',
      'Seguimiento post-sesión',
      'Material de apoyo incluido'
    ],
    icon: '🌟'
  }
];

export const whatsappConfig = {
  number: '51962305362',
  baseMessage: 'Hola. ¿Quisiera agendar una sesión?',
  getLink: (planName?: string) => {
    const message = planName 
      ? `Hola. ¿Quisiera agendar una sesión de ${planName}?`
      : whatsappConfig.baseMessage;
    
    return `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(message)}`;
  }
};