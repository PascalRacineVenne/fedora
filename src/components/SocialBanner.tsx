import { css, cx } from '@linaria/core';
import { Flex, Typography } from 'antd';
import useElementOnScreen from '../utils/useElementOnScreen';
import { animations } from '../styles/animations';
import { mobile } from '../styles/media';
import InstagramIcon from '../assets/icons/instagram.png';
import ImageOne from '../assets/images/clem-onojeghuo-4NAG83bhe6c-unsplash.jpg';
import ImageTwo from '../assets/images/clem-onojeghuo-HhaV2XXZN18-unsplash.jpg';
import ImageThree from '../assets/images/charlesdeluvio-AQRp2NH-O8k-unsplash.jpg';
import ImageFour from '../assets/images/joey-nicotra-DNikBY1J--g-unsplash.jpg';
import ImageFive from '../assets/images/peyman-farmani-FktzAo4XHEs-unsplash.jpg';

const styles = {
  banner: css`
    margin-top: 200px;
    height: 100vh;
    background-color: var(--light-gray);
    display: grid;
    place-items: center;
    position: relative;

    ${mobile} {
      margin-top: 100px;
      height: 60vh;
    }
  `,
  text: css`
    width: 50%;
    font-family: var(--font-bold);
    font-size: var(--text-title-large);
    text-align: center;

    ${mobile} {
      width: 100%;
      font-size: clamp(2rem, 2vh, var(--text-title-large));
    }
  `,
  title: css`
    font-size: 1.17em;
    font-weight: bold;
  `,
  link: css`
    font-family: var(--font-primary);
    font-size: var(--text-size-base);
    padding: 3rem;
    letter-spacing: -1px;

    ${mobile} {
      padding: 1.5rem;
    }
  `,
  icon: css`
    width: var(--text-size-medium);
  `,
  images: css`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    padding: 0 1rem;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'a a a . . . . . . . . b b . . .'
      '. . . . . . . . . . . . . . . c'
      'd d . . . . . . . . . . . . . c'
      'd d . . . . . . . . e e . . . .';

    ${mobile} {
      padding: 0;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        'a . b b'
        '. . . .'
        '. . . .'
        'd . e e';
    }

    img {
      position: absolute;
      width: 250px;
      transition: var(--transition-2);
    }

    img:nth-of-type(1) {
      grid-area: a;
      width: 200px;
      object-fit: contain;
      top: -120px;
      left: 100px;

      ${mobile} {
        width: 100px;
        top: -40px;
        left: 1rem;
        place-self: end;
      }
    }

    img:nth-of-type(2) {
      grid-area: b;
      height: 300px;
      object-fit: cover;
      top: -100px;

      ${mobile} {
        width: 75%;
        height: 150px;
        top: -30px;
        place-self: end;
      }
    }

    img:nth-of-type(3) {
      grid-area: c;
      width: 200px;
      height: 200px;
      object-fit: cover;
      top: 80px;
      place-self: end;

      ${mobile} {
        display: none;
      }
    }

    img:nth-of-type(4) {
      grid-area: d;
      top: 54px;
      height: 260px;
      object-fit: cover;

      ${mobile} {
        top: 0;
        width: 120%;
        height: 100%;
      }
    }

    img:nth-of-type(5) {
      grid-area: e;
      height: 260px;
      object-fit: cover;
      top: -24px;

      ${mobile} {
        top: -24px;
        right: 1rem;
        width: 80%;
        height: 150px;
        place-self: end;
      }
    }
  `,
};

const SocialBanner = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
  });
  const image = cx(animations.fadeIn, isVisible && animations.fadeInAppear);

  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <Typography.Title level={3} className={styles.title}>
          SHARE YOUR FAVORITE LOOK, GET INSPIRED.
        </Typography.Title>
        <a href='/#'>
          <Flex justify='center' gap='1rem' className={styles.link}>
            <img className={styles.icon} src={InstagramIcon} alt='insta-logo' />
            <Typography.Paragraph>INSTAGRAM</Typography.Paragraph>
          </Flex>
        </a>
      </div>
      <div className={styles.images} ref={containerRef}>
        <img className={image} src={ImageOne} alt='img1' />
        <img className={image} src={ImageTwo} alt='img2' />
        <img className={image} src={ImageThree} alt='img3' />
        <img className={image} src={ImageFour} alt='img4' />
        <img className={image} src={ImageFive} alt='img5' />
      </div>
    </div>
  );
};

export default SocialBanner;
