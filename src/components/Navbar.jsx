import React from 'react';
import Menu from './Menu';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';

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
      <MobileMenu />
    </div>
  );
};

export default Navbar;
