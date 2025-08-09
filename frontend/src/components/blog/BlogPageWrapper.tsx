'use client';

import React from 'react';
import BlogList from '@/components/blog/BlogList';
import { blogPosts } from '@/data/servicios/blog';

export default function BlogPageWrapper() {
  return <BlogList posts={blogPosts} />;
}