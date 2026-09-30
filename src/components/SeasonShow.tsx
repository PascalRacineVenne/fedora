import { css, cx } from '@linaria/core';
import { Flex, Typography } from 'antd';
import CarouselCollection from './CarouselCollection';
import useElementOnScreen from '../utils/useElementOnScreen';
import { animations } from '../styles/animations';
import { mobile } from '../styles/media';

const styles = {
  season: css`
    margin: 100px 0 100px 4.75rem;

    ${mobile} {
      margin: 100px 0 100px 1rem;
    }
  `,
  header: css`
    margin-bottom: 2.5rem;
  `,
  title: css`
    font-family: var(--font-bold);
    font-size: var(--text-title-huge);
    font-weight: bold;
    width: 60%;

    ${mobile} {
      font-size: clamp(1.25rem, 4.5vh, var(--text-title-huge));
      width: 100%;
    }
  `,
};

const SeasonShow = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className={styles.season}>
      <Flex justify='space-between' className={styles.header} ref={containerRef}>
        <Typography.Title
          level={2}
          className={cx(
            styles.title,
            animations.fromLeft,
            isVisible && animations.fromLeftAppear
          )}
        >
          SPRING SUMMER 2022 SHOW
        </Typography.Title>
      </Flex>
      <CarouselCollection />
    </div>
  );
};

export default SeasonShow;
