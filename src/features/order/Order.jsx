import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useState } from 'react';
import Textarea from '../../ui/Textarea';
import { formatCurrency } from '../../utils/helpers';
import { getCart, getTotalCartPrice } from '../cart/cartSlice';
import { useSelector } from 'react-redux';

function Order() {
  const [input, setInput] = useState('');
  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);

  function handleGetPosition() {}
  function handleCheckout() {}

  return (
    <>
      <div className="xl:flex">
        <div className="basis-2/3">
          <div className="border border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
            <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
              1. Buyer type and delivery region
            </h2>
            <div className="relative">
              <div className="">
                <Input label={'Location'} type={'text'} onChange={setInput} />
              </div>
              <span className="absolute bottom-0 right-0 z-50">
                <Button type={'success'} onClick={handleGetPosition}>
                  Get position
                </Button>
              </span>
            </div>
          </div>
          <div className="border border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
            <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
              2. Buyer
            </h2>
            <Input label={'FIO'} type={'text'} onChange={setInput} />
            <Input label={'E-Mail'} type={'text'} onChange={setInput} />
            <Textarea
              label={'Delivery address'}
              type={'text'}
              onChange={setInput}
            />
            <Textarea
              label={'Comments on the order:'}
              type={'text'}
              optional={true}
              onChange={setInput}
            />
            <p className="text-sm text-extragray md:max-w-[80%]">
              Once your order is confirmed, an account will be created and a
              password to enter your personal account will be sent to your
              e-mail
            </p>
          </div>
          <div className="border border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
            <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
              3. Payment method
            </h2>
            !? todo
          </div>
          <div className="mx-auto my-5 max-w-[458px]">
            <p className="mb-3 text-center text-[13px] sm:mb-5 sm:text-base">
              <div>
                By clicking on the Place an order button you consent to the
              </div>
              <div>
                <b> processing of personal data</b>
              </div>
            </p>
            <Button
              type={'success'}
              className={'w-full'}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="border border-[#E2E9F2] bg-lightgray px-6 py-4 sm:px-10 sm:py-7">
            <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
              Your cart
            </h2>
            <div className="rounded bg-white p-6 text-extragray">
              <div className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                <p className="z-[2] bg-white pr-2 ">All products:</p>
                <b className="z-[2] bg-white pl-2 text-black">
                  {cart.length} products
                </b>
              </div>
              <div className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                <p className="z-[2] bg-white pr-2 ">Order price:</p>
                <b className="z-[2] bg-white pl-2 text-black">
                  {formatCurrency(totalCartPrice)}
                </b>
              </div>
              <div className="relative mb-7 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                <p className="z-[2] bg-white pr-2 ">Delivery</p>
                <b className="z-[2] bg-white pl-2 text-green">Free</b>
              </div>
              <hr />
              <div className="mt-4 flex justify-between">
                <p className="text-lg font-medium">Total:</p>
                <b className="text-xl text-black">
                  {formatCurrency(totalCartPrice)}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
