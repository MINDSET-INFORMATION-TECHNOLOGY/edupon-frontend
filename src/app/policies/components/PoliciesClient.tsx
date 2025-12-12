'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  VStack,
  Box,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

/**
 * Client component for policies page with tab functionality, separated from page.tsx to enable Server Component with metadata
 */
export default function PoliciesClient() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const initialIndex = tab === 'privacy' ? 1 : 0;

  // Controlled tab state
  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <VStack spacing={4} mb="4" mt="150px">
      <Box textAlign="center">
        <Text fontSize={12} color="#1E3A8A">
          Last updated on 13th November 2025
        </Text>

        <Heading fontSize={48} color="#131515" fontWeight="normal">
          Policies
        </Heading>

        <Text fontSize={16} color="#131515">
          Our commitment to transparency and trust.
        </Text>
      </Box>

      <Tabs
        variant="unstyled"
        colorScheme="blue"
        h="100%"
        w="100%"
        index={tabIndex}
        onChange={setTabIndex}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box w="248px" h="52px" borderWidth="1px" rounded="30px" p={1}>
            <TabList display="flex" flexDirection="row" justifyContent="center" gap={4} h="100%">
              <Tab
                w="125px"
                h="44px"
                px="9px"
                py="10px"
                fontSize={14}
                color="#505959"
                borderRadius="full"
                transition="background 0.2s ease, color 0.2s ease"
                _hover={{ bg: 'brand.500', color: 'white' }}
                _selected={{
                  bg: 'brand.500',
                  color: 'white',
                  borderRadius: 'full',
                  boxShadow: 'none',
                  borderBottom: 'none',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Terms of use
              </Tab>

              <Tab
                w="135px"
                h="44px"
                px="9px"
                py="10px"
                fontSize={14}
                color="#505959"
                borderRadius="full"
                transition="background 0.2s ease, color 0.2s ease"
                _hover={{ bg: 'brand.500', color: 'white' }}
                _selected={{
                  bg: 'brand.500',
                  color: 'white',
                  borderRadius: 'full',
                  boxShadow: 'none',
                  borderBottom: 'none',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Privacy policy
              </Tab>
            </TabList>
          </Box>

          <Box display="flex" flexDirection="column" mt="50px" w="93%">
            <TabPanels>
              <TabPanel>
                <TermsOfUse />
              </TabPanel>

              <TabPanel>
                <PrivacyPolicy />
              </TabPanel>
            </TabPanels>
          </Box>
        </Box>
      </Tabs>
    </VStack>
  );
}
