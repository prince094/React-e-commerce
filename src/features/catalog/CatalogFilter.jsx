import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Select from '../../ui/Select';
import { useState } from 'react';
import { classNames } from '../../utils/helpers';

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

function CatalogFilter() {
  const [isOpenAcc, setIsOpenAcc] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function handleAccardion() {
    setIsOpenAcc((value) => !value);
  }
  return (
    <div className="hidden max-w-[25%] overflow-hidden lg:block lg:flex-[25%]">
      <Accordion isOpen={isOpenAcc} label={'Setting'} onClick={handleAccardion}>
        <div className="mt-5">
          <div className="mb-[5px]">
            <Select
              label={'Width'}
              value={catalogTypes[0]}
              options={catalogTypes}
              onChange={() => {}}
            />
          </div>
          <div className="flex gap-[5px]">
            <div className="max-w-[50%]">
              <Select
                label={'Profile'}
                value={catalogTypes[0]}
                options={catalogTypes}
                onChange={() => {}}
              />
            </div>
            <div className="max-w-[50%]">
              <Select
                label={'Diameter (R)'}
                value={catalogTypes[0]}
                options={catalogTypes}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion
        isOpen={isOpenAcc}
        label={'Seasonality'}
        onClick={handleAccardion}
      >
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
              <img src="/img/sunny.svg" className="w-full" alt="" />
            </p>
            <p className="ml-4">
              Summer
              <span className="ml-3 text-sm text-[#566879]">(112)</span>
            </p>
          </div>
          <div className="active  mb-[2px] flex items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] active:border-[#15A524] [&.is-active]:border-[#15A524]">
            <p className="w-[26px]">
              <img src="/img/sunny-winter.svg" className="w-full" alt="" />
            </p>
            <p className="ml-4">
              All season
              <span className="ml-3 text-sm text-[#566879]">(112)</span>
            </p>
          </div>
        </div>
      </Accordion>
      <Accordion isOpen={isOpenAcc} label={'Price'} onClick={handleAccardion}>
        <div className="mt-5">
          <div className="flex h-[70px] items-center rounded bg-white py-2">
            <div className="flex">
              <div className="flex-[50%] flex-shrink-0 flex-grow-0 px-4">
                <p className="text-[13px] font-semibold">from</p>
                <input
                  type="text"
                  value={10000}
                  className="w-full text-[#566879] focus:outline-none "
                  readOnly
                />
              </div>
              <div className="relative flex-[50%] flex-shrink-0 flex-grow-0 px-4 after:absolute after:left-[-1px] after:top-0 after:h-[48px] after:w-[1px] after:bg-[#E2E9F2] after:content-['']">
                <p className="text-[13px] font-semibold">to</p>
                <input
                  type="text"
                  value={10000}
                  className="w-full  text-[#566879] focus:outline-none"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
}

export default CatalogFilter;

function Accordion({ children, label, isOpen, onClick }) {
  return (
    <div
      className={classNames(
        isOpen ? '' : 'max-h-[72px] overflow-hidden',
        'mb-2 cursor-pointer rounded bg-[#F5F8FC] px-5 pb-5'
      )}
    >
      <div
        className="flex w-full items-center justify-between pb-2 pt-[22px]"
        onClick={() => onClick()}
      >
        <p className="text-lg font-medium">{label}</p>
        <ChevronDownIcon className="h-7 w-7 text-black" />
      </div>
      {children}
    </div>
  );
}
