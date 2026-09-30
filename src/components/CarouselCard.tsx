import { css, cx } from '@linaria/core';
import { Flex } from 'antd';
import Carousel from './Carousel';
import useElementOnScreen from '../utils/useElementOnScreen';
import Button from './Button';
import Card from './Card';
import { animations } from '../styles/animations';
import { desktop, tablet } from '../styles/media';

const styles = {
  container: css`
    margin: 1.5rem 1rem;
  `,
  slide: css`
    ${tablet} {
      flex-basis: 100%;
    }

    ${desktop} {
      flex-basis: calc((100% - 3rem) / 4);
    }
  `,
  btnCenter: css`
    margin: 4rem 0;
  `,
};

const CarouselCard = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <Carousel
        arrows
        className={cx(animations.fadeIn, isVisible && animations.fadeInAppear)}
        slideClassName={styles.slide}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
      <Flex justify='center' align='center' className={styles.btnCenter}>
        <Button name={'See All'} draw />
      </Flex>
    </div>
  );
};

export default CarouselCard;
