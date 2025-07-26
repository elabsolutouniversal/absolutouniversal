"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { BlogPost, BlogSearchFilters } from '@/types/blog';
import BlogSearch from './BlogSearch';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import Pagination from '../ui/Pagination';
import { categorias } from '@/data/servicios/blog';

interface BlogListProps {
  posts: BlogPost[];
  postsPerPage?: number;
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  postsPerPage = 6
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilters, setSearchFilters] = useState<BlogSearchFilters>({
    query: '',
    categoria: '',
    tag: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    const q = (searchFilters.query ?? '').toLowerCase();
    const t = (searchFilters.tag ?? '').toLowerCase();

    return posts.filter(post => {
      const matchesQuery =
        !q ||
        post.titulo.toLowerCase().includes(q) ||
        post.resumen.toLowerCase().includes(q) ||
        (post.contenido && post.contenido.toLowerCase().includes(q)) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)));

      const matchesCategory =
        !searchFilters.categoria ||
        post.categoria === searchFilters.categoria;

      const matchesTag =
        !t ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(t)));

      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [posts, searchFilters]);

  // Paginación
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Debounce de loading
  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(1);
      if (window.innerWidth < 768) {
        document.getElementById('blog-results')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchFilters]);

  // Handlers
  const handleSearch = (filters: BlogSearchFilters) => {
    setSearchFilters(filters);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadMore = (postId: number) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      setSelectedPost(post);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  const resetSearch = () => {
    setSearchFilters({ query: '', categoria: '', tag: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Blog de{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Psico-Educación
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Descubre artículos sobre terapias holísticas y bienestar mental
          </p>
        </div>

        {/* Search */}
        <div className="sticky top-0 z-10 bg-gray-50 py-3 sm:py-4">
          <BlogSearch
            onSearch={handleSearch}
            categorias={categorias}
            totalResults={filteredPosts.length}
            isLoading={isLoading}
          />
        </div>

        {/* Results */}
        <div id="blog-results" className="pt-2">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {Array.from({ length: postsPerPage }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                  <div className="aspect-video bg-gray-200" />
                  <div className="p-3 space-y-2">
                    <div className="h-4 bg-gray-200 w-3/4 rounded" />
                    <div className="h-3 bg-gray-200 w-1/2 rounded" />
                    <div className="h-3 bg-gray-200 w-full rounded" />
                    <div className="h-3 bg-gray-200 w-2/3 rounded" />
                    <div className="h-6 bg-gray-200 w-1/2 rounded mt-2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron artículos</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Prueba con otros términos de búsqueda o elimina los filtros
              </p>
              <button
                onClick={resetSearch}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Mostrar todos
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {currentPosts.map(post => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center mt-6 sm:mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal */}
        <BlogModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default BlogList;