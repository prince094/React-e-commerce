import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import { SetStateAction, useEffect, useState } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import Product from '../../product/components/Product.tsx';
import ProductModal from '../../product/components/ProductModal.tsx';
import { getProductList } from '../../../services/product/index.ts';
import { useLoaderData } from 'react-router-dom';
import CatalogSortSection from '../components/CatalogSortSection.tsx';
import CatalogFilterParameter from '../components/CatalogFilterParameter.tsx';
import CatalogFilterSeasonal from '../components/CatalogFilterSeasonal.tsx';
import CatalogHead from '../components/CatalogHeadSection.tsx';
import { Product as ProductData } from '../../../models';
import CatalogFilterFeatures from '../components/CatalogFilterFeatures.tsx';
import sorts from '../../../data/data-sort.json';
import seasons from '../../../data/data-seasons.json';

const data = [
  {
    id: 1,
    height: '155',
    width: '65',
    diameter: '14',
  },
  {
    id: 2,
    height: '155',
    width: '',
    diameter: '14',
  },
  {
    id: 4,
    height: '9.5L',
    width: '',
    diameter: '15-3L',
  },
  {
    id: 6,
    height: '',
    width: '',
    diameter: '22.5',
  },
  {
    id: 6,
    height: '',
    width: '65',
    diameter: '13',
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
        <CatalogFilterSeasonal seasons={seasons} />
        <CatalogFilterParameter parameters={data} />
        <CatalogSortSection sorts={sorts} />
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
