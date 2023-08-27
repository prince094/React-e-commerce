import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './header/Header';
import Loader from './Loader';
import Footer from './Footer';

function AppLayout() {
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === 'loading';

  return (
    <div
      className={`flex h-full flex-col ${
        location.pathname === '/' ? 'bg-[#F8FAFD]' : 'bg-white'
      }`}
    >
      {isLoading && <Loader />}

      <Header />

      <main className="mx-auto w-full max-w-7xl px-2 lg:px-8">
        <Outlet />
      </main>
      <CartOverview />
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
