import { XMarkIcon } from "@heroicons/react/24/outline";

import CartItem from './CartItem';

const cartItems = [
  {
    id: 1,
    image: '/img/01.png',
    name: '215/60R17 V-523 Basco Nordico Viatti б/к шип',
    price: '33 800 Tenge',
    quantity: 2,
    total: '67 600 Tenge',
  },
  {
    id: 2,
    image: '/img/01.png',
    name: '215/60R17 V-523 Basco Nordico Viatti б/к шип',
    price: '33 800 Tenge',
    quantity: 2,
    total: '67 600 Tenge',
  },
  {
    id: 3,
    image: '/img/01.png',
    name: '215/60R17 V-523 Basco Nordico Viatti б/к шип',
    price: '33 800 Tenge',
    quantity: 2,
    total: '67 600 Tenge',
  },

];

function Cart() {
  return (
    <>
      <div className="bg-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Cart</h1>
        <div className="mt-8 flow-root bg-white">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="flex items-center justify-end gap-6 border-[1px] border-b-0 p-3 py-5">
                <div className="rounded-sm bg-[#F8FAFD] p-1 font-bold">
                  Ready to order
                  <span className="font-bold text-[#15A524]"> (5)</span>
                </div>

                <div className="font-bold text-[#566879]">
                  Deferred <span className="font-bold text-[#E31E24]">(1)</span>
                </div>

                <button className="flex gap-3 font-bold rounded-md border-[1px] px-6 py-1"><XMarkIcon class="h-6" /> Clear</button>
              </div>
              <table className="min-w-full border-[1px]">
                <thead className="border-b-[1px]">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/6 py-3.5 pl-4 pr-3 sm:pl-3"
                    ></th>
                    <th
                      scope="col"
                      className="w-1/6 px-3 py-3.5 text-left text-sm font-semibold text-[#566879]"
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      className="w-1/3 px-3 py-3.5 text-left text-sm font-semibold text-[#566879]"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-[#566879]"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="w-1/6 px-3 py-3.5 text-left text-sm font-semibold text-[#566879]"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-[#566879]"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4 bg-[#F8FAFD]">
        <div className='flex gap-3'>
          <button className="bg-white text-[#566879] border-[1px] font-bold w-64 rounded-lg ">Continue shopping</button>
          <button className="bg-[#15A524] p-4 text-white font-bold w-64 rounded-lg">Confirm Order</button>
        </div>
        <div className='flex flex-col w-1/4 font-bold justify-center'>
          <span className='font-normal text-[#566879]'>Total:</span>
          <span className='text-2xl text-black'>988 800 Tenge</span>
        </div>
      </div>
    </>
  );
}

export default Cart;
