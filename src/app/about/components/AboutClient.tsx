'use client';

import {
  VStack,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';

import ForStudentsPage from './ForStudents/ForStudentsPage';
import ForEducatorsPage from './ForEducators/ForEducatorsPage';
import ForCompaniesPage from './ForCompanies/ForCompaniesPage';

/**
 * Client component for policies page with tab functionality, separated from page.tsx to enable Server Component with metadata
 */
export default function AboutClient() {
  
  return (
    <VStack spacing={4} mb="4" mt="120px">

      <Box textAlign="center">
        <Heading fontSize={{base:"30px", md:"48"}} color={{base:"#4B4B4B", md:"#131515"}} fontWeight="bold">
          About Edupons
        </Heading>
      </Box>

      <Tabs 
        variant="unstyled" 
        colorScheme="blue" 
        h="100%" 
        w="100%" 
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box w={{ base: "70%", md: "448px" }} minH={{ base: "42px", md: "54px" }} borderWidth="1px" rounded="30px" p={1}>
            <TabList display="flex" flexDirection="row" justifyContent="center" gap={{base:"4px", md:"20px"}} h="100%">
              <Tab
                w={{base:"100px", md:"125px"}}
                h={{base:"32px", md:"44px"}}
                px={{base:"11px", md:"9px"}}
                py={{base:"8px", md:"10px"}}
                fontSize={{base:"10px", md:"14px"}}
                fontWeight={{base:"normal", md:"normal"}}
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
                For Students
              </Tab>

              <Tab
                w={{base:"100px", md:"135px"}}
                h={{base:"32px", md:"44px"}}
                px={{base:"11px", md:"9px"}}
                py={{base:"8px", md:"10px"}}
                fontSize={{base:"10px", md:"14px"}}
                fontWeight={{base:"normal", md:"normal"}}
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
                For Educators
              </Tab>
              
              <Tab
                w={{base:"110px", md:"135px"}}
                h={{base:"32px", md:"44px"}}
                px={{base:"11px", md:"9px"}}
                py={{base:"8px", md:"10px"}}
                fontSize={{base:"10px", md:"14px"}}
                fontWeight={{base:"normal", md:"normal"}}
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
                For Companies
              </Tab>
            </TabList>
          </Box>

          <Box display="flex" flexDirection="column" mt="50px" w="100%">
            <TabPanels>
              <TabPanel>
                <ForStudentsPage />
              </TabPanel>

              <TabPanel>
                <ForEducatorsPage />
              </TabPanel>
              
              <TabPanel>
                <ForCompaniesPage />
              </TabPanel>
            </TabPanels>
          </Box>
        </Box>
      </Tabs>

    </VStack>
  );
}
