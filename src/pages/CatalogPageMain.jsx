import BreadCrumb from '../ui/BreadCrumb';
import BgImage from '../../public/img/catalog/tire-all.png';

function CatalogPageMain() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Catalog shine
        </h2>
      </div>
      <div className="mb-4 flex  flex-col gap-[6px] rounded bg-[#F5F8FC] p-1 lg:h-[70px]  lg:flex-row">
        <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white lg:h-auto">
          <p className="absolute left-0 top-0 ">
            <img
              src="/img/catalog/by-extent.svg"
              className=" w-[90%] object-contain sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase sm:ml-0 sm:text-sm">
            Select by tire size
          </p>
        </div>
        <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white lg:h-auto">
          <p className="absolute left-0 top-0">
            <img
              src="/img/catalog/by-brand.svg"
              className=" w-[90%] object-contain  sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase sm:ml-0 sm:text-sm">
            Select tire manufacturer
          </p>
        </div>
        <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-[#F23F44] lg:h-auto">
          <p className="absolute left-0 top-0">
            <img
              src="/img/catalog/by-model.svg"
              className=" w-[90%] object-contain  sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase text-white sm:ml-0 sm:text-sm">
            Tire selection by car brand
          </p>
        </div>
      </div>
      <div className="-mx-1 mt-10 flex flex-wrap sm:-mx-2">
        {['01', '02', '03', '04', '05', 'all'].map((item) => (
          <div className="flex-[100%] p-1 sm:flex-[50%] lg:flex-[33.333%] lg:p-2">
            <div
              key={item}
              className="relative flex  flex-col items-start overflow-hidden rounded border border-[#E2E9F2] px-6 py-5 sm:px-8 sm:py-7"
              style={{
                backgroundImage: `url(${item === 'all' && BgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {item !== 'all' && (
                <p className="absolute bottom-0 right-0 h-[85%] max-w-[185px]">
                  <img
                    className="h-full w-full object-cover"
                    src={`/img/catalog/tire-${item}.png`}
                    alt=""
                  />
                </p>
              )}
              <h3
                className={`mb-4 text-2xl font-bold ${
                  item === 'all' && 'text-white'
                }`}
              >
                Light car tires
              </h3>
              <p
                className={`mb-10 text-[#566879] ${
                  item === 'all' && 'text-white text-opacity-60'
                }`}
              >
                760 species
              </p>
              <button className="rounded bg-[#F23F44] px-[36px] py-3 text-white">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogPageMain;
