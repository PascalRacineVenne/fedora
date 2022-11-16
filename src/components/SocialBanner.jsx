import useElementOnScreen from '../utils/useElementOnScreen';

const SocialBanner = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <div className='social-banner'>
      <div className='social-text'>
        <h3>SHARE YOUR FAVORITE LOOK, GET INSPIRED.</h3>
        <div className='social-link'>
          <a href='/#'>
            <img
              className='social-icon'
              src='/assets/icons/instagram.png'
              alt='insta-logo'
            />
            <p>INSTAGRAM</p>
          </a>
        </div>
      </div>
      <div className='social-img' ref={containerRef}>
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src='/assets/images/clem-onojeghuo-4NAG83bhe6c-unsplash.jpg'
          alt='img1'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src='/assets/images/clem-onojeghuo-HhaV2XXZN18-unsplash.jpg'
          alt='img2'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src='/assets/images/charlesdeluvio-AQRp2NH-O8k-unsplash.jpg'
          alt='img3'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src='/assets/images/joey-nicotra-DNikBY1J--g-unsplash.jpg'
          alt='img4'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src='/assets/images/peyman-farmani-FktzAo4XHEs-unsplash.jpg'
          alt='img5'
        />
      </div>
    </div>
  );
};

export default SocialBanner;
