// BadgeComponent.tsx
import { Box, HStack, Text } from '@chakra-ui/react';

interface BadgeComponentProps {
  name: string;
}

const BadgeComponent = ({ name }: BadgeComponentProps) => {
  return (
    <Box display="flex" justifyContent="center" w="100%">
      <Box
        px="16px"
        py="8px"
        borderWidth="2px"
        rounded="full"
        borderColor="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        cursor="pointer"
      >
        <HStack spacing="8px">
          <Box as="span" fontSize="lg">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 0C10.1478 0 10.5294 0.158035 10.8107 0.43934C11.092 0.720644 11.25 1.10218 11.25 1.5V4.5H12.75C13.1478 4.5 13.5294 4.65804 13.8107 4.93934C14.092 5.22064 14.25 5.60218 14.25 6V12C14.4489 12 14.6397 12.079 14.7803 12.2197C14.921 12.3603 15 12.5511 15 12.75C15 12.9489 14.921 13.1397 14.7803 13.2803C14.6397 13.421 14.4489 13.5 14.25 13.5H0.75C0.551088 13.5 0.360322 13.421 0.21967 13.2803C0.0790176 13.1397 0 12.9489 0 12.75C0 12.5511 0.0790176 12.3603 0.21967 12.2197C0.360322 12.079 0.551088 12 0.75 12V4.5C0.75 4.10218 0.908035 3.72064 1.18934 3.43934C1.47064 3.15804 1.85218 3 2.25 3H3.75V1.5C3.75 1.10218 3.90804 0.720644 4.18934 0.43934C4.47064 0.158035 4.85218 0 5.25 0H9.75ZM3.75 4.5H2.25V12H3.75V4.5ZM12.75 6H11.25V12H12.75V6ZM9.75 1.5H5.25V12H9.75V1.5ZM8.25 9V10.5H6.75V9H8.25ZM8.25 6V7.5H6.75V6H8.25ZM8.25 3V4.5H6.75V3H8.25Z"
                fill="#1E3A8A"
              />
            </svg>
          </Box>
          <Text fontSize="sm" color="brand.600" whiteSpace="nowrap">
            {name}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default BadgeComponent;
