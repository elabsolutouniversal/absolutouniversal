'use client';

import React from 'react';
import BlogList from './BlogList';
import SocialAside from './SocialAside';
import { blogPosts } from '@/data/servicios/blog';

export default function BlogWithSidebar() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      {/* MAIN: Lista de posts (incluye buscador y paginación internamente) */}
      <main className="lg:col-span-2">
        <BlogList posts={blogPosts} />
      </main>

      {/* ASIDE: Redes sociales */}
      <aside className="mt-12 lg:mt-0">
        <div className="sticky top-24">
          <SocialAside />
        </div>
      </aside>
      
    </div>
  );
}
