import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Footer from '../components/footer/Footer';
import Loader from '../ui/Loader';
import Header from '../components/header/Header';
import BackButton from './BackButton';

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
      <BackButton />

      <main className="mx-auto w-full max-w-7xl px-2 lg:px-8">
        <Outlet />
      </main>
      <CartOverview />
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
