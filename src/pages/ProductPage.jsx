import { useState, useEffect, useContext } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import {
  HeartIcon,
  ShoppingCartIcon,
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import Button from '../ui/Button';
import UpdateItemQuantity from '../features/cart/UpdateItemQuantity';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../features/cart/cartSlice';
import ContentTitle from '../ui/ContentTitle';
import { BreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import { useLocation, useParams } from 'react-router-dom';
import products from '../data/data-products.json';
import { classNames, formatCurrency } from '../utils/helpers';

const slides = [
  'https://picsum.photos/1920/1080',
  'https://picsum.photos/1920/1081',
  'https://picsum.photos/1920/1082',
  'https://picsum.photos/1920/1083',
  'https://picsum.photos/1920/1084',
];

function ProductPage() {
  const [open, setOpen] = useState('desc');
  const [product, setProduct] = useState({});
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const params = useParams();

  const { setBreadcrumb } = useContext(BreadCrumbContext);

  function handleTabOpen(tabCategory) {
    setOpen(tabCategory);
  }

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

  const products = [
    {
      id: 1,
      name: '225/60R17 103T OBSERVE ICE-FREEZER SUV TOYO shine nds dsnkdks dsbds dsdsk dsndhsk dsds',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: '45',
    },
    {
      id: 14543,
      name: ' Blazer Alpine ',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: '60',
    },
    {
      id: 14433,
      name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: '60',
    },
    {
      id: 14321,
      name: '225/60R17 103T OBSERVE ICE-FREEZER SUV TOYO shine',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: '60',
    },
    {
      id: 14343,
      name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: '60',
    },
  ];

  useEffect(() => {
    fetch('../../src/data/data-products.json')
      .then((response) => response.json())
      .then((data) => {
        // todo: like shinline breadcrumb
        const result = data.find((f) => f.id === Number(params.id));
        setProduct(result);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/catalog', name: 'Catalog' },
          { path: '/industrial', name: 'Catalog' },
        ]);
      });
  }, []);

  useEffect(() => {
    if (imageSrc) {
      setImage(imageSrc[0]);
    }
  }, [imageSrc]);

  if (!Object.keys(product).length) return;

  return (
    <>
      <BreadCrumb />
      <ContentTitle title={name} />
      <span className="text-[12px] text-[#566879]">Артикул: 00000017910</span>

      <div className="mx-auto mt-6 bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* left-page */}
          <div className="flex-[50%]">
            <div className="flex h-9 w-full border border-b-0 border-[#E2E9F2]  sm:h-[50px]">
              <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                <img className="w-8 sm:w-[42px]" src="/img/car.svg" alt="" />
                <span className="ml-3 text-sm sm:ml-[15px] sm:text-[16px]">
                  Car
                </span>
              </div>
              {seasonTypes.map((type, index) => (
                <div
                  key={type}
                  className={classNames(
                    index === 0 ? 'border-r-[1px]' : '',
                    'flex w-full items-center justify-center border-[#E2E9F2]'
                  )}
                >
                  <img
                    className="h-[25px] w-[25px] object-cover object-center"
                    src={`/img/${type}.svg`}
                    alt=""
                  />
                  <span className="ml-3 text-sm capitalize sm:ml-[15px] sm:text-[16px]">
                    {type}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative flex-[50%] border border-[#E2E9F2] sm:h-[605px] ">
              <p className="flex h-full items-center justify-center overflow-hidden py-5">
                <img
                  className="ml-14 w-[95%] object-cover object-center sm:w-[70%] lg:ml-20 "
                  src={image}
                  alt={imageAlt}
                />
              </p>
              <div className=" absolute left-1 top-1 sm:left-6 sm:top-6">
                {imageSrc.map((item) => (
                  <p
                    key={item}
                    className={classNames(
                      image === item ? 'border-[#15A524]' : '',
                      'mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]  sm:mb-2 sm:h-20 sm:w-20'
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

            <div className=" w-full border border-t-0  border-[#E2E9F2] ">
              <div className="group relative flex h-9 w-full items-center px-4 sm:h-[50px] sm:px-6">
                <img
                  className="-ml-1 opacity-60 group-hover:opacity-100 sm:w-[26px]"
                  src="/img/award-line.svg"
                  alt=""
                />
                <span className="ml-3 text-sm text-[#566879]  group-hover:text-black sm:ml-[20px] sm:text-[16px]">
                  Гарантия на заводской брак
                </span>
              </div>
              <div className="group relative flex h-9 w-full items-center border-t  border-[#E2E9F2] px-4 sm:h-[50px] sm:px-6">
                <img
                  className="w-4 opacity-60 group-hover:opacity-100 sm:w-[20px]"
                  src="/img/screen.svg"
                  alt=""
                />
                <span className="ml-4 text-sm text-[#566879] group-hover:text-black sm:ml-[21px] sm:text-[16px]">
                  View all sizes of this model
                </span>
                <ChevronRightIcon className="absolute right-2 h-4 text-[#566879] group-hover:text-black sm:right-6 sm:h-5 sm:w-5" />
              </div>
              <div className="group relative flex h-9 w-full items-center border-t  border-[#E2E9F2] px-4 sm:h-[50px] sm:px-6">
                <img
                  className="w-5 opacity-60 group-hover:opacity-100 sm:w-[24px]"
                  src="/img/shine.svg"
                  alt=""
                />
                <span className="ml-3 text-sm text-[#566879]  group-hover:text-black sm:ml-[20px] sm:text-[16px]">
                  See other tires in this size
                </span>
                <ChevronRightIcon className="absolute right-2 h-4 text-[#566879] group-hover:text-black sm:right-6 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>

          {/* right-page */}
          <div className="flex flex-[50%] flex-col border-b border-l border-r border-[#E2E9F2] sm:border-l-0">
            <div className="flex h-[50px] border-[#E2E9F2] sm:border-t">
              <div className="flex flex-[85%] items-center justify-between px-4 sm:flex-[67%] sm:px-7 ">
                <p className="">
                  Reviews <span className=" text-[#566879] ">(12)</span>
                </p>
                <img
                  width="150"
                  src={`/img/catalog/brand/${brandSrc}.svg`}
                  alt=""
                />
              </div>
              <div className="flex flex-[15%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2]  bg-[#F8FAFD]  sm:flex-[33%]">
                <HeartIcon className="h-6 w-6 text-gray-500" />
                <span className="ml-[10px] hidden tracking-[0] sm:inline">
                  To favorite
                </span>
              </div>
            </div>

            <div className="relative  border-b border-t border-[#E2E9F2] bg-[#F8FAFD] p-5 sm:p-7">
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

            <div className="border-b border-[#E2E9F2] bg-white px-4 py-4 sm:px-7">
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

            <div className="p-4 sm:p-7">
              <h2 className="mb-4 text-[20px] font-bold">Characteristics:</h2>
              {[1, 2, 3, 4, 5].map((character) => {
                return (
                  <div
                    key={character}
                    className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']"
                  >
                    <p className="z-[2] bg-white pr-4 font-thin">
                      Ширина профиля
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

      {/* tabs */}
      <section className="py-12 sm:py-20">
        <div className="mb-14 w-full">
          <div className="flex flex-wrap  border border-[#E2E9F2] bg-[#F5F8FC] px-1 py-1 sm:space-x-2">
            <a
              onClick={() => handleTabOpen('desc')}
              className={`cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
                open === 'desc' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              Description
            </a>
            <a
              onClick={() => handleTabOpen('reviews')}
              className={` cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
                open === 'reviews' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              Reviews(12)
            </a>
            <a
              onClick={() => handleTabOpen('in-stock')}
              className={` cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
                open === 'in-stock' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              In stock
            </a>
            <a
              onClick={() => handleTabOpen('not-available')}
              className={` cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
                open === 'not-available' ? 'bg-[#E31E24] text-white' : ' '
              }`}
            >
              not available
            </a>
          </div>
          <div className=" border border-t-0 border-[#E2E9F2] px-4">
            <TabContent tabCategory="desc" open={open}>
              <p className="flex justify-between rounded px-4 py-3 odd:bg-[#F8FAFD]">
                <span className="font-extralight">Ширина профиля</span>
                <b>225</b>
              </p>
              <p className="flex justify-between rounded px-4 py-3 odd:bg-[#F8FAFD]">
                <span className="font-extralight">Высота профиля</span>
                <b>60</b>
              </p>
              <p className="flex justify-between rounded px-4 py-3 odd:bg-[#F8FAFD]">
                <span className="font-extralight">Высота профиля</span>
                <b>60</b>
              </p>
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

      <h3>Smilar products</h3>

      {/* Previously you watched */}
      <section className="py-5">
        <div className="mb-4 flex items-center justify-between">
          <h2>Previously you watched</h2>
          <div className="previously-arrows relative flex">
            <div className="swiper-button-next right-0"></div>
            <div className="swiper-button-prev -left-16"></div>
          </div>
        </div>
        <div className="flex">
          <Swiper
            className="mt-3 grid grid-cols-4 "
            modules={[Navigation]}
            spaceBetween={14}
            slidesPerView={1.3}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: '.previously-arrows .swiper-button-next',
              prevEl: '.previously-arrows .swiper-button-prev',
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex max-w-[310px]  rounded border border-[#EEE] bg-[#F8FAFD] p-4">
                  <p className="h-[90px] max-h-[90px] min-w-[90px] border border-[#EEE] p-2">
                    <img
                      src="/img/01.png"
                      className="h-full w-full object-cover object-center"
                      alt=""
                    />
                  </p>
                  <div className=" ml-4 flex  flex-col">
                    <p className=" mb-1 h-full max-h-14 flex-auto overflow-hidden text-[13px] text-[#566879]">
                      {product.name}
                    </p>
                    <div className="flex-auto text-[20px] font-bold text-black">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ProductPage;

function TabContent({ open, tabCategory, children }) {
  return (
    <div
      className={`text-body-color max-w-[770px] py-6 text-base leading-relaxed ${
        open === tabCategory ? 'block' : 'hidden'
      } `}
    >
      {children}
    </div>
  );
}
