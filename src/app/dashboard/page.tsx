import { Box, Text, Button } from '@chakra-ui/react';
import DashboardOverview from './components/mainPageComponents/dashboardOverview';
import Link from 'next/link';


export default function Dashboard() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={6}>
        <Box>
          <Text fontSize="32px" fontWeight="bold">
            Welcome Prof.Hezzy
          </Text>
          <Text color="#70777F" fontSize="16px">
            Here's your progress and opportunities
          </Text>
        </Box>
        <Link href="/dashboard/challenges/setup-challenges">
          <Button colorScheme="blue">Create a Challenge</Button>
        </Link>
      </Box>
      <DashboardOverview />
    </Box>
  );
}
