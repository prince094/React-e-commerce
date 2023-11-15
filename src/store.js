import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import useReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
