import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error';
import Cart from './features/cart/Cart';

import AppLayout from './ui/AppLayout';
import Tire from './features/menu/Tire';
import CreateUser from './features/user/CreateUser';
import Brands from './pages/Brands';
import Car from './pages/Car';
import Cargo from './pages/Cargo';
import Truck from './pages/Truck';
import Industrial from './pages/Industrial';
import Agricultural from './pages/Agricultural';
import Tires from './pages/Tires';
import Fav from './pages/Fav';
import ProductOverview from './features/menu/ProductOverview';

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
        path: '/tires',
        element: <Tires />,
      },
      {
        path: '/industrial',
        element: <Industrial />,
      },
      {
        path: '/agricultural',
        element: <Agricultural />,
      },
      {
        path: '/tire',
        element: <Tire />,
      },
      {
        path: '/user',
        element: <CreateUser />,
      },
      {
        path: '/brands',
        element: <Brands />,
      },
      {
        path: '/cars',
        element: <Car />,
      },
      {
        path: '/trucktires',
        element: <Truck />,
      },
      {
        path: '/cargo',
        element: <Cargo />,
      },
      {
        path: '/fav',
        element: <Fav />,
      },
      {
        path: '/pro/:id',
        element: <ProductOverview />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
