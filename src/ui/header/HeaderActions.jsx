import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

function HeaderActions() {
  return (
    <div className="flex">
      <div className="border-l border-r border-gray-700 hover:bg-gray-400 hover:bg-opacity-20">
        <a href="#" className="flex h-full items-center px-3  text-white">
          <UserIcon className="h-6 w-6 text-white md:h-7 md:w-7  " />
        </a>
      </div>
      <div className="border-r border-gray-700 hover:bg-gray-400 hover:bg-opacity-20">
        <a href="#" className=" flex h-full items-center px-3 text-white">
          <HeartIcon className="h-6 w-6 text-white md:h-7 md:w-7 " />
        </a>
      </div>
      <div className="flow-root hover:bg-gray-400 hover:bg-opacity-20">
        <a
          href=""
          className="group relative flex h-full items-center border-r border-gray-700 px-3"
        >
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-white md:h-7 md:w-7"
            aria-hidden="true"
          />
          <span className="absolute left-5 top-2 ml-2 inline-block whitespace-nowrap rounded-full bg-red-600 px-[0.50em] py-[0.35em] text-center align-baseline text-[0.60em] font-bold leading-none text-white md:top-4">
            7
          </span>
          <div className="hidden flex-col lg:flex">
            <span className="ml-2 text-xs font-medium text-gray-400 ">
              Price:
            </span>
            <span className="ml-2 text-xs font-extrabold text-white">
              20 205 998 sum
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HeaderActions;
