import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from 'react-redux';
import { AppDispatch, RootState } from '.';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
