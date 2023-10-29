import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useDispatch } from 'react-redux';
import { classNames } from '../../utils/helpers';

function UpdateItemQuantity({ tyreId, currentQuantity, color = 'grey' }) {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(
        color === 'grey' ? 'bg-[#F5F8FC]' : 'bg-white',
        'flex h-[40px] w-[117px] items-center justify-between rounded  p-1'
      )}
    >
      <button
        onClick={() => dispatch(decreaseItemQuantity(tyreId))}
        className={classNames(
          color !== 'grey' ? 'bg-[#F5F8FC]' : 'bg-white',
          'flex h-[32px] w-[35px] items-center justify-center rounded  font-semibold'
        )}
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
        className={classNames(
          color !== 'grey' ? 'bg-[#F5F8FC]' : 'bg-white',
          'flex h-[32px] w-[35px] items-center justify-center rounded  font-semibold'
        )}
      >
        <PlusIcon className="h-5 w-5 text-black" />
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
