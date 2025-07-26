'use client';

import BlogWithSidebar from "@/components/blog/BlogWithSidebar";

export default function page() {
  return (
    <section className="bg-pink-50 py-16">
          {/* Contenedor centralizado con padding */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlogWithSidebar />
          </div>
        </section>
  )
}
