import { useState, createContext } from 'react';

const BreadCrumbContext = createContext();

function BreadCrumbProvider({ children }) {
  const [breadcrumb, setBreadcrumb] = useState([]);

  return (
    <BreadCrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      {children}
    </BreadCrumbContext.Provider>
  );
}

// !? - Why it is need?
// function BreadcrumbConsumer({ children }) {
//   const context = useContext(BreadCrumbContext);
//   return children(context);
// }

export { BreadCrumbContext, BreadCrumbProvider };
