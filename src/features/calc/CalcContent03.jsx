function CalcContent03() {
  return (
    <div className="category-selection-content mb-10 flex p-4 pt-3">
      <div className="content-left min-w-[57%] max-w-[57%] rounded bg-lightgray px-4 pt-4">
        <Content title={'Brands'}>
          <div className="scrollbar max-h-[307px] overflow-y-auto pb-1">
            <div className="grid  grid-cols-4 grid-rows-4 gap-[10px] ">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                21, 22, 23, 34, 45, 56, 42, 43, 54, 65, 76, 87, 90,
              ].map((item) => (
                <p
                  key={item}
                  className="flex h-[60px] items-center justify-center rounded bg-white px-[10px] py-2 transition-all  hover:shadow-[0px_20px_50px_0px_rgba(2,36,86,0.05)]"
                >
                  <img
                    className="h-full w-full"
                    src="/img/catalog/brand/odyking.svg"
                    alt=""
                  />
                </p>
              ))}
            </div>
          </div>
        </Content>
      </div>
      <div className="content-right w-full overflow-hidden rounded bg-white px-4 pt-3">
        <Content title={'Settings'}>
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
        </Content>
        <p className="mb-3"></p>
        <ContentRight title={'Seasonality'}>
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
            <button className="h-[50px] w-full rounded bg-red px-4 py-2 font-bold text-white">
              Pick up
            </button>
            <button className="ml-[10px] flex h-[50px] w-full items-center justify-center rounded bg-black px-4 py-2 font-bold text-white">
              <XMarkIcon className="text-gray-white mr-1 h-6 w-6" />
              <span>Reset</span>
            </button>
          </div>
        </ContentRight>
      </div>
    </div>
  );
}

export default CalcContent03;
