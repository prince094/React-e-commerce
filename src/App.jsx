import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import AppLayout from './ui/AppLayout';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import CatalogPageDetail from './pages/CatalogPageDetail';
import SelectionByCarMark from './pages/SelectionByCarMark';
import SelectionByCarMark2 from './pages/SelectionByCarMark2';
import SelectionByCarMark3 from './pages/SelectionByCarMark3';
import SelectionByCarBrand from './pages/SelectionByCarBrand';
import SelectionByCarBrand2 from './pages/SelectionByCarBrand2';
import SelectionByCarBrand3 from './pages/SelectionByCarBrand3';
import SelectionByCarSize from './pages/SelectionByCarSize';
import RegistrationPage from './pages/RegistrationPage';
import AccountPage from './pages/AccountPage';
import NewsPage from './pages/NewsPage';
import NewsPageDetail from './pages/NewsPageDetail';
import HomePage from './pages/HomePage';
import HomePage1 from './pages/HomePage-v1';
import { BreadCrumbProvider } from './context/BreadcrumbContext';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/product',
        element: <ProductPage />,
      },
      {
        path: '/catalog',
        element: <CatalogPage />,
      },
      {
        path: '/catalog/:catalogName',
        element: <CatalogPageDetail />,
      },
      {
        path: '/catalog/:catalogName/:id',
        element: <ProductPage />,
      },
      {
        path: '/assortiments',
        element: <SelectionByCarSize />,
      },
      {
        path: '/brands',
        element: <SelectionByCarBrand />,
      },
      {
        path: '/trademarks',
        element: <SelectionByCarMark />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/home-v1',
        element: <HomePage1 />,
      },
      {
        path: '/catalog-main/selection-mark2',
        element: <SelectionByCarMark2 />,
      },
      {
        path: '/catalog-main/selection-mark3',
        element: <SelectionByCarMark3 />,
      },

      {
        path: '/catalog-main/selection-brand2',
        element: <SelectionByCarBrand2 />,
      },
      {
        path: '/catalog-main/selection-brand3',
        element: <SelectionByCarBrand3 />,
      },
      {
        path: '/auth',
        element: <RegistrationPage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/news/:newId',
        element: <NewsPageDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <BreadCrumbProvider>
        <RouterProvider router={router} />
      </BreadCrumbProvider>
    </>
  );
}

export default App;
