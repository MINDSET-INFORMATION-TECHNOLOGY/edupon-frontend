'use client';

import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Card
      overflow="hidden"
      variant="unstyled"
      bg="transparent"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
      }}
      border="none"
      boxShadow="none"
    >
      {/* Featured Image with Category and Date Overlay */}
      <Box position="relative" overflow="hidden" borderRadius="24px" mb={6}>
        <Image
          src={post.featuredImage}
          alt={post.title}
          width="624px"
          height="412px"
          objectFit="cover"
          fallbackSrc="https://images.unsplash.com/photo-1505153695651-9366147105f3?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        {/* Overlay with Category and Date */}
        <Flex
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
          justify="space-between"
          align="center"
          bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
        >
          <Text fontSize="sm" color="white" fontWeight="normal">
            Category: {post.category || 'Uncategorized'}
          </Text>
          <Text fontSize="sm" color="white" fontWeight="normal">
            {formatDate(post.publishedAt)}
          </Text>
        </Flex>
      </Box>

      <CardBody p={0}>
        {/* Title - Fixed 2 lines */}
        <Heading
          as="h3"
          size="md"
          mb={1}
          noOfLines={2}
          color="gray.800"
          fontWeight="bold"
          lineHeight="1.4"
          height="3.5rem"
          overflow="hidden"
        >
          {post.title}
        </Heading>

        {/* Excerpt - Fixed 2 lines */}
        <Text
          color="gray.600"
          fontSize="sm"
          mb={1}
          noOfLines={2}
          lineHeight="1.6"
          overflow="hidden"
        >
          {post.excerpt}
        </Text>

        {/* Read More Link */}
        <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
          <ChakraLink
            color="gray.800"
            fontWeight="semibold"
            fontSize="sm"
            _hover={{
              textDecoration: 'underline',
              color: 'brand.600',
            }}
          >
            Read More
          </ChakraLink>
        </Link>
      </CardBody>
    </Card>
  );
}
