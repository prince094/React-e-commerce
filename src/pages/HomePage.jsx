import {
  PlusSmallIcon,
  TrashIcon,
  HeartIcon,
  ShareIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from 'react';
import {
  ChevronDoubleDownIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const products = [
  {
    id: 1,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '45',
    color: 'Black',
  },
  {
    id: 143,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '60',
    color: 'Black',
  },
  {
    id: 112,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
  },
  {
    id: 1765,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '45',
    color: 'Black',
  },
  {
    id: 1435,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '60',
    color: 'Black',
  },
  {
    id: 11342,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
  },
];

function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-0 py-10 md:py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold tracking-tight text-gray-900 md:text-[30px]">
          Sales
        </h2>
        <button className="rounded-[0.15rem] bg-[#E31E24] px-3 py-1 text-[14px] font-medium leading-normal text-white md:px-6  md:py-2 md:text-[16px]">
          All sales
        </button>
      </div>

      <Swiper
        className="sales-products mt-3 grid grid-cols-4"
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1.3}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={
          {
            // nextEl: '.rightpage__arrows .swiper-arrow-next',
            // prevEl: '.rightpage__arrows .swiper-arrow-prev',
          }
        }
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              key={product.id}
              className="group relative max-w-[304px] cursor-pointer border-[0.5px] border-slate-300 bg-white"
            >
              <div className=" absolute left-1/2 top-[80px] hidden h-[130px] w-[140px] -translate-x-1/2  flex-col items-center justify-center rounded-lg border-4  border-double border-blue-50 bg-gray-900 bg-opacity-50 shadow-lg lg:group-hover:flex ">
                <EyeIcon className="h-8 w-8  text-white" />

                <span className="text-white">Quick view</span>
              </div>
              <p className="absolute left-2 top-2 flex h-[45px] w-[45px] items-center justify-center rounded bg-[#F5F8FC]">
                <img
                  src="/img/sunny.svg"
                  alt=""
                  className="h-[25px] w-[25px] object-cover object-center"
                />
              </p>
              <p className="absolute left-2 top-14 flex h-[45px] w-[45px] items-center justify-center rounded bg-[#F5F8FC]">
                <img
                  src="/img/winter.svg"
                  alt=""
                  className="h-[25px] w-[25px] object-cover object-center"
                />
              </p>
              <a className="absolute right-2 top-2 text-sm font-medium">
                Reviews <span className="-ml-1 text-[#566879] ">(12)</span>
              </a>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white px-7 pb-6 pt-12">
                <img
                  src="/img/01.png"
                  alt={product.imageAlt}
                  className="mx-auto h-[80%] w-[80%] object-cover object-center"
                />
              </div>
              <div className=" p-3">
                <span className="inline-block whitespace-nowrap rounded-[0.15rem] bg-[#15A524] px-[0.65em] py-[0.40em] text-center align-baseline text-[0.8em] font-bold leading-none text-white">
                  In stock
                </span>
                {/* <span className="inline-block whitespace-nowrap rounded-[0.15rem] bg-[#BCBCBC] px-[0.65em] py-[0.40em] text-center align-baseline text-[0.8em] font-bold leading-none text-white">
                Not available
              </span> */}
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-700">
                      {/* <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a> */}
                    </h3>
                    <p>
                      {' '}
                      <img
                        src="/img/brand-tire.svg"
                        className="my-3 h-auto w-[125px] object-cover object-center"
                      ></img>
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[16px] font-bold text-gray-900">
                    ${product.price},00
                  </p>
                  <button className="flex h-[39px]  items-center justify-center rounded-[0.15rem] bg-[#15A524] px-4 py-2 text-xs font-medium  leading-normal text-white">
                    <PlusSmallIcon className="h-6 w-6 text-white" />
                    <span className="ml-[2px] text-[17px]">Add</span>
                  </button>

                  {/* <div className="flex h-[40px] w-[117px] items-center justify-between rounded bg-[#F5F8FC] p-1"> */}
                  {/* <button className=" flex h-[32px] w-[35px] items-center justify-center rounded bg-white font-semibold"> */}
                  {/* <span>-</span> */}
                  {/* <TrashIcon class="h-5 w-5 text-[#E31E24]" /> */}
                  {/* </button> */}
                  {/* <input */}
                  {/* type="text" */}
                  {/* className="h-[32px] w-[35px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-sm outline-none" */}
                  {/* value={'1'} */}
                  {/* onChange={(e) => e.target.value} */}
                  {/* /> */}
                  {/* <button className=" h-[32px] w-[35px] rounded bg-white font-semibold  "> */}
                  {/* + */}
                  {/* </button> */}
                  {/* </div>  */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal />
    </div>
  );
}

