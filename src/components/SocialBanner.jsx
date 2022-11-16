import useElementOnScreen from '../utils/useElementOnScreen';
import InstagramIcon from '../assets/icons/instagram.png';
import ImageOne from '../assets/images/clem-onojeghuo-4NAG83bhe6c-unsplash.jpg';
import ImageTwo from '../assets/images/clem-onojeghuo-HhaV2XXZN18-unsplash.jpg';
import ImageThree from '../assets/images/charlesdeluvio-AQRp2NH-O8k-unsplash.jpg';
import ImageFour from '../assets/images/joey-nicotra-DNikBY1J--g-unsplash.jpg';
import ImageFive from '../assets/images/peyman-farmani-FktzAo4XHEs-unsplash.jpg';

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
            <img className='social-icon' src={InstagramIcon} alt='insta-logo' />
            <p>INSTAGRAM</p>
          </a>
        </div>
      </div>
      <div className='social-img' ref={containerRef}>
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src={ImageOne}
          alt='img1'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src={ImageTwo}
          alt='img2'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src={ImageThree}
          alt='img3'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src={ImageFour}
          alt='img4'
        />
        <img
          className={isVisible ? 'fade-in appear' : 'fade-in'}
          src={ImageFive}
          alt='img5'
        />
      </div>
    </div>
  );
};

export default SocialBanner;
