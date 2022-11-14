import React from 'react';
import cartIcon from '../assets/icons/cart.svg';

const Cart = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    console.log('Hello Cart');
    setMenuOpen(!menuOpen);
  };
  return (
    <img
      onClick={handleClick}
      src={cartIcon}
      alt='burger'
      className='menu-btn'
    />
  );
};

export default Cart;
