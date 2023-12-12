import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.ts';
import useReducer from '../features/user/userSlice.ts';

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
