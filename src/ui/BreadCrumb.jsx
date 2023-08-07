function BreadCrumb() {
  return (
    <nav className="w-full rounded-md">
      <ol className="list-reset flex">
        <li>
          <a
            href="#"
            className=" text-[#566879] transition duration-150 ease-in-out hover:text-gray-800"
          >
            Home
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500">/</span>
        </li>
        <li>
          <a
            href="#"
            className="text-[#566879] transition duration-150 ease-in-out hover:text-gray-800"
          >
            Catalog
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
        </li>
        <li>
          <a
            href="#"
            className="text-[#566879] transition duration-150 ease-in-out hover:text-gray-800"
          >
            Car tires
          </a>
        </li>

        <li>
          <span className="mx-2 text-neutral-500">/</span>
        </li>
        <li className="text-[#566879] text-opacity-75">
          {' '}
          Winter car tire Toyo Observe Ice-Freezer 225/60 R17 103T
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;
