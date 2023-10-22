import BreadCrumb from '../ui/BreadCrumb';
import BgImage from '../../public/img/catalog/tire-all.png';
import { useContext, useEffect } from 'react';
import { BreadCrumbContext } from '../context/BreadcrumbContext';
import ContentTitle from '../ui/ContentTitle';
import catalog from '../data/data-catalog.json';
import { Link } from 'react-router-dom';
import SelectionTyres from '../ui/SelectionTyres';

function CatalogPage() {
  const { setBreadcrumb } = useContext(BreadCrumbContext);

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
      <ContentTitle title={'Catalog shine'} />
      <SelectionTyres />
      <CatalogItems />
    </>
  );
}

export default CatalogPage;

function CatalogItems() {
  return (
    <div className="-mx-1 mt-10 flex flex-wrap sm:-mx-2">
      {catalog.map((item, index) => (
        <div
          key={item.id}
          className="flex-[100%] p-1 sm:flex-[50%] lg:flex-[33.333%] lg:p-2"
        >
          <div
            className="relative flex  flex-col items-start overflow-hidden rounded border border-[#E2E9F2] px-6 py-5 sm:px-8 sm:py-7"
            style={{
              backgroundImage: `url(${item.value === 'all' && BgImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {item.value !== 'all' && (
              <p className="absolute bottom-0 right-0 h-[85%] max-w-[185px]">
                <img
                  className="h-full w-full object-cover"
                  src={`/img/catalog/tire-0${index + 1}.png`}
                  alt=""
                />
              </p>
            )}
            <h3
              className={`mb-4 text-2xl font-bold ${
                item.value === 'all' && 'text-white'
              }`}
            >
              {item.name} {item.value !== 'all' && 'tires'}
            </h3>
            <p
              className={`mb-10 text-[#566879] ${
                item.value === 'all' && 'text-white text-opacity-60'
              }`}
            >
              760 species
            </p>
            <Link
              to={`/catalog/${item.path}`}
              className="rounded bg-[#F23F44] px-[36px] py-3 text-white"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
