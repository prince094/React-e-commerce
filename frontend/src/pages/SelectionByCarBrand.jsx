import {
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid';
import BreadCrumb from '../ui/BreadCrumb';
import Select from '../ui/Select';
import Screen from '../hooks/useScreenSize';
import CatalogFilterFeatures from '../features/catalog/CatalogFilterFeatures';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PageTitle from '../ui/PageTitle';
import { useContext, useEffect } from 'react';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import TireSelectionTabs from '../ui/TireSelectionTabs';

const sort = [
  {
    id: 1,
    name: '1 (E81-E88) Cabrio Restyle 2007-2011',
  },
  {
    id: 143,
    name: '1 (E81-E88) Coupe Restyle 2008-2013',
  },
  {
    id: 132,
    name: ' 1 (E81-E88) Hatchback 2004-2007',
  },
  {
    id: 1433,
    name: '1 (E81-E88) Hatchback Restyle 2008-2013',
  },
  {
    id: 41433,
    name: '2 (F22) Coupe 2013-2018',
  },
];

const brands = [
  'falken',
  'firelli',
  'odyking',
  'dayton',
  'firemax',
  'firelli',
  'odyking',
];

function SelectionByCarBrand() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/brands', name: 'Brands' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title={'Tires for BMW 1 (E81-E88) Coupe Restyle 2008-2013'} />
      <TireSelectionTabs />
      <p className="mb-5 text-[#566879]">
        Our online tire store Shin Line is the official dealer in Kazakhstan of
        the represented brands. World tire manufacturers trust us: we provide
        safety, proper storage, and the prices in our store correspond to those
        recommended by the manufacturer. In Kazakhstan you will find your
        original list of tire manufacturers. Each brand has its own
        characteristics and originality in the presented tire models. You can
        also get acquainted with the service of "delivery of tires" of our
        products to the whole of Kazakhstan.
      </p>
      <div className="mb-8 flex flex-wrap gap-[5px] sm:gap-3">
        {[
          '0-9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
        ].map((item) => (
          <div
            key={item}
            className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded border border-[#E2E9F2] px-3 py-[5px] font-semibold uppercase text-[#566879] transition-all hover:border-[#E31E24] hover:text-[#E31E24]"
          >
            {item}
          </div>
        ))}
      </div>
      {/* slider */}
      <h3 className="mb-5 text-2xl font-semibold">Popular brands</h3>
      <Swiper
        className="mb-8 mt-3"
        modules={[Navigation]}
        spaceBetween={6}
        slidesPerView={2}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        navigation={
          {
            // nextEl: '.rightpage__arrows .swiper-arrow-next',
            // prevEl: '.rightpage__arrows .swiper-arrow-prev',
          }
        }
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-[80px] items-center justify-center rounded border border-[#E2E9F2] px-5 transition-all hover:shadow-inner  sm:h-[100px]">
              <img
                className="w-full"
                src={`/img/catalog/brand/${brand}.svg`}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* brands A-Z */}
      <h3 className="mb-5 text-2xl font-semibold">All brands</h3>
      <div className="block">
        <div className="mb-11">
          <div className="mb-4 flex h-[36px] w-[36px] items-center justify-center rounded border  border-[#E31E24] px-3 py-[5px] font-semibold uppercase text-[#E31E24] transition-all">
            a
          </div>
          <div className="flex flex-wrap">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex h-[90px] basis-1/2  items-center justify-center border border-[#E2E9F2] p-6 transition-all hover:shadow-[0_20px_30px_0px_rgba(2,36,86,0.10)] sm:h-[130px] sm:p-10 md:basis-1/3 lg:basis-1/5"
              >
                <img
                  className="h-full w-full"
                  src={`/img/catalog/brand/${brand}.svg`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-11">
          <div className="mb-4 flex h-[36px] w-[36px] items-center justify-center rounded border  border-[#E31E24] px-3 py-[5px] font-semibold uppercase text-[#E31E24] transition-all">
            b
          </div>
          <div className="flex flex-wrap">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex h-[90px] basis-1/2  items-center justify-center border border-[#E2E9F2] p-6 transition-all hover:shadow-[0_20px_30px_0px_rgba(2,36,86,0.10)] sm:h-[130px] sm:p-10 md:basis-1/3 lg:basis-1/5"
              >
                <img
                  className="w-full"
                  src={`/img/catalog/brand/${brand}.svg`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectionByCarBrand;
