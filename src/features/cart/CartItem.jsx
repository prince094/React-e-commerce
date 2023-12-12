import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './cartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';
import CartAction from './CartAction';

function CartItem({ item }) {
  const { id, name, imageSrc, unitPrice, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <>
      <tr className="border-b border-[#EEE] transition-all last:border-b-0 hover:shadow-sm">
        <td className="flex items-center p-3">
          <p className="w-[90px] rounded border border-[#EEE] p-2">
            <img
              className="w-full object-cover object-center"
              src={imageSrc[0]}
              alt={imageSrc}
            />
          </p>
          <p className="ml-4 max-w-[211px] text-[15px] font-medium">{name}</p>
        </td>
        <td>
          <p className="text-[13px] text-[#566879]">Tashkent</p>
          <p className="text-[15px] font-medium">{formatCurrency(unitPrice)}</p>
        </td>
        <td>
          <div className="flex">
            <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
          </div>
        </td>
        <td className="text-[17px] font-medium">
          {formatCurrency(totalPrice)}
        </td>
        <CartAction id={id} />
      </tr>
    </>
  );
}
export default CartItem;
