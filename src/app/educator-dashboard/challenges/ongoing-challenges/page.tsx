import { Box, Text, Grid, Flex, Progress } from '@chakra-ui/react';
import { FiUsers } from 'react-icons/fi';

const ongoingChallenges = [
  {
    id: 1,
    title: 'Data Analysis Sprint',
    participants: 32,
    progress: 65,
    due: ' 12 Days left',
  },
  {
    id: 2,
    title: 'Academic Writing Guide v2.0',
    participants: 32,
    progress: 40,
    due: ' 21 Days left',
  },
  {
    id: 3,
    title: 'Blended Learning Framework',
    participants: 32,
    progress: 90,
    due: ' 18 Days left',
  },
  {
    id: 4,
    title: 'AI-Powered Assessment Tool',
    participants: 32,
    progress: 20,
    due: ' 12 Days left',
  },
];
export default function OngoingChallenges() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize="32px" fontWeight="bold">
          Ongoing Challenges
        </Text>
        <Text color="#70777F" fontSize="16px">
          Monitor your active challenges
        </Text>

        <Box w="100%" h="auto" rounded="lg" mt="24px">
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
            }}
            gap={12}
          >
            {ongoingChallenges.map((challenge) => (
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
                <Box
                  key={challenge.id}
                  display={'flex'}
                  fontWeight={'medium'}
                  flexDirection={'column'}
                  gap={3}
                >
                  <Text>{challenge.title}</Text>
                  <Box display={'flex'} alignItems={'center'} gap={2} color="gray.700">
                    <FiUsers size={16} />
                    <Text>{challenge.participants} participants</Text>
                  </Box>

                  <Progress
                    value={challenge.progress}
                    colorScheme="green"
                    bg={'gray.200'}
                    size="sm"
                    borderRadius={'full'}
                    height={4}
                  />
                </Box>
                <Flex align="center" justify={'space-between'} gap={4}>
                  <Box backgroundColor={'gray.200'} px={4} py={1} rounded="full">
                    <Text color="brand.500" fontWeight={'semibold'} fontSize="14px">
                      {challenge.progress}% completed
                    </Text>
                  </Box>
                  <Text color="gray.400" fontSize="14px" fontWeight={'semibold'}>
                    {challenge.due}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
