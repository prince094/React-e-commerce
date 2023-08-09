import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import Footer from './Footer';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="flex h-full flex-col">
      {isLoading && <Loader />}

      {/* <Header /> */}

      <main className="mx-auto  min-h-full max-w-7xl  px-8">
        <Outlet />
      </main>
      <CartOverview />
      <Footer />
    </div>
  );
}

export default AppLayout;
