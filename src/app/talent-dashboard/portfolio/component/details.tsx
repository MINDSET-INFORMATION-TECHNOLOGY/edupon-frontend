'use client';

import { Box, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Upload, { UploadHandle } from './upload';
import PortfolioForm from './form';

export default function PortfolioDetails() {
  const uploadRef = useRef<UploadHandle>(null);

  const [isEditing, setIsEditing] = useState(false);

  // ✅ ADD image to state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    skills: '',
    link: '',
    image: '', // 🔥 NEW
  });

  const handleButton = () => {
    if (!isEditing) {
      // ===== EDIT MODE =====
      setIsEditing(true);
      uploadRef.current?.setEditing(true);
    } else {
      // ===== SAVE MODE =====

      // 🔥 Get image from upload
      const tempPreview = uploadRef.current?.getTempPreview();

      // 🔥 Save image inside upload component
      uploadRef.current?.savePreview();

      // 🔥 STORE IMAGE IN STATE
      setFormData((prev) => ({
        ...prev,
        image: tempPreview || prev.image, // fallback if no new image selected
      }));

      setIsEditing(false);
      uploadRef.current?.setEditing(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={6}>
      <Box p={4}>
        {/* Upload */}
        <Upload ref={uploadRef} />

        <Box w="auto" border="1px solid #F7F6F6" p="20px" borderRadius="16px" mt={10}>
          {/* Form */}
          <PortfolioForm formData={formData} setFormData={setFormData} isEditing={isEditing} />

          {/* Button */}
          <Button size="lg" width="full" mt={8} onClick={handleButton}>
            {!isEditing ? 'Edit' : 'Save'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
