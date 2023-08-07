import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import Cart from './features/cart/Cart';
import Home from './pages/HomePage';
import Product from './pages/ProductPage';

import AppLayout from './ui/AppLayout';

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
        path: '/product',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
