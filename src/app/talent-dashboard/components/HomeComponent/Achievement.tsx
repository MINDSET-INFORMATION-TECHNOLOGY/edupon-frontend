'use client';

import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';
import { FaTrophy } from 'react-icons/fa';

import { useState, useEffect } from 'react';

export default function AchievementComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1(100);
      setValue2(55);
      setValue3(95);
      setValue4(75);
      setValue5(85);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Box>
        <Text fontSize="22px" fontWeight="bold" color="#2E3338">
          Badges & Achievements
        </Text>
        <Text color="#ABB2BA" fontSize="12px">
          Your progress towards earning new badges
        </Text>
      </Box>

      <Box border="1px solid #E3E5E8" p="24px" borderRadius="10px" mt={4} boxShadow="sm">
        <Flex align="center" gap="10px" w="100%">
          <Box color="yellow.400" bg="#E3E5E8" borderRadius="50%" p="8px">
            <FaTrophy />
          </Box>

          <Box flex="1">
            <Flex justify="space-between">
              <Text fontSize="sm" color="#ABB2BA">
                Quick Learner
              </Text>
              <Text fontSize="sm" color="#ABB2BA">
                {value1}%
              </Text>
            </Flex>

            <Slider value={value1} isDisabled>
              <SliderTrack bg="#E3E5E8">
                <SliderFilledTrack bg="#ACBCEC" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
          </Box>
        </Flex>

        <Flex align="center" gap="10px" w="100%">
          <Box color="yellow.400" bg="#E3E5E8" borderRadius="50%" p="8px">
            <FaTrophy />
          </Box>

          <Box flex="1">
            <Flex justify="space-between">
              <Text fontSize="sm" color="#ABB2BA">
                Perfectionist
              </Text>
              <Text fontSize="sm" color="#ABB2BA">
                {value2}%
              </Text>
            </Flex>

            <Slider value={value2} isDisabled>
              <SliderTrack bg="#E3E5E8">
                <SliderFilledTrack bg="#ACBCEC" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
          </Box>
        </Flex>

        <Flex align="center" gap="10px" w="100%">
          <Box color="yellow.400" bg="#E3E5E8" borderRadius="50%" p="8px">
            <FaTrophy />
          </Box>

          <Box flex="1">
            <Flex justify="space-between">
              <Text fontSize="sm" color="#ABB2BA">
                Team Player
              </Text>
              <Text fontSize="sm" color="#ABB2BA">
                {value3}%
              </Text>
            </Flex>

            <Slider value={value3} isDisabled>
              <SliderTrack bg="#E3E5E8">
                <SliderFilledTrack bg="#ACBCEC" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
          </Box>
        </Flex>

        <Flex align="center" gap="10px" w="100%">
          <Box color="yellow.400" bg="#E3E5E8" borderRadius="50%" p="8px">
            <FaTrophy />
          </Box>

          <Box flex="1">
            <Flex justify="space-between">
              <Text fontSize="sm" color="#ABB2BA">
                Leader
              </Text>
              <Text fontSize="sm" color="#ABB2BA">
                {value4}%
              </Text>
            </Flex>

            <Slider value={value4} isDisabled>
              <SliderTrack bg="#E3E5E8">
                <SliderFilledTrack bg="#ACBCEC" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
          </Box>
        </Flex>

        <Flex align="center" gap="10px" w="100%">
          <Box color="yellow.400" bg="#E3E5E8" borderRadius="50%" p="8px">
            <FaTrophy />
          </Box>

          <Box flex="1">
            <Flex justify="space-between">
              <Text fontSize="sm" color="#ABB2BA">
                Innovation
              </Text>
              <Text fontSize="sm" color="#ABB2BA">
                {value5}%
              </Text>
            </Flex>

            <Slider value={value5} isDisabled>
              <SliderTrack bg="#E3E5E8">
                <SliderFilledTrack bg="#ACBCEC" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
