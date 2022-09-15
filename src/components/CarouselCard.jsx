import Button from './Button';
import Card from './Card';

const CarouselCard = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='btn-center'>
        <Button name={'See All'} draw={'draw-border'} />
      </div>
    </div>
  );
};

export default CarouselCard;
