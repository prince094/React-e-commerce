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
import CatalogFilter from '../features/catalog/CatalogFilter';

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

function SelectionByCarMark3() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Tires for BMW 1 (E81-E88) Coupe Restyle 2008-2013
        </h2>
      </div>

      <div className="mb-4 flex items-center justify-center border border-[#E2E9F2] px-6 py-5 sm:justify-between sm:rounded">
        <div className="hidden items-center sm:flex">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
            <img className="w-[30px]" src="/img/catalog/filter-02.svg" alt="" />
          </div>
          <span className="ml-3 text-lg font-medium">Back to all models</span>
          <ChevronRightIcon className="w-[24px]" />
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-end">
          <p className="w-[70%] sm:w-[50%] lg:w-[365px]">
            <img className="w-full" src="/img/catalog/bmw-big.png" alt="" />
          </p>
          <div className="text-center sm:ml-5 sm:text-left lg:ml-10 lg:mr-10">
            <p className="text-sm text-black sm:text-base">Model</p>
            <p className="mb-4 text-xl font-semibold text-[#E31E24] sm:text-3xl">
              118d
            </p>
            <button className="h-[50px] rounded bg-[#E31E24] px-4 text-sm font-semibold text-white md:text-base">
              View all tire catalog
            </button>
          </div>
        </div>
      </div>

      {/* seasons */}
      <div className="flex flex-col gap-2 bg-[#F5F8FC] p-3 md:flex-row lg:gap-[15px] lg:p-5">
        {[1, 2, 3].map((season) => (
          <div className="mb-3 basis-1/3 md:mb-0">
            <div className="mb-[5px] flex items-center justify-center rounded bg-white p-[10px] sm:mb-2">
              <p className="w-7 sm:w-[32px]">
                <img className="w-full" src="/img/winter-snow.svg" alt="" />
              </p>
              <p className="ml-[10px] font-medium sm:text-lg">Winter</p>
            </div>
            <div className="rounded bg-white px-4 py-2 sm:px-7">
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <div className="group flex items-baseline justify-between border-b border-[#E2E9F2] py-[10px] last:border-b-0">
                  <p className="font-medium transition-all group-hover:text-[#E31E24]">
                    195/55 R16
                  </p>
                  <span className="text-sm text-[#566879]">Winter</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectionByCarMark3;
