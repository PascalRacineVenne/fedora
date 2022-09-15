const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-footer'>
        <ul>
          <li className='bottom-nav active'>
            <a href='/#'>LOOKBOOK</a>
          </li>
          <li className='bottom-nav'>
            <a href='/#'>ARTICLES</a>
          </li>
          <li className='bottom-nav'>
            <a href='/#'>CONTACT</a>
          </li>
          <li className='bottom-nav'>
            <a href='/#'>CAREER</a>
          </li>
          <li className='bottom-nav'>
            <a href='/#'>ABOUT FEDORA</a>
          </li>
        </ul>
      </div>
      <div className='bottom-footer'>
        <div className='left-footer'>
          <p className='title'>fedora</p>
        </div>
        <div className='right-footer'>
          <ul>
            <li>
              <a href='/#' className='social'>
                Facebook
              </a>
            </li>
            <li>
              <a href='/#' className='social'>
                Instagram
              </a>
            </li>
            <li>
              <a href='/#' className='social'>
                Twitter
              </a>
            </li>
            <li>
              <a href='/#' className='social'>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
