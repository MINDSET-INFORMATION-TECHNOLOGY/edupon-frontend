import { SimpleGrid, Box } from '@chakra-ui/react';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
}

/**
 * Grid layout for blog posts
 * Responsive 2-column grid (1 column on mobile)
 */
export default function BlogGrid({ posts }: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <Box textAlign="center" py={15}>
        <p>No blog posts available at the moment.</p>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
}
