'use client';

import { VStack, Box, Text, Heading, List, ListItem } from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <Box mb={4}>
      <VStack>
        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18}>
            1. Introduction
          </Heading>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mt={2}>
            This Privacy Policy explains how EduPons collects, uses, and protects your personal data
            as a Student, Educator, or Business user.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={4}>
            2. Information We Collect
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            We collect information in three main ways:
          </Text>

          <Text as="span" fontWeight="bold" fontSize={14}>
            (a) Information You Provide
          </Text>

          <List
            styleType="disc"
            pl={6}
            as="ul"
            color="#505959"
            fontSize={{ base: 14, xl: 18 }}
            mt={2}
            ml={1}
            mb={4}
          >
            <ListItem>Name, email, password, and profile details.</ListItem>
            <ListItem>
              For educators/businesses: organization name, course details, payment info (if
              applicable).
            </ListItem>
            <ListItem>For students: age range, learning preferences, and activity data.</ListItem>
          </List>

          <Text as="span" fontWeight="bold" fontSize={14}>
            (b) Information Collected Automatically
          </Text>

          <List
            styleType="disc"
            pl={6}
            as="ul"
            color="#505959"
            fontSize={{ base: 14, xl: 18 }}
            mt={2}
            ml={1}
            mb={4}
          >
            <ListItem>Device data (browser type, operating system).</ListItem>
            <ListItem>Usage data (pages visited, time spent, actions taken).</ListItem>
            <ListItem>Cookies for analytics and personalization.</ListItem>
          </List>

          <Text as="span" fontWeight="bold" fontSize={14}>
            (c) Information from Third Parties
          </Text>

          <List
            styleType="disc"
            pl={6}
            as="ul"
            color="#505959"
            fontSize={{ base: 14, xl: 18 }}
            mt={2}
            ml={1}
          >
            <ListItem>
              If you sign up via Google, Facebook, or LinkedIn, we receive limited profile info as
              authorized.
            </ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            3. How We Use Your Information
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            We use data to:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Create and manage your account.</ListItem>
            <ListItem>Match students with relevant educators or courses.</ListItem>
            <ListItem>Improve learning recommendations.</ListItem>
            <ListItem>Communicate updates, reminders, or promotional messages.</ListItem>
            <ListItem>Ensure safety and compliance on the platform.</ListItem>
          </List>

          <Text color="#505959" fontSize={16} mt={2}>
            Businesses: Data may also be used to provide analytics and workforce training insights.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            4. Sharing of Information
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            We only share data with:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Trusted partners (e.g., payment processors, analytics tools).</ListItem>
            <ListItem>Educators (for enrolled students only).</ListItem>
            <ListItem>Businesses (only for enrolled employees or authorized users).</ListItem>
          </List>

          <Text color="#505959" fontSize={16} mt={2}>
            We never sell your data to advertisers or external parties.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            5. Data Retention
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            We retain data as long as your account is active or required by law.
          </Text>

          <Text color="#505959" fontSize={16} mb={2}>
            You may request data deletion at any time via privacy@edupons.com.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            6. Your Rights
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            Depending on your region (e.g., GDPR, CCPA), you have the right to:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Access, correct, or delete your data.</ListItem>
            <ListItem>Withdraw consent for data processing.</ListItem>
            <ListItem>Request data export or transfer.</ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            7. Data Security
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            We use encryption, secure servers, and regular audits to protect your information.
          </Text>

          <Text color="#505959" fontSize={16} mb={2}>
            However, no platform can guarantee 100% security, please use strong passwords and
            protect your login.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            8. Children’s Privacy
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            EduPons is designed for educational use.
          </Text>

          <Text color="#505959" fontSize={16} mb={2}>
            For students under 13, parental or institutional consent is required before account
            activation.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            9. Updates to This Policy
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            We may update this Privacy Policy periodically.
          </Text>

          <Text color="#505959" fontSize={16} mb={2}>
            Any significant changes will be communicated via email or in-app notification.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            10. Contact Us
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            Questions about this Privacy Policy?
          </Text>

          <Text color="#505959" fontSize={16} mb={2}>
            📩 privacy@edupons.com
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default PrivacyPolicy;
