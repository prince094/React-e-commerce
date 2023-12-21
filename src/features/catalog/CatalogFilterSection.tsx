import { ChevronRightIcon } from '@heroicons/react/20/solid';
import ListBox from '../../ui/ListBox';

function CatalogFilterSection({ sort }: any) {
  return (
    <div className="flex flex-row justify-between bg-white">
      <div className="hidden lg:flex">
        <div className="flex items-center">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
            <img className="w-[30px]" src="/img/catalog/filter-01.svg" alt="" />
          </div>
          <span className="ml-3 text-lg font-medium">Brand Selection</span>
          <ChevronRightIcon className="w-[24px]" />
        </div>
        <div className="ml-8 flex items-center">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
            <img className="w-[30px]" src="/img/catalog/filter-02.svg" alt="" />
          </div>
          <span className="ml-3 text-lg font-medium">
            Selection by trade-mark
          </span>
          <ChevronRightIcon className="w-[24px]" />
        </div>
      </div>
      <div className="flex w-full items-center lg:w-auto">
        <hr className="mr-[30px] hidden h-[40px] w-[1px] bg-[#E2E9F2] lg:inline" />
        <span className="mr-4 hidden lg:inline">Sort:</span>
        <div className="flex w-full justify-between">
          <ListBox
            // width={Screen(768) ? '100%' : '290px'}
            value={sort[0]}
            options={sort}
            onChange={() => {}}
          />
          <div className="ml-1 flex h-[50px] min-w-[50px] items-center justify-center rounded bg-[#F5F8FC] lg:hidden">
            <img src="/img/catalog/filter-03.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilterSection;
