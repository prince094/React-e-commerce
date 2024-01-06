import {
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
  ShoppingCartIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import BreadCrumb from '../ui/BreadCrumb';
import Select from '../ui/Select';
import Screen from '../hooks/useScreenSize';

const seasonTypes = [
  {
    id: 1,
    name: 'All tires',
  },
  {
    id: 143,
    name: 'sunny',
  },
  {
    id: 132,
    name: 'winter',
  },
  {
    id: 1433,
    name: 'not shipovniy',
  },
  {
    id: 41433,
    name: 'shipovniy',
  },
];

const sizes = [
  {
    id: 1,
    name: 'r11',
  },
  {
    id: 143,
    name: 'r12',
  },
  {
    id: 132,
    name: 'r13',
  },
  {
    id: 1433,
    name: 'r15',
  },
  {
    id: 41433,
    name: 'r16',
  },
];

const brands = [
  'falken',
  'firelli',
  'odyking',
  'dayton',
  'firemax',
  'firelli',
  'odyking',
];

function SelectionByCarBrand3() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Car tires Cordiant in Uzbekistan
        </h2>
      </div>
      {/* products */}
      <div className="my-4 flex gap-x-5">
        <div className="hidden basis-1/4 rounded bg-white p-4 shadow-[0_0_50px_0_rgba(2,36,86,0.05)] md:block">
          <ul className="font-normal text-[#566879]  [&>.active]:rounded [&>.active]:bg-[#F7F9FD] [&>.disabled>span]:text-[#BECAD6] [&>.disabled]:text-[#BECAD6] [&>li]:rounded [&>li]:transition-all [&>li]:duration-200 hover:[&>li]:bg-[#F7F9FD]">
            <li className="disabled mb-2 px-4 py-2">
              Achilles{' '}
              <span className="ml-1 text-[12px] text-[#E31E24]">(0)</span>
            </li>
            <li className="active mb-2 px-4 py-2">
              Achilles{' '}
              <span className="ml-1 text-[12px] text-[#E31E24]">(54)</span>
            </li>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <li key={item} className="mb-2 px-4 py-2">
                Achilles{' '}
                <span className="ml-1 text-[12px] text-[#E31E24]">
                  ({item}4)
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-center rounded bg-[#F5F8FC] p-[6px]">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
              <PlusSmallIcon className="h-6 w-6 " />
            </div>
            <p className="ml-4 text-sm font-medium uppercase">Show all</p>
          </div>
        </div>
        {/* left side */}
        <div className=" h-fit basis-full md:basis-3/4">
          <div className="mb-4 flex w-full flex-col border border-[#E2E9F2] sm:flex-row">
            <p className="mx-auto flex h-full w-full basis-1/2 items-center justify-center p-8 sm:p-5 lg:p-14">
              <img className="w-full" src="/img/01.png" alt="" />
            </p>
            <div className="basis-1/2 border-l border-[#E2E9F2]">
              <div className="flex h-14 items-center justify-end px-5 py-3 ">
                <img
                  className="h-full  object-cover"
                  src="/img/catalog/brand/firemax.svg"
                  alt="brand"
                />
              </div>
              <div className="border-y border-[#E2E9F2] bg-[#F5F8FC] px-5 py-4 sm:py-5 lg:px-9">
                <h2 className="mb-2 text-2xl font-semibold sm:mb-3 sm:text-3xl">
                  from 40 000$
                </h2>
                <p className="mb-1 flex items-center whitespace-nowrap">
                  <b className=" text-[#15A524]">In stock:</b>{' '}
                  <span className="ml-2 text-[#566879]">
                    Left from 4 to 20 pieces
                  </span>
                </p>
              </div>
              <div className="px-5 lg:px-9">
                <div className="grid grid-cols-2 border-[#E2E9F2] py-4 first:border-b sm:py-5">
                  <p className="font-light text-[#566879]">Seasonality:</p>
                  <div>
                    <div className="mb-3 flex items-center">
                      <p className="w-[25px]">
                        <img
                          className="w-full"
                          src="/img/winter-snow.svg"
                          alt=""
                        />
                      </p>
                      <p className="ml-2 font-medium">Winter</p>
                    </div>
                    <div className=" flex items-center">
                      <p className="w-[25px]">
                        <img
                          className="w-full"
                          src="/img/sunny-winter.svg"
                          alt=""
                        />
                      </p>
                      <p className="ml-2 font-medium">All seasons</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-[#E2E9F2] py-4 first:border-b sm:py-5">
                  <p className="font-light text-[#566879]">Spikes:</p>
                  <div>
                    <div className=" flex items-center">
                      <p className="w-[25px]">
                        <img className="w-full" src="/img/winter.svg" alt="" />
                      </p>
                      <p className="ml-2 font-medium">Shipovniy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* dimensions */}
          <div className="flex items-center justify-between">
            <h2 className="hidden text-xl font-semibold uppercase md:block">
              Dimensions:
            </h2>
            <div className="w-full md:w-auto">
              <Select
                width={Screen(768) ? '100%' : '290px'}
                dataSource={sizes}
              />
            </div>
          </div>
          {/* table lists */}
          {Screen(1024) ? (
            [1, 2, 3].map((i) => <CartMobileContent />)
          ) : (
            <CartContent />
          )}
        </div>
      </div>
    </>
  );
}

