import {
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid';
import BreadCrumb from '../ui/BreadCrumb';
import Select from '../ui/Select';
import Screen from '../hooks/useScreenSize';
import CatalogFilterFeatures from '../features/catalog/CatalogFilterFeatures';

const sort = [
  {
    id: 1,
    name: '1 (E81-E88) Cabrio Restyle 2007-2011',
  },
  {
    id: 143,
    name: '1 (E81-E88) Coupe Restyle 2008-2013',
  },
  {
    id: 132,
    name: ' 1 (E81-E88) Hatchback 2004-2007',
  },
  {
    id: 1433,
    name: '1 (E81-E88) Hatchback Restyle 2008-2013',
  },
  {
    id: 41433,
    name: '2 (F22) Coupe 2013-2018',
  },
];
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

function SelectionByCarMark2() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Catalog shine for BMW
        </h2>
      </div>

      <div className="mb-2 flex items-center rounded bg-[#F5F8FC] p-2 pl-0 sm:p-3 lg:flex-row lg:justify-between">
        <p className="flex items-center">
          <img className="w-[70px]" src="/img/catalog/bmw.svg" alt="" />
          <span className="ml-[2px] text-sm text-[#566879] sm:text-base lg:ml-4">
            To select tires for BMW (BMW), select the model of your car:
          </span>
        </p>
        {!Screen(1024) && (
          <div className="ml-3">
            <Select width={'450px'} dataSource={sort} />
          </div>
        )}
      </div>
      {Screen(1024) && (
        <div className="mb-3">
          <Select width={'100%'} dataSource={sort} />
        </div>
      )}

      <div className="hidden items-center sm:flex">
        <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
          <img className="w-[30px]" src="/img/catalog/filter-02.svg" alt="" />
        </div>
        <span className="ml-3 text-lg font-medium">Back to all brands</span>
        <ChevronRightIcon className="w-[24px]" />
      </div>

      {/* main contents */}
      <div className="my-4 mt-2 flex gap-x-3">
        <CatalogFilterFeatures />
        <div className="flex-[75%]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((model) => (
            <div
              key={model}
              className="mb-[10px] gap-[10px] rounded bg-[#F5F8FC] p-3 sm:flex"
            >
              <p className="flex h-auto min-w-[220px] items-center justify-center rounded bg-white px-4 py-5 sm:py-3">
                <img
                  className="w-[70%] sm:w-full"
                  src={`/img/catalog/bmw-${model}.svg`}
                  alt=""
                />
              </p>
              <div className="w-full sm:ml-[2px]">
                <h3 className="pb-2 pt-3 text-center text-sm font-semibold uppercase text-black sm:pt-1 sm:text-base">
                  1 (E81-E88) Cabrio Restyle 2007-2011
                </h3>
                <div className="-mx-[4px] flex flex-wrap sm:-mx-[6px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 32].map((item) => (
                    <div
                      key={item}
                      className="basis-1/2 p-[2px] sm:basis-1/4 sm:p-[3px] "
                    >
                      <div className="flex cursor-pointer items-center justify-center rounded bg-white p-[8px] text-sm font-light text-[#566879] transition-all ease-linear hover:bg-[#E31E24]  hover:text-white sm:text-base ">
                        180d
                      </div>
                    </div>
                  ))}
                </div>
                <div className="-mx-[3px] mt-1 flex items-center justify-center rounded bg-white py-[7px]">
                  <p className="flex items-center text-[12px] font-medium uppercase text-black">
                    <span>Show all models</span>
                    <ChevronDownIcon className="ml-1 h-5 w-5 text-black" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectionByCarMark2;
