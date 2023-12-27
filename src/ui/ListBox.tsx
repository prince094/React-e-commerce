import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ListBox({ options, value, onChange }) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Listbox.Button className="relative h-[50px] w-full cursor-pointer overflow-hidden rounded border border-[#E2E9F2] bg-white pl-5 pr-10 text-left text-[#191717] focus:outline-none sm:w-[290px] sm:text-sm sm:leading-6">
              <p className=" flex flex-col truncate text-sm sm:text-base">
                <span className="truncate font-semibold">{value.name}</span>
              </p>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className={`h-6 w-6 text-[#191717]`} />
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
                {options.map((item: any) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ selected, active }) =>
                      classNames(
                        active || selected
                          ? 'bg-[#F5F8FC] text-black'
                          : 'text-[#566879]',
                        'relative cursor-pointer select-none rounded py-3 pl-3 pr-9 font-normal'
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