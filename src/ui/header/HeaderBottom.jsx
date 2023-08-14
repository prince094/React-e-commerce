import { CogIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import HeaderTopItems from './HeaderTopItems';

const catalog = [
  { name: 'Catalog', path: '/tyres', current: true },
  { name: 'Brands', path: '/brands', current: false },
  { name: 'Cars', path: '/cars', current: false },
  { name: 'Light trucks', path: '/trucktires', current: false },
  { name: 'Cargo', path: '/cargo', current: false },
  { name: 'Agricultural', path: '/agricultural', current: false },
  { name: 'Industrial', path: '/industrial', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function HeaderBottom({ isMobile, isOpenMenu }) {
  return (
    <div
      className={`absolute left-0 top-[48px] z-20 h-full w-full -translate-x-full bg-white px-2   shadow-sm transition-all md:top-[64px] md:h-max md:pt-0  lg:translate-x-0 lg:opacity-100 ${
        isOpenMenu ? 'translate-x-0 opacity-100' : 'opacity-5'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-2 lg:px-8">
        <div className="lg:flex ">
          {catalog.map((item) => (
            <Link
              key={item.name}
              to={`${item.path}`}
              className={classNames(
                item.current
                  ? ' is-active text-stone-950 '
                  : ' text-[#566879] hover:text-stone-950 lg:text-stone-600',
                'group flex w-full cursor-pointer items-center border-b-[0.5px] border-b-[#E2E9F2] py-3 text-sm font-bold lg:my-2 lg:justify-center lg:border-x-[0.5px] lg:border-y-[0] lg:border-x-stone-300 lg:px-3 lg:py-1'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <CogIcon
                className=" h-5 w-5 flex-shrink-0 text-[#566879] group-hover:text-stone-950 group-[.is-active]:text-stone-950 lg:text-stone-600"
                aria-hidden="true"
              />
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </div>
        {!isMobile ? null : <HeaderTopItems />}
      </div>
    </div>
  );
}

export default HeaderBottom;
