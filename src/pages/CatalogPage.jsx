import { useState } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Select from '../ui/Select';
import { useScreenSize } from '../hooks/useScreenSize';
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
];

function CatalogPage() {
  const isMobile = useScreenSize();
  const [isOpenAcc, setIsOpenAcc] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function handleAccardion() {
    setIsOpenAcc((value) => !value);
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

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
            <Select width={isMobile ? '100%' : '290px'} dataSource={sort} />
            <div className="ml-1 flex h-[50px] min-w-[50px] items-center justify-center rounded bg-[#F5F8FC] lg:hidden">
              <img src="/img/catalog/filter-03.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* main contents */}
      <div className="my-4 flex">
        <div className="flex-gr flex-[25%]">
          <div
            className={classNames(
              isOpenAcc ? '' : 'max-h-[72px] overflow-hidden',
              'mb-2 cursor-pointer rounded bg-[#F5F8FC] px-5 py-6'
            )}
          >
            <div
              className="flex w-full items-center justify-between"
              onClick={handleAccardion}
            >
              <p className="text-lg font-medium">Settings</p>
              <ChevronDownIcon className="h-7 w-7 text-black" />
            </div>
            <div className="mt-5">
              <div className="mb-[5px]">
                <Select
                  width={'100%'}
                  height={'64px'}
                  border={false}
                  subselect={true}
                  subselectText={'Width'}
                  iconSize={'5'}
                  dataSource={catalogTypes}
                />
              </div>
              <div className="flex gap-[5px]">
                <Select
                  width={'100%'}
                  height={'64px'}
                  border={false}
                  subselect={true}
                  subselectText={'Profile'}
                  iconSize={'5'}
                  dataSource={catalogTypes}
                />
                <Select
                  width={'100%'}
                  height={'64px'}
                  border={false}
                  subselect={true}
                  subselectText={'Diameter (R)'}
                  iconSize={'5'}
                  dataSource={catalogTypes}
                />
              </div>
            </div>
          </div>
          {/* 222 */}
          <div
            className={classNames(
              false ? '' : '',
              'cursor-pointer rounded bg-[#F5F8FC] px-5 py-6'
            )}
          >
            <div
              className="flex w-full items-center justify-between"
              onClick={handleAccardion}
            >
              <p className="text-lg font-medium">Seasonality</p>
              <ChevronDownIcon className="h-7 w-7 text-black" />
            </div>
            <div className="mt-5">
              <div className="">
                <div className="active is-active flex items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] active:border-[#15A524] [&.is-active]:border-[#15A524]">
                  <p className="w-[26px]">
                    <img src="img//winter-snow.svg" className="w-full" alt="" />
                  </p>
                  <p className="ml-4">
                    Winter
                    <span className="ml-3 text-sm text-[#566879]">(112)</span>
                  </p>
                </div>
                <div className="my-4 px-5">
                  <label className="mb-3 flex cursor-pointer select-none items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="peer sr-only"
                    />
                    <div className="mr-[12px] flex h-5 w-5 items-center justify-center rounded border border-[#E2E9F2] bg-white peer-checked:border-[#15A524]">
                      <span
                        className={`${isChecked ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#15A524"
                            stroke="#15A524"
                            strokeWidth="0.6"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <p className="w-[18px]">
                      <img className="w-full" src="/img/winter.svg" alt="" />
                    </p>
                    <span
                      className={`${
                        isChecked ? 'text-black' : 'text-[#566879]'
                      } ml-2 text-sm`}
                    >
                      Not studded
                    </span>
                  </label>
                  <label className="flex cursor-pointer select-none items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="peer sr-only"
                    />
                    <div className="mr-[12px] flex h-5 w-5 items-center justify-center rounded border border-[#E2E9F2] bg-white peer-checked:border-[#15A524]">
                      <span
                        className={`${isChecked ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#15A524"
                            stroke="#15A524"
                            strokeWidth="0.6"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <p className="w-[18px]">
                      <img className="w-full" src="/img/shipovniy.svg" alt="" />
                    </p>
                    <span
                      className={`${
                        isChecked ? 'text-black' : 'text-[#566879]'
                      } ml-2 text-sm`}
                    >
                      Shipovniy
                    </span>
                  </label>
                </div>
              </div>
              <div className="active mb-[2px] flex items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] active:border-[#15A524] [&.is-active]:border-[#15A524]">
                <p className="w-[26px]">
                  <img src="img/sunny.svg" className="w-full" alt="" />
                </p>
                <p className="ml-4">
                  Summer
                  <span className="ml-3 text-sm text-[#566879]">(112)</span>
                </p>
              </div>
              <div className="active  mb-[2px] flex items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] active:border-[#15A524] [&.is-active]:border-[#15A524]">
                <p className="w-[26px]">
                  <img src="img//sunny-winter.svg" className="w-full" alt="" />
                </p>
                <p className="ml-4">
                  All season
                  <span className="ml-3 text-sm text-[#566879]">(112)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[75%]"></div>
      </div>
    </div>
  );
}

export default CatalogPage;
