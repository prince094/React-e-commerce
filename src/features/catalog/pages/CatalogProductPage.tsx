import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import { SetStateAction, useEffect, useState } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import Product from '../../product/components/Product.tsx';
import ProductModal from '../../product/components/ProductModal.jsx';
import { getProductList } from '../../../services/product/index.ts';
import { useLoaderData } from 'react-router-dom';
import CatalogFilterSection from '../components/CatalogFilterSection.tsx';
import CatalogFilterModel from '../components/CatalogFilterModel.tsx';
import CatalogFilterSeasonal from '../components/CatalogFilterSeasonal.tsx';
import CatalogHead from '../components/CatalogHead.tsx';
import { Product as ProductData } from '../../../models';
import CatalogFilterFeatures from '../components/CatalogFilterFeatures.tsx';

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

  const products: ProductData[] = useLoaderData() as ProductData[];

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
        <CatalogHead />
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
      {/* <ProductModal
        product={product}
        openModal={openModal}
        onCloseModal={setOpenModal}
      /> */}
    </>
  );
}

export async function loader() {
  const products = (await getProductList(
    '/data/data-products.json',
    undefined
  )) as ProductData[];
  return products;
}

export default CatalogPage;
