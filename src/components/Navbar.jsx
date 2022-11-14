import React from 'react';
import Menu from './Menu';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <Menu />
      </div>
      <div className='nav-center title'>fedora</div>
      <div className='nav-right'>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
