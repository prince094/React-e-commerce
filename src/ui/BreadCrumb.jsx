import { Link } from 'react-router-dom';

function BreadCrumb({ items = ['home', 'catalog', 'detail', 'lorem ipsum'] }) {
  return (
    <nav className="mt-20 hidden w-full rounded-md text-sm lg:block">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={item}>
            <Link
              className={`text-[#566879] transition duration-150 ease-in-out ${
                items.length - 1 !== index
                  ? 'hover:text-gray-900'
                  : 'pointer-events-none text-opacity-75'
              }`}
            >
              {item}
            </Link>
            {items.length - 1 !== index && (
              <span className="mx-2 text-neutral-500">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
