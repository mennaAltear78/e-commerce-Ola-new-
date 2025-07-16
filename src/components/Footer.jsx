import { Box, Container, Stack, Text, Link, Divider, useColorModeValue, Flex } from "@chakra-ui/react";
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <Box
            bg={useColorModeValue("gray.100", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            mt={10}
            
        >
            <Divider />
            <Container as={Stack} maxW="6xl" py={8}>
                <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center">
                    <Flex align="center">
                        <img src={logo} width={30} height={30} alt="logo" boxSize="40px" mr={2} />
                        <Text fontWeight="bold" fontSize="lg">ola new</Text>
                    </Flex>
                    <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                    </Stack>
                </Stack>
                <Text textAlign="center" mt={4} fontSize="sm">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
