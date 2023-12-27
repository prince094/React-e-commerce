import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteItem } from '../state/cartSlice';
import { useDispatch } from 'react-redux';

function CartAction({ id }) {
  const dispatch = useDispatch();

  return (
    <td className="w-[128px] ">
      <div className="flex flex-col px-3">
        <button className="group mb-2 flex items-center rounded bg-[#F8FAFD] px-3 py-[7px] text-[12px] font-medium text-[#566879]">
          <HeartIcon className="mr-[6px] h-4 w-4 text-[#566879]  group-hover:text-black" />
          <span className="group-hover:text-black">Put off</span>
        </button>
        <button
          onClick={() => dispatch(deleteItem(id))}
          className="group flex items-center rounded bg-[#F8FAFD] px-3 py-[7px] text-[12px] font-medium text-[#566879]"
        >
          <TrashIcon className="mr-[6px] h-4 w-4 text-[#566879] group-hover:text-black" />
          <span className="group-hover:text-black">Delete</span>
        </button>
      </div>
    </td>
  );
}

export default CartAction;
