// types/servicios/cursos.ts
export interface Course {
  id: string;
  title: string;
  slug: string; // Nuevo campo para URLs amigables
  description: string;
  resumen: string;
  contenido: string[]; // Array de temas/modulos
  fechaInicio: string;
  duracion: string;
  image: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  price: string;
  pricePEN?: string; // Precio en Soles Peruanos
  precioOriginal?: string; // Para mostrar descuentos
  incluye?: string[]; // Qué incluye el curso
}