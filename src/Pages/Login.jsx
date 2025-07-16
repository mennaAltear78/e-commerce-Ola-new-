'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  FormHelperText,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogin, userlogin } from '../app/features/loginSlice'
import { Navigate, useNavigate } from 'react-router-dom'
// import { Toaster, toaster } from "@/components/ui/toaster"

export default function Login({isAuthenticated}) {
  if(isAuthenticated)return <Navigate to='/' replace/>

  const [showPassword, setShowPassword] = useState(false)
  const [isEmail ,setIsEmail]=useState(false)
  const [isPassword,setIspassword]=useState(false)

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const {loading ,data ,error}=useSelector(selectLogin)
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const onChangeHandeler=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
  }

  const Formhandeler=(e)=>{
    e.preventDefault()
    console.log(user.email ,user.password);
   if(!user.email){
    setIsEmail(true) 
    return
  }
    else setIsEmail(false) 
   if(!user.password){
    setIspassword(true)
    return
  }
    else setIspassword(false)


  console.log(dispatch(userlogin(user)));
   console.log(user);
   
  }

  return (
    <Box
      minH={'100vh'}
     
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text> */}
        </Stack>
        <Box
         as='form'
         onSubmit={Formhandeler}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input 
              required={false}
              isInvalid={isEmail}
              name='email'
              type="email" 
              value={user.email}  
              onChange={onChangeHandeler}/>
                   <FormHelperText>
                  {isEmail?<Text color='red' >Email Required</Text>:null}
                </FormHelperText>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              
              <InputGroup>
                <Input 
                required={false}
                name='password'
                isInvalid={isPassword}
                type={showPassword ? 'text' : 'password'} 
                value={user.password}
                onChange={onChangeHandeler}
                />
              
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon/> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
               <FormHelperText>
                  {isPassword? <Text color='red' >Password Required</Text>:null}
                </FormHelperText>
            </FormControl>

            <Stack spacing={10}>
           
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'} cursor={"pointer"} on onClick={()=>navigate('/sinup')}>create an account</Text>
              
              </Stack>
              <Button
               type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                isLoading={loading}
                >
                Sign in
              </Button> 
            </Stack>
          </Stack>
        </Box>
      </Stack>
  
    </Box>
  )
}