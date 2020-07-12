import React from 'react';
import './Navbar.css';

import Burger from '../burger/Burger';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Burger />
      <Sidebar />
    </div>
  );
};

export default Navbar;
