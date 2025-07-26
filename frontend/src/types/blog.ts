// types/blog.ts
export interface BlogPost {
  id: number;
  titulo: string;
  fecha: string;
  categoria: string;
  slug: string;
  imagen: string;
  resumen: string;
  contenido: string;
  tags: string[];
  estado: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface BlogSearchFilters {
  query: string;
  categoria?: string;
  tag?: string;
}

export interface BlogListProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSearch: (filters: BlogSearchFilters) => void;
  isLoading?: boolean;
}

export interface BlogCardProps {
  post: BlogPost;
  onReadMore: (postId: number) => void;
}

export interface BlogSearchProps {
  onSearch: (filters: BlogSearchFilters) => void;
  categorias: Categoria[];
  totalResults?: number;
  isLoading?: boolean;
}

export interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}