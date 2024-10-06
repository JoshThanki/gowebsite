import React, { useState, ChangeEvent, FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig'; // Make sure to configure Firebase
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Heading,
  Text,
  VStack,
  HStack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      setError(null); // Clear any errors if login succeeds
    } catch (err: any) {
      setError(err.message); // Set error message on failure
    }
  };

  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center" >
      <Box width="400px" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="primary.50">
        <Heading textAlign="center" mb={6}>Login</Heading>

        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            {/* Email Input */}
            <FormControl isInvalid={!!error}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </FormControl>

            {/* Password Input */}
            <FormControl isInvalid={!!error}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
        <HStack justifyContent={"center"} spacing={2}>
          <Text>Not registered?</Text>
          <Link to={"/register"} style={{textDecoration: 'underline'}}>Sign in</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default LoginPage;