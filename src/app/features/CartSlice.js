import { createSlice } from "@reduxjs/toolkit";
import { AddItemToCart } from "../../utils";

import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast();
const initialState = {
  cartProducts: [],
}; //the intail state of the redux

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cartProducts.push(action.payload); //payload is the something we pass to the action

      state.cartProducts = AddItemToCart(action.payload, state.cartProducts);
      // console.log(state.cartProducts ,"pojkop",state.cartProducts);
    },
    RemoveFromCart: (state, action) => {
      const existsItem = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      toast({
        description: `${existsItem.title} has been removed from your cart`,
        status: "error",
        duration: 5000,
        isClosable: true,
        mb: "900px",
      });
      if (existsItem.quantity > 1) {
        state.cartProducts = state.cartProducts.map((item) =>
          item.id === existsItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else if (existsItem.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== existsItem.id
        );
      }
    },
   
    RemoveAllFromCart: (state) => {
      state.cartProducts =[]
      toast({
        description: `All items has been removed from your cart`,
        status: "error",
        duration: 5000,
        isClosable: true,
        mb: "900px",
      });
 
  } }
   

});
export const { addToCart, RemoveFromCart ,RemoveAllFromCart} = CartSlice.actions;
export const selectCard = ({ cart }) => cart;
export default CartSlice.reducer;
