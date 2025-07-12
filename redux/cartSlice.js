import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // logic to add item
    },
    removeFromCart(state, action) {
      // logic to remove item
    },
    increaseQuantity(state, action) {
      // logic to increase quantity
    },
    decreaseQuantity(state, action) {
      // logic to decrease quantity
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
