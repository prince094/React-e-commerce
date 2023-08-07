import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error';
import Cart from './features/cart/Cart';
import Home from './pages/HomePage';
import Product from './pages/ProductPage';

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

const catalog = [
  { name: 'Tires', path: '/tires', current: true },
  { name: 'Brands', path: '/brands', current: false },
  { name: 'Cars', path: '/cars', current: false },
  { name: 'Light trucks', path: '/trucktires', current: false },
  { name: 'Cargo', path: '/cargo', current: false },
  { name: 'Agricultural', path: '/agricultural', current: false },
  { name: 'Industrial', path: '/industrial', current: false },
];

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
