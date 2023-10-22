import { useContext, useEffect } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import ContentTitle from '../ui/ContentTitle';
import { BreadCrumbContext } from '../context/BreadcrumbContext';
import Cart from '../features/cart/Cart';

function CartPage() {
  const { setBreadcrumb } = useContext(BreadCrumbContext);

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
