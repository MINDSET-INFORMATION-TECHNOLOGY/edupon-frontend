import { Box, Text, Button, Grid, Flex, Progress } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Assessment Tool',
    progress: 65,
    track: 'In Progress',
    due: ' Apr 2026',
  },
  {
    id: 2,
    title: 'Academic Writing Guide v2.0',
    progress: 40,
    track: 'In Progress',
    due: ' May 2026',
  },
  {
    id: 3,
    title: 'Blended Learning Framework',
    progress: 90,
    track: 'In Progress',
    due: ' Jun 2026',
  },
  {
    id: 4,
    title: 'AI-Powered Assessment Tool',
    progress: 20,
    track: 'In Progress',
    due: ' Jul 2026',
  },
];
export default function CurrentProjects() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize="32px" fontWeight="bold">
          Current Projects
        </Text>
        <Text color="#70777F" fontSize="16px">
          Track your active projects
        </Text>

        <Box w="100%" h="auto" rounded="lg" mt="24px">
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
            }}
            gap={12}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                display={'flex'}
                flexDirection={'column'}
                gap={7}
                border="1px solid"
                borderColor={'gray.100'}
                p="20px"
                rounded="lg"
              >
                <Box
                  key={project.id}
                  display={'flex'}
                  fontWeight={'medium'}
                  flexDirection={'column'}
                  gap={3}
                >
                  <Text>{project.title}</Text>
                  <Flex align="center" justify={'space-between'} gap={4}>
                    <Text>Progress</Text>
                    {project.progress}%
                  </Flex>
                  <Progress
                    value={project.progress}
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
                      {project.track}
                    </Text>
                  </Box>
                  <Text color="gray.400" fontSize="14px" fontWeight={'semibold'}>
                    Due: {project.due}
                  </Text>
                </Flex>
                <Button
                  color={'gray.700'}
                  _hover={{ color: 'white', backgroundColor: 'brand.500' }}
                  backgroundColor={'gray.400'}
                  rightIcon={<FiArrowRight />}
                >
                  Open
                </Button>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
