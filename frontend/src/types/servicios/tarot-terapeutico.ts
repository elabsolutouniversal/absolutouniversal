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