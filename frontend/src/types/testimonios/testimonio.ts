export interface ITestimonio {
  nombre: string;
  rol?: string;
  contenido: string;
  rating?: number;   // 1-5
  fecha?: string;    // 'Nov 2024', 'Feb 2025', etc.
  avatar?: string | null;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}