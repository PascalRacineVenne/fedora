import CarouselCollection from './CarouselCollection';
import useElementOnScreen from '../utils/useElementOnScreen';

const SeasonShow = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className='season-show'>
      <div className='season-header' ref={containerRef}>
        <h2 className={isVisible ? 'from-left appear' : 'from-left'}>
          SPRING SUMMER 2022 SHOW
        </h2>
      </div>
      <CarouselCollection />
    </div>
  );
};

export default SeasonShow;