export default HomePage;

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`bg-primary rounded-full px-6 py-3 text-base font-medium text-red-900`}
        >
          Open Modal
        </button>

        <div
          className={`fixed left-0 top-0 z-30 hidden h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5  ${
            modalOpen ? 'hidden lg:flex' : 'hidden'
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="flex w-full max-w-[1150px] overflow-hidden rounded-[15px] bg-white text-center"
          >
            <div className=" max-w-[70%]">
              <div className=" bg-white">
                <h2 className="px-[70px] pb-[30px] pt-[35px] text-left text-2xl font-bold leading-tight tracking-tight text-gray-800 ">
                  Lorem, ipsum dolor ipsum dolor Ice-Freezer 225/60 R17 103T в
                  Kazakhstan
                </h2>
                <div className="flex">
                  {/* left-page */}
                  <div className="relative flex-[50%] border border-[#E2E9F2]">
                    <p className="flex h-full items-center justify-center overflow-hidden ">
                      <img
                        src="/public/img/01-big.png"
                        className="ml-16 w-[65%] object-cover object-center "
                        alt=""
                      />
                    </p>
                    <div className="absolute left-2 top-2">
                      <p className="is-active is-active:border-[#15A524] mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524] sm:mb-2 sm:h-20 sm:w-20">
                        <img
                          src="/public/img/01.png"
                          className="h-full w-full object-cover object-center"
                          alt=""
                        />
                      </p>
                      <p className=" is-active:border-[#15A524] mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524] sm:mb-2 sm:h-20 sm:w-20">
                        <img
                          src="/public/img/shina-min1.png"
                          className="h-full w-full object-cover object-center"
                          alt=""
                        />
                      </p>
                      <p className="is-active:border-[#15A524] mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524] sm:mb-2 sm:h-20 sm:w-20">
                        <img
                          src="/public/img/shina-min2.png"
                          className="h-full w-full object-cover object-center"
                          alt=""
                        />
                      </p>
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
                        <p className=" ml-3 border-b-[2px] border-dashed">
                          All characteristics
                        </p>
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
                  <div className="flex h-[58px] w-[58px] items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                    <img
                      className="w-5 sm:w-[unset]"
                      src="/img/winter.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex h-[58px] w-[58px] items-center justify-center">
                    <img
                      className="w-5 sm:w-[unset]"
                      src="/img/shipovniy.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[30%] border-l border-[#E2E9F2] bg-[#F8FAFD]">
              {/* top */}
              <div className="flex h-[50px] w-full border-[#E2E9F2] ">
                <div className="flex flex-[33.333%] cursor-pointer items-center justify-center  border-[#E2E9F2]  ">
                  <ShareIcon className="h-6 w-6 text-[#566879]" />
                </div>
                <div className="flex flex-[33.333%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2] ">
                  <HeartIcon className="h-6 w-6 text-[#566879]" />
                </div>
                <div className="flex flex-[33.333%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2]  bg-[#E31E24]">
                  <XMarkIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              {/* actions */}
              <div className="relative  border-b border-t border-[#E2E9F2] p-6 ">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-[24px] font-extrabold sm:text-[28px]">
                    $46,00
                  </h2>
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
                  <button className="ml-2 flex h-[48px] items-center justify-center rounded bg-[#15A524] px-5 py-2 text-xs font-medium  leading-normal text-white">
                    <ShoppingCartIcon className="text-bold h-5 w-5 text-white" />
                    <span className="ml-2 whitespace-nowrap text-base">
                      Add to cart
                    </span>
                  </button>
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
                <img width="150" src="/img/brand-tire.svg" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
