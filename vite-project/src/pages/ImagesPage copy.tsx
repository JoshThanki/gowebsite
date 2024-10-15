// ImagesPage.tsx
import React from 'react';
import {
  Box,
  Image,
  Text,
  Container,
} from '@chakra-ui/react';

// Define the ImageData interface
interface ImageData {
  src: string;
  caption: string;
}

// Updated images array with horizontal dimensions
const images: ImageData[] = [
  { src: 'https://picsum.photos/800/450', caption: 'Image 1 - Landscape' },
  { src: 'https://picsum.photos/900/500', caption: 'Image 2 - Landscape' },
  { src: 'https://picsum.photos/1200/800', caption: 'Image 3 - Landscape' },
  { src: 'https://picsum.photos/850/600', caption: 'Image 4 - Landscape' },
  { src: 'https://picsum.photos/1000/700', caption: 'Image 5 - Landscape' },
  { src: 'https://picsum.photos/1100/600', caption: 'Image 6 - Landscape' },
  { src: 'https://picsum.photos/950/400', caption: 'Image 7 - Landscape' },
  { src: 'https://picsum.photos/800/600', caption: 'Image 8 - Landscape' },
  { src: 'https://picsum.photos/1200/900', caption: 'Image 9 - Landscape' },
  { src: 'https://picsum.photos/850/400', caption: 'Image 10 - Landscape' },
];

const ImagesPageCOPY: React.FC = () => {
  return (
    <Container
      minW="70vw"
      boxShadow="lg"
      bg="rgba(0, 0, 0, 0.8)"
      textColor="gray.300"
      p={8}
      display="flex"
      flexWrap="wrap" // Allow items to wrap to the next line
      justifyContent="flex-start" // Align items to the start of the flex container
      position="relative" // Allow absolute positioning of child elements
      gap="10px" // Set a gap between images
    >
      {images.map((image, index) => (
        <Box
          key={index}
          position="relative"
          overflow="hidden"
          borderRadius="md"
          boxShadow="md"
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.05)', zIndex: 1 }} // Slightly scale on hover
          width={`${Math.random() * 150 + 200}px`} // Width between 200px and 350px
          height={`${Math.random() * 100 + 150}px`} // Height between 150px and 250px
          marginBottom="10px" // Controlled bottom margin to prevent empty space between rows
        >
          <Image
            src={image.src}
            alt={image.caption}
            borderRadius="md"
            objectFit="cover" // Maintain aspect ratio
            width="100%" // Full width of the parent Box
            height="100%" // Full height of the parent Box
          />
          <Text
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            padding={2}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            color="white"
            textAlign="center"
            opacity={0}
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
          >
            {image.caption}
          </Text>
        </Box>
      ))}
    </Container>
  );
};

export default ImagesPageCOPY;
