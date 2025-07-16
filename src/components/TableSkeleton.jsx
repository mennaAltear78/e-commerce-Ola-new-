import { Box, Divider, Flex, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

function TableSkeleton() {
  return (
    <Stack maxW="85%" mx="auto" my="10">
      {Array.from({ length: 15 }, (_, idx) => (
        <Box key={idx}>
          <Flex>
            <Skeleton flex="1" height="5" variant="pulse" mb="4" />
            <Skeleton flex="1" height="5" variant="pulse" ml={"10"} />
            <Skeleton flex="1" height="5" variant="pulse" ml={"10"} />
            <Skeleton flex="1" height="5" variant="pulse" ml={"10"} />
            <Skeleton
              ml={"10"}
              variant="shine"
              width="10"
              height="7"
              startColor="blue.200"
              endColor="red"
            />
            <Skeleton
              ml={"4"}
              variant="shine"
              width="10"
              height="7"
              startColor="red"
              endColor="blue.300"
            />
                   <Skeleton
              ml={"4"}
              variant="shine"
              width="10"
              height="7"
              startColor="blue"
              endColor="blue.300"
            />
          </Flex>

          <Divider />
        </Box>
      ))}
    </Stack>
  );
}

export default TableSkeleton;
