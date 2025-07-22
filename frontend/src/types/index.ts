

// 🏪 BUSINESS TYPES - El Absoluto Universal
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number; // en minutos
  image:string // ✅ Referencia directa
  category: 'tarot' | 'terapia' | 'cursos' | 'productos';
  available: boolean;
  featured?: boolean;
}