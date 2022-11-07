import React, { useState } from 'react';
import Arrow from '../assets/icons/arrow.svg';
import Cart from './Cart';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    console.log('Hello user Arrow');
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='right-col'>
      <Cart setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <nav className={menuOpen ? 'show-menu' : ''}>
        <img
          src={Arrow}
          alt='arrow'
          className='back-btn'
          onClick={handleBackClick}
        />
        <ul>
          <li>
            <a href='/#' alt='account'>
              My Account
            </a>
          </li>
          <li>
            <a href='/#' alt='cart'>
              Cart (0)
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
