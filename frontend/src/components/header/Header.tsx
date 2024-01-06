import { useState } from 'react';
import Screen from '../../hooks/useScreenSize.ts';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
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
