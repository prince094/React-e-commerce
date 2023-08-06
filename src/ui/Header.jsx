import {
  UserIcon,
  MapPinIcon,
  CalculatorIcon,
  ShoppingBagIcon,
  HeartIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { Link, Route } from 'react-router-dom';

const catalog = [
  { name: 'Tires', path: '/tires', current: true },
  { name: 'Brands', path: '#', current: false },
  { name: 'Cars', path: '#', current: false },
  { name: 'Light trucks', path: '#', current: false },
  { name: 'Cargo', path: '#', current: false },
  { name: 'Agricultural', path: '#', current: false },
  { name: 'Industrial', path: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Header() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-1 justify-between">
              <Link to={'/'} className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="/Logo1.svg"
                  alt="Your Company"
                />
              </Link>
              <div className="flex space-x-4">
                <div className="flex space-x-4 py-3">
                  <button className="inline-flex items-center justify-center rounded-[5px] bg-gray-400 bg-opacity-20  px-4 py-2 text-center text-sm font-medium uppercase text-white hover:bg-opacity-30">
                    <span className="mr-[10px]">
                      <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    tire centers
                  </button>
                  <button className=" inline-flex items-center justify-center rounded-[5px] bg-gray-400  bg-opacity-20 px-4 py-2 text-center text-sm font-medium uppercase text-white hover:bg-opacity-30">
                    <span className="mr-[10px]">
                      <CalculatorIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    TIRE CALCULATOR
                  </button>
                </div>

                <div className="flex ">
                  {/* User */}
                  <div className="border-l border-r border-gray-700 hover:bg-gray-400 hover:bg-opacity-20">
                    <a
                      href="#"
                      className="flex h-full items-center px-3  text-white"
                    >
                      <span className="sr-only">User</span>
                      <UserIcon className="h-7 w-7  text-white " />
                    </a>
                  </div>
                  {/* Heart */}
                  <div className="border-r border-gray-700 hover:bg-gray-400 hover:bg-opacity-20">
                    <a
                      href="#"
                      className=" flex h-full items-center px-3 text-white"
                    >
                      <span className="sr-only">Search</span>
                      <HeartIcon className="h-7 w-7 text-white " />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className="flow-root hover:bg-gray-400 hover:bg-opacity-20">
                    <a
                      href="#"
                      className="group relative flex h-full items-center border-r border-gray-700 px-3"
                    >
                      <ShoppingBagIcon
                        className="h-7 w-7 flex-shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <span className="absolute left-5 top-4 ml-2 inline-block whitespace-nowrap rounded-full bg-red-600 px-[0.50em] py-[0.35em] text-center align-baseline text-[0.60em] font-bold leading-none text-white">
                        7
                      </span>
                      <div className="flex flex-col ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-max bg-white shadow-sm">
        <div className="mx-auto w-full max-w-7xl px-2 lg:px-8">
          <div className="flex">
            {catalog.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? ' is-active text-stone-950 '
                    : ' text-stone-600 hover:text-stone-950',
                  'group my-2 flex w-full cursor-pointer items-center justify-center border-x-[0.5px] border-x-stone-300 px-3 py-1 text-sm font-bold'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <CogIcon
                  className=" h-5 w-5 flex-shrink-0 text-stone-600 group-hover:text-stone-950 group-[.is-active]:text-stone-950"
                  aria-hidden="true"
                />
                <span className="ml-2">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
