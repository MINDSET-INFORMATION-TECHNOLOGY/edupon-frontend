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

  // Filter posts based on search and category
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
          <Box display="flex" justifyContent="center" w="100%">
            <Button
              leftIcon={
                <Box as="span" fontSize="lg">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 0C10.1478 0 10.5294 0.158035 10.8107 0.43934C11.092 0.720644 11.25 1.10218 11.25 1.5V4.5H12.75C13.1478 4.5 13.5294 4.65804 13.8107 4.93934C14.092 5.22064 14.25 5.60218 14.25 6V12C14.4489 12 14.6397 12.079 14.7803 12.2197C14.921 12.3603 15 12.5511 15 12.75C15 12.9489 14.921 13.1397 14.7803 13.2803C14.6397 13.421 14.4489 13.5 14.25 13.5H0.75C0.551088 13.5 0.360322 13.421 0.21967 13.2803C0.0790176 13.1397 0 12.9489 0 12.75C0 12.5511 0.0790176 12.3603 0.21967 12.2197C0.360322 12.079 0.551088 12 0.75 12V4.5C0.75 4.10218 0.908035 3.72064 1.18934 3.43934C1.47064 3.15804 1.85218 3 2.25 3H3.75V1.5C3.75 1.10218 3.90804 0.720644 4.18934 0.43934C4.47064 0.158035 4.85218 0 5.25 0H9.75ZM3.75 4.5H2.25V12H3.75V4.5ZM12.75 6H11.25V12H12.75V6ZM9.75 1.5H5.25V12H9.75V1.5ZM8.25 9V10.5H6.75V9H8.25ZM8.25 6V7.5H6.75V6H8.25ZM8.25 3V4.5H6.75V3H8.25Z" fill="#1E3A8A"/>
                  </svg>

                </Box>
              }
              variant="outline"
              size="lg"
              borderRadius="full"
              borderColor="gray.200"
              color="brand.600"
              px={6}
              py={6}
              _hover={{
                borderColor: 'brand.500',
              }}
            >
              All Categories
            </Button>
          </Box>

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
