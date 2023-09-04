import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EyeIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const products = [
  {
    id: 1,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '45',
    color: 'Black',
  },
  {
    id: 143,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '60',
    color: 'Black',
  },
  {
    id: 112,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
  },
  {
    id: 1765,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '45',
    color: 'Black',
  },
  {
    id: 1435,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '60',
    color: 'Black',
  },
  {
    id: 11342,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
  },
];

function NewsSlide() {
  return (
    <Swiper
      className="mt-3"
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1.3}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div
            key={product.id}
            className="group relative flex h-full flex-col overflow-hidden rounded border border-[#E6E6E6] bg-white"
          >
            <p className="h-[250px] flex-auto ">
              <img
                className="h-full w-full object-cover"
                src="/img/news.png"
                alt=""
              />
            </p>
            <div className="h-full p-5">
              <div className="mb-2 flex">
                <p className="flex items-center">
                  <CalendarDaysIcon className="h-5 w-5 text-extragray" />
                  <span className="ml-[6px] text-sm font-medium text-extragray">
                    03 january, 11:51
                  </span>
                </p>
                <p className="ml-3 flex items-center">
                  <EyeIcon className="h-5 w-5 text-extragray" />
                  <span className="ml-[6px] text-sm font-medium text-extragray">
                    378
                  </span>
                </p>
              </div>
              <h2 className="mb-2 font-bold sm:text-lg">
                Заказывайте через сайт, получайте скидку
              </h2>
              <p className=" truncate text-sm text-extragray">
                ТОО "Компания Шин Line" предлагает воспользоваться скидкой на
                весь ассортимент шин.{' '}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewsSlide;
