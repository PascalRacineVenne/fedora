import React from 'react';
import burgerMenu from '../assets/icons/menu.svg';

type BurgerMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const BurgerMenu = ({ menuOpen, setMenuOpen }: BurgerMenuProps) => {
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
