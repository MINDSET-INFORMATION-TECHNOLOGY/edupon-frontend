'use client';

import { VStack, Box, Image } from '@chakra-ui/react';
import FAQs from '@/components/homeComponents/faq';
import AboutSection from './AboutSection';
import WhatWeDo from './WhatWeDo';
import JoinUs from './JoinUs';

const ForEducatorsPage = () => {
  return (
    <Box mb={4}>
      <VStack>

        <Box
          w="100%"
          h={"438px"}
          mt={4}
          mb={4}
          bg="linear-gradient(to bottom, #F7FAFC 50%, #EEF2FB 50%)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            w="1203px"
            h="333px"
            mt='-69px'
            src="/aboutUs/Group 1000003578.svg"
            display={{base: 'none', md:'block'}}
          />
          
          <Image
            w="1203px"
            h="333px"
            mt='-179px'
            src="/aboutUs/Group 1000003584.svg"
            display={{base: 'block', md: 'none'}}
          />
        </Box>

        <AboutSection />

        <Box bg='#F8FCFA' w='100%'>
          <WhatWeDo />
        </Box>

        <Box bg='#F8FCFA' w='100%'>
          <FAQs />
        </Box>

        <JoinUs />

      </VStack>
    </Box>
  );
};

export default ForEducatorsPage;
