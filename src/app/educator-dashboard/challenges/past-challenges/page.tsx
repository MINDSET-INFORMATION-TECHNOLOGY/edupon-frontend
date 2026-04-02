import { Box, Text, Grid, Flex } from '@chakra-ui/react';
import { FiCheck, FiUsers } from 'react-icons/fi';

const pastChallenges = [
  {
    id: 1,
    title: 'Data Analysis Sprint',
    winner: 'Alpha',
    participants: 10,
    endDate: 'Mar 2024',
  },
  {
    id: 2,
    title: 'Academic Writing Guide v2.0',
    winner: 'Mindset',
    participants: 15,
    endDate: 'May 2024',
  },
  {
    id: 3,
    title: 'Blended Learning Framework',
    winner: 'Scholars United',
    participants: 20,
    endDate: 'Apr 2024',
  },
  {
    id: 4,
    title: 'AI-Powered Assessment Tool',
    winner: 'Blackhat',
    participants: 25,
    endDate: 'Mar 2024',
  },
];

export default function PastChallenges() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize="32px" fontWeight="bold">
          Past Projects
        </Text>
        <Text color="#70777F" fontSize="16px">
          View your completed projects
        </Text>

        <Box w="100%" h="auto" rounded="lg" mt="24px">
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
            }}
            gap={12}
          >
            {pastChallenges.map((challenge) => (
              <Box
                key={challenge.id}
                display={'flex'}
                flexDirection={'column'}
                gap={7}
                border="1px solid"
                borderColor={'gray.100'}
                p="20px"
                rounded="lg"
              >
                <Box display={'flex'} flexDirection={'column'} gap={3}>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    color="brand.500"
                    gap={2}
                    fontWeight={'medium'}
                  >
                    <FiCheck size={24} />
                    <Text color="gray.700">{challenge.title}</Text>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} gap={2} color="gray.700">
                    <FiUsers size={16} />
                    <Text>{challenge.participants} participants</Text>
                  </Box>
                  <Text color="gray.400">
                    Winner:{' '}
                    <Text as="span" color="gray.700" fontWeight="bold">
                      {challenge.winner}
                    </Text>
                  </Text>
                </Box>

                <Flex align="center" justify={'flex-start'} gap={1}>
                  <Box backgroundColor={'gray.200'} px={4} py={0.5} rounded="full">
                    <Text color="brand.500" fontWeight={'semibold'} fontSize="14px">
                      {challenge.endDate}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
