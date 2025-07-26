import { useState, useMemo, useCallback } from 'react';
import { BlogPost, BlogSearchFilters } from '@/types/blog';

interface UseBlogSearchProps {
  posts: BlogPost[];
  postsPerPage?: number;
}

export const useBlogSearch = ({ posts, postsPerPage = 6 }: UseBlogSearchProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilters, setSearchFilters] = useState<BlogSearchFilters>({
    query: '',
    categoria: '',
    tag: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Filtrar posts basado en los criterios de búsqueda (versión corregida)
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const query = searchFilters.query.toLowerCase();
      const tagQuery = searchFilters.tag?.toLowerCase() ?? '';
      
      const matchesQuery = !searchFilters.query || 
        post.titulo.toLowerCase().includes(query) ||
        post.resumen.toLowerCase().includes(query) ||
        (post.contenido && post.contenido.toLowerCase().includes(query)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)));

      const matchesCategory = !searchFilters.categoria || 
        post.categoria === searchFilters.categoria;

      const matchesTag = !searchFilters.tag || 
        (post.tags && post.tags.some(tag => 
          tag.toLowerCase().includes(tagQuery)
        ));

      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [posts, searchFilters]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Handler para búsqueda con debounce
  const handleSearch = useCallback((filters: BlogSearchFilters) => {
    setIsLoading(true);
    setSearchFilters(filters);
    setCurrentPage(1);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // Handler para cambio de página
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Reset de búsqueda
  const resetSearch = useCallback(() => {
    setSearchFilters({ query: '', categoria: '', tag: '' });
    setCurrentPage(1);
  }, []);

  return {
    // Estado
    currentPage,
    searchFilters,
    isLoading,
    
    // Datos computados
    filteredPosts,
    currentPosts,
    totalPages,
    totalResults: filteredPosts.length,
    
    // Handlers
    handleSearch,
    handlePageChange,
    resetSearch,
  };
};