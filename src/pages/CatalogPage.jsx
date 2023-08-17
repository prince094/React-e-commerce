import { useState } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
const catalogTypes = [
  {
    colors: {
      from: '#FF5C00',
      to: '#FCC537',
    },
    path: '/',
    name: 'Summer tires',
    icon: 'sunny',
  },
  {
    colors: {
      from: '#0E3D39',
      to: '#28CA55',
    },
    path: '/',
    name: 'All season tires',
    icon: 'winter-summer',
  },
  {
    colors: {
      from: '#3481B8',
      to: '#4D99D0',
    },
    path: '/',
    name: 'Winter tires',
    icon: 'winter',
  },
  {
    colors: {
      from: '#EE3636',
      to: '#F18A3F',
    },
    path: '/',
    name: 'Studded',
    icon: 'winter-tires',
  },
  {
    colors: {
      from: '#6D0293',
      to: '#7F43FF',
    },
    path: '/',
    name: 'Not studded',
    icon: 'no-winter',
  },
];
function CatalogPage() {
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
      <div className="mb-3 flex-row  justify-between lg:flex">
        {catalogTypes.map((item) => {
          return (
            <div
              key={item.icon}
              style={{
                backgroundImage: `linear-gradient(to right, ${item.colors.from} , ${item.colors.to})`,
              }}
              className="mx-1 flex h-24 w-64 items-center justify-evenly rounded-md "
            >
              <img src={`/img/catalog/${item.icon}.svg`} alt="" />
              <div className="text-white">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CatalogPage;
