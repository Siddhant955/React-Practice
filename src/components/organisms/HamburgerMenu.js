import React, { useState } from 'react';
import NavItems from '../molecules/NavItems.js';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div
        className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <div className={`overlay ${menuOpen ? 'active' : ''}`}>
        <div className="overlay-content">
          <NavItems />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
