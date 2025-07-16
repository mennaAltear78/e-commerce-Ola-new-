import { Badge, Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../app/features/CartSlice";

function CartProduct({attributes}) {
  const dispatch=useDispatch()
  const deleteItemHandeler=()=>{

    
   dispatch(RemoveFromCart(attributes.id))
  }
  return (
    <Box mb='10px'display="flex" w='430px' h='180px' borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        objectFit="cover"
        maxW="200px"
        src={`${attributes?.thumbnail}`}
        alt="Caffe Latte"
      />
      <Box p="6" w={'100%'} >
        <Text fontWeight="bold" fontSize="lg" mb="2">
          {attributes.title}
        </Text>
        <Text mb="4">
        Quantity: {attributes.quantity} 
        </Text>
        {/* <HStack spacing={4} mb="4" >
          <Badge colorScheme="green">Hot</Badge>
          <Badge colorScheme="orange">Caffeine</Badge>
          
        </HStack> */}
        <Box >
        <Button onClick={deleteItemHandeler} ml='10px' colorScheme="red" width={'90%'}>remove</Button></Box>
      </Box>
    </Box>
  );
}

export default CartProduct;
