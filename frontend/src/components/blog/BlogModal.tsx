"use client";

import React, { useEffect } from 'react';
import { X, Calendar, Tag, Clock, Share2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { BlogModalProps } from '@/types/blog';

const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  // Efectos para manejar el scroll y el escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getCategoryColor = (categoria: string) => {
    const colors: Record<string, string> = {
      'Terapia Holística': 'bg-purple-100 text-purple-800 border-purple-200',
      'Péndulo': 'bg-blue-100 text-blue-800 border-blue-200',
      'Energía': 'bg-green-100 text-green-800 border-green-200',
      'Meditación': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Rituales': 'bg-orange-100 text-orange-800 border-orange-200',
      'Astrología': 'bg-violet-100 text-violet-800 border-violet-200',
      'Homeopatía': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Tarot': 'bg-pink-100 text-pink-800 border-pink-200',
      'Musicoterapia': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Pranayama': 'bg-amber-100 text-amber-800 border-amber-200'
    };
    return colors[categoria] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.titulo,
          text: post.resumen,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        // Aquí podrías mostrar un toast de "Enlace copiado"
      }
    } catch (err) {
      console.error('Error al compartir:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex items-start justify-center min-h-screen p-0 sm:p-4">
        <div className="relative bg-white w-full h-screen sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-xl shadow-xl overflow-hidden flex flex-col">
          {/* Header móvil */}
          <div className="sm:hidden sticky top-0 z-10 bg-white border-b border-gray-200 p-3">
            <button
              onClick={onClose}
              className="p-1 text-gray-600 rounded-full"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Header desktop */}
          <div className="hidden sm:flex sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.categoria)}`}>
                {post.categoria}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{getReadingTime(post.contenido)} min de lectura</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                title="Compartir"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contenido */}
          <div className="overflow-y-auto flex-1">
            {/* Imagen */}
            {post.imagen && (
              <div className="w-full aspect-video sm:aspect-[21/9] relative bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400">
                <Image
                  src={post.imagen}
                  alt={post.titulo}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            )}

            {/* Contenido principal */}
            <div className="p-4 sm:p-6">
              {/* Título */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {post.titulo}
              </h1>

              {/* Resumen */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 sm:p-5 mb-5 sm:mb-6 rounded-r-lg">
                <p className="text-purple-800 text-sm sm:text-base">
                  {post.resumen}
                </p>
              </div>

              {/* Contenido */}
              <div className="prose prose-sm sm:prose max-w-none text-gray-700">
                {post.contenido.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Etiquetas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        <Tag className="w-3 h-3 mr-1.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer móvil */}
          <div className="sm:hidden sticky bottom-0 bg-white border-t border-gray-200 p-3 flex justify-between items-center">
            <button
              onClick={handleShare}
              className="flex items-center text-purple-600 text-sm font-medium"
            >
              <Share2 className="w-4 h-4 mr-1.5" />
              Compartir
            </button>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              <span>{getReadingTime(post.contenido)} min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;