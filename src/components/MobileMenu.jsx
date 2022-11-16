import React, { useState } from 'react';
import Arrow from '../assets/icons/arrow.svg';
import BurgerMenu from './BurgerMenu';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  const handleBackClick = () => {
    console.log('Hello Arrow');
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='mobile-menu'>
      <BurgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className={menuOpen ? 'show-menu right-col' : 'right-col'}>
        <nav>
          <img
            src={Arrow}
            alt='arrow'
            className='back-btn'
            onClick={handleBackClick}
          />
          <div className='user-actions'>
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
          </div>
          <div className='user-settings'>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
