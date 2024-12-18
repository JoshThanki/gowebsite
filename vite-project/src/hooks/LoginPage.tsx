import React, { useState, ChangeEvent, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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

const getErrorMessage = (error: any) => {
  switch (error) {
    case 'Firebase: Error (auth/invalid-email).':
        return 'The email address is not valid.';
    case 'Firebase: Error (auth/user-disabled).':
        return 'This user has been disabled.';
    case 'Firebase: Error (auth/user-not-found).':
        return 'No user found with this username.';
    case 'Firebase: Error (auth/wrong-password).':
        return 'The password is incorrect.';
    case 'Firebase: Error (auth/email-already-in-use).':
        return 'This email is already in use.';
    case 'Firebase: Error (auth/invalid-credential).':
        return 'Incorrect username or password.';  

    default:
        return error;
  }
};


const LoginPage: React.FC = () => {
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

  const validateUsername = () => {
    const userNamePattern = /^[up]\d{7}$/;
    return userNamePattern.test(username);
  };


  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        username + "@live.warwick.ac.uk",
        password
      );
      console.log("User logged in");
      setError(null);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
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
          Login
        </Heading>

        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!error}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
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

            {/* Submit Button */}
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
        <HStack justifyContent={"center"} spacing={2}>
          <Text>Not registered?</Text>
          <Link to={"/register"} style={{ textDecoration: "underline" }}>
            Sign up
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
