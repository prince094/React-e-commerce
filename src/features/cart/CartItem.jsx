import { useState } from 'react';
import { HeartIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  function addQuantity() {
    setQuantity((prevQuantity) => (prevQuantity += 1));
  }

  function subQuantity() {
    if (quantity > 0) setQuantity((prevQuantity) => (prevQuantity -= 1));
  }

  return (
    <tr
      key={item.email}
      className="grid grid-cols-3 p-1 items-center even:bg-gray-50 sm:table-row border-[1px] "
    >
      <td className="col-span-1 p-3">
        <img
          src={item.image}
          alt={'Product'}
          className="rounded-md border-[1px] p-2"
        />
      </td>
      <td className="text-md col-span-2 px-3 py-4 font-bold">{item.name}</td>
      <td className="col-span-1 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="flex flex-col">
          <span>Shymkent</span>
          <span className="font-bold text-black">{item.price}</span>
        </div>
      </td>
      <td className="flex sm:table-cell h-fit justify-end whitespace-nowrap px-3 py-4 text-right col-span-2">
        <div className="flex items-center gap-3 w-fit bg-[#F8FAFD] p-0.5">
          <button
            className="rounded-l-sm bg-white p-2 px-3"
            onClick={() => subQuantity()}
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            className="rounded-r-sm bg-white p-2 px-3"
            onClick={() => addQuantity()}
          >
            +
          </button>
        </div>
      </td>
      <td className='col-span-3 px-3 sm:hidden'>
        <hr></hr>
      </td>
      <td className="relative col-span-2 flex flex-col sm:table-cell whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-bold sm:pr-3">
        <span className="text-sm text-gray-500 sm:hidden">Total</span>
        {item.total}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-xs font-medium sm:pr-3">
        <div className="flex flex-col items-end gap-1 sm:items-start">
          <button className="flex hidden w-24 items-center gap-1 rounded-md bg-[#F8FAFD] p-2 text-[#566879] hover:text-black sm:flex">
            <HeartIcon className="h-6" />
            <span> Delay</span>
          </button>
          <button className="flex w-24 w-fit items-center gap-1 rounded-md bg-[#F8FAFD] p-2 text-[#566879] hover:text-black sm:w-24 ">
            <ArchiveBoxXMarkIcon className="h-6" />
            <span className="hidden sm:block">Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
