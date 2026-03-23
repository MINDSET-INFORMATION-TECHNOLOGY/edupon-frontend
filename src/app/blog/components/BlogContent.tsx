'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { BlogPost } from '@/types/blog';
import BlogGrid from './BlogGrid';
import BadgeComponent from '@/components/badge';

interface BlogContentProps {
  initialPosts: BlogPost[];
}

const ITEMS_PER_PAGE = 10;
const CATEGORIES = ['All Categories', 'Uncategorized', 'Students', 'Companies', 'Educators'];

/**
 * Client component for blog page with search, filtering, and pagination
 */
export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredPosts = useMemo(() => {
    let filtered = initialPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(
        (post) => post.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return filtered;
  }, [initialPosts, searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <Box minH="100vh" bg="gray.50" mt="100px">
      {/* Blog Content */}
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8} align="stretch">
          {/* All Categories Button - Centered */}
          <BadgeComponent name="All Categories" />

          {/* Blog Grid */}
          {paginatedPosts.length > 0 ? (
            <BlogGrid posts={paginatedPosts} />
          ) : (
            <Box textAlign="center" py={10}>
              <Text color="gray.500">No articles found matching your criteria.</Text>
            </Box>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Flex justify="center" align="center" gap={2} mt={8}>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                isDisabled={currentPage === 1}
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  size="sm"
                  variant={currentPage === page ? 'solid' : 'outline'}
                  colorScheme={currentPage === page ? 'brand' : 'gray'}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                size="sm"
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                isDisabled={currentPage === totalPages}
              >
                Next
              </Button>
            </Flex>
          )}
        </VStack>
      </Container>
      {/* Hero Section */}
      <Box bg="white" py={16} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <VStack spacing={6}>
            <Heading as="h1" size="2xl" textAlign="center" color="gray.800">
              Check Our Articles
            </Heading>
            <Text fontSize="md" color="gray.600" textAlign="center">
              Explore our Blogs
            </Text>

            {/* Search Input */}
            <Box maxW="600px" w="100%">
              <InputGroup size="lg">
                <Input
                  placeholder="Search for news, keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="gray.50"
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="full"
                  _focus={{
                    borderColor: 'brand.500',
                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                  }}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Search"
                    icon={<SearchIcon />}
                    colorScheme="brand"
                    borderRadius="full"
                    size="sm"
                  />
                </InputRightElement>
              </InputGroup>
            </Box>

            {/* Category Filter Buttons */}
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? 'brand.600' : 'gray.600'}
                  fontWeight={selectedCategory === category ? 'bold' : 'medium'}
                  borderBottom={selectedCategory === category ? '2px solid' : 'none'}
                  borderColor="brand.600"
                  borderRadius="0"
                  px={4}
                  _hover={{
                    color: 'brand.600',
                    bg: 'transparent',
                  }}
                >
                  {category}
                </Button>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
