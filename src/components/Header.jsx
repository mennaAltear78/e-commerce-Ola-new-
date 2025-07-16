import React, { useState } from 'react'
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import CookiesService from '../Services/CookiesService'
import { selectCard } from '../app/features/CartSlice'
import { useSelector } from 'react-redux'
import CustomDrawer from './CustomDrawer'

import logo from '../assets/logo.png'
 function Header() {
  const {cartProducts}= useSelector(selectCard)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  const token =CookiesService.get('jwt')
  const Links = [ 'AdmianDashboard','Products', 'Team']
const logout =()=>{
  CookiesService.remove('jwt')
  window.location.reload() // to make the widndow refreshed automatically
}
const NavLink = ({ children }) => {
  
  return (
    <Box
      as={Link}
      to={children}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
     
      >
      {children}
    </Box>
  )
}
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      
            
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Flex align="center">
                        <img src={logo} width={30} height={30} alt="logo" boxSize="40px" mr={2} />
                        <Text fontWeight="bold" fontSize="lg">ola new</Text>
                    </Flex>
             {Links.map((link) =>
  link === "dashboard" ? (
    <NavLink key="/AdminDashboard/products">dashboard</NavLink>
  ) : (
    <NavLink key={link}>{link}</NavLink>
  )
)}

            </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button onClick={onOpen} bg={colorMode === 'light' ?'gray.200':'gray.700'}>
               Cart ({cartProducts.length})
              </Button>
              <CustomDrawer onClose={onClose} isOpen={isOpen} />
              {token?    <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
            <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={logout}>logout</MenuItem>
                </MenuList>
              </Menu>: <NavLink  my='auto' fontSize={'20px'} cursor={'pointer'}>Login</NavLink> }
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default Header