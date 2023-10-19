import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EyeIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NewsSlide() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

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
      {news.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="group relative flex h-full flex-col overflow-hidden rounded border border-[#E6E6E6] bg-white"
          >
            <p className="h-[250px] flex-auto ">
              <img
                className="h-full w-full object-cover"
                src={item.imgUrl}
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
              <h2 className="mb-2 font-bold sm:text-lg">{item.title}</h2>
              <p className=" truncate text-sm text-extragray">
                {item.description}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NewsSlide;
