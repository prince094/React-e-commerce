import BreadCrumb from '../ui/BreadCrumb';

const slides = [
  'https://picsum.photos/1920/1080',
  'https://picsum.photos/1920/1081',
  'https://picsum.photos/1920/1082',
  'https://picsum.photos/1920/1083',
  'https://picsum.photos/1920/1084',
];

function ProductPage() {
  return (
    <>
      <BreadCrumb />
      <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex ">
          <div className="w-full">
            <div className="relative h-[600px] flex-[50%] border border-[#E2E9F2] bg-white">
              <p className="flex h-full items-center justify-center overflow-hidden">
                <img
                  src="/public/img/01-big.png"
                  className="ml-20 h-[70%] w-[70%] object-cover object-center"
                  alt=""
                />
              </p>
              <div className="absolute left-6 top-6">
                <p className="is-active is-active:border-[#15A524] mb-2 h-20 w-20 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]">
                  <img
                    src="/public/img/01.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
                <p className=" is-active:border-[#15A524] mb-2 h-20 w-20 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]">
                  <img
                    src="/public/img/shina-min1.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
                <p className="is-active:border-[#15A524] mb-2 h-20 w-20 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]">
                  <img
                    src="/public/img/shina-min2.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 ">
            <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
