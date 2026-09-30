import { Children, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { css, cx } from '@linaria/core';
import { Flex } from 'antd';
import { desktop, tablet } from '../styles/media';

const styles = {
  carousel: css`
    position: relative;
  `,
  viewport: css`
    overflow: hidden;
  `,
  slide: css`
    flex: 0 0 100%;
    min-width: 0;

    ${tablet} {
      flex-basis: calc((100% - 1rem) / 2);
    }

    ${desktop} {
      flex-basis: calc((100% - 3rem) / 4);
    }
  `,
  arrow: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
    }
  `,
  prev: css`
    left: 1rem;

    &::before {
      transform: translate(-30%, -50%) rotate(-45deg);
    }
  `,
  next: css`
    right: 1rem;

    &::before {
      transform: translate(-70%, -50%) rotate(135deg);
    }
  `,
};

type CarouselProps = {
  className?: string;
  slideClassName?: string;
  arrows?: boolean;
  autoPlay?: number;
  draggable?: boolean;
  children: ReactNode;
};

const Carousel = ({
  className,
  slideClassName,
  arrows = false,
  autoPlay,
  draggable = true,
  children,
}: CarouselProps) => {
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: draggable },
    autoPlay
      ? [Autoplay({ delay: autoPlay, stopOnInteraction: false })]
      : []
  );

  return (
    <div className={cx(styles.carousel, className)}>
      <div className={styles.viewport} ref={viewportRef}>
        <Flex gap='1rem'>
          {Children.map(children, (child) => (
            <div className={cx(styles.slide, slideClassName)}>{child}</div>
          ))}
        </Flex>
      </div>
      {arrows && (
        <>
          <button
            type='button'
            className={cx(styles.arrow, styles.prev)}
            aria-label='previous'
            onClick={() => emblaApi?.scrollPrev()}
          />
          <button
            type='button'
            className={cx(styles.arrow, styles.next)}
            aria-label='next'
            onClick={() => emblaApi?.scrollNext()}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
