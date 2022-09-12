import Button from './Button';
import Card from './Card';

const CarouselCard = () => {
  return (
    <div className='carousel-container'>
      <div className='car-header'>
        <ul>
          <li>
            <a href='/#'>New Arrivals</a>
          </li>
          <li>
            <a href='/#'>Bestsellers</a>
          </li>
          <li>
            <a href='/#'>Exclusive</a>
          </li>
        </ul>
      </div>
      <Card />
      <Card />
      <Card />
      <Button name={'See All'} />
    </div>
  );
};

export default CarouselCard;
