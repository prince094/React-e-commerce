import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     tyreId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      // @ts-ignore:next-line
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = tyreId
      console.log('cc', state.cart, action.payload);
      // @ts-ignore:next-line
      state.cart = state.cart.filter((item) => item.tyreId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = tyreId
      // @ts-ignore:next-line
      const item = state.cart.find((item) => item.tyreId === action.payload);
      // @ts-ignore:next-line
      item.quantity++;
      // @ts-ignore:next-line
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = tyreId
      // @ts-ignore:next-line
      const item = state.cart.find((item) => item.tyreId === action.payload);
      // @ts-ignore:next-line
      item.quantity--;
      // @ts-ignore:next-line
      item.totalPrice = item.quantity * item.unitPrice;
      // @ts-ignore:next-line
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
// @ts-ignore:next-line
export const getCart = (state) => state.cart.cart;
// @ts-ignore:next-line
export const getTotalCartQuantity = (state) =>
  // @ts-ignore:next-line
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
// 1-cart -> slice name, 2-cart -> cart: []
// @ts-ignore:next-line
export const getTotalCartPrice = (state) =>
  // @ts-ignore:next-line
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
// @ts-ignore:next-line
export const getCurrentQuantityById = (id) => (state) =>
  // @ts-ignore:next-line
  state.cart.cart.find((item) => item.tyreId === id)?.quantity ?? 0;
