import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import Product from './pages/ProductPage';
import AppLayout from './ui/AppLayout';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import CatalogPageMain from './pages/CatalogPageMain';
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
        element: <Product />,
      },
      {
        path: '/catalog',
        element: <CatalogPage />,
      },
      {
        path: '/catalog-main',
        element: <CatalogPageMain />,
      },
      {
        path: '/catalog-main/selection-mark',
        element: <SelectionByCarMark />,
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
        path: '/catalog-main/selection-brand',
        element: <SelectionByCarBrand />,
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
        path: '/catalog-main/selection-size',
        element: <SelectionByCarSize />,
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
        path: '/news/detail',
        element: <NewsPageDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
