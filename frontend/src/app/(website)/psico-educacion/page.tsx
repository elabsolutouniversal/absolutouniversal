'use client';

import React from 'react';

import { blogPosts } from '@/data/servicios/blog';
import BlogList from '@/components/blog/BlogList';
import SocialAside from '@/components/blog/SocialAside';

const BlogWithSidebar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Layout Grid responsivo */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr,320px] md:gap-8">
          {/* Contenido Principal - Siempre primero en el flujo */}
          <div className="order-1 md:order-none w-full">
            <BlogList posts={blogPosts} />
          </div>

          {/* Sidebar - Se muestra a la derecha en tablet/desktop y abajo en móvil */}
          <div className="order-2 md:order-none">
            <SocialAside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWithSidebar;