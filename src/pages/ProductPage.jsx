import { useState } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import {
  HeartIcon,
  ShoppingCartIcon,
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const slides = [
  'https://picsum.photos/1920/1080',
  'https://picsum.photos/1920/1081',
  'https://picsum.photos/1920/1082',
  'https://picsum.photos/1920/1083',
  'https://picsum.photos/1920/1084',
];

function ProductPage() {
  const [open, setOpen] = useState('home');

  function handleTabOpen(tabCategory) {
    setOpen(tabCategory);
  }

  return (
    <>
      <BreadCrumb />
      <div className="my-4 flex items-end justify-between">
        <h2 className=" max-w-[940px] text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
          Легковая шина зимняя Hankook Ice-Freezer 225/60 R17 103T в Казахстане
        </h2>
        <span className="text-[12px] text-[#566879]">Артикул: 00000017910</span>
      </div>

      <div className="mx-auto mt-6 bg-white">
        <div className="flex ">
          {/* left-page */}
          <div className="flex-[50%]">
            <div className="flex h-[50px] w-full border border-b-0  border-[#E2E9F2]">
              <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                <img width="42" src="/img/car.svg" alt="" />
                <span className="ml-[15px]">Car</span>
              </div>
              <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                <img src="/img/winter.svg" alt="" />
                <span className="ml-[15px]">Winter</span>
              </div>
              <div className="flex w-full items-center justify-center   border-[#E2E9F2]">
                <img src="/img/shipovniy.svg" alt="" />
                <span className="ml-[15px]">Shipovniy</span>
              </div>
            </div>
            <div className="relative h-[605px] flex-[50%] border border-[#E2E9F2] ">
              <p className="flex h-full items-center justify-center overflow-hidden">
                <img
                  src="/public/img/01-big.png"
                  className="ml-20 h-[70%] w-[70%] object-cover object-center"
                  alt=""
                />
              </p>
              <div className="absolute left-6 top-6">
                <p className="is-active is-active:border-[#15A524] mb-2 h-20 w-20 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]">
                  <img
                    src="/public/img/01.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
                <p className=" is-active:border-[#15A524] mb-2 h-20 w-20 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]">
                  <img
                    src="/public/img/shina-min1.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
                <p className="is-active:border-[#15A524] mb-2 h-20 w-20 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]">
                  <img
                    src="/public/img/shina-min2.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
              </div>
            </div>

            <div className=" w-full border border-t-0  border-[#E2E9F2] ">
              <div className="group relative flex h-[50px] w-full items-center  px-6">
                <img
                  width="26"
                  className="-ml-1 opacity-60 group-hover:opacity-100"
                  src="/img/award-line.svg"
                  alt=""
                />
                <span className="ml-[20px] text-[#566879]  group-hover:text-black">
                  Гарантия на заводской брак
                </span>
              </div>
              <div className="group relative flex h-[50px] w-full items-center border-t  border-[#E2E9F2] px-6">
                <img
                  width="20"
                  className="opacity-60 group-hover:opacity-100"
                  src="/img/screen.svg"
                  alt=""
                />
                <span className="ml-[21px] text-[#566879] group-hover:text-black">
                  View all sizes of this model
                </span>
                <ChevronRightIcon className="absolute right-6 h-5 w-5 text-[#566879] group-hover:text-black" />
              </div>
              <div className="group relative flex h-[50px] w-full items-center border-t  border-[#E2E9F2] px-6">
                <img
                  width="24"
                  className="opacity-60 group-hover:opacity-100"
                  src="/img/shine.svg"
                  alt=""
                />
                <span className="ml-[20px] text-[#566879]  group-hover:text-black">
                  See other tires in this size
                </span>
                <ChevronRightIcon className="absolute right-6 h-5 w-5 text-[#566879] group-hover:text-black" />
              </div>
            </div>
          </div>

          {/* right-page */}
          <div className="flex flex-[50%] flex-col border-b border-r border-[#E2E9F2]">
            <div className="flex h-[50px] border-t border-[#E2E9F2]">
              <div className="flex flex-[67%] items-center justify-between px-7 ">
                <p className="">
                  Reviews <span className="-ml-1 text-[#566879] ">(12)</span>
                </p>
                <img width="150" src="/img/brand-tire.svg" alt="" />
              </div>
              <div className="flex flex-[33%] cursor-pointer items-center justify-center border-l-[1px]  border-[#E2E9F2]  bg-[#F8FAFD]">
                <HeartIcon className="h-6 w-6 text-gray-500" />
                <span className="ml-[10px] tracking-[0]">To favorite</span>
              </div>
            </div>

            <div className="relative  border-b border-t border-[#E2E9F2] bg-[#F8FAFD] p-7">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-[28px] font-extrabold">$46,00</h2>
              </div>
              <div className="flex">
                <div className="flex h-[48px] w-[130px] items-center justify-between rounded bg-white p-1">
                  <button className=" flex h-[43px] w-[36px] items-center justify-center rounded-l-[5px] bg-[#F1F3F4] font-semibold">
                    <span>-</span>
                  </button>
                  <input
                    type="text"
                    className="h-[32px] w-[35px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[18px] outline-none"
                    value={'1'}
                    onChange={(e) => e.target.value}
                  />
                  <button className=" flex h-[43px] w-[36px] items-center justify-center rounded-r-[5px] bg-[#F1F3F4] font-semibold">
                    <span>+</span>
                  </button>
                </div>
                <button className="ml-4 flex h-[48px] items-center justify-center rounded bg-[#15A524] px-5 py-2 text-xs font-medium  leading-normal text-white">
                  <ShoppingCartIcon className="text-bold h-6 w-6 text-white" />
                  <span className="ml-3 text-[17px]">Add to cart</span>
                </button>
              </div>
            </div>

            <div className="border-b border-[#E2E9F2] bg-white px-7 py-4">
              {true ? (
                <p className="mb-1 flex items-center whitespace-nowrap text-[15px]">
                  <b className=" text-[#15A524]">In stock:</b>{' '}
                  <span className="ml-2 tracking-[-1px] text-[#566879]">
                    Left from 4 to 20 pieces
                  </span>
                </p>
              ) : (
                <b className="text-[15px] text-[#E31E24]">Not available</b>
              )}
              <p className="flex items-center whitespace-nowrap text-[15px]">
                <b className=" text-[#15A524]">Category:</b>{' '}
                <span className="ml-2 tracking-[-1px] text-[#566879]">
                  Light trucks
                </span>
              </p>
            </div>

            <div className="p-7">
              <h2 className="mb-4 text-[20px] font-bold">Characteristics:</h2>
              {[1, 2, 3, 4, 5].map((character) => {
                return (
                  <div className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']">
                    <p className="z-[2] bg-white pr-4 font-thin">
                      Ширина профиля
                    </p>
                    <b className="z-[2] bg-white pl-4">225</b>
                  </div>
                );
              })}
              <div className="mt-14 flex cursor-pointer items-center justify-center">
                <button className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F1F3F4]">
                  <ChevronDoubleDownIcon className="h-4 w-4 text-black" />
                </button>
                <p className=" ml-3 border-b-[2px] border-dashed">
                  All characteristics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <section className="py-20 ">
        <div className="mb-14 w-full">
          <div className="flex flex-wrap space-x-2 border  border-[#E2E9F2] bg-[#F5F8FC] px-1 py-1">
            <a
              onClick={() => handleTabOpen('desc')}
              className={`cursor-pointer rounded px-4 py-4 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white md:text-base lg:px-6 ${
                open === 'desc' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              Description
            </a>
            <a
              onClick={() => handleTabOpen('reviews')}
              className={` cursor-pointer rounded px-4 py-4 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white md:text-base lg:px-6 ${
                open === 'reviews' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              Reviews(12)
            </a>
            <a
              onClick={() => handleTabOpen('in-stock')}
              className={` cursor-pointer rounded px-4 py-4 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white md:text-base lg:px-6 ${
                open === 'in-stock' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              In stock
            </a>
            <a
              onClick={() => handleTabOpen('not-available')}
              className={` cursor-pointer rounded px-4 py-4 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white md:text-base lg:px-6 ${
                open === 'not-available' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              not available
            </a>
          </div>
          <div className="border border-t-0 border-[#E2E9F2]">
            <TabContent tabCategory="desc" open={open}>
              Lorem, ipsum dolor.
            </TabContent>
            <TabContent tabCategory="reviews" open={open}>
              Lorem, ipsum dolor.22
            </TabContent>
            <TabContent tabCategory="in-stock" open={open}>
              Lorem, ipsum dolor.
            </TabContent>
            <TabContent tabCategory="not-available" open={open}>
              Lorem, ipsum dolor.33
            </TabContent>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;

function TabContent({ open, tabCategory, children }) {
  return (
    <div>
      <div
        className={`text-body-color p-6 text-base leading-relaxed ${
          open === tabCategory ? 'block' : 'hidden'
        } `}
      >
        {children}
      </div>
    </div>
  );
}
