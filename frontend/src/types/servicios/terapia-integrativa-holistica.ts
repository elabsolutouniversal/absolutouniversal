export interface BeneficioTerapiaIntegrativa {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
  delay?: number;
}

export interface TarjetaTerapiaIntegrativa {
  titulo: string;
  src: string;
  fallbackBg: string;
  icon: React.ReactNode;
  href?: string;
  descripcion?: string;
}
export interface SesionTerapiaIntegrativa {
  numero: string;
  titulo: string;
  descripcion: string;
  color: string;
  duracion?: string;
  frecuencia?: string;
  gratuita?: boolean;
}

export interface TestimonioTerapiaIntegrativa {
  nombre: string;
  edad?: string;
  contenido: string;
  rating?: number;
  fecha?: string;      
  avatar?: string;     
}

export interface FAQTerapiaIntegrativa {
  pregunta: string;
  respuesta: string;
}