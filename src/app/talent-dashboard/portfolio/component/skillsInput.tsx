'use client';

import { useState } from 'react';
import { Box, Input, Button, SimpleGrid, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { skills } from './skills';

// ✅ ADD PROPS
interface SkillsInputProps {
  value: string;
  onChange: (val: string) => void;
  isEditing: boolean;
}

export default function SkillInputCommaOnlySanitized({
  value,
  onChange,
  isEditing,
}: SkillsInputProps) {

  const [hiddenSkills, setHiddenSkills] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  // Handle input change with sanitization
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Remove invalid characters
    const sanitized = val.replace(/[^a-zA-Z0-9 ,]/g, '');

    if (sanitized !== val) {
      setError('Only letters, numbers, spaces, and commas are allowed as separators.');
    } else {
      setError(null);
    }

    onChange(sanitized); // 🔥 send to parent instead of local state
  };

  // Split input by comma only
  const parts = value.split(',').map((s) => s.trim());
  const lastTyped = parts.pop() || '';
  const selectedSkills = parts.filter(Boolean);

  // Filter skills
  const filteredSkills =
    lastTyped.length > 0 && !error
      ? skills.filter(
          (skill) =>
            skill.toLowerCase().startsWith(lastTyped.toLowerCase()) &&
            !selectedSkills.map((s) => s.toLowerCase()).includes(skill.toLowerCase()) &&
            !hiddenSkills.has(skill)
        )
      : [];

  // Add skill
  const addSkill = (skill: string) => {
    const newSkills = [...selectedSkills, skill];
    const newInput = newSkills.join(', ');

    onChange(newInput); // 🔥 update parent

    // Unhide if previously hidden
    setHiddenSkills((prev) => {
      const newSet = new Set(prev);
      newSet.delete(skill);
      return newSet;
    });

    setError(null);
  };

  // Hide skill button
  const hideSkillButton = (skill: string) => {
    setHiddenSkills((prev) => new Set(prev).add(skill));
  };

  return (
    <Box>
      {/* Label */}
      <Text fontSize='16px' color='#595959' mb={1}>
        Skills
      </Text>

      {/* Input */}
      <Input
        placeholder="Type a skill..."
        value={value} // 🔥 controlled
        onChange={handleInputChange}
        isDisabled={!isEditing} // 🔥 controlled by parent
        mb={2}
      />

      {/* Error */}
      {error && (
        <Alert status="error" mb={2}>
          <AlertIcon />
          {error}
        </Alert>
      )}

      {/* Skills Grid */}
      {filteredSkills.length > 0 && !error && (
        <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={2}>
          {filteredSkills.map((skill) => (
            <Button
              key={skill}
              bg='#00AA5B'
              color='white'
              size="sm"
              p={1}
              borderRadius="md"
              justifyContent="space-between"
              onClick={(e) => {
                if (!(e.target as HTMLElement).closest('.close-icon')) {
                  addSkill(skill);
                }
              }}
            >
              <Text fontSize={{ base: '10px', md: '12px' }}>
                {skill}
              </Text>

              {/* Close button inside */}
              <Box
                className="close-icon"
                ml={2}
                onClick={(e) => {
                  e.stopPropagation();
                  hideSkillButton(skill);
                }}
              >
                <CloseIcon w={3} h={3} />
              </Box>
            </Button>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}