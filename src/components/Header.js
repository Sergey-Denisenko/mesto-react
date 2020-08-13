import React from 'react';
import headerPath from '../images/Vector_white.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerPath} alt="Логотип"/>
    </header>
  );
}

export default Header;
