import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <Link to="/">{props.message}</Link>
    </li>
  );
};

export default NavItem;
