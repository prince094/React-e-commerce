import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Select({
  width,
  height = '50px',
  border = true,
  subselect,
  subselectText,
  iconSize = '6',
  dataSource,
}) {
  const [selected, setSelected] = useState(dataSource[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Listbox.Button
              style={{ width, height, borderWidth: border ? '1px' : '0' }}
              className={`
              relative cursor-default overflow-hidden rounded
               border border-[#E2E9F2]  bg-white 
                text-left text-[#191717] focus:outline-none sm:text-sm sm:leading-6
                ${subselect ? 'pl-[14px] pr-8' : 'pl-5 pr-10 '}
                `}
            >
              <p className="block flex flex-col truncate text-sm sm:text-base">
                {subselect && (
                  <span className="text-[13px] text-[#566879]">
                    {subselectText}
                  </span>
                )}
                <span className="truncate font-semibold">{selected.name}</span>
              </p>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  className={`h-${iconSize} w-${iconSize} text-[#191717]`}
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white px-2 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {dataSource.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ selected, active }) =>
                      classNames(
                        active || selected
                          ? 'bg-[#F5F8FC] text-black'
                          : 'text-[#566879]',
                        subselect ? 'pl-[6px] pr-5' : 'pl-3 pr-9',
                        'relative cursor-pointer select-none rounded py-3  font-normal'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center text-sm sm:text-base">
                          <span>{item.name}</span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
