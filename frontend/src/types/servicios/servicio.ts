// types/servicio.ts
export interface Servicio {
  title: string;
  slug: string;
  image: string;
  description: string;
} 
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
