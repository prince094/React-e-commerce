import { ChevronRightIcon } from '@heroicons/react/20/solid';

function CatalogFilterModel({ model }: any) {
  return (
    <div className="my-4  w-full items-center justify-between rounded bg-[#F5F8FC] p-[10px] lg:flex">
      <div className="-m-0.5 mb-2 flex flex-[85%] flex-wrap lg:mb-0">
        {model.map((item: any, index: number) => (
          <div
            key={index}
            className="m-0.5 flex h-9 flex-[11%] items-center justify-center rounded bg-white px-3 text-sm text-[#566879] md:h-[40px] md:text-base"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-[15%] items-center justify-center px-3 text-sm font-bold md:text-base">
        <p className="font-semibold">Show all</p>
        <ChevronRightIcon className="ml-1 h-[22px] w-[22px]" />
      </div>
    </div>
  );
}

export default CatalogFilterModel;
