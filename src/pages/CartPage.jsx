import BreadCrumb from '../ui/BreadCrumb';
import Screen from '../hooks/useScreenSize';
import {
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function CartPage() {
  return (
    <div className="py-5">
      <BreadCrumb />
      <h2 className="my-4 mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl md:max-w-[80%] md:text-3xl ">
        Cart
      </h2>
      {Screen(768) ? (
        [1, 2, 3].map((i) => <CartMobileContent />)
      ) : (
        <CartContent />
      )}

      <div className="flex hidden flex-col justify-between rounded bg-[#F8FAFD] px-3 py-2 pb-3 md:flex-row md:items-center md:pb-0">
        <div className="order-1 mt-3 flex flex-col sm:flex-row md:order-none md:mt-0">
          <button className="border-[rgba(0, 0, 0, 0.10)] mb-2 rounded border bg-white px-6 py-2 text-[#566879] sm:mb-0">
            Continue shopping
          </button>
          <button className="rounded  bg-[#15A524] px-6 py-2 text-white shadow-sm shadow-[#15a52371] sm:ml-3">
            Confirm order
          </button>
        </div>
        <div className="flex flex-col items-start justify-start md:w-[280px]">
          <p className="text-md font-medium text-[#566879] md:text-[18px]">
            Total:
          </p>
          <p className="text-xl font-bold text-black md:text-2xl">
            $998 000,00
          </p>
        </div>
      </div>
      {/* <EmptyCart /> */}
    </div>
  );
}

export default CartPage;

function EmptyCart() {
  return (
    <div className="mt-3 flex flex-col items-center rounded border border-[#F5F8FC] bg-[#F5F8FC] px-3 pb-7 pt-6 text-center sm:pb-16 sm:pt-12">
      <p className="mx-auto mb-10 w-40 sm:w-52">
        <img src="/img/cart/empty-cart.png" className="w-full" alt="" />
      </p>
      <h3 className="mb-1 text-2xl font-semibold sm:text-[36px]">
        Your cart is empty
      </h3>
      <p className="text-md mb-5 sm:mb-8 sm:text-[18px]">
        Start choosing products from our catalog
      </p>
      <div className="flex flex-col sm:flex-row">
        <button className="mb-2 min-w-[220px] rounded bg-[#E31E24] px-6 py-2 font-medium text-white sm:mb-0">
          To home
        </button>
        <button className="min-w-[220px] rounded border border-gray-200 bg-white px-6 py-2 font-medium text-[#566879] sm:ml-3">
          Purchase history
        </button>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  return (
    <>
      <tr className="border-b border-[#EEE] transition-all last:border-b-0 hover:shadow-sm">
        <td className="flex items-center p-3">
          <p className="w-[90px] rounded border border-[#EEE] p-2">
            <img
              className="w-full object-cover object-center"
              src="/img/01.png"
              alt={item}
            />
          </p>
          <p className="ml-4 max-w-[211px] text-[15px] font-medium">
            215/60R17 V-523 Basco Nordico Viatti б/к шип
          </p>
        </td>
        <td className="">
          <p className="text-[13px] text-[#566879]">Shimkent</p>
          <p className="text-[15px] font-medium">$33 800,00 </p>
        </td>
        <td className="">
          <div className="flex">
            <div className="flex h-[40px] w-[112px] items-center justify-between rounded bg-[#F8FAFD] p-1">
              <button className="flex h-[36px] w-[33px] items-center justify-center rounded-l-[5px] bg-white  font-semibold">
                <span>-</span>
              </button>
              <input
                type="text"
                className="h-[32px] w-[32px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[16px] outline-none"
                value={'1'}
                onChange={(e) => e.target.value}
              />
              <button className=" flex h-[36px] w-[33px] items-center justify-center rounded-r-[5px] bg-white font-semibold">
                <span>+</span>
              </button>
            </div>
          </div>
        </td>
        <td className="text-[17px] font-medium">$67 600,00</td>
        <td className="w-[128px] ">
          <div className="flex flex-col px-3">
            <button className="group mb-2 flex items-center rounded bg-[#F8FAFD] px-3 py-[7px] text-[12px] font-medium text-[#566879]">
              <HeartIcon className="mr-[6px] h-4 w-4 text-[#566879]  group-hover:text-black" />
              <span className="group-hover:text-black">Put off</span>
            </button>
            <button className="group flex items-center rounded bg-[#F8FAFD] px-3 py-[7px] text-[12px] font-medium text-[#566879]">
              <TrashIcon className="mr-[6px] h-4 w-4 text-[#566879] group-hover:text-black" />
              <span className="group-hover:text-black">Delete</span>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

function CartMobileContent() {
  return (
    <div className="mb-2 flex flex-col rounded border border-[#E2E9F2] bg-white">
      <div className="flex items-center p-3">
        <p className="w-[90px] rounded border border-[#EEE] p-2">
          <img
            className="w-full object-cover object-center"
            src="/img/01.png"
            alt=""
          />
        </p>
        <p className="ml-4  text-[15px] font-medium">
          215/60R17 V-523 Basco Nordico Viatti б/к шип
        </p>
      </div>
      <div className="flex items-center justify-between px-3 py-1">
        <div>
          <p className="text-[13px] text-[#566879]">Shimkent</p>
          <p className="text-[15px] font-medium">$33 800,00 </p>
        </div>
        <div className="flex h-[35px] w-[96px] items-center justify-between rounded bg-[#F8FAFD] px-[2px]">
          <button className="flex h-[32px] w-[30px] items-center justify-center rounded-l-[5px] bg-white  font-semibold">
            <span>-</span>
          </button>
          <input
            type="text"
            className="h-[32px] w-[32px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[13px] outline-none"
            value={'1'}
            onChange={(e) => e.target.value}
          />
          <button className=" flex h-[32px] w-[30px] items-center justify-center rounded-r-[5px] bg-white font-semibold">
            <span>+</span>
          </button>
        </div>
      </div>
      <div className="-px-3 mx-3 mt-1 flex items-center justify-between border-t border-[#E2E9F2] py-1">
        <div>
          <p className="text-[13px] text-[#566879]">Amount:</p>
          <p className="text-[17px] font-medium">$67 600,00</p>
        </div>
        <div className="flex ">
          <button className="group mr-2 flex h-8 w-[44px] items-center justify-center rounded bg-[#F8FAFD] text-[12px] font-medium text-[#566879]">
            <HeartIcon className=" h-4 w-4 text-[#566879]  group-hover:text-black" />
          </button>
          <button className="group flex h-8 w-[44px] items-center justify-center rounded bg-[#F8FAFD] text-[12px] font-medium text-[#566879]">
            <TrashIcon className=" h-4 w-4 text-[#566879] group-hover:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CartContent() {
  return (
    <div className="mx-auto mb-5 mt-6 border border-[#E2E9F2] bg-white">
      <div className="flex items-center justify-end border-b border-[#E2E9F2] py-3">
        <button className="rounded bg-[#F8FAFD] px-5 py-2">
          Ready to order <span className="text-[#15A524]">(5)</span>
        </button>
        <button className="px-5 py-2 text-[#566879]">
          Deferred <span className="text-[#E31E24]">(5)</span>
        </button>
        <button className="border-[rgba(0, 0, 0, 0.10)] mr-3 flex items-center rounded border px-5 py-[7px] text-black">
          <XMarkIcon className="mr-1 h-5 w-5 text-black" />
          <span>Clear</span>
        </button>
      </div>
      <table className=" w-full table-auto">
        <thead className="bg-primary border-b border-[#E2E9F2] text-left">
          <tr className="[&>th]:py-2 [&>th]:font-normal">
            <th className="text-center"> Name </th>
            <th> Price </th>
            <th> Count </th>
            <th> Amount </th>
            <th> </th>
          </tr>
        </thead>

        <tbody className="">
          {[1, 2, 3].map((item) => (
            <CartItem item={item} key={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
