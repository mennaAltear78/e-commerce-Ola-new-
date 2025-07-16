import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Textarea,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import UpLoadImage from "./UpLoadImage";

function CustomModel({
  isOpen,
  onOpen,
  onClose,
  title,
  submitHandeler,
  data,
  setProductToEdit,
  productToEdit,
  thumbnailHandeler,
  isloading
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [thumbnail,setthumbnail]=useState(null)


  useEffect(()=>{
   thumbnailHandeler(thumbnail)
  },[thumbnail])


  let onchangeHandeler = (e) => {
    let { name, value } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
  };

  const onchangePriceHandeler = (e) => {
    setProductToEdit({ ...productToEdit, price: +e });
  };

  const onchangestockHandeler = (e) => {
    setProductToEdit({ ...productToEdit, stock: +e });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                name="title"
                placeholder="Product Title"
                value={data?.title}
                onChange={onchangeHandeler}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>price</FormLabel>
              <NumberInput
                name="price"
                defaultValue={data?.price}
                step={0.2}
                onChange={onchangePriceHandeler}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>stock</FormLabel>
              <NumberInput
                name="stock"
                defaultValue={data?.stock}
                step={0.2}
                onChange={onchangestockHandeler}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>
          <Box m={"auto"} w={"90%"}>
            <Text>description</Text>
            <Textarea
              value={data?.description}
              name="description"
              onChange={onchangeHandeler}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </Box>
          <FormLabel m={"auto"} width={"89%"} mb="10px">
            Thumbnail
          </FormLabel>
          <Box
            m={"auto"}
            bg={"gray.100"}
            width={"90%"}
            borderRadius={"10px"}
            pl={"10px"}
            borderColor={"gray.700"}
            h={"40px"}
            display={"flex"}
            placeItems={"center"}
          >
            <UpLoadImage thumbnailHandeler={(thumb)=>{
              setthumbnail(thumb)
            }} />
          </Box>

          <ModalFooter gap={"10px"} onClick={onClose}>
            <Button>close</Button>
            <Button colorScheme="blue" onClick={submitHandeler} isloading={isloading} >
              update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModel;
