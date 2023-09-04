function CalcContent02() {
  return (
    <div className="category-selection-content mb-10 flex p-4 pt-3">
      <div className="content-left rounded bg-lightgray px-4 pt-4">
        <Content title={'Settings'}>
          <div className="flex w-full items-end">
            <div className="basis-1/3">
              <p className="mb-1 text-extragray">Width</p>
              <Select
                width={'190px'}
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
                width={'190px'}
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
                width={'190px'}
                height={'40px'}
                iconSize={'5'}
                dataSource={[
                  { id: 1, name: '195' },
                  { id: 2, name: '200' },
                ]}
              />
            </div>
          </div>
          <div className="image mx-auto mt-[10px] max-w-[488px]">
            <img className="w-full" src="/img/header/frame.svg" alt="" />
          </div>
        </Content>
      </div>
      <div className="content-right w-full overflow-hidden rounded bg-white px-4 pt-3">
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
          <div className="flex h-[46px] w-full gap-[5px] rounded border border-[#F6F6F6] bg-lightgray p-[5px]">
            <div className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
              <img className="w-[20px]" src="/img/winter.svg" alt="" />
              <span className="ml-[10px] text-sm font-bold">Not shipovniy</span>
            </div>
            <div className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]">
              <img className="w-[20px]" src="/img/shipovniy.svg" alt="" />
              <span className="ml-[10px] text-sm font-bold">Shipovniy</span>
            </div>
          </div>
          {/* marks */}
          <div className="my-5">
            <div className="scrollbar -m-0.5 mb-2 grid grid-flow-col grid-rows-2 overflow-x-auto">
              {modelData.map((model, index) => (
                <div
                  key={index}
                  className="m-0.5 flex h-[34px] items-center justify-center rounded border border-[#E2E9F2] bg-white px-3 text-sm text-[#566879] transition-all ease-out hover:bg-red hover:text-white"
                >
                  {model}
                </div>
              ))}
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

export default CalcContent02;
