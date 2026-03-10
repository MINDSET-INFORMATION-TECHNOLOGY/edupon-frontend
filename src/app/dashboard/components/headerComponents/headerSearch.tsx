'use client';

import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export default function HeaderSearch() {
  return (
    <Box flex="1" maxW={{ base: 'full', md: '430px' }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="gray.400" boxSize={5} />
        </InputLeftElement>

        <Input
          h="46px"
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="10px"
          placeholder="Search challenges, projects resources..."
          _placeholder={{ color: 'gray.400' }}
          _hover={{ borderColor: 'gray.300' }}
          _focus={{
            borderColor: 'blue.400',
            boxShadow: 'none',
          }}
          fontSize="sm"
        />
      </InputGroup>
    </Box>
  );
}
