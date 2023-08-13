import React from 'react';
import newsData from '../../data/newsData.json';
const NewsCard = () => {
  const today = new Date();
  const options = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const formattedDate = today.toLocaleString('en-US', options);

  return (
    <section className="my-10">
      <div className="my-6 flex justify-between">
        <div className="flex">
          <h3 className=" mr-6 text-[30px] font-bold tracking-tight text-gray-900">
            News
          </h3>
          <img
            src="/public/img/news/subtract.svg"
            alt="decoration"
            className="hidden sm:block"
          />
        </div>
        <button className="rounded-[0.15rem] bg-[#E31E24]  px-6 py-2 text-[16px] leading-normal text-white ">
          All promotions
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        {newsData.map((item, index) => (
          <div
            key={item.id}
            className="mb-4 w-[100%] rounded-2xl border sm:w-[48%]  md:w-[32%] lg:w-[24%] "
          >
            <img src={item.src} alt="news-img" className="w-full" />
            <div className="p-4">
              <div className="flex items-center justify-between text-sm">
                <div className='flex'>
                  <img src="/public/img/calender.svg" alt="calender" />
                  <span className='ml-2'>{formattedDate}</span>
                </div>
                <div className='flex'>
                  <img src="/public/img/eye-view.svg" alt="calender" />
                  <span className='ml-2'>{item.view}</span>
                </div>
              </div>
              <h4 className="my-2 flex flex-wrap font-bold">{item.title}</h4>
              <p className="text-[14px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCard;
