const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-footer'>
        <ul>
          <li>
            <a href='/#'>LOOKBOOK</a>
          </li>
          <li>
            <a href='/#'>ARTICLES</a>
          </li>
          <li>
            <a href='/#'>CONTACT</a>
          </li>
          <li>
            <a href='/#'>CAREER</a>
          </li>
          <li>
            <a href='/#'>ABOUT FEDORA</a>
          </li>
        </ul>
      </div>
      <div className='bottom-footer'>
        <div className='left-footer'>
          <p className='title'>fedrora</p>
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
