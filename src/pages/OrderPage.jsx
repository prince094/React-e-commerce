import { useContext } from 'react';
import { useEffect } from 'react';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import BreadCrumb from '../ui/BreadCrumb';
import ContentTitle from '../ui/ContentTitle';
import CreateOrder from '../features/order/CreateOrder';

function OrderPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/order', name: 'Order' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <ContentTitle title={'Placing on order'} />
      <CreateOrder />
    </>
  );
}

export default OrderPage;
