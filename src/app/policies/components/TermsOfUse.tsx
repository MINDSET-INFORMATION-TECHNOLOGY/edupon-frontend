'use client';

import { VStack, Box, Text, Heading, List, ListItem } from '@chakra-ui/react';

const TermsOfUse = () => {
  return (
    <Box mb={4}>
      <VStack>
        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18}>
            1. Introduction
          </Heading>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mt={2}>
            Welcome to EduPons an online platform connecting students, educators, and businesses for
            learning, teaching, and collaboration. By using EduPons, you agree to follow these Terms
            of Use. Please read them carefully.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={4}>
            2. Who These Terms Apply To
          </Heading>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>
              Students: Users who register to learn, access courses, or participate in learning
              activities.
            </ListItem>
            <ListItem>
              Educators: Users who create, manage, or deliver educational content.
            </ListItem>
            <ListItem>
              Businesses: Organizations or institutions using EduPons for employee training,
              recruitment, or partnerships.
            </ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            3. Eligibility
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            You must:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>
              Be at least 13 years old (students under 13 require parental consent).
            </ListItem>
            <ListItem>Provide accurate registration details.</ListItem>
            <ListItem>Use EduPons only for lawful educational purposes.</ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            4. Account Responsibilities
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            You are responsible for:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Keeping your login details secure.</ListItem>
            <ListItem>Not sharing your account or impersonating another user.</ListItem>
            <ListItem>Updating your information when needed.</ListItem>
            <ListItem>
              Educators & Businesses: You are responsible for the content or materials uploaded
              under your organization or teaching account.
            </ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            5. Acceptable Use
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            You agree not to:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Post or share illegal, harmful, or plagiarized content.</ListItem>
            <ListItem>Harass, bully, or discriminate against others.</ListItem>
            <ListItem>Use EduPons for commercial advertising without permission.</ListItem>
            <ListItem>Interfere with the platform’s security or functionality.</ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            6. Content Ownership
          </Heading>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            <Text as="span" fontWeight="bold">
              Students:
            </Text>{' '}
            Own your uploaded assignments or submissions.
          </Text>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            <Text as="span" fontWeight="bold">
              Educators:
            </Text>{' '}
            Retain ownership of your original teaching content, but grant EduPons a license to
            display it within the platform.
          </Text>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            <Text as="span" fontWeight="bold">
              Businesses:
            </Text>{' '}
            Own your organizational content but grant EduPons rights to host and manage it securely.
          </Text>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            EduPons may display or recommend your public content (like course previews) to other
            users, but always with attribution.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            7. Payments and Subscriptions
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            If EduPons offers paid features:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Prices will be clearly stated before checkout.</ListItem>
            <ListItem>All payments are handled securely through approved providers.</ListItem>
            <ListItem>Refunds (if applicable) follow EduPons’ refund policy.</ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            8. Termination
          </Heading>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            EduPons may suspend or delete accounts that violate these terms.
          </Text>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            You can close your account at any time by contacting support@edupons.com.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            9. Limitation of Liability
          </Heading>

          <Text color="#505959" fontSize={16} mb={2}>
            EduPons is not responsible for:
          </Text>

          <List styleType="disc" pl={6} as="ul" color="#505959" fontSize={{ base: 14, xl: 18 }}>
            <ListItem>Loss of data due to user error or third-party actions.</ListItem>
            <ListItem>Content accuracy created by educators or businesses.</ListItem>
            <ListItem>Service interruptions beyond our control.</ListItem>
          </List>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={18} mb={2}>
            10. Changes to Terms
          </Heading>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            We may update these Terms from time to time. Updates will be posted on this page with a
            revised “Last Updated” date.
          </Text>
        </Box>

        <Box py={8} borderBottomWidth="1px" w="100%" mb={4}>
          <Heading color="#131515" fontSize={{ base: 14, xl: 18 }} mb={2}>
            11. Contact Us
          </Heading>

          <Text color="#505959" fontSize={{ base: 14, xl: 18 }} mb={2}>
            For questions about these Terms, reach out at legal@edupons.com
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default TermsOfUse;
