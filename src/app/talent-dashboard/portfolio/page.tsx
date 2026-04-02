
import { Box } from '@chakra-ui/react';
import PortfolioDetails from './component/details';

export default function Portfolio() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <PortfolioDetails />
    </Box>
  );
}