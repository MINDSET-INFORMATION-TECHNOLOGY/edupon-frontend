'use client';

import { Box, Image, Input, IconButton } from '@chakra-ui/react';
import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { AddIcon } from '@chakra-ui/icons';

interface UploadProps {
  defaultPicture?: string;
}

export interface UploadHandle {
  getTempPreview: () => string | null;
  savePreview: () => void;
  setEditing: (value: boolean) => void;
  cancelEditing: () => void;
}

const Upload = forwardRef<UploadHandle, UploadProps>(({ defaultPicture }, ref) => {
  const [preview, setPreview] = useState<string | null>(null); // saved image
  const [tempPreview, setTempPreview] = useState<string | null>(null); // temporary preview
  const [isEditing, setIsEditing] = useState(false); // controls blur + + button
  const fileRef = useRef<HTMLInputElement>(null);

  const defaultPic = defaultPicture || '/94650c1b79db2f77f7fdf966d6fdf959b9366f91.jpg';

  // Open file picker
  const handleClick = () => {
    fileRef.current?.click();
  };

  // When user selects a file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setTempPreview(imageUrl); // only temporary preview
  };

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      if (tempPreview) URL.revokeObjectURL(tempPreview);
    };
  }, [tempPreview]);

  // Expose functions to parent
  useImperativeHandle(ref, () => ({
    getTempPreview: () => tempPreview,

    savePreview: () => {
      // Only overwrite preview if tempPreview exists
      if (tempPreview) {
        setPreview(tempPreview);
        setTempPreview(null);
      }
      setIsEditing(false);
    },

    setEditing: (value: boolean) => setIsEditing(value),

    cancelEditing: () => {
      // Clear tempPreview but keep the saved image
      setTempPreview(null);
      setIsEditing(false);
    },
  }));

  // Determine which image to show
  const imageToShow = tempPreview || preview || defaultPic;

  return (
    <Box display="flex" justifyContent="center">
      <Box position="relative" boxSize="280px" borderRadius="full" overflow="hidden">
        <Image
          src={imageToShow}
          alt="Profile"
          w="100%"
          h="100%"
          objectFit="cover"
          filter={isEditing && !tempPreview ? 'blur(2px)' : 'none'} // only blur saved image
          transition="0.3s ease"
        />

        {/* Hidden Input */}
        <Input
          type="file"
          accept="image/*"
          ref={fileRef}
          display="none"
          onChange={handleFileChange}
        />

        {/* + Button */}
        {isEditing && (
          <IconButton
            aria-label="Upload Image"
            icon={<AddIcon />}
            size="lg"
            borderRadius="full"
            bg="none"
            _hover={{ bg: 'none' }}
            border="4px solid #C5CAD3"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            onClick={handleClick}
          />
        )}
      </Box>
    </Box>
  );
});

export default Upload;