import { useEffect } from 'react';
import BreadCrumb from '../ui/BreadCrumb.tsx';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import PageTitle from '../ui/PageTitle.jsx';
import catalog from '../data/data-catalog.json';
import TireSelectionTabs from '../ui/TireSelectionTabs.jsx';
import CatalogType from '../components/catalog/CatalogType.tsx';

function CatalogPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/catalog', name: 'Catalog' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title={'Catalog shine'} />
      <TireSelectionTabs />
      <CatalogType catalog={catalog} />
    </>
  );
}

export default CatalogPage;
