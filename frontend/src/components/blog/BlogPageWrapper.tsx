'use client';

import React, { useState, useEffect } from 'react';
import BlogList from '@/components/blog/BlogList';
import { blogPosts } from '@/data/servicios/blog';

export default function BlogPageWrapper() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Pequeño delay para evitar el flash inicial
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header skeleton */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          
          {/* Search skeleton */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
            <div className="h-14 bg-gray-100 rounded-xl animate-pulse" />
          </div>
          
          {/* Content skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video bg-gray-200 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <BlogList posts={blogPosts} />;
}