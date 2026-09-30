import Carousel from './Carousel';
import useElementOnScreen from '../utils/useElementOnScreen';
import Button from './Button';
import Card from './Card';

const CarouselCard = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className='carousel-container' ref={containerRef}>
      <Carousel
        arrows
        className={isVisible ? 'fade-in appear' : 'fade-in'}
        slideClass='card-slide'
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
      <div className='btn-center'>
        <Button name={'See All'} draw={'draw-border'} />
      </div>
    </div>
  );
};

export default CarouselCard;
