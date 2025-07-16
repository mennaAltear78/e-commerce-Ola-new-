
  import { Card, CardBody,Heading,Image, Text,Stack,ButtonGroup,CardFooter,Divider,Button, useColorMode, border} from '@chakra-ui/react'

  import React from 'react'
import { Link } from 'react-router-dom'
    
function Product({attributes}) {
    const {colorMode}=useColorMode()

    
  return (
  
    <Card maxW='md' bg='none'      m='auto'
    w='100%'  _hover={{border:'1px solid rgba(45, 162, 204, 0.51)' ,boxShadow:'lg' }}>
      <CardBody >
      <Image
    objectFit='cover'
  
    boxSize={'200px'}
    borderRadius={"full"}
    border={'3px solid #2da2cc'}
    margin='auto'
    src={`${attributes?.thumbnail}`}
    alt='Caffe Latte'
  />
        <Stack mt='6' spacing='3' w='100%' margin='auto' >
          <Heading color='#2da2cc'  rounded={'5px'} textAlign='center' mt='10px' py='4px' w={'100%'} size='md'>{attributes.title}</Heading>
          <Text fontSize="14px" textAlign="center" isTruncated>
  {attributes.description}
</Text>
          <Text textAlign='center' color='#2da2cc' fontSize='2xl'>
          {attributes?.price}$
          </Text>
        </Stack>
      </CardBody>
      <Divider color='#423c30' />
      <CardFooter>
      
          <Button 
          as={Link}
          to={`/products/${attributes.id}`}
          bg={'#2da2cc'}
          color={'white'}
          _hover={
           {  bg:"gray.200",
          color:colorMode ==='light' ?'black':'black'} }
         py='23px' variant='solid'  margin='auto' width='90%' >
           View Details
          </Button>

      </CardFooter>
    </Card>
  )
}



export default Product