import BreadCrumb from '../ui/BreadCrumb';
import { HeartIcon } from '@heroicons/react/24/outline';

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
      <h2 className="my-4 max-w-[940px] text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
        Легковая шина зимняя Hankook Ice-Freezer 225/60 R17 103T в Казахстане
      </h2>
      <div className="mx-auto mt-6 bg-white">
        <div className="flex ">
          {/* left-page */}
          <div className="flex-[50%]">
            <div className="flex h-[50px] border border-b-0 border-r-0 border-[#E2E9F2]">
              <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                <img width="42" src="/img/car.svg" alt="" />
                <span className="ml-[15px]">Car</span>
              </div>
              <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                <img src="/img/winter.svg" alt="" />
                <span className="ml-[15px]">Winter</span>
              </div>
              <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
                <img src="/img/shipovniy.svg" alt="" />
                <span className="ml-[15px]">Shipovniy</span>
              </div>
            </div>
            <div className="relative h-[600px] flex-[50%] border border-[#E2E9F2] ">
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
          {/* right-page */}
          <div className="flex-[50%]">
            <div className="flex h-[50px] border border-b-0 border-l-0 border-r-0 border-[#E2E9F2]">
              <div className="flex flex-[67%] items-center justify-between px-7 ">
                <p className="">
                  Reviews <span className="-ml-1 text-[#566879] ">(12)</span>
                </p>
                <img width="150" src="/img/brand-tire.svg" alt="" />
              </div>
              <div className="flex flex-[33%] cursor-pointer items-center justify-center border-l-[1px] border-r-[1px] border-[#E2E9F2]  bg-[#F8FAFD]">
                <HeartIcon className="h-6 w-6 text-gray-500" />
                <span className="ml-[10px]">To favorites</span>
              </div>
            </div>
            <div className="relative h-[600px] flex-[50%] border border-[#E2E9F2] bg-[#F8FAFD] p-7">
              <div className="flex justify-between">
                <h2 className="text-[28px] font-extrabold">46 500 тенге</h2>
                <p className="flex items-center">
                  <b className="text-[#15A524]">В наличии:</b>{' '}
                  <span className="ml-2 text-[#566879]">
                    Осталось от 4 до 20 шт
                  </span>
                </p>
                {/* <p>
                  <b>Нет в наличии:</b>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
