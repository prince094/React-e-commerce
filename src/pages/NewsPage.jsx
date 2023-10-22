import BreadCrumb from '../ui/BreadCrumb';
import { useContext, useEffect, useState } from 'react';
import { BreadCrumbContext } from '../context/BreadcrumbContext';
import NewItem from '../components/news/NewItem';
import ContentTitle from '../ui/ContentTitle';

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

      <ContentTitle title={'News'} />
      <div className="my-4 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default NewsPage;
