import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as any[],  
  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cart.find((p) => p.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;
