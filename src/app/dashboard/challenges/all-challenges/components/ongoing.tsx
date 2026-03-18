'use client';

import { useState, useEffect } from 'react';
import { Box, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import Challenges from './challenges';

interface ChallengeType {
  challenge: string;
  properties: {
    type: string;
    name: string;
    participants: string;
  }[];
}

export default function Ongoing() {
  const [challenges, setChallenges] = useState<ChallengeType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setChallenges(Challenges);
    }, 1000);
  }, []);

  // Filter challenges with challenge === 'Ongoing'
  const filterOngoing = challenges.filter(c => c.challenge === 'Ongoing');

  return (
    <Box display="grid" color="#2E3338">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filterOngoing.length === 0 ? (
          <Text>No Challenge</Text>
        ) : (
          filterOngoing.flatMap(c =>
            c.properties.map((item) => (
              <Box key={item.name} border='1px solid #8F98A3' p='20px' borderRadius='20px'>

                <Text fontSize='18px' fontWeight='bold'>
                  {item.name}
                </Text>

                <Box display='flex' alignItems='center' mt='10px'>
                  <Image src='/people.svg' alt='people icon' w='24px' h='19px' />
                  <Text ml='5px'>
                    {item.participants}
                  </Text>
                </Box>

                <Box display='flex' alignItems='center' mt='20px'>

                  <Button
                    bg={c.challenge === 'Ongoing' ? 'blue.800' : '#ABB2BA'}
                    color={c.challenge === 'Ongoing' ? 'white' : '#1D347C'}
                    w='100px'
                    h='26px'
                    borderRadius='16px'
                    _hover={{}}
                  >
                    {c.challenge}
                  </Button>

                  <Button
                    ml='5px'
                    bg='none'
                    border='1px solid #8F98A3'
                    color='#2E3338'
                    w='100px'
                    h='26px'
                    borderRadius='16px'
                    _hover={{}}
                  >
                    {item.type}
                  </Button>

                </Box>
              </Box>
            ))
          )
        )}
      </SimpleGrid>
    </Box>
  );
}