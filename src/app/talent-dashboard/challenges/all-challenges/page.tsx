'use client'

import {useState} from 'react'
import { 
  Box, 
  Text, 
  InputGroup,
  InputLeftElement,
  Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';

  import All from './components/all'
  import Completed from './components/completed'
  import Ongoing from './components/ongoing'
  import Upcoming from './components/upcoming'
  import InputBox from './components/searchBox'

export default function AllChallenges() {

  const [search, setSearch] = useState<string>('')

  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize='32px' fontWeight='bold'>
          All Challenges
        </Text>
        <Text color='#70777F' fontSize='16px'>
          Browse and filter challenges
        </Text>

        <Tabs defaultIndex={0} mt='24px'>

          <Box display='flex' alignItems='center' justifyContent='space-between' gap='50px' w='90%'>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.500" />
              </InputLeftElement>

              <InputBox search={search} setSearch={setSearch} />
            </InputGroup>

            <TabList border='none'>
              <Tab ml='15px' _hover={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }} 
              _selected={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }}>
                All
              </Tab>
              <Tab ml='15px' _hover={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }} 
              _selected={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }}>
                Ongoing
              </Tab>
              <Tab ml='15px' _hover={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }} 
              _selected={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }}>
                Completed
              </Tab>
              <Tab ml='15px' _hover={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }} 
              _selected={{ bg: 'blue.800', borderRadius: 'lg', color: 'white' }}>
                Upcoming
              </Tab>
            </TabList>
          </Box>

          <TabPanels w='100%' mt='24px' h='auto'>
            <TabPanel>
              <All search={search} />
            </TabPanel>
            <TabPanel>
              <Ongoing search={search} />
            </TabPanel>
            <TabPanel>
              <Completed search={search} />
            </TabPanel>
            <TabPanel>
              <Upcoming search={search} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
