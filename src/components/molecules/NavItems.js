import React from 'react';
import NavItem from '../atoms/NavItem.js';
import { navItemsArr } from '../../CONSTANTS.js';

const NavItems = () => {
  return (
    <ul className="nav-items">
      {navItemsArr.map((val, index) => {
        return <NavItem key={index} message={val} />;
      })}
    </ul>
  );
};

export default NavItems;
