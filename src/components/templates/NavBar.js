import React from 'react';
import Logo from '../atoms/Logo.js';
import NavItems from '../molecules/NavItems.js';
import HamburgerMenu from '../organisms/HamburgerMenu.js';

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo />
      <NavItems />
      <HamburgerMenu />
    </div>
  );
};

export default NavBar;
