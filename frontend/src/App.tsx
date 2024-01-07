import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error.tsx';
import AppLayout from './ui/AppLayout';
import CartPage from './features/cart/pages/CartPage.tsx';
import CatalogPage from './features/catalog/pages/CatalogPage.tsx';
import CatalogProductPage, {
  loader as catalogLoader,
} from './features/catalog/pages/CatalogProductPage.tsx';
// import SelectionByCarMark from './pages/SelectionByCarMark';
// import SelectionByCarMark2 from './pages/SelectionByCarMark2';
// import SelectionByCarMark3 from './pages/SelectionByCarMark3';
// import SelectionByCarBrand from './pages/SelectionByCarBrand';
// import SelectionByCarBrand2 from './pages/SelectionByCarBrand2';
// import SelectionByCarBrand3 from './pages/SelectionByCarBrand3';
// import SelectionByCarSize from './pages/SelectionByCarSize';
import RegistrationPage from './features/authentication/pages/RegistrationPage.tsx';
import AccountPage from './features/authentication/pages/AccountPage.tsx';
import NewsPage from './features/news/pages/NewsPage.tsx';
import NewsPageDetail from './pages/NewsPageDetail';
import HomePage from './features/home/pages/HomePage.tsx';
import HomePage1 from './pages/HomePage-v1';
import { BreadCrumbProvider } from './context/BreadcrumbContext.tsx';
import OrderPage from './features/order/pages/OrderPage.tsx';
import ProductPage from './features/product/pages/ProductPage.tsx';

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
        element: <CatalogProductPage />,
        loader: catalogLoader,
        errorElement: <Error to="/catalog" text="Go to catalog" />,
      },
      {
        path: '/catalog/:catalogName/:id',
        element: <ProductPage />,
      },
      {
        path: '/assortiments',
        // element: <SelectionByCarSize />,
      },
      {
        path: '/brands',
        // element: <SelectionByCarBrand />,
      },
      {
        path: '/trademarks',
        // element: <SelectionByCarMark />,
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
        // element: <SelectionByCarMark2 />,
      },
      {
        path: '/catalog-main/selection-mark3',
        // element: <SelectionByCarMark3 />,
      },

      {
        path: '/catalog-main/selection-brand2',
        // element: <SelectionByCarBrand2 />,
      },
      {
        path: '/catalog-main/selection-brand3',
        // element: <SelectionByCarBrand3 />,
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
