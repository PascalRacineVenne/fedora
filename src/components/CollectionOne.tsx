import { css, cx } from '@linaria/core';
import { Flex, Typography } from 'antd';
import Button from './Button';
import useElementOnScreen from '../utils/useElementOnScreen';
import { animations } from '../styles/animations';
import { mobile } from '../styles/media';

import ImageOne from '../assets/images/jasmin-chew-IvqEWtgttXI-unsplash.jpg';
import ImageTwo from '../assets/images/michael-c-zVycYmcblDY-unsplash.jpg';
import ImageThree from '../assets/images/rayul-_M6gy9oHgII-unsplash.jpg';

const styles = {
  collection: css`
    margin: 72px;

    ${mobile} {
      margin: 24px 12px;
    }
  `,
  title: css`
    font-size: var(--text-title-huge);
    font-family: var(--font-bold);
    width: 50%;
    margin-bottom: 72px;

    ${mobile} {
      display: none;
    }
  `,
  titleText: css`
    font-size: 1.17em;
    font-weight: bold;
  `,
  display: css`
    display: grid;
    grid-template-areas:
      'a a b c'
      'a a d d';
    gap: 12px;

    ${mobile} {
      grid-template-areas:
        'a a b b'
        'a a c c'
        'd d d d';
      gap: 6px;
    }

    img:nth-of-type(1) {
      grid-area: a;
      width: 100%;

      ${mobile} {
        width: 80%;
        height: 75%;
      }
    }

    img:nth-of-type(2) {
      grid-area: b;
      width: 80%;
      margin-left: 64px;
      transform: translateY(-72px);

      ${mobile} {
        width: 100%;
        margin-left: 0px;
        transform: translate3d(-20px, 0px, 0px);
      }
    }

    img:nth-of-type(3) {
      grid-area: c;

      ${mobile} {
        width: 100%;
        height: 100%;
        transform: translate3d(0px, -85px, 0px);
      }
    }
  `,
  essential: css`
    object-fit: cover;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;

    ${mobile} {
      height: 50%;
    }
  `,
  description: css`
    margin-left: 64px;
    transform: translateY(-24px);

    ${mobile} {
      grid-area: d;
      margin-left: 8px;
      transform: translateY(-80px);
    }
  `,
  descTitle: css`
    font-family: var(--font-regular);
    font-size: 1.17em;
    font-weight: bold;
    width: 60%;
    padding-bottom: 1.25rem;

    ${mobile} {
      padding-top: 0.5rem;
      width: 80%;
      font-size: clamp(1.25rem, 4.5vh, var(--text-title-huge));
    }
  `,
  descText: css`
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    width: 98%;

    ${mobile} {
      font-size: clamp(0.5rem, 2vh, var(--text-size-big));
      padding-bottom: 2.5rem;
    }
  `,
};

const CollectionOne = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });
  const [containerRef2, isVisible2] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });
  const essential = cx(
    styles.essential,
    animations.fadeIn,
    isVisible && animations.fadeInAppear
  );

  return (
    <div className={styles.collection}>
      <div className={styles.title} ref={containerRef2}>
        <Typography.Title
          level={3}
          className={cx(
            styles.titleText,
            animations.fromLeft,
            isVisible2 && animations.fromLeftAppear
          )}
        >
          FOR YOUR ESSENTIAL STYLE
        </Typography.Title>
      </div>
      <div className={styles.display} ref={containerRef}>
        <img className={essential} src={ImageOne} alt='style' />
        <img className={essential} src={ImageTwo} alt='style' />
        <img className={essential} src={ImageThree} alt='style' />
        <Flex vertical className={styles.description}>
          <Typography.Title level={3} className={styles.descTitle}>
            Never Before Freedom To Choose
          </Typography.Title>
          <Typography.Paragraph className={styles.descText}>
            Beyond The Frame Of Uniforms In The New Normal Era. Wear Your Own
            Appearance And Will, No Matter What The Situation Or The Difficulty.
          </Typography.Paragraph>
          <Button name={'Shop Now'} draw />
        </Flex>
      </div>
    </div>
  );
};

export default CollectionOne;
