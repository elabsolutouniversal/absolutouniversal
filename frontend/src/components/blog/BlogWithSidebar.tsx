'use client';

import React from 'react';
import BlogList from './BlogList';
import SocialAside from './SocialAside';
import { blogPosts } from '@/data/servicios/blog';

const BlogWithSidebar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-8">
          
          {/* Contenido principal */}
          <main className="w-full">
            <BlogList posts={blogPosts} />
          </main>

          {/* Sidebar */}
          <aside className="w-full md:w-[320px]">
            <SocialAside />
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogWithSidebar;
