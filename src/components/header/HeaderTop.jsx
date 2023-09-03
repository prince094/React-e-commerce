import { Link } from 'react-router-dom';
import HeaderTopItems from './HeaderTopItems';
import HeaderActions from './HeaderActions';

function HeaderTop({ isMobile, isOpenMenu, setIsOpenMenu }) {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl  lg:px-8">
        <div className="relative flex h-12 items-center justify-between md:h-auto">
          <div className="flex h-full flex-1 justify-between">
            <div className="flex items-center">
              <p
                onClick={() => setIsOpenMenu((value) => !value)}
                className="mr-2 flex h-full w-[47px] items-center border-r border-gray-700 px-3 lg:hidden"
              >
                <img
                  className="h-[19px] w-auto"
                  src={isOpenMenu ? '/cross-x.svg' : '/burger-menu.svg'}
                  alt=""
                />
              </p>
              <Link
                to={'/'}
                className="flex flex-shrink-0 items-center lg:pl-0"
              >
                <img
                  className="h-8 w-auto"
                  src="/Logo1.svg"
                  alt="Your Company"
                />
              </Link>
            </div>

            <div className="flex space-x-4">
              {isMobile ? null : <HeaderTopItems />}
              <HeaderActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
