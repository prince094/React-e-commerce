import { useState } from 'react';
import { HeartIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  function addQuantity() {
    setQuantity((prevQuantity) => prevQuantity += 1);
  }

  function subQuantity() {
    if(quantity > 0)
    setQuantity((prevQuantity) => prevQuantity -= 1);
  }

  return (
    <tr key={item.email} className="even:bg-gray-50">
      <td className="p-3">
        <img
          src={item.image}
          alt={'Product'}
          className="ml-3 w-24 rounded-md border-[1px] p-2 "
        />
      </td>
      <td className="text-md px-3 py-4 font-bold">{item.name}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="flex flex-col">
          <span>Shymkent</span>
          <span className="font-bold text-black">{item.price}</span>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-right">
        <div className="w-fit bg-[#F8FAFD] p-0.5">
          <button className="rounded-l-sm bg-white px-2" onClick={() => subQuantity()}>-</button>
          <span className="px-2">{quantity}</span>
          <button className="rounded-r-sm bg-white px-2" onClick={() => addQuantity()}>+</button>
        </div>
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-bold sm:pr-3">
        {item.total}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-xs font-medium sm:pr-3">
        <div className="flex flex-col gap-1">
          <button className="flex w-24 items-center gap-1 rounded-md bg-[#F8FAFD] p-2 text-[#566879] hover:text-black">
            <HeartIcon className="h-6" />
            <span>Delay</span>
          </button>
          <button className="flex w-24 items-center gap-1 rounded-md bg-[#F8FAFD] p-2 text-[#566879] hover:text-black">
            <ArchiveBoxXMarkIcon className="h-6" />
            <span>Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
