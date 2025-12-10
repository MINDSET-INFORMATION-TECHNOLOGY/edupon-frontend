/**
 * Blog post type definitions
 */

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  category?: string;
  readTime?: number; // in minutes
}

export interface BlogListResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
}
