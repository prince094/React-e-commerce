import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import BreadCrumb from '../ui/BreadCrumb';

function SelectionByCarSize() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Tire selection by tire size
        </h2>
      </div>
      <div className="mb-4 flex  flex-col gap-[6px] rounded bg-[#F5F8FC] p-1 lg:h-[70px] lg:flex-row hover:[&>.selection]:shadow-[0px_20px_30px_0px_rgba(2,36,86,0.10)]  hover:[&>.selection]:transition">
        <div className="selection relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-[#F23F44] lg:h-auto">
          <p className="absolute left-0 top-0 ">
            <img
              src="/img/catalog/by-extent.svg"
              className=" w-[90%] object-contain sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase text-white sm:ml-0 sm:text-sm">
            Select by tire size
          </p>
        </div>
        <div className="selection relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white lg:h-auto">
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
        <div className="selection relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white lg:h-auto">
          <p className="absolute left-0 top-0">
            <img
              src="/img/catalog/by-model.svg"
              className=" w-[90%] object-contain  sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase  sm:ml-0 sm:text-sm">
            Tire selection by car brand
          </p>
        </div>
      </div>
      {/* main */}
    </>
  );
}

export default SelectionByCarSize;
