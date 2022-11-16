import React from 'react';

const Menu = () => {
  return (
    <div className='user-menu'>
      <nav>
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
