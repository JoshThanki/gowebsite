import React, { useState, ChangeEvent, FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig"; // Make sure to configure Firebase
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
  HStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);

    if (validateUsername()) {
      setError(null);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        username + "@live.warwick.ac.uk",
        password
      );
      setError(null);
      navigate("/signup-complete");
    } catch (err: any) {
      console.error("Firebase error:", err);
      setError(err.message);
    }
  };

  const validateUsername = () => {
    const userNamePattern = /^[up]\d{7}$/;

    return userNamePattern.test(username);
  };

  const handleBlur = () => {
    if (!validateUsername()) {
      setError("Use student id");
    }
  };

  const getErrorMessage = (error: any) => {
    switch (error) {
        case 'Firebase: Error (auth/invalid-email).':
            return 'The email address is not valid.';
        case 'Firebase: Error (auth/user-disabled).':
            return 'This user has been disabled.';
        case 'Firebase: Error (auth/user-not-found).':
            return 'No user found with this email.';
        case 'Firebase: Error (auth/wrong-password).':
            return 'The password is incorrect.';
        case 'Firebase: Error (auth/email-already-in-use).':
            return 'This username is already in use.';
        default:
            return error;
    }
};


  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="400px"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="rgba(0,0,0,0.7)"
        textColor="gray.300"
      >
        <Heading textAlign="center" mb={6}>
          Sign up
        </Heading>

        <form onSubmit={handleSignUp}>
          <VStack spacing={4}>
            {/* Email Input */}
            <FormControl isInvalid={!!error}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                onBlur={handleBlur}
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
              {error && <FormErrorMessage>{getErrorMessage(error)}</FormErrorMessage>}
            </FormControl>

            <Button type="submit" colorScheme="blue" width="full">
              Sign up
            </Button>
          </VStack>
        </form>
        <HStack justifyContent={"center"} spacing={2}>
          <Text>Forgot password?</Text>
          <Link to={"/login"} style={{ textDecoration: "underline" }}>
            Change password
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default RegisterPage;
