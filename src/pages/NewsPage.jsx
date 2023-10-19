import BreadCrumb from '../ui/BreadCrumb';
import { useContext, useEffect, useState } from 'react';
import { BreadCrumbContext } from '../context/BreadcrumbContext';
import NewItem from '../components/news/NewItem';

function NewsPage() {
  const [news, setNews] = useState([]);
  const { setBreadcrumb } = useContext(BreadCrumbContext);

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/news', name: 'News' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          News
        </h2>
      </div>
      <div className="my-4 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default NewsPage;
