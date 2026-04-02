'use client';

import { Box, Text, Link, Button, SimpleGrid } from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import { keyframes } from '@emotion/react';

const blink = keyframes`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`;

import Opportunity from './opportunity';

interface OpportunityType {
  class: string;
  properties: {
    type: string;
    days: string;
    name: string;
    subname: string;
    description: string;
  }[];
}

export default function OpportunitiesComponent() {
  const [opportunities, setOpportunities] = useState<OpportunityType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setOpportunities(Opportunity);
    }, 3000);
  }, []);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box gap="8px">
          <Text fontSize="22px" fontWeight="bold" color="#2E3338">
            Challenges & Opportunities
          </Text>
          <Text color="#ABB2BA" fontSize="12px">
            Recommended Opportunities for you
          </Text>
        </Box>

        <Link fontSize="16px" borderRadius="12px">
          View More
        </Link>
      </Box>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6} mt={6}>
          {opportunities.length === 0 ? (
            <Text fontSize="lg">
              Loading
              <Text as="span" animation={`${blink} 1.4s infinite`} ml="2px">
                .
              </Text>
              <Text as="span" animation={`${blink} 1.4s infinite 0.2s`} ml="2px">
                .
              </Text>
              <Text as="span" animation={`${blink} 1.4s infinite 0.4s`} ml="2px">
                .
              </Text>
            </Text>
          ) : (
            opportunities.map((item) =>
              item.properties.map((c) => (
                <Box border="1px solid #E3E5E8" p="16px" borderRadius="10px" key={c.days}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text
                      color={
                        c.type === 'Challenge' ? '#CC0000'
                        : c.type === 'Project' ? '#FFA500'
                        : '#06C76D'
                      }
                      fontSize="10px"
                      bg={
                        c.type === 'Challenge' ? '#FFE5E5'
                        : c.type === 'Project' ? '#FFF6E5'
                        : '#E6FEF3'
                      }
                      p="6px"
                      borderRadius="8px"
                    >
                      {c.type}
                    </Text>

                    <Text color="#ABB2BA" fontSize="12px">
                      {c.days}
                    </Text>
                  </Box>

                  <Text color='#2E3338' fontSize='14px' mt={6}>
                    {c.name}
                  </Text>

                  <Text color='#ABB2BA' fontSize='12px' mt={1}>
                    {c.subname}
                  </Text>

                  <Text color='#737F8C' fontSize='12px' mt={4}>
                    {c.description}
                  </Text>

                  <Button w='full' borderRadius='lg' mt={6}>
                    {item.class}
                  </Button>
                </Box>
              ))
            )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
