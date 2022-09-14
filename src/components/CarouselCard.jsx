import Button from './Button';
// import CarouselHeader from './CarouselHeader';
import Card from './Card';

const CarouselCard = () => {
  return (
    <div className='carousel-container'>
      {/* <CarouselHeader /> */}
      <div className='carousel'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='btn-center'>
        <Button name={'See All'} />
      </div>
    </div>
  );
};

export default CarouselCard;
