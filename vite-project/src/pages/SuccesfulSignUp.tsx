import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SuccessfulSignUp: React.FC = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.7)" // Same background style
      textColor="gray.300" // Same text color
    >
      <Box
        width="400px"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="rgba(0, 0, 0, 0.8)" // Slightly darker background for the inner box
      >
        <Heading textAlign="center" mb={6}>You Signed Up!</Heading>
        <VStack spacing={4} textAlign="center">
          <Text>Thank you for registering. You can now log in.</Text>
          <Link to="/login">
            <Button colorScheme="blue" width="full">
              Go to Login
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default SuccessfulSignUp;