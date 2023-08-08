import { XMarkIcon } from '@heroicons/react/24/outline';

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
      <div className="w-1/2 bg-white px-4 sm:w-full sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Cart</h1>
        <div className="mt-8 flow-root bg-white">
          <h2 className="mb-5 text-center font-bold text-black">
            Items in the cart
          </h2>
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="flex hidden items-center justify-end gap-6 border-[1px] border-b-0 p-3 py-5 sm:flex">
                <div className="rounded-sm bg-[#F8FAFD] p-1 font-bold">
                  Ready to order
                  <span className="font-bold text-[#15A524]"> (5)</span>
                </div>

                <div className="font-bold text-[#566879]">
                  Deferred <span className="font-bold text-[#E31E24]">(1)</span>
                </div>

                <button className="flex gap-3 rounded-md border-[1px] px-6 py-1 font-bold">
                  <XMarkIcon class="h-6" /> Clear
                </button>
              </div>
              <table className="min-w-full border-[0px] sm:border-[1px]">
                <thead className="hidden border-b-[1px] md:table-header-group ">
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
                <tbody className="flex flex-col gap-3 bg-white sm:table-row-group">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FAFD mt-4 flex flex-col w-1/2 sm:w-full justify-between gap-4">
        <h1 className="text-center text-xl font-bold sm:hidden">
          Your shopping cart
        </h1>
        <div className="flex flex-col gap-4 rounded-sm bg-white p-4 sm:hidden">
          <div className="flex flex-col">
            <span className="text-[#566879]">Total goods:</span>
            <span className="font-bold">3 products</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#566879]">Order price:</span>
            <span className="font-bold">988 900 Tenge</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#566879]">Delivery:</span>
            <span className="font-bold text-[#15A524]">Free</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#566879]">
              VAT (12%, included in the price):
            </span>
            <span className="font-bold">105 942.86 Tenge</span>
          </div>
          <hr></hr>
          <div className="flex flex-col">
            <span className="text-[#566879]">Total:</span>
            <span className="text-2xl font-bold">988 900 Tenge</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div className="sm:hidden">
            <input
              className="h-12 w-2/3 p-5 text-[#566879]"
              placeholder="Promo code"
            />
            <button className="h-12 w-1/3 rounded-md bg-[#E31E24] text-white">
              Apply
            </button>
          </div>
          <div className='flex gap-2'>
          <button className="hidden h-12 w-64 rounded-lg border-[1px] bg-white font-bold text-[#566879] sm:block ">
            Continue shopping
          </button>
          <button className="h-12 w-full rounded-lg bg-[#15A524] font-bold text-white sm:w-64">
            Confirm Order
          </button>
          </div>
          <div className="hidden sm:flex w-80 flex-col justify-center font-bold">
            <span className="font-normal text-[#566879]">Total:</span>
            <span className="text-2xl text-black">988 800 Tenge</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
