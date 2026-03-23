import { Box, Text, Grid, Flex } from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';

const pastProjects = [
  {
    id: 1,
    title: 'Data Analysis Sprint',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    grade: 'A',
  },
  {
    id: 2,
    title: 'Academic Writing Guide v2.0',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    grade: 'A+',
  },
  {
    id: 3,
    title: 'Blended Learning Framework',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    grade: 'B',
  },
  {
    id: 4,
    title: 'AI-Powered Assessment Tool',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
    grade: 'C',
  },
];
export default function PastProjects() {
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
            {pastProjects.map((project) => (
              <Box
                key={project.id}
                display={'flex'}
                flexDirection={'column'}
                gap={3}
                border="1px solid"
                borderColor={'gray.100'}
                p="20px"
                rounded="lg"
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  color="brand.500"
                  gap={2}
                  fontWeight={'medium'}
                >
                  <FiCheck size={24} />
                  <Text color="gray.700">{project.title}</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={2} color="gray.400">
                  {project.startDate} - {project.endDate}
                </Box>

                <Flex align="center" justify={'flex-start'} gap={1}>
                  <Box backgroundColor={'gray.200'} px={2} py={0.5} rounded="full">
                    <Text color="brand.500" fontWeight={'semibold'} fontSize="14px">
                      completed
                    </Text>
                  </Box>
                  <Box backgroundColor={'brand.500'} px={2} py={0.5} rounded="md">
                    <Text color="white" fontSize="14px" fontWeight={'semibold'}>
                      {project.grade}
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
