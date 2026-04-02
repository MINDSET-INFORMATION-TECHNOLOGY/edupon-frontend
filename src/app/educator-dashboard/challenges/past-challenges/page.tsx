import { Box, Text, Grid, Flex } from '@chakra-ui/react';
import { FiCheck, FiUsers } from 'react-icons/fi';

const pastChallenges = [
  {
    id: 1,
    title: 'Academic Writing Challenge',
    winner: 'Alpha',
    participants: 40,
    endDate: 'Dec 2024',
  },
  {
    id: 2,
    title: 'EdTech Hackathon 2025',
    winner: 'Mindset',
    participants: 50,
    endDate: 'Jan 2025',
  },
  {
    id: 3,
    title: 'Research Methods Quiz Bowl',
    winner: 'Scholars United',
    participants: 28,
    endDate: 'Mar 2024',
  },
  {
    id: 4,
    title: 'Hack The Box',
    winner: 'Team Blackhat',
    participants: 50,
    endDate: 'April 2025',
  },
];

export default function PastChallenges() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize="32px" fontWeight="bold">
          Past Challenge
        </Text>
        <Text color="#70777F" fontSize="16px">
          View your completed challenge
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
