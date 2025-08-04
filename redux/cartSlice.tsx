import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []  
  },
  reducers: {
    addCart : (state , action)=>{
        state.cart = action.payload
    }
  }
});

export const {addCart} =  cartSlice.actions
export default cartSlice.reducer

export const getCart = (state: RootState) => state.cart.cart
