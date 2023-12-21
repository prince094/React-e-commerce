import BreadCrumb from '../ui/BreadCrumb.tsx';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import CatalogFilterFeatures from '../features/catalog/CatalogFilterFeatures.jsx';
import { SetStateAction, useEffect, useState } from 'react';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import Product from '../features/product/Product.tsx';
import ProductModal from '../features/product/ProductModal.jsx';
import { getProductList } from '../services/product/index.ts';
import { useLoaderData } from 'react-router-dom';
import CatalogFilterSection from '../features/catalog/CatalogFilterSection.tsx';
import CatalogFilterModel from '../features/catalog/CatalogFilterModel.tsx';
import CatalogFilterSeasonal from '../features/catalog/CatalogFilterSeasonal.tsx';

export type Product = {
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

export type RawDataProduct = {
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
  const [product, setProduct] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const { setBreadcrumb } = useBreadCrumbContext();

  const products: Product[] = useLoaderData() as Product[];

  function handleOpenModal(value: SetStateAction<{}>) {
    setProduct(value);
    setOpenModal(true);
  }

  useEffect(() => {
    setBreadcrumb([
      { path: '/', name: 'Home' },
      { path: '/catalog', name: 'Catalog' },
    ]);
  }, []);

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

        <CatalogFilterSeasonal catalog={catalogTypes} />
        <CatalogFilterModel model={modelData} />
        <CatalogFilterSection sort={sort} />
        <div className="my-4 flex gap-x-3">
          <CatalogFilterFeatures />
          <div className="flex-[75%]">
            <div className="flex flex-wrap">
              {products.map((product: any) => (
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

export async function loader() {
  const products = (await getProductList(
    '/data/data-products.json',
    undefined
  )) as Product[];
  return products;
}

export default CatalogPage;
