import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useDispatch } from 'react-redux';

function UpdateItemQuantity({ tyreId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex h-[40px] w-[117px] items-center justify-between rounded bg-[#F5F8FC] p-1">
      <button
        onClick={() => dispatch(decreaseItemQuantity(tyreId))}
        className=" flex h-[32px] w-[35px] items-center justify-center rounded bg-white font-semibold"
      >
        {currentQuantity > 1 ? (
          <MinusIcon className="h-5 w-5 text-black" />
        ) : (
          <TrashIcon className="h-5 w-5 text-[#E31E24]" />
        )}
      </button>
      <span className="text-md px-2  font-medium ">{currentQuantity}</span>
      <button
        onClick={() => dispatch(increaseItemQuantity(tyreId))}
        className="flex h-[32px] w-[35px] items-center justify-center rounded bg-white font-semibold  "
      >
        <PlusIcon className="h-5 w-5 text-black" />
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
