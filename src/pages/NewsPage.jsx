import { CalendarDaysIcon, EyeIcon } from '@heroicons/react/24/outline';
import BreadCrumb from '../ui/BreadCrumb';
import { useEffect, useState } from 'react';

function NewsPage() {
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
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          News
        </h2>
      </div>
      <div className="my-4 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col  overflow-hidden rounded border border-[#E6E6E6] bg-white"
          >
            <p className="h-[250px] flex-auto ">
              <img
                className="h-full w-full object-cover"
                src={item.imgUrl}
                alt=""
              />
            </p>
            <div className="p-5">
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
          </div>
        ))}
      </div>
    </>
  );
}

export default NewsPage;
