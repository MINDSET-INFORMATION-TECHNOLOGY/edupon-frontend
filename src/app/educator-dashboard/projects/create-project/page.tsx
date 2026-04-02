'use client';

import { Box, Text, Input, Textarea, Button } from '@chakra-ui/react';

export default function CreateProjects() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize="32px" fontWeight="bold">
          Create Projects
        </Text>
        <Text color="#70777F" fontSize="16px">
          Start a new academic project
        </Text>

        <Box border="1px solid #F7F6F6" w="100%" h="auto" p="32px" rounded="lg" mt="24px">
          <Text fontSize="24px" fontWeight="bold">
            Project Details
          </Text>

          <Text color="#595959" mt="24px" mb="5px">
            Project Title
          </Text>
          <Input
            type="text"
            placeholder="Enter Project Title"
            w="100%"
            border="1px solid #CBCBCB"
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
          />

          <Text color="#595959" mt="24px" mb="5px">
            Description
          </Text>
          <Textarea
            placeholder="Describe your Project Goals and Scope"
            w="100%"
            h="121px"
            border="1px solid #CBCBCB"
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
          />

          <Box
            mt="24px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="50px"
          >
            <Box w="50%">
              <Text color="#595959" mb="5px">
                Start date
              </Text>
              <Input
                type="date"
                pl="40px"
                w="full"
                border="1px solid #CBCBCB"
                _focus={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              />
            </Box>

            <Box w="50%">
              <Text color="#595959" mb="5px">
                End date
              </Text>
              <Input
                type="date"
                pl="40px"
                w="full"
                border="1px solid #CBCBCB"
                _focus={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              />
            </Box>
          </Box>

          <Button w="100%" mt="24px" mb="5px">
            Create Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
