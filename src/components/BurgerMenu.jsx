import React from 'react';
import burgerMenu from '../assets/icons/menu.svg';

const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    console.log('HELLO THERE');
    setMenuOpen(!menuOpen);
  };
  return (
    <img
      onClick={handleClick}
      // onClick={() => setMenuOpen(!menuOpen)}
      src={burgerMenu}
      alt='burger'
      className='menu-btn'
    />
  );
};

export default BurgerMenu;
