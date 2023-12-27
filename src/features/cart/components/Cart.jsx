import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Screen from '../../../hooks/useScreenSize';
import CartItem from './CartItem';
import { clearCart, getCart } from '../state/cartSlice';
import EmptyCart from './EmptyCart';
import CartOverview from './CartOverview';
import CartItemMobile from './CartItemMobile';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <>
      <div className="mx-auto mb-5 mt-6 border border-[#E2E9F2] bg-white">
        <div className="flex items-center justify-end border-b border-[#E2E9F2] py-3">
          <button className="rounded bg-[#F8FAFD] px-3 py-2 text-sm md:px-5 md:text-base">
            Ready to order <span className="text-[#15A524]">(5)</span>
          </button>
          <button className="px-3 py-2 text-sm text-[#566879] md:px-5 md:text-base">
            Deferred <span className="text-[#E31E24]">(5)</span>
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="border-[rgba(0, 0, 0, 0.10)] mr-3 flex items-center rounded border px-3 py-[7px] text-sm text-black md:px-5 md:text-base"
          >
            <XMarkIcon className="mr-1 h-5 w-5 text-black" />
            <span>Clear</span>
          </button>
        </div>
        <table className=" w-full table-auto">
          {/* {!Screen(768) && ( */}
          <thead className="bg-primary border-b border-[#E2E9F2] text-left">
            <tr className="[&>th]:py-2 [&>th]:font-normal">
              <th className="text-center"> Name </th>
              <th> Price </th>
              <th> Count </th>
              <th> Amount </th>
              <th> </th>
            </tr>
          </thead>
          {/* )} */}

          <tbody className="">
            {cart.map(
              (item) => (
                // todo change the position Screen hook!
                // Screen(768) ? (
                // <CartItemMobile item={item} key={item.id} />
                // ) : (
                <CartItem item={item} key={item.id} />
              )
              // )
            )}
          </tbody>
        </table>
      </div>
      <CartOverview />
    </>
  );
}
export default Cart;
