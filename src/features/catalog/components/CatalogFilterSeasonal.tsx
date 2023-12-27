function CatalogFilterSeasonal({ catalog }: any) {
  return (
    <div className=" mb-3 flex flex-row flex-wrap justify-between gap-1 sm:gap-2">
      {catalog.map((item: any) => {
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
  );
}

export default CatalogFilterSeasonal;
