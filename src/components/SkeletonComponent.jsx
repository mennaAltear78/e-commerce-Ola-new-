import React from 'react'
import {
    HStack,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
  } from "@chakra-ui/react"
function SkeletonComponent() {
  return (
    <Stack gap="6" maxW="100%" margin={'auto'}>
      <HStack  width="full">
        <SkeletonCircle margin={'auto'} size="150" />
        
      </HStack>
      <SkeletonText  w='100px' m='auto' noOfLines={1} gap="4" />
      <SkeletonText   noOfLines={5} gap="4" />
      <SkeletonText  w='100px' m='auto' noOfLines={1} gap="4" />
      <Skeleton height="30px" m='auto' w='250px' rounded={'10px'}/>

    </Stack>
  )
}

export default SkeletonComponent