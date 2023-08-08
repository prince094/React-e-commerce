import { PlusSmallIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

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
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-[30px] font-bold tracking-tight text-gray-900">
          Sales
        </h2>
        <button className="rounded-[0.15rem] bg-[#E31E24] px-6 py-2 text-[16px] font-medium  leading-normal text-white">
          All sales
        </button>
      </div>

      <Swiper
        className="mt-3 grid grid-cols-4 "
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={4}
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
              className="group relative border-[0.5px] border-slate-300 bg-white"
            >
              <Link to={`pro/${product.id}`}>
                <div className="absolute left-1/2 top-[80px]  hidden h-[130px] w-[140px] -translate-x-1/2 flex-col items-center justify-center rounded-lg border-4  border-double border-blue-50 bg-gray-900 bg-opacity-50 shadow-lg group-hover:flex ">
                  <EyeIcon className="h-8 w-8  text-white" />

                  <span className="text-white">Quick view</span>
                </div>
              </Link>
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
                        src="/img/brand-tire.png"
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
    </div>
  );
}

export default HomePage;