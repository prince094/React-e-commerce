import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import Cart from './features/cart/Cart';
import Home from './pages/HomePage';
import Product from './pages/ProductPage';
import AppLayout from './ui/AppLayout';
import TyresPage from './pages/TyresPage';
import NewsPage from './pages/NewsPage';

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
        element: <Cart />,
      },
      {
        path: '/tyres',
        element: <TyresPage />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
