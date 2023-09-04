import { useState } from 'react';
import Button from '../ui/Button';
import CalcTabContent from '../features/calc/Calc';
import NewsSlide from '../components/news/NewsSlide';

function HomePage() {
  return (
    <div className="py-24 pb-12">
      <CalcTabContent />
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold tracking-tight text-gray-900 md:text-[30px]">
          News
        </h2>
        <Button type="danger" to={'/news'}>
          All news
        </Button>
      </div>
      <NewsSlide />
    </div>
  );
}

export default HomePage;
