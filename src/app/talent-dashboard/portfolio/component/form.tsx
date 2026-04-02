'use client';

import { Box, Input, Textarea, Text } from '@chakra-ui/react';
import SkillsInput from './skillsInput';

// Define FormData type
export interface FormDataType {
  name: string;
  email: string;
  bio: string;
  skills: string;
  link: string;
  image: string;
}

// Props interface
interface PortfolioFormProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  isEditing: boolean;
}

export default function PortfolioForm({
  formData,
  setFormData,
  isEditing,
}: PortfolioFormProps) {
  const handleChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box>
      <Text color="#2E3338" fontSize="24px" fontWeight="bold" mb={4}>
        Portfolio Details
      </Text>

      {/* Full Name */}
      <Box mt={4}>
        <Text fontSize="16px" color="#595959">
          Full Name
        </Text>
        <Input
          mt={2}
          placeholder="Enter Fullname."
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          isDisabled={!isEditing}
        />
      </Box>

      {/* Email */}
      <Box mt={4}>
        <Text fontSize="16px" color="#595959">
          Email Address
        </Text>
        <Input
          mt={2}
          placeholder="Enter Email."
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          isDisabled={!isEditing}
        />
      </Box>

      {/* Bio */}
      <Box mt={4}>
        <Text fontSize="16px" color="#595959">
          Bio
        </Text>
        <Textarea
          mt={2}
          h="204px"
          placeholder="Tell us more about yourself. Mentors and companies will see this."
          value={formData.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          isDisabled={!isEditing}
        />
      </Box>

      {/* Skills */}
      <Box mt={4}>
        <SkillsInput
          value={formData.skills}
          onChange={(val: string) => handleChange('skills', val)}
          isEditing={isEditing}
        />
      </Box>

      {/* Portfolio Link */}
      <Box mt={4}>
        <Text fontSize="16px" color="#595959">
          Portfolio Link
        </Text>
        <Input
          mt={2}
          placeholder="Enter your portfolio / Behance / etc."
          value={formData.link}
          onChange={(e) => handleChange('link', e.target.value)}
          isDisabled={!isEditing}
        />
      </Box>
    </Box>
  );
}