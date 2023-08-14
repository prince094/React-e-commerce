import { useScreenSize } from '../../hooks/useScreenSize';
import { useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

function Header() {
  const isMobile = useScreenSize();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <HeaderTop
        isMobile={isMobile}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <HeaderBottom isMobile={isMobile} isOpenMenu={isOpenMenu} />
    </>
  );
}
export default Header;
