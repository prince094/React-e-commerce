import BreadCrumb from '../ui/BreadCrumb.tsx';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Select from '../ui/Select.tsx';
import Screen from '../hooks/useScreenSize.js';
import CatalogFilter from '../features/catalog/CatalogFilter.jsx';
import { SetStateAction, useContext, useEffect, useState } from 'react';
import {
  BreadCrumbContext,
  useBreadCrumbContext,
} from '../context/BreadcrumbContext.tsx';
import Product from '../features/product/Product.tsx';
import ProductModal from '../features/product/ProductModal.jsx';
import products from '../data/data-products.json';
import ListBox from '../ui/ListBox.jsx';
import { getProductList } from '../services/product/index.ts';

type Product = {
  id: number;
  title: string;
  brandSrc: string;
  color: string;
  imageAlt: string;
  imageSrc: string;
  seasonTypes: string[];
  soldOut: boolean;
  unitPrice: number;
  views: number;
};

type RawDataProduct = {
  data: Product[];
};

const modelData = [
  '155/65R13',
  '155/70R13',
  '155/65R14',
  '185/65R14',
  '205/65R14',
  '155/65R13',
  '155/70R13',
  '155/65R14',
  '205/65R16',
  '215/65R16',
  '215/60R16',
  '275/60R16',
  '205/65R16',
  '205/65R16',
  '215/65R16',
  '215/60R16',
];
const sort = [
  {
    id: 1,
    name: 'Popular first',
  },
  {
    id: 143,
    name: 'Cheaper first',
  },
  {
    id: 132,
    name: 'More expensive first',
  },
  {
    id: 1433,
    name: 'New',
  },
  {
    id: 41433,
    name: 'New test',
  },
];

const catalogTypes = [
  {
    id: 32651,
    colors: {
      from: '#FF5C00',
      to: '#FCC537',
    },
    path: '/',
    name: 'Summer tires',
    icon: 'sunny',
  },
  {
    id: 35421,
    colors: {
      from: '#0E3D39',
      to: '#28CA55',
    },
    path: '/',
    name: 'All season tires',
    icon: 'winter-summer',
  },
  {
    id: 3221,
    colors: {
      from: '#3481B8',
      to: '#4D99D0',
    },
    path: '/',
    name: 'Winter tires',
    icon: 'winter',
  },
  {
    id: 3241,
    colors: {
      from: '#EE3636',
      to: '#F18A3F',
    },
    path: '/',
    name: 'Studded',
    icon: 'winter-tires',
  },
  {
    id: 321,
    colors: {
      from: '#6D0293',
      to: '#7F43FF',
    },
    path: '/',
    name: 'Not studded',
    icon: 'no-winter',
  },
];

function CatalogPage() {
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<string>('');

  const { setBreadcrumb } = useBreadCrumbContext();

  function handleOpenModal(value: SetStateAction<{}>) {
    setProduct(value);
    setOpenModal(true);
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = (await getProductList(undefined)) as RawDataProduct;
        const product: Product[] = data.data;
        setFetchedProducts(product);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/catalog', name: 'Catalog' },
        ]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
    fetchProducts();
  }, []);

  // console.log(fetchedProducts, 'fetchedP');

  return (
    <>
      <BreadCrumb />
      <div className="py-5">
        <div className="mb-4 flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="mb-2 mt-2 flex flex-col lg:mb-0 lg:flex-row lg:items-center">
            <div className="">
              <h2 className="mt-4 text-[22px] font-semibold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl md:text-3xl ">
                Tires 155/70R13 in Kazakhstan
              </h2>
              <p className="hidden text-[#566879] lg:block">
                Selection by parameters
              </p>
            </div>
            <span className="text-[#566879] lg:ml-5">3589 items</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex h-12 w-12 items-center justify-center bg-[#F5F8FC] md:mr-4 md:h-16 md:w-16">
              <img className="w-6 md:w-8" src="/img/map-pin-line.svg" alt="" />
            </div>
            <div>
              <p className="text-sm text-[#566879] md:text-[16px]">
                Show products by branch
              </p>
              <div className="flex items-center">
                <span className="border-b border-dashed border-[#56687957] font-semibold text-[#191717] md:text-[18px]">
                  Kazakstan
                </span>
                <ChevronRightIcon className=" h-5 w-5 text-[#191717]" />
              </div>
            </div>
          </div>
        </div>

        {/* podbor shini */}
        <div className=" mb-3 flex flex-row flex-wrap justify-between gap-1 sm:gap-2">
          {catalogTypes.map((item) => {
            return (
              <div
                key={item.icon}
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.colors.from} , ${item.colors.to})`,
                }}
                className=" flex h-16 flex-auto items-center rounded px-4 sm:h-[88px] sm:rounded-md sm:px-6"
              >
                <p className="w-8 sm:w-11">
                  <img
                    className="w-full"
                    src={`/img/catalog/${item.icon}.svg`}
                    alt=""
                  />
                </p>
                <div className="ml-3 w-[90px] text-sm text-white sm:ml-6 sm:w-[120px] sm:text-base">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        {/* models */}
        <div className="my-4  w-full items-center justify-between rounded bg-[#F5F8FC] p-[10px] lg:flex">
          <div className="-m-0.5 mb-2 flex flex-[85%] flex-wrap lg:mb-0">
            {modelData.map((model, index) => (
              <div
                key={index}
                className="m-0.5 flex h-9 flex-[11%] items-center justify-center rounded bg-white px-3 text-sm text-[#566879] md:h-[40px] md:text-base"
              >
                {model}
              </div>
            ))}
          </div>
          <div className="flex flex-[15%] items-center justify-center px-3 text-sm font-bold md:text-base">
            <p className="font-semibold">Show all</p>
            <ChevronRightIcon className="ml-1 h-[22px] w-[22px]" />
          </div>
        </div>
        {/* type of filter */}
        <div className="flex flex-row justify-between bg-white">
          <div className="hidden lg:flex">
            <div className="flex items-center">
              <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
                <img
                  className="w-[30px]"
                  src="/img/catalog/filter-01.svg"
                  alt=""
                />
              </div>
              <span className="ml-3 text-lg font-medium">Brand Selection</span>
              <ChevronRightIcon className="w-[24px]" />
            </div>
            <div className="ml-8 flex items-center">
              <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
                <img
                  className="w-[30px]"
                  src="/img/catalog/filter-02.svg"
                  alt=""
                />
              </div>
              <span className="ml-3 text-lg font-medium">
                Selection by car model
              </span>
              <ChevronRightIcon className="w-[24px]" />
            </div>
          </div>
          <div className="flex w-full items-center lg:w-auto">
            <hr className="mr-[30px] hidden h-[40px] w-[1px] bg-[#E2E9F2] lg:inline" />
            <span className="mr-4 hidden lg:inline">Sort:</span>
            <div className="flex w-full justify-between">
              <ListBox
                // width={Screen(768) ? '100%' : '290px'}
                value={sort[0]}
                options={sort}
                onChange={() => {}}
              />
              <div className="ml-1 flex h-[50px] min-w-[50px] items-center justify-center rounded bg-[#F5F8FC] lg:hidden">
                <img src="/img/catalog/filter-03.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* main contents */}
        <div className="my-4 flex gap-x-3">
          <CatalogFilter />
          {/* Product */}
          <div className="flex-[75%]">
            <div className="flex flex-wrap">
              {fetchedProducts.length > 0 &&
                fetchedProducts.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    onClick={handleOpenModal}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        product={product}
        openModal={openModal}
        onCloseModal={setOpenModal}
      />
    </>
  );
}

export default CatalogPage;
