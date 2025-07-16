import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useQuery,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../app/features/CartSlice";
import CartProduct from "./CartProduct";
import { RemoveAllFromCart } from "../app/features/CartSlice";

function CustomDrawer({ isOpen, onClose }) {
  const { cartProducts } = useSelector(selectCard);
  const dispatch = useDispatch();

  const deleteCart=()=>{
    dispatch(RemoveAllFromCart())
  }

  return (
    <>
      <Drawer size={"md"} placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shoping cart</DrawerHeader>

          <DrawerBody>
            {cartProducts
              // .flatMap((item) =>//here he split quantity to the number of item present 
              //   Array.from({ length: item.quantity }, () => item)
              // )
              .map((item, index) => (
                <CartProduct key={`${item.id}-${index}`} attributes={item} />
              ))}
          </DrawerBody>

          <DrawerFooter>
            <Button bg="red.400" variant="outline" mr={3} onClick={deleteCart}>
              clear Cart
            </Button>
            <Button
              onClick={() => console.log("data", data)}
              colorScheme="blue"
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CustomDrawer;
