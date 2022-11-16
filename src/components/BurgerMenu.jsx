import React from 'react';
import burgerMenu from '../assets/icons/menu.svg';

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <img
      onClick={handleClick}
      src={burgerMenu}
      alt='burger'
      className='menu-btn'
    />
  );
};

export default BurgerMenu;
