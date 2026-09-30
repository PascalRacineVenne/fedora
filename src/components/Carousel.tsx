import { Children, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type CarouselProps = {
  className?: string;
  slideClass?: string;
  arrows?: boolean;
  autoPlay?: number;
  draggable?: boolean;
  children: ReactNode;
};

const Carousel = ({
  className = '',
  slideClass = '',
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
    <div className={`carousel ${className}`}>
      <div className='carousel-viewport' ref={viewportRef}>
        <div className='carousel-track'>
          {Children.map(children, (child) => (
            <div className={`carousel-slide ${slideClass}`}>{child}</div>
          ))}
        </div>
      </div>
      {arrows && (
        <>
          <button
            type='button'
            className='carousel-arrow prev'
            aria-label='previous'
            onClick={() => emblaApi?.scrollPrev()}
          />
          <button
            type='button'
            className='carousel-arrow next'
            aria-label='next'
            onClick={() => emblaApi?.scrollNext()}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
