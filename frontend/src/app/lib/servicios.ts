// lib/servicios.ts
import { Servicio } from '@/types/servicio';
import { servicios } from '@/data/servicios';


// Obtener servicios destacados (featured = true)
export const getServiciosFeatured = (): Servicio[] => {
  return servicios.filter(servicio => servicio.featured);
};

// Obtener un servicio por su slug
export const getServicioBySlug = (slug: string): Servicio | undefined => {
  return servicios.find(servicio => servicio.slug === slug);
};

// Obtener servicios por categoría
export const getServiciosByCategory = (category: string): Servicio[] => {
  return servicios.filter(servicio => servicio.category === category);
};

// Buscar servicios por texto
export const searchServicios = (query: string): Servicio[] => {
  const lowerQuery = query.toLowerCase();
  return servicios.filter(servicio =>
    servicio.title.toLowerCase().includes(lowerQuery) ||
    servicio.description.toLowerCase().includes(lowerQuery) ||
    servicio.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// Obtener todas las categorías disponibles
export const getAllCategories = (): string[] => {
  const categories = servicios
    .map(servicio => servicio.category)
    .filter(category => category !== undefined) as string[];
  return [...new Set(categories)];
};

// Obtener servicios con precio
export const getServiciosWithPrice = (): Servicio[] => {
  return servicios.filter(servicio => servicio.price);
};

// Obtener servicios por tags
export const getServiciosByTag = (tag: string): Servicio[] => {
  return servicios.filter(servicio =>
    servicio.tags?.some(serviceTag =>
      serviceTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

// Obtener servicios ordenados por precio (menor a mayor)
export const getServiciosByPriceAsc = (): Servicio[] => {
  return servicios
    .filter(servicio => servicio.price)
    .sort((a, b) => (a.price?.amount || 0) - (b.price?.amount || 0));
};

// Obtener servicios ordenados por precio (mayor a menor)
export const getServiciosByPriceDesc = (): Servicio[] => {
  return servicios
    .filter(servicio => servicio.price)
    .sort((a, b) => (b.price?.amount || 0) - (a.price?.amount || 0));
};

// Obtener servicios relacionados (misma categoría, excluyendo el actual)
export const getRelatedServicios = (currentSlug: string, limit: number = 3): Servicio[] => {
  const currentServicio = getServicioBySlug(currentSlug);
  if (!currentServicio || !currentServicio.category) {
    return [];
  }

  return servicios
    .filter(servicio => 
      servicio.category === currentServicio.category && 
      servicio.slug !== currentSlug
    )
    .slice(0, limit);
};

// Estadísticas de servicios
export const getServiciosStats = () => {
  const total = servicios.length;
  const featured = servicios.filter(s => s.featured).length;
  const withPrice = servicios.filter(s => s.price).length;
  const categories = getAllCategories().length;
  
  const avgPrice = servicios
    .filter(s => s.price)
    .reduce((sum, s) => sum + (s.price?.amount || 0), 0) / withPrice;

  return {
    total,
    featured,
    withPrice,
    categories,
    avgPrice: Math.round(avgPrice)
  };
};

// Validar si un slug existe
export const isValidSlug = (slug: string): boolean => {
  return servicios.some(servicio => servicio.slug === slug);
};

// Obtener el próximo y anterior servicio (para navegación)
export const getAdjacentServicios = (currentSlug: string) => {
  const currentIndex = servicios.findIndex(servicio => servicio.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  const previous = currentIndex > 0 ? servicios[currentIndex - 1] : null;
  const next = currentIndex < servicios.length - 1 ? servicios[currentIndex + 1] : null;

  return { previous, next };
};