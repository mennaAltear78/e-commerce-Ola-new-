import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { supabase } from '../Api/supabaseClient';

const SignupComponent = () => {
  const [signupState, setSignupState] = useState({
    loading: false,
    data: null,
    error: null
  });
  const toast = useToast();

  const userSignup = async (user) => {
    setSignupState({ loading: true, data: null, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: { username: user.username }
        }
      });
      if (error) throw error;
      setSignupState({ loading: false, data: data, error: null });
      toast({
        title: 'SignUp is successful',
        status: 'success',
        isClosable: true,
      });
      setTimeout(() => {
        window.location.replace('/Login');
      }, 2000);
      return data;
    } catch (error) {
      let errorMsg = "Something went wrong";
      if (error && error.message) {
        errorMsg = error.message;
      } else if (typeof error === "string") {
        errorMsg = error;
      }
      setSignupState({
        loading: false,
        data: null,
        error: errorMsg
      });
      toast({
        title: 'SignUp failed',
        description: errorMsg,
        status: 'error',
        isClosable: true,
      });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
      username: formData.get('username')
    };
    try {
      await userSignup(user);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Box
      minH={'100vh'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create your account</Heading>
        </Stack>
        <Box
          as='form'
          onSubmit={handleSignup}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                required
                disabled={signupState.loading}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                required
                disabled={signupState.loading}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                required
                disabled={signupState.loading}
              />
            </FormControl>
            <Button
              type="submit"
              bg={'blue.400'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              isLoading={signupState.loading}
            >
              {signupState.loading ? 'Signing up...' : 'Sign Up'}
            </Button>
            {/* Show error or success as a Text outside FormControl to avoid context error */}
            {signupState.error && (
              <Text color="red.400" mt={2} textAlign="center">Error: {signupState.error}</Text>
            )}
            {signupState.data && (
              <Text color="green.400" mt={2} textAlign="center">Signup successful! Redirecting to login...</Text>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignupComponent;