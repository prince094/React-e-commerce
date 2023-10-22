import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import NewItem from './NewItem';
import Button from '../../ui/Button';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold tracking-tight text-gray-900 md:text-[30px]">
          News
        </h2>
        <Button type="danger" to={'/news'}>
          All news
        </Button>
      </div>
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
            <NewItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default News;
