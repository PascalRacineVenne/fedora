import React from 'react';
import burgerMenu from '../assets/icons/menu.svg';

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    console.log('HELLO THERE Menu');
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
