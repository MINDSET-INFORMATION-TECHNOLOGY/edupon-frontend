'use client'

import { Box, Text, Input, Textarea, Button } from '@chakra-ui/react';


export default function SetupChallenges() {
  
  return (
    <Box display={'flex'} flexDirection={'column'} gap={6}>
      <Box>
        <Text fontSize='32px' fontWeight='bold'>
          Set Up Challenges
        </Text>
        <Text color='#70777F' fontSize='16px'>
          Create a new challenge for participants
        </Text>

        <Box border='1px solid #F7F6F6' w='100%' h='auto' p='32px' rounded='lg' mt='24px'>
          <Text fontSize='24px' fontWeight='bold'>
            Challenge Details
          </Text>
          
          <Text color='#595959' mt='24px' mb='5px'>Challenge Title</Text>
          <Input 
            type='text'
            placeholder='Enter Challenge Title'
            w='100%'
            border='1px solid #CBCBCB'
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
          />
          
          <Text color='#595959' mt='24px' mb='5px'>Description</Text>
          <Textarea 
            placeholder='Describe the Challenge objectives and rules'
            w='100%'
            h='121px'
            border='1px solid #CBCBCB'
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
          />

          <Box mt='24px' display='flex' justifyContent='space-between' alignItems='center' gap='50px'>
            <Box w='50%'>
              <Text color='#595959' mb='5px'>Start date</Text>
              <Input
                type='date'
                pl='40px'
                w='full'
                border='1px solid #CBCBCB'
                _focus={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              />
            </Box>
            
            <Box w='50%'>
              <Text color='#595959' mb='5px'>End date</Text>
              <Input
                type='date'
                pl='40px'
                w='full'
                border='1px solid #CBCBCB'
                _focus={{
                  outline: 'none',
                  boxShadow: 'none',
                }}
              />
            </Box>
          </Box>

          <Text color='#595959' mt='24px' mb='5px'>Max Participants</Text>
          <Input 
            type='text'
            placeholder='Enter Maximum number of participants'
            w='100%'
            border='1px solid #CBCBCB'
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
          />

          <Button w='100%' mt='24px' mb='5px'>
            Create Challenge
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
