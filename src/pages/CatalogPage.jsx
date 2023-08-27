import BreadCrumb from '../ui/BreadCrumb';
import {
  ChevronRightIcon,
  EyeIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid';
import Select from '../ui/Select';
import Screen from '../hooks/useScreenSize';
import CatalogFilter from '../features/catalog/CatalogFilter';

const modelData = [
  '155/65R13',
  '155/70R13',
  '155/65R14',
  '185/65R14',
  '205/65R14',
  '155/65R13',
  '155/70R13',
  '155/65R14',
  '205/65R16',
  '215/65R16',
  '215/60R16',
  '275/60R16',
  '205/65R16',
  '205/65R16',
  '215/65R16',
  '215/60R16',
];
const sort = [
  {
    id: 1,
    name: 'Popular first',
  },
  {
    id: 143,
    name: 'Cheaper first',
  },
  {
    id: 132,
    name: 'More expensive first',
  },
  {
    id: 1433,
    name: 'New',
  },
  {
    id: 41433,
    name: 'New test',
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
const catalogTypes = [
  {
    id: 32651,
    colors: {
      from: '#FF5C00',
      to: '#FCC537',
    },
    path: '/',
    name: 'Summer tires',
    icon: 'sunny',
  },
  {
    id: 35421,
    colors: {
      from: '#0E3D39',
      to: '#28CA55',
    },
    path: '/',
    name: 'All season tires',
    icon: 'winter-summer',
  },
  {
    id: 3221,
    colors: {
      from: '#3481B8',
      to: '#4D99D0',
    },
    path: '/',
    name: 'Winter tires',
    icon: 'winter',
  },
  {
    id: 3241,
    colors: {
      from: '#EE3636',
      to: '#F18A3F',
    },
    path: '/',
    name: 'Studded',
    icon: 'winter-tires',
  },
  {
    id: 321,
    colors: {
      from: '#6D0293',
      to: '#7F43FF',
    },
    path: '/',
    name: 'Not studded',
    icon: 'no-winter',
  },
];

function CatalogPage() {
  // const [rvalue, setRValue] = useState({ min: 0, max: 100 });

  return (
    <div className="py-5">
      <BreadCrumb />
      <div className="mb-4 flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="mb-2 mt-2 flex flex-col lg:mb-0 lg:flex-row lg:items-center">
          <div className="">
            <h2 className="mt-4 text-[22px] font-semibold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl md:text-3xl ">
              Tires 155/70R13 in Kazakhstan
            </h2>
            <p className="hidden text-[#566879] lg:block">
              Selection by parameters
            </p>
          </div>
          <span className="text-[#566879] lg:ml-5">3589 items</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 flex h-12 w-12 items-center justify-center bg-[#F5F8FC] md:mr-4 md:h-16 md:w-16">
            <img className="w-6 md:w-8" src="/img/map-pin-line.svg" alt="" />
          </div>
          <div>
            <p className="text-sm text-[#566879] md:text-[16px]">
              Show products by branch
            </p>
            <div className="flex items-center">
              <span className="border-b border-dashed border-[#56687957] font-semibold text-[#191717] md:text-[18px]">
                Kazakstan
              </span>
              <ChevronRightIcon className=" h-5 w-5 text-[#191717]" />
            </div>
          </div>
        </div>
      </div>

      {/* podbor shini */}
      <div className=" mb-3 flex flex-row flex-wrap justify-between gap-1 sm:gap-2">
        {catalogTypes.map((item) => {
          return (
            <div
              key={item.icon}
              style={{
                backgroundImage: `linear-gradient(to right, ${item.colors.from} , ${item.colors.to})`,
              }}
              className=" flex h-16 flex-auto items-center rounded px-4 sm:h-[88px] sm:rounded-md sm:px-6"
            >
              <p className="w-8 sm:w-11">
                <img
                  className="w-full"
                  src={`/img/catalog/${item.icon}.svg`}
                  alt=""
                />
              </p>
              <div className="ml-3 w-[90px] text-sm text-white sm:ml-6 sm:w-[120px] sm:text-base">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      {/* models */}
      <div className="my-4  w-full items-center justify-between rounded bg-[#F5F8FC] p-[10px] lg:flex">
        <div className="-m-0.5 mb-2 flex flex-[85%] flex-wrap lg:mb-0">
          {modelData.map((model, index) => (
            <div
              key={index}
              className="m-0.5 flex h-9 flex-[11%] items-center justify-center rounded bg-white px-3 text-sm text-[#566879] md:h-[40px] md:text-base"
            >
              {model}
            </div>
          ))}
        </div>
        <div className="flex flex-[15%] items-center justify-center px-3 text-sm font-bold md:text-base">
          <p className="font-semibold">Show all</p>
          <ChevronRightIcon className="ml-1 h-[22px] w-[22px]" />
        </div>
      </div>
      {/* type of filter */}
      <div className="flex flex-row justify-between bg-white">
        <div className="hidden lg:flex">
          <div className="flex items-center">
            <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
              <img
                className="w-[30px]"
                src="/img/catalog/filter-01.svg"
                alt=""
              />
            </div>
            <span className="ml-3 text-lg font-medium">Brand Selection</span>
            <ChevronRightIcon className="w-[24px]" />
          </div>
          <div className="ml-8 flex items-center">
            <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
              <img
                className="w-[30px]"
                src="/img/catalog/filter-02.svg"
                alt=""
              />
            </div>
            <span className="ml-3 text-lg font-medium">
              Selection by car model
            </span>
            <ChevronRightIcon className="w-[24px]" />
          </div>
        </div>
        <div className="flex w-full items-center lg:w-auto">
          <hr className="mr-[30px] hidden h-[40px] w-[1px] bg-[#E2E9F2] lg:inline" />
          <span className="mr-4 hidden lg:inline">Sort:</span>
          <div className="flex w-full justify-between">
            <Select width={Screen(768) ? '100%' : '290px'} dataSource={sort} />
            <div className="ml-1 flex h-[50px] min-w-[50px] items-center justify-center rounded bg-[#F5F8FC] lg:hidden">
              <img src="/img/catalog/filter-03.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* main contents */}
      <div className="my-4 flex gap-x-3">
        <CatalogFilter />
        <div className="flex-[75%]">
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex-[100%] cursor-pointer border-[0.5px] border-slate-300 bg-white sm:flex-[50%] md:flex-[33.333%]"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
