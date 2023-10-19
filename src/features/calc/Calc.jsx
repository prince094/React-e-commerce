import { useState } from 'react';
import CalcTabRow from './CalcTabRow';
import CalcContent01 from './CalcContent01';
import CalcContent02 from './CalcContent02';
import CalcContent03 from './CalcContent03';

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

function Calc() {
  const tabs = [
    {
      value: 'categories',
      label: 'Car categories',
    },
    {
      value: 'options',
      label: 'Options',
    },
    {
      value: 'brands',
      label: 'Brands',
    },
  ];
  const [activeTab, setActiveTab] = useState('categories');

  function handleTab(value) {
    console.log(value);
    setActiveTab(value);
  }

  return (
    <div className="py-24 pb-12">
      <div className="category-selection rounded bg-white drop-shadow-[0px_20px_50px_rgba(2,36,86,0.1)]">
        <div className="category-selection-top flex">
          <div className="mt-5 min-w-[380px] text-center text-xl font-bold uppercase">
            <p>Tire selection by:</p>
          </div>
          <div className="mr-4 flex w-full">
            {tabs.map((item) => (
              <CalcTabRow
                key={item.value}
                item={item}
                activeTab={activeTab}
                onClick={handleTab}
              />
            ))}
          </div>
        </div>
        {activeTab === 'categories' && <CalcContent01 />}
        {activeTab === 'options' && <CalcContent02 />}
        {activeTab === 'brands' && <CalcContent03 />}
      </div>
    </div>
  );
}

export default Calc;
