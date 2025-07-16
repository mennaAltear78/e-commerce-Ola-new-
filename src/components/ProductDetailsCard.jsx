import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Stack,
  ButtonGroup,
  CardFooter,
  Divider,
  Button,
  useColorMode,
  border,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart} from "../app/features/CartSlice";
function ProductDetailsCard({ attributes }) {
  const dispatch = useDispatch();
  const navigate =useNavigate()
const BackHandeler=()=>{
   navigate(-1)
}
const addToCartHandler=()=>{
  console.log(attributes);
  
  dispatch(addToCart(attributes));//we are using dispatch to call functions from redux
}
console.log(attributes);
  return (
<Flex
  minW="100vw"
  align="center"
  justify="center"

>
  <Box spacing={8} maxW={'lg'} py={12} px={6}  >
    <Flex cursor="pointer" fontSize='20px' onClick={BackHandeler} _hover={{ color: '#2da2cc' }}>
      <BsArrowLeft />
      <Text ml="7px" mb={'10px'} mt='-3px'>Go Back</Text>
    </Flex>
    <Card
      maxW="lg"
      bg="none"
      m="auto"
      _hover={{ border: "1px solid rgba(45, 162, 204, 0.51)", boxShadow: "lg" }}
    >
      <CardBody >
        <Image
          objectFit="cover"
          boxSize={"230px"}
          borderRadius="10px"
          border={"3px solid #2da2cc"}
          margin="auto"
          src={`${attributes.thumbnail}`}
          alt="Caffe Latte"
        />
        <Stack mt="6" spacing="3" w="100%" margin="auto">
          <Heading
            color="#2da2cc"
            rounded={"5px"}
            textAlign="center"
            mt="10px"
            py="4px"
            w={"100%"}
            size="md"
          >
            {attributes.title}
          </Heading>
          <Text fontSize="14px"  textAlign="center">
       {attributes.description}
          </Text>
          <Text textAlign="center" color="#2da2cc" fontSize="2xl">
          {attributes.price}$
          </Text>
        </Stack>
      </CardBody>
      <Divider color="#423c30" />
      <CardFooter>
        <Button
          bg={"#2da2cc"}
          color={"white"}
          _hover={{
            bg: "gray.200",
            color: "black",
            textTransform: "uppercase",
          }}
          py="23px"
          variant="solid"
          margin="auto"
          width="90%"
          onClick={addToCartHandler}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  </Box>
</Flex>

  );
}

export default ProductDetailsCard;
