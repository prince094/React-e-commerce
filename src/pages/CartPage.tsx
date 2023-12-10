import { useEffect } from 'react';
import BreadCrumb from '../ui/BreadCrumb.tsx';
import ContentTitle from '../ui/ContentTitle.jsx';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import Cart from '../features/cart/Cart.jsx';

function CartPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/cart', name: 'Cart' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <ContentTitle title={'Cart'} />
      <Cart />
    </>
  );
}

export default CartPage;
