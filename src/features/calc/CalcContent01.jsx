import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../../ui/Button';
import catalog from '../../data/data-catalog.json';
import Select from '../../ui/Select';

function CalcContent01() {
  return (
    <div className="category-selection-content mb-10 flex p-4 pt-0">
      <div className="content-left min-w-[57%] max-w-[57%] rounded  px-4 pt-4">
        <div className="flex">
          <div className="w-full">
            <ul className="flex h-full flex-col">
              {catalog.map((catalog) => (
                <li
                  key={catalog.id}
                  className={`group relative flex h-[70px] items-center border border-lightgray px-[35px] transition duration-300 after:absolute after:left-0 after:top-0 after:h-full   after:bg-red after:transition after:duration-300 after:content-[''] hover:shadow-[5px_15px_30px_0px_rgba(0,0,0,0.10)] hover:after:w-[2px]
                  ${
                    catalog.path === '/cars'
                      ? 'active shadow-[5px_15px_30px_0px_rgba(0,0,0,0.10)] after:w-[2px]'
                      : 'after:w-[0]'
                  }
                `}
                >
                  <span
                    className={`${
                      catalog.path === '/cars' &&
                      '[&>svg>g>path]:fill-[black] [&>svg>path]:fill-[black]'
                    }  w-[44px]  group-hover:[&>svg>g>path]:fill-[black] group-hover:[&>svg>path]:fill-[black]`}
                    dangerouslySetInnerHTML={{ __html: catalog.svg }}
                  ></span>
                  <p
                    className={`${
                      catalog.path === '/cars' ? 'text-black' : 'text-extragray'
                    } ml-6 text-lg font-medium  group-hover:text-black`}
                  >
                    {catalog.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-4 flex h-full max-h-[307px] min-w-[300px] flex-col bg-lightgray px-5 pb-0 pt-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="mb-3">
                <p className="mb-1 text-extragray">Marka</p>
                <Select
                  width={'100%'}
                  height={'40px'}
                  iconSize={'5'}
                  dataSource={[
                    { id: 1, name: '195' },
                    { id: 2, name: '200' },
                  ]}
                />
              </div>
            ))}
            <p>
              <img src="" alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="content-right w-full overflow-hidden rounded bg-white px-4 pt-3">
        <h2 className="mb-3 text-xl font-bold">Settings</h2>
        <div className="flex w-full items-end">
          <div className="basis-1/3">
            <p className="mb-1 text-extragray">Width</p>
            <Select
              width={'100%'}
              height={'40px'}
              iconSize={'5'}
              dataSource={[
                { id: 1, name: '195' },
                { id: 2, name: '200' },
              ]}
            />
          </div>
          <p className="mx-3 h-[35px] text-[20px] text-[#191717] opacity-30">
            /
          </p>
          <div className="basis-1/3">
            <p className="mb-1 text-extragray">Profile</p>
            <Select
              width={'100%'}
              height={'40px'}
              iconSize={'5'}
              dataSource={[
                { id: 1, name: '195' },
                { id: 2, name: '200' },
              ]}
            />
          </div>
          <p className="mx-3 h-[35px] text-[20px] text-[#191717] opacity-30">
            R
          </p>
          <div className="basis-1/3">
            <p className="mb-1 text-extragray">Diametr</p>
            <Select
              width={'100%'}
              height={'40px'}
              iconSize={'5'}
              dataSource={[
                { id: 1, name: '195' },
                { id: 2, name: '200' },
              ]}
            />
          </div>
        </div>
        <p className="mb-3"></p>
        <h2 className="mb-3 text-xl font-bold">Seasonality</h2>
        <div className="mb-[10px] flex h-[46px] w-full gap-[5px] rounded border border-[#F6F6F6] bg-lightgray p-[5px]">
          <div className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
            <img className="w-[20px]" src="/img/winter-snow.svg" alt="" />
            <span className="ml-[10px] text-sm font-bold">Winter</span>
          </div>
          <div className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
            <img className="w-[20px]" src="/img/sunny.svg" alt="" />
            <span className="ml-[10px] text-sm font-bold">Summer</span>
          </div>
          <div className=" flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
            <img className="w-[20px]" src="/img/sunny-winter.svg" alt="" />
            <span className="ml-[10px] text-sm font-bold">All seasons</span>
          </div>
        </div>
        <div className="mb-4 flex h-[46px] w-full gap-[5px] rounded border border-[#F6F6F6] bg-lightgray p-[5px]">
          <div className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
            <img className="w-[20px]" src="/img/winter.svg" alt="" />
            <span className="ml-[10px] text-sm font-bold">Not shipovniy</span>
          </div>
          <div className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
            <img className="w-[20px]" src="/img/shipovniy.svg" alt="" />
            <span className="ml-[10px] text-sm font-bold">Shipovniy</span>
          </div>
        </div>

        {/* texts */}
        <p className="mb-4 text-extragray">
          Found this query:
          <span className="ml-2 font-bold text-black">154 offers</span>
        </p>
        <div className="flex">
          <Button onClick={() => {}} type="danger" className="w-full">
            Pick up
          </Button>
          <Button onClick={() => {}} type="black" className="ml-[10px] w-full">
            <XMarkIcon className="text-gray-white mr-1 h-6 w-6" />
            <span>Reset</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CalcContent01;
