import { css, cx } from '@linaria/core';
import Carousel from './Carousel';
import useElementOnScreen from '../utils/useElementOnScreen';
import { animations } from '../styles/animations';
import { mobile } from '../styles/media';

import ImageOne from '../assets/images/manny-moreno-pidhWc7zHjA-unsplash.jpg';
import ImageTwo from '../assets/images/josue-ladoo-pelegrin-s4UjZQYKjjc-unsplash.jpg';
import ImageThree from '../assets/images/lino-ogenio-JP50-TUoRIA-unsplash.jpg';
import ImageFour from '../assets/images/cassie-matias-GbiBqMnj6ds-unsplash.jpg';
import ImageFive from '../assets/images/illiya-vjestica-qaCCuGcbJQU-unsplash.jpg';
import ImageSix from '../assets/images/allef-vinicius-nMLjDDElgCw-unsplash.jpg';

const styles = {
  season: css`
    img {
      object-fit: cover;
      height: 500px;
      aspect-ratio: 9 / 16;

      ${mobile} {
        height: 400px;
        aspect-ratio: 4 / 5;
      }
    }
  `,
};

const CarouselCollection = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <div ref={containerRef}>
      <Carousel
        className={cx(
          styles.season,
          animations.fadeIn,
          isVisible && animations.fadeInAppear
        )}
        autoPlay={2000}
        draggable={false}
      >
        <img src={ImageOne} alt='collection' />
        <img src={ImageTwo} alt='collection' />
        <img src={ImageThree} alt='collection' />
        <img src={ImageFour} alt='collection' />
        <img src={ImageFive} alt='collection' />
        <img src={ImageSix} alt='collection' />
      </Carousel>
    </div>
  );
};

export default CarouselCollection;
