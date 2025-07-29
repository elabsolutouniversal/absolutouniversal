// Tipos de datos
export interface ImageData {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface Servicio {
  id: number;
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
}

export interface AudienciaItem {
  id: number;
  icon: React.ReactNode;
  texto: string;
}

// types/tarot.ts
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface TargetAudience {
  id: string;
  description: string;
  icon: string;
}

export interface TrustIndicator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SessionModality {
  id: string;
  type: 'online' | 'presencial';
  title: string;
  description: string;
  icon: string;
}

export interface TarotTherapyData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
  };
  services: Service[];
  pricingPlans: PricingPlan[];
  targetAudience: TargetAudience[];
  processSteps: ProcessStep[];
  sessionModalities: SessionModality[];
  trustIndicators: TrustIndicator[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    contactText: string;
  };
}

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