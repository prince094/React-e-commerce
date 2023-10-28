import { useContext } from 'react';
import { useEffect } from 'react';
import { BreadCrumbContext } from '../context/BreadcrumbContext';
import BreadCrumb from '../ui/BreadCrumb';
import ContentTitle from '../ui/ContentTitle';
import Order from '../features/order/Order';

function OrderPage() {
  const { setBreadcrumb } = useContext(BreadCrumbContext);

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
      <Order />
    </>
  );
}

export default OrderPage;
