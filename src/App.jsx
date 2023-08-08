import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import Cart from './features/cart/Cart';
import Home from './pages/HomePage';
import Product from './pages/ProductPage';
<<<<<<< HEAD
=======

>>>>>>> develop
import AppLayout from './ui/AppLayout';
import CreateUser from './features/user/CreateUser';
import Brands from './pages/Brands';
import Car from './pages/Car';
import Cargo from './pages/Cargo';
import Truck from './pages/Truck';
import Industrial from './pages/Industrial';
import Agricultural from './pages/Agricultural';
import Fav from './pages/Fav';
import ProductOverview from './features/menu/ProductOverview';
import TyresPage from './pages/TyresPage';
import Tyre from './pages/Tyre';

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
        path: '/industrial',
        element: <Industrial />,
      },
      {
        path: '/agricultural',
        element: <Agricultural />,
      },
      {
        path: '/tyre',
        element: <Tyre />,
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
        path: '/product',
        element: <Product />,
      },
<<<<<<< HEAD

=======
>>>>>>> develop
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
