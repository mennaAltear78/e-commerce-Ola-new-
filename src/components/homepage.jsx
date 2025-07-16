import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Box py={20}>
      <Container maxW={'7xl'}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={10}
          align="center"
          justify="space-between"
        >
          {/* Text Content */}
          <Stack spacing={6} maxW="lg">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              lineHeight="short"
            >
              Choose Your Furniture
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Discover our premium collection of elegant, functional, and
              affordable furniture designed to make your home truly yours.
            </Text>
            <Stack direction="row" spacing={4}>
              <Button bg={"#2da2cc"}
                color={"white"}
                _hover={{
                  bg: "gray.200",
                  color: "black",
                  textTransform: "uppercase",
                }} size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Explore More
              </Button>
            </Stack>
          </Stack>

          {/* Image */}
          <Box boxSize={{ base: '100%', md: '400px' }}>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Furniture Showcase"
              rounded="lg"
              objectFit="cover"
              w="100%"
              h="100%"
              boxShadow="xl"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}