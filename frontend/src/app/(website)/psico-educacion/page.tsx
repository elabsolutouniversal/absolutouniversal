import BlogList from '@/components/blog/BlogList'
import React from 'react'

import { blogPosts } from '@/data/servicios/blog';



export default function page() {
  return (
    <main>
      <BlogList posts={blogPosts} postsPerPage={6} />
    </main>
  )
}
