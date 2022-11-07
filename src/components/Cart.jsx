import React from 'react';
import cartIcon from '../assets/icons/cart.svg';

const Cart = ({ menuOpen, setMenuOpen }) => {
  return (
    <img
      onClick={() => setMenuOpen(!menuOpen)}
      src={cartIcon}
      alt='burger'
      className='menu-btn'
    />
  );
};

export default Cart;