export default SelectionByCarBrand3;

function CartItem({ item }) {
  return (
    <>
      <tr className="border-b border-[#EEE] transition-all last:border-b-0 hover:shadow-[0px_0px_30px_0px_rgba(2,36,86,0.10)]">
        <td className="flex items-center px-3 py-5">
          <p className="uppercase text-extragray">r13</p>
          <p className="ml-5 max-w-[211px] text-[15px] font-normal">
            215/60R17 V-523 Basco Nordico Viatti б/к шип
          </p>
        </td>
        <td className="">
          <p className=" text-extragray">175/70 R13</p>
        </td>
        <td className="">
          <p className="text-[15px] font-medium">$33 800,00 </p>
        </td>
        <td className="">
          <div className="flex">
            <div className="flex h-[40px] w-[112px] items-center justify-between rounded bg-[#F8FAFD] p-1">
              <button className="flex h-[36px] w-[33px] items-center justify-center rounded-l-[5px] bg-white  font-semibold">
                <span>-</span>
              </button>
              <input
                type="text"
                className="h-[32px] w-[32px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[16px] outline-none"
                value={'1'}
                onChange={(e) => e.target.value}
              />
              <button className=" flex h-[36px] w-[33px] items-center justify-center rounded-r-[5px] bg-white font-semibold">
                <span>+</span>
              </button>
            </div>
          </div>
        </td>
        <td className="">
          <button className="flex h-[40px] items-center justify-center rounded bg-green px-4 py-2 text-xs font-medium leading-normal  text-white shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)]">
            <ShoppingCartIcon className="text-bold h-[18px] w-[18px] text-white" />
            <span className="ml-2 text-sm">Add to cart</span>
          </button>
          {/* <button className="flex h-[40px] items-center justify-center rounded bg-red px-4 py-2 text-xs font-medium  leading-normal text-white shadow-[0px_4px_10px_0px_#E31E24]">
            <span className="ml-2 text-sm">In the basket</span>
          </button> */}
        </td>
      </tr>
    </>
  );
}

function CartMobileContent() {
  return (
    <div className="my-2 flex flex-col rounded border border-[#E2E9F2] bg-white">
      <div className="flex items-center p-3">
        <p className=" text-[15px] font-normal">
          215/60R17 V-523 Basco Nordico Viatti б/к шип
        </p>
      </div>
      <div className="flex items-center justify-between px-3 py-1">
        <div>
          <p className="text-sm text-extragray">Size:</p>
          <p className="">175/70 R13</p>
        </div>
        <div className="flex h-[35px] w-[96px] items-center justify-between rounded bg-[#F8FAFD] px-[2px]">
          <button className="flex h-[32px] w-[30px] items-center justify-center rounded-l-[5px] bg-white  font-semibold">
            <span>-</span>
          </button>
          <input
            type="text"
            className="h-[32px] w-[32px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[13px] outline-none"
            value={'1'}
            onChange={(e) => e.target.value}
          />
          <button className=" flex h-[32px] w-[30px] items-center justify-center rounded-r-[5px] bg-white font-semibold">
            <span>+</span>
          </button>
        </div>
      </div>
      <div className="-px-3 mx-3 mt-1 flex items-center justify-between border-t border-[#E2E9F2] py-1">
        <div>
          <p className="text-[13px] text-[#566879]">Price:</p>
          <p className="text-[17px] font-medium">$67 600,00</p>
        </div>
        <div className="flex ">
          <button className="flex h-[40px] items-center justify-center rounded bg-green px-4 py-2 text-xs font-medium leading-normal  text-white shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)]">
            <ShoppingCartIcon className="text-bold h-[18px] w-[18px] text-white" />
            <span className="ml-2 text-sm">Add to cart</span>
          </button>
          {/* <button className="flex h-[40px] items-center justify-center rounded bg-red px-4 py-2 text-xs font-medium  leading-normal text-white shadow-[0px_4px_10px_0px_#E31E24]">
            <span className="ml-2 text-sm">In the basket</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

function CartContent() {
  return (
    <div className="mx-auto mb-5 mt-6 border border-[#E2E9F2] bg-white">
      <table className=" w-full table-auto">
        <thead className="bg-primary border-b border-[#E2E9F2] text-left">
          <tr className="bg-lightgray text-sm text-extragray [&>th]:py-2 [&>th]:font-normal">
            <th className="text-center"> Name </th>
            <th> Size </th>
            <th> Price </th>
            <th> Count </th>
            <th> </th>
          </tr>
        </thead>

        <tbody className="">
          {[1, 2, 3].map((item) => (
            <CartItem item={item} key={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
