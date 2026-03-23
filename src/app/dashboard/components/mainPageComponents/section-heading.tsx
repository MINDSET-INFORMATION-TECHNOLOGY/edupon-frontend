import { Text } from '@chakra-ui/react';

type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <Text fontSize={{ base: '2xl', md: '2xl' }} fontWeight="semibold" mb={4}>
      {title}
    </Text>
  );
}
