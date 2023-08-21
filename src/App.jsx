import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import Home from './pages/HomePage';
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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
