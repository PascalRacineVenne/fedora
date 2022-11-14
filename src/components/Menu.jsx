import React, { useState } from 'react';
// import Arrow from '../assets/icons/arrow.svg';
// import BurgerMenu from './BurgerMenu';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    console.log('Hello Arrow');
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='left-col'>
      {/* <BurgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} /> */}
      <nav className={menuOpen ? 'show-menu' : ''}>
        {/* <img
          src={Arrow}
          alt='arrow'
          className='back-btn'
          onClick={handleBackClick}
        /> */}
        <ul>
          <li>
            <a href='/#'>Shop</a>
          </li>
          <li>
            <a href='/#'>About</a>
          </li>
          <li>
            <a href='/#'>Lookbook</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
