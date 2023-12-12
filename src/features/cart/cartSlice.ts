import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type CartItem = {
  id: string;
  title: string;
  imageSrc: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

type CartState = {
  cart: CartItem[];
};
const initialState: CartState = {
  cart: [],
  // cart: [
  //   {
  //     id: 12,
  //     title: 'Mediterranean',
  //     imageSrc: 'http://image.jpg',
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
    addItem(state, action: PayloadAction<CartItem>) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<string>) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
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

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
// 1-cart -> slice name, 2-cart -> cart: []

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: string) => (state: RootState) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
