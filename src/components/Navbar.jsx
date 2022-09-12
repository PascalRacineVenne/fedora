const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav nav-left'>
        <ul>
          <li>
            <a href='/#' alt='shop'>
              Shop
            </a>
          </li>
          <li>
            <a href='/#' alt='about'>
              About
            </a>
          </li>
          <li>
            <a href='/#' alt='lookbook'>
              Lookbook
            </a>
          </li>
        </ul>
      </div>
      <div className='nav nav-center title'>fedora</div>
      <div className='nav nav-right'>
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
    </div>
  );
};

export default Navbar;
