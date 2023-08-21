import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import BreadCrumb from '../ui/BreadCrumb';

function SelectionByCarMark() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Catalog shine
        </h2>
      </div>
      <div className="mb-4 flex  flex-col gap-[6px] rounded bg-[#F5F8FC] p-1 lg:h-[70px]  lg:flex-row">
        <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white lg:h-auto">
          <p className="absolute left-0 top-0 ">
            <img
              src="/img/catalog/by-extent.svg"
              className=" w-[90%] object-contain sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase sm:ml-0 sm:text-sm">
            Select by tire size
          </p>
        </div>
        <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white lg:h-auto">
          <p className="absolute left-0 top-0">
            <img
              src="/img/catalog/by-brand.svg"
              className=" w-[90%] object-contain  sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase sm:ml-0 sm:text-sm">
            Select tire manufacturer
          </p>
        </div>
        <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-[#F23F44] lg:h-auto">
          <p className="absolute left-0 top-0">
            <img
              src="/img/catalog/by-model.svg"
              className=" w-[90%] object-contain  sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase text-white sm:ml-0 sm:text-sm">
            Tire selection by car brand
          </p>
        </div>
      </div>
      <p className="mb-4 text-[#566879]">
        To carry out the correct selection of tires by car brand, you need to
        know the year of manufacture and model of your car. To select tires by
        car, select a brand from the list.
      </p>
      <div className="mb-2 flex  flex-col items-center justify-between rounded bg-[#F5F8FC] px-4 py-3 sm:flex-row sm:px-8 sm:py-4">
        <p className="text-lg font-semibold uppercase">List of car marks:</p>
        <div className="relative mt-2 w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
            <MagnifyingGlassIcon className="h-6 w-6 text-[#B2B2B2]" />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block h-[45px] w-full rounded border border-[#E2E9F2] py-1 pl-10 pr-20 text-sm text-gray-900 outline-none  placeholder:text-gray-400"
            placeholder="Search mark"
          />
        </div>
      </div>
      {/* brands */}
      <div className="mb-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {[
          1, 2, 3, 4, 5, 6, 65, 7, 87, 93, 57, 75, 343, 62, 23, 94, 635, 70, 88,
          95, 54, 96, 74, 8, 9876, 4424,
        ].map((item) => (
          <div
            key={item}
            className=" flex min-h-[150px]   flex-col items-center  justify-end  border border-[#E2E9F2] pb-3 shadow-gray-100 transition-all hover:shadow-md"
          >
            <p className="mb-7 h-[50px] w-[70px]">
              <img className="w-full" src="/img/catalog/bmw.svg" alt="" />
            </p>
            <p className="font-semibold text-black">BMW</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SelectionByCarMark;
