import { useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import Screen from '../../hooks/useScreenSize';
function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <HeaderTop
        isMobile={Screen(768)}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <HeaderBottom isMobile={Screen(768)} isOpenMenu={isOpenMenu} />
    </>
  );
}
export default Header;
