'use client'

import {
  VStack, Box, Text, Heading, List, ListItem
}
from '@chakra-ui/react';

const TermsOfUse = () => {
  return (
    <Box mb={4}>
      <VStack>
        <Box py={8} borderBottomWidth='1px' w='100%' mb={4}>
          <Heading color='#131515' fontSize={18} mb={4}>
            1. Introduction
          </Heading>

          <Text color='#505959' fontSize={16}> 
            Welcome to EduPons  an online platform connecting students, educators, and businesses for learning, 
            teaching, and collaboration. By using EduPons, you agree to follow these Terms of Use. 
            Please read them carefully.
          </Text>
        </Box>
        
        <Box py={8} borderBottomWidth='1px' w='100%' mb={4}>
          <Heading color='#131515' fontSize={18} mb={4}>
            2. Who These Terms Apply To
          </Heading>

          <List styleType='disc' pl={6} as='ul' color='#505959' fontSize={16}>
            <ListItem>Students: Users who register to learn, access courses, or participate in learning activities.</ListItem>
            <ListItem>Educators: Users who create, manage, or deliver educational content.</ListItem>
            <ListItem>Businesses: Organizations or institutions using EduPons for employee training, recruitment, or partnerships.</ListItem>
          </List>
        </Box>
        
        <Box py={8} borderBottomWidth='1px' w='100%' mb={4}>
          <Heading color='#131515' fontSize={18} mb={2}>
            3. Eligibility
          </Heading>

          <Text color='#505959' fontSize={16} mb={2}>
            You must:
          </Text>

          <List styleType='disc' pl={6} as='ul' color='#505959' fontSize={16}>
            <ListItem>Be at least 13 years old (students under 13 require parental consent).</ListItem>
            <ListItem>Provide accurate registration details.</ListItem>
            <ListItem>Use EduPons only for lawful educational purposes.</ListItem>
          </List>
        </Box>
        
        <Box py={8} borderBottomWidth='1px' w='100%' mb={4}>
          <Heading color='#131515' fontSize={18} mb={2}>
            4. Account Responsibilities
          </Heading>

          <Text color='#505959' fontSize={16} mb={2}>
            You are responsible for:
          </Text>

          <List styleType='disc' pl={6} as='ul' color='#505959' fontSize={16}>
            <ListItem>Keeping your login details secure.</ListItem>
            <ListItem>Not sharing your account or impersonating another user.</ListItem>
            <ListItem>Updating your information when needed.</ListItem>
            <ListItem>Educators & Businesses: You are responsible for the content or materials uploaded under your organization or teaching account.</ListItem>
          </List>
        </Box>
        
        <Box py={8} borderBottomWidth='1px' w='100%' mb={4}>
          <Heading color='#131515' fontSize={18} mb={2}>
            5. Acceptable Use
          </Heading>

          <Text color='#505959' fontSize={16} mb={2}>
            You agree not to:
          </Text>

          <List styleType='disc' pl={6} as='ul' color='#505959' fontSize={16}>
            <ListItem>Post or share illegal, harmful, or plagiarized content.</ListItem>
            <ListItem>Harass, bully, or discriminate against others.</ListItem>
            <ListItem>Use EduPons for commercial advertising without permission.</ListItem>
            <ListItem>Interfere with the platform’s security or functionality.</ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  )
}

export default TermsOfUse
