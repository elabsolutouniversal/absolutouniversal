'use client';

import React from 'react';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import { BlogCardProps } from '@/types/blog';

const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
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
      'Pranayama': 'bg-amber-100 text-amber-800 border-amber-200',
    };
    return colors[categoria] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <article className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 overflow-hidden">
        {post.imagen ? (
          <Image
            src={post.imagen}
            alt={post.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium opacity-90">{post.categoria}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium border ${getCategoryColor(post.categoria)}`}>
            {post.categoria}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {post.titulo}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2 sm:line-clamp-3 leading-snug">
          {post.resumen}
        </p>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-700">#{tag}</span>
            ))}
            {post.tags.length > 2 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-500">+{post.tags.length - 2}</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            <span>{getReadingTime(post.contenido)} min</span>
          </div>

          <button
            onClick={() => onReadMore(post.id)}
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group-hover:bg-purple-600 group-hover:text-white"
          >
            Leer
            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;