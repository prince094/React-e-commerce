import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import {
  ChevronDoubleDownIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { classNames, formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { Link, useLocation } from 'react-router-dom';

function ProductModal({ product, openModal, onCloseModal }) {
  const modal = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const [image, setImage] = useState('');

  const {
    id,
    name,
    imageSrc,
    imageAlt,
    brandSrc,
    unitPrice,
    color,
    soldOut,
    seasonTypes,
    views,
  } = product;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      tyreId: id,
      name,
      imageSrc,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!openModal || keyCode !== 27) return;
      onCloseModal(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    if (imageSrc) {
      setImage(imageSrc[0]);
    }
  }, [imageSrc]);

  return (
    <>
      <div className="container mx-auto py-20">
        <div
          className={`fixed left-0 top-0 z-30 hidden h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5  ${
            openModal ? 'hidden lg:flex' : 'hidden'
          }`}
        >
          <div
            ref={modal}
            onFocus={() => onCloseModal(true)}
            onBlur={() => onCloseModal(false)}
            className="flex w-full max-w-[1150px] overflow-hidden rounded-[15px] bg-white text-center"
          >
            <div className="w-[70%] max-w-[70%]">
              <div className=" bg-white">
                <h2 className="px-[70px] pb-[30px] pt-[35px] text-left text-2xl font-bold leading-tight tracking-tight text-gray-800 ">
                  {name}
                </h2>
                <div className="flex">
                  {/* left-page */}
                  <div className="relative flex-[50%] border border-[#E2E9F2] py-8">
                    <p className="flex h-full items-center justify-center overflow-hidden ">
                      <img
                        src={image}
                        className="ml-16 w-[65%] object-cover object-center "
                        alt={imageAlt}
                      />
                    </p>
                    <div className="absolute left-2 top-2">
                      {imageSrc?.length > 0 &&
                        imageSrc.map((item) => (
                          <p
                            key={item}
                            className={classNames(
                              image === item ? 'border-[#15A524]' : '',
                              'mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524] sm:mb-2 sm:h-20 sm:w-20'
                            )}
                            onClick={() => setImage(item)}
                          >
                            <img
                              src={item}
                              className="h-full w-full object-cover object-center"
                              alt=""
                            />
                          </p>
                        ))}
                    </div>
                  </div>

                  {/* right-page */}
                  <div className="flex flex-[50%] flex-col border border-x-0 border-[#E2E9F2]">
                    <div className="p-4 sm:p-7">
                      <h2 className="mb-4 text-[20px] font-bold">
                        Characteristics:
                      </h2>
                      {[1, 2, 3, 4, 5].map((character) => {
                        return (
                          <div
                            key={character}
                            className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']"
                          >
                            <p className="z-[2] bg-white pr-4 font-light">
                              Profile width
                            </p>
                            <b className="z-[2] bg-white pl-4">225</b>
                          </div>
                        );
                      })}
                      <div className="mb-2  mt-6 flex cursor-pointer items-center justify-center  sm:mt-14">
                        <button className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F1F3F4]">
                          <ChevronDoubleDownIcon className="h-4 w-4 text-black" />
                        </button>
                        <Link
                          to={`${location.pathname}/${id}`}
                          className=" ml-3 border-b-[2px] border-dashed"
                        >
                          All characteristics
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <p className="ml-10 flex items-center text-sm text-[#566879]">
                  Articul: 00000017910
                </p>
                <div className="flex">
                  <div className="flex h-[58px] w-[58px] items-center justify-center border-x-[1px]  border-[#E2E9F2]">
                    <img className="w-[40px]" src="/img/car.svg" alt="" />
                  </div>
                  {seasonTypes?.map((type, index) => (
                    <div
                      key={type}
                      className={classNames(
                        index === 0 ? 'border-r-[1px]  border-[#E2E9F2]' : '',
                        'flex h-[58px] w-[58px] items-center justify-center'
                      )}
                    >
                      <img
                        className="h-[25px] w-[25px] object-cover object-center"
                        src={`/img/${type}.svg`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full  max-w-[30%] border-l border-[#E2E9F2] bg-[#F8FAFD]">
              {/* top */}
              <div className="flex h-[50px] w-full border-[#E2E9F2] ">
                <div className="flex flex-[33.333%] cursor-pointer items-center justify-center  border-[#E2E9F2]  ">
                  <ShareIcon className="h-6 w-6 text-[#566879]" />
                </div>
                <div className="flex flex-[33.333%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2] ">
                  <HeartIcon className="h-6 w-6 text-[#566879]" />
                </div>
                <div
                  onClick={() => onCloseModal(false)}
                  className="flex flex-[33.333%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2]  bg-[#E31E24]"
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              {/* actions */}
              <div className="relative  border-b border-t border-[#E2E9F2] p-6 ">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-[24px] font-extrabold sm:text-[28px]">
                    {formatCurrency(unitPrice)}
                  </h2>
                </div>
                <div className="flex h-[45px]">
                  {!isInCart ? (
                    <Button onClick={handleAddToCart} type={'success'}>
                      <ShoppingCartIcon className="h-5 w-5 font-bold text-white" />
                      <span className="ml-2 whitespace-nowrap text-base">
                        Add to cart
                      </span>
                    </Button>
                  ) : (
                    <UpdateItemQuantity
                      tyreId={id}
                      currentQuantity={currentQuantity}
                      size={'big'}
                    />
                  )}
                </div>
              </div>

              <div className="border-b border-[#E2E9F2]  px-6 py-4">
                {true ? (
                  <p className="mb-1 flex items-center whitespace-nowrap text-[15px]">
                    <b className=" text-[#15A524]">In stock:</b>{' '}
                    <span className="ml-2  text-[#566879]">
                      Left from 4 to 20 pieces
                    </span>
                  </p>
                ) : (
                  <b className="text-[15px] text-[#E31E24]">Not available</b>
                )}
                <p className="flex items-center whitespace-nowrap text-[15px]">
                  <b className=" text-[#15A524]">Category:</b>{' '}
                  <span className="ml-2  text-[#566879]">Light trucks</span>
                </p>
              </div>
              <p className="px-5 py-4">
                <img
                  width="150"
                  src={`/img/catalog/brand/${brandSrc}.svg`}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;

// close on click outside
// useEffect(() => {
//   const clickHandler = ({ target }) => {
//     if (!modal.current) return;
//     if (
//       !openModal ||
//       modal.current.contains(target) ||
//       trigger.current?.contains(target)
//     )
//       return;
//     onCloseModal(false);
//   };
//   document.addEventListener('click', clickHandler);
//   return () => document.removeEventListener('click', clickHandler);
// });
