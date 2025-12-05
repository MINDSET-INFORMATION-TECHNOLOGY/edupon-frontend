'use client';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Container,
  Icon,
  VStack,
  Text,
  Flex,
  Heading,
  Link,
  Badge,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { MdBusiness } from 'react-icons/md';

const faqs = [
  {
    question: 'What is EduPons?',
    answer:
      'EduPons is a platform that connects students, educators, and companies to create a seamless bridge between learning and career opportunities. We facilitate skill development, mentorship, and professional growth through our comprehensive ecosystem.',
  },
  {
    question: 'How is EduPons different from other learning or job platforms?',
    answer:
      'Unlike traditional platforms, EduPons integrates learning, networking, and career opportunities in one place. We focus on creating meaningful connections between students, educators, and companies, offering personalized experiences and real-world applications of knowledge.',
  },
  {
    question: 'Who can join EduPons?',
    answer:
      'EduPons welcomes students looking to learn and grow, educators passionate about teaching, and companies seeking talented individuals. Our platform is designed to benefit anyone interested in professional development and meaningful educational experiences.',
  },
  {
    question: 'Does it cost anything to join?',
    answer:
      'Basic membership on EduPons is free! We offer premium features and services for those looking for enhanced experiences, but getting started and accessing core features costs nothing.',
  },
  {
    question: 'How do challenges work?',
    answer:
      'Challenges are hands-on projects and tasks designed to test and improve your skills. Students can participate in company-sponsored challenges, showcase their abilities, and gain recognition. Educators can create challenges, and companies can use them to identify talent.',
  },
  {
    question: 'What do students gain from using EduPons?',
    answer:
      'Students gain access to quality educational resources, mentorship from experienced educators, real-world project experience through challenges, networking opportunities with companies, and a platform to showcase their skills and build their professional portfolio.',
  },
];

export default function FAQs() {
  return (
    <Box
      w="full"
      py={0}
      px={{ base: 0, md: 14 }}
      minH={'300px'}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="center" textAlign="center">
          {/* Head tag */}
          <Badge
            gap={1}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            bgColor={'white'}
            border={'2px'}
            px={3}
            py={2}
            borderColor={'brand.50'}
            borderRadius={'full'}
          >
            <Icon as={MdBusiness} color={'brand.500'} boxSize={5} />
            <Text color={'brand.500'}>FAQs</Text>
          </Badge>

          {/* Heading */}
          <Flex direction={'column'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Heading size={{ base: 'lg', lg: 'xl' }}>Got a Question? We Have The Answer</Heading>
            <Text>Here’s everything you may want to know before you join our ecosystem</Text>
          </Flex>
          {/* Body */}
          <Box mt={2} w="full" maxW="container.md">
            <Accordion allowToggle>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} border="none" mb={4} _last={{ mb: 0 }}>
                  {({ isExpanded }) => (
                    <Box bg={'brand.50'} borderRadius="xl" overflow="hidden" w="full">
                      <h3>
                        <AccordionButton py={5} px={6}>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontSize={{ base: 'md', md: 'md' }}
                            fontWeight="semibold"
                            color="gray.800"
                          >
                            {faq.question}
                          </Box>
                          <Box color="gray.600" fontSize="xl" fontWeight="bold">
                            {isExpanded ? <MinusIcon boxSize={4} /> : <AddIcon boxSize={4} />}
                          </Box>
                        </AccordionButton>
                      </h3>
                      <AccordionPanel bgColor={'gray.50'} pb={6} px={6} pt={2} w="full">
                        <Text
                          color="gray.600"
                          lineHeight="1.8"
                          fontSize={{ base: 'sm', md: 'md' }}
                          align={'left'}
                        >
                          {faq.answer}
                        </Text>
                      </AccordionPanel>
                    </Box>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Flex direction={{ base: 'column', lg: 'row' }} alignItems={'center'} gap={1}>
            <Text fontSize={'sm'} color={'gray.500'}>
              Still have more questions? You can{' '}
            </Text>
            <Link textDecoration="underline" size={'sm'}>
              send us a message
            </Link>{' '}
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
