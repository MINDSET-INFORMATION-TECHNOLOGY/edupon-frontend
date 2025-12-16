import {
  VStack,
  Box,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

/**
 * SEO-friendly loading skeleton for about page
 */
export default function AboutSkeleton() {
  return (
    <VStack spacing={4} mb="4" mt="150px" role="status" aria-label="Loading policies">
      {/* Header skeleton */}
      <Box textAlign="center" w="100%">
        <Skeleton height="16px" width="200px" mx="auto" mb={4} />
        <Skeleton height="48px" width="300px" mx="auto" mb={2} />
        <Skeleton height="20px" width="400px" mx="auto" />
      </Box>

      {/* Tab controls skeleton */}
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100%">
        <Box w="248px" h="52px" borderWidth="1px" rounded="30px" p={1}>
          <Box display="flex" flexDirection="row" justifyContent="center" gap={4} h="100%">
            <Skeleton height="44px" width="125px" borderRadius="full" />
            <Skeleton height="44px" width="135px" borderRadius="full" />
            <Skeleton height="44px" width="135px" borderRadius="full" />
          </Box>
        </Box>

        {/* Content skeleton */}
        <Box display="flex" flexDirection="column" mt="50px" w="93%">
          <VStack spacing={4} align="stretch">
            <Skeleton height="32px" width="60%" />
            <SkeletonText mt={4} noOfLines={8} spacing={4} skeletonHeight={2} />
            <Skeleton height="32px" width="50%" mt={6} />
            <SkeletonText mt={4} noOfLines={6} spacing={4} skeletonHeight={2} />
            <Skeleton height="32px" width="55%" mt={6} />
            <SkeletonText mt={4} noOfLines={10} spacing={4} skeletonHeight={2} />
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}
